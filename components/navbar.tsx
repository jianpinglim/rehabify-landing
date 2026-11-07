'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const pathname = usePathname()
  if (pathname.startsWith('/dashboard')) return null

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/rehabifyicon2.png" alt="Rehabify" width={32} height={32} className="object-contain" />
          <span className="font-extrabold text-lg">Rehabify</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/login/patient">
            <Button variant="outline" size="sm" className="border-2 border-black font-semibold rounded-lg">
              Patient Login
            </Button>
          </Link>
          <Link href="/login/physio">
            <Button size="sm" className="bg-[#0015FF] hover:bg-[#0010cc] text-white font-semibold rounded-lg">
              Physio Login
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
