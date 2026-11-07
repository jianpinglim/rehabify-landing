'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { LayoutDashboard, Users, LogOut, Activity } from 'lucide-react'

interface Props {
  role: string
  email: string
  children: React.ReactNode
}

export default function DashboardShell({ role, email, children }: Props) {
  const pathname = usePathname()
  const router = useRouter()

  async function signOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  const isPhysio = role === 'physio'

  const navItems = isPhysio
    ? [{ href: '/dashboard/physio', label: 'Overview', icon: LayoutDashboard }, { href: '/dashboard/physio/patients', label: 'Patients', icon: Users }]
    : [{ href: '/dashboard/patient', label: 'My Progress', icon: Activity }]

  return (
    <div className="min-h-screen bg-[#f8f9ff] flex">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r-2 border-black flex flex-col shrink-0">
        <div className="p-5 border-b-2 border-black flex items-center gap-3">
          <Image src="/images/rehabifyicon2.png" alt="Rehabify" width={36} height={36} className="object-contain" />
          <span className="font-extrabold text-lg">Rehabify</span>
        </div>

        <div className="px-4 py-3 border-b border-gray-100">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{isPhysio ? 'Physiotherapist' : 'Patient'}</p>
          <p className="text-sm font-medium text-gray-700 truncate">{email}</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all ${
                  active
                    ? 'bg-[#0015FF] text-white shadow-sm'
                    : 'text-gray-600 hover:bg-[#f0f5ff] hover:text-[#0015FF]'
                }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t-2 border-black">
          <button
            onClick={signOut}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl w-full text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all"
          >
            <LogOut size={18} />
            Sign Out
          </button>
          <Link href="/" className="flex items-center gap-3 px-3 py-2 mt-1 rounded-xl w-full text-xs text-gray-400 hover:text-gray-600 transition-all">
            ← Back to site
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
