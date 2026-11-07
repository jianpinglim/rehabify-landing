import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import PatientDashboard from './patient-dashboard'

export default async function PatientPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login/patient')

  // Get user's profiles
  const { data: profiles } = await supabase
    .from('profiles')
    .select('id, name, age')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  const profileIds = (profiles ?? []).map(p => p.id)

  const [whackRes, musicRes, goldRes] = await Promise.all([
    profileIds.length
      ? supabase.from('whack_a_mole_sessions').select('*').in('profile_id', profileIds).order('played_at', { ascending: true })
      : { data: [] },
    profileIds.length
      ? supabase.from('music_box_sessions').select('*').in('profile_id', profileIds).order('played_at', { ascending: true })
      : { data: [] },
    profileIds.length
      ? supabase.from('gold_rush_sessions').select('*').in('profile_id', profileIds).order('played_at', { ascending: true })
      : { data: [] },
  ])

  return (
    <PatientDashboard
      profiles={profiles ?? []}
      whackSessions={whackRes.data ?? []}
      musicSessions={musicRes.data ?? []}
      goldSessions={goldRes.data ?? []}
    />
  )
}
