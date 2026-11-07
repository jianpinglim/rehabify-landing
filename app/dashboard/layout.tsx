import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import DashboardShell from './dashboard-shell'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login/patient')

  const { data: profile } = await supabase
    .from('users')
    .select('role, Email')
    .eq('id', user.id)
    .single()

  return (
    <DashboardShell role={profile?.role ?? 'patient'} email={profile?.Email ?? user.email ?? ''}>
      {children}
    </DashboardShell>
  )
}
