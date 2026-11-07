'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function PhysioLoginPage() {
  const router = useRouter()
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const supabase = createClient()

    if (isSignUp) {
      const { data, error: signUpError } = await supabase.auth.signUp({ email, password })
      if (signUpError) { setError(signUpError.message); setLoading(false); return }
      if (data.user) {
        await supabase.from('users').upsert({ id: data.user.id, Email: email, role: 'physio' })
      }
      router.push('/dashboard/physio')
    } else {
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })
      if (signInError) { setError(signInError.message); setLoading(false); return }
      router.push('/dashboard/physio')
    }
    router.refresh()
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center bg-white px-4"
      style={{
        backgroundImage: 'radial-gradient(circle, #dce4f5 2px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    >
      <div className="w-full max-w-md bg-white rounded-2xl border-4 border-black shadow-xl p-8">
        <div className="flex justify-center mb-6">
          <Image src="/images/rehabifyicon2.png" alt="Rehabify" width={64} height={64} className="object-contain" />
        </div>
        <h1 className="text-3xl font-extrabold text-center mb-1">
          Physio Portal<span className="text-[#0015FF] font-black">.</span>
        </h1>
        <p className="text-gray-500 text-center text-sm mb-8">
          {isSignUp ? 'Create your physiotherapist account' : 'Sign in to view your patients'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@clinic.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="border-2 border-black rounded-lg h-11"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="border-2 border-black rounded-lg h-11"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center bg-red-50 border border-red-200 rounded-lg py-2 px-3">{error}</p>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-11 text-base font-semibold bg-[#0015FF] hover:bg-[#0010cc] text-white rounded-lg"
          >
            {loading ? 'Please wait...' : isSignUp ? 'Create Account' : 'Sign In'}
          </Button>
        </form>

        <div className="mt-6 text-center space-y-3">
          <button
            onClick={() => { setIsSignUp(!isSignUp); setError('') }}
            className="text-sm text-gray-500 hover:text-[#0015FF] underline"
          >
            {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
          </button>
          <div>
            <Link href="/login/patient" className="text-sm text-gray-400 hover:text-gray-600">
              I'm a patient →
            </Link>
          </div>
          <div>
            <Link href="/" className="text-sm text-gray-400 hover:text-gray-600">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
