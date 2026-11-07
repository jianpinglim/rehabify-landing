import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import PhysioDashboard from './physio-dashboard'

export default async function PhysioPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login/physio')

  const { data: userRecord } = await supabase.from('users').select('role').eq('id', user.id).single()
  if (userRecord?.role !== 'physio') redirect('/dashboard/patient')

  // Fetch all profiles (patients)
  const { data: profiles } = await supabase
    .from('profiles')
    .select('id, name, age, weight, height, created_at')
    .order('created_at', { ascending: false })

  // Fetch all sessions
  const { data: whackSessions } = await supabase
    .from('whack_a_mole_sessions')
    .select('*, profiles(name)')
    .order('played_at', { ascending: true })

  const { data: musicSessions } = await supabase
    .from('music_box_sessions')
    .select('*, profiles(name)')
    .order('played_at', { ascending: true })

  const { data: goldSessions } = await supabase
    .from('gold_rush_sessions')
    .select('*, profiles(name)')
    .order('played_at', { ascending: true })

  return (
    <PhysioDashboard
      profiles={profiles ?? []}
      whackSessions={whackSessions ?? []}
      musicSessions={musicSessions ?? []}
      goldSessions={goldSessions ?? []}
    />
  )
}
