'use client'

import { useState } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts'
import { Trophy, Flame, Target, Zap } from 'lucide-react'

interface Profile { id: string; name: string; age: number | null }
interface WhackSession { id: string; profile_id: string | null; played_at: string; score: number; hit_rate: number | null; max_left_arm_angle: number | null; max_right_arm_angle: number | null; duration_seconds: number }
interface MusicSession { id: string; profile_id: string | null; played_at: string; total_score: number; accuracy_rate: number | null; avg_reaction_time_ms: number | null; max_combo: number }
interface GoldSession { id: string; profile_id: string | null; played_at: string; final_score: number | null; catch_rate: number | null; sit_stand_transitions: number | null }

interface Props {
  profiles: Profile[]
  whackSessions: WhackSession[]
  musicSessions: MusicSession[]
  goldSessions: GoldSession[]
}

function fmt(date: string) {
  return new Date(date).toLocaleDateString('en-SG', { day: 'numeric', month: 'short' })
}

function WinCard({ emoji, label, value, sub, color }: { emoji: string; label: string; value: string; sub: string; color: string }) {
  return (
    <div className={`rounded-2xl border-2 border-black p-5 shadow-sm ${color}`}>
      <div className="text-3xl mb-2">{emoji}</div>
      <p className="text-xs uppercase tracking-wide text-gray-500 font-medium">{label}</p>
      <p className="text-2xl font-extrabold mt-1">{value}</p>
      <p className="text-xs text-gray-500 mt-1">{sub}</p>
    </div>
  )
}

function GameBadge({ name, sessions, color }: { name: string; sessions: number; color: string }) {
  return (
    <div className={`flex items-center gap-3 rounded-xl border-2 border-black p-3 bg-white`}>
      <div className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
        {sessions}
      </div>
      <p className="text-sm font-semibold">{name}</p>
    </div>
  )
}

export default function PatientDashboard({ profiles, whackSessions, musicSessions, goldSessions }: Props) {
  const [selectedProfile, setSelectedProfile] = useState<string>(profiles[0]?.id ?? '')

  function filterBy<T extends { profile_id: string | null }>(arr: T[]) {
    if (!selectedProfile) return arr
    return arr.filter(s => s.profile_id === selectedProfile)
  }

  const fw = filterBy(whackSessions)
  const fm = filterBy(musicSessions)
  const fg = filterBy(goldSessions)

  const totalSessions = fw.length + fm.length + fg.length
  const bestWhackScore = fw.length ? Math.max(...fw.map(s => s.score)) : 0
  const bestMusicCombo = fm.length ? Math.max(...fm.map(s => s.max_combo)) : 0
  const totalSitStand = fg.reduce((s, g) => s + (g.sit_stand_transitions ?? 0), 0)

  const maxArmEver = fw.length
    ? Math.round(Math.max(...fw.map(s => Math.max(s.max_left_arm_angle ?? 0, s.max_right_arm_angle ?? 0))))
    : 0

  const latestReaction = fm.length
    ? Math.round(fm[fm.length - 1].avg_reaction_time_ms ?? 0)
    : 0

  // Last 5 sessions for each game
  const whackTrend = fw.slice(-5).map(s => ({
    date: fmt(s.played_at),
    'Arm Raise (°)': Math.round(Math.max(s.max_left_arm_angle ?? 0, s.max_right_arm_angle ?? 0)),
  }))

  const musicTrend = fm.slice(-5).map(s => ({
    date: fmt(s.played_at),
    'Reaction (ms)': Math.round(s.avg_reaction_time_ms ?? 0),
  }))

  const hasData = totalSessions > 0

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-extrabold">
            {profiles.length > 0 ? `Hi, ${profiles.find(p => p.id === selectedProfile)?.name ?? 'there'}` : 'Hi there'}
            <span className="text-[#0015FF]">!</span>
          </h1>
          <p className="text-gray-500 mt-1">Here's how you've been moving</p>
        </div>
        {profiles.length > 1 && (
          <select
            value={selectedProfile}
            onChange={e => setSelectedProfile(e.target.value)}
            className="border-2 border-black rounded-xl px-4 py-2 text-sm font-medium bg-white shadow-sm focus:outline-none"
          >
            {profiles.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
        )}
      </div>

      {hasData ? (
        <>
          {/* Win Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <WinCard emoji="🎮" label="Sessions Played" value={String(totalSessions)} sub="Keep it up!" color="bg-[#f0f5ff]" />
            <WinCard emoji="💪" label="Best Arm Raise" value={`${maxArmEver}°`} sub="Your personal best!" color="bg-[#f0fff4]" />
            <WinCard emoji="⚡" label="Reaction Time" value={latestReaction ? `${latestReaction}ms` : '—'} sub="Latest Music Box" color="bg-[#fffbf0]" />
            <WinCard emoji="🏃" label="Sit-Stand Reps" value={String(totalSitStand)} sub="Total across all sessions" color="bg-[#fdf0ff]" />
          </div>

          {/* Games played */}
          <section className="bg-white rounded-2xl border-2 border-black p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Games Played<span className="text-[#0015FF]">.</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <GameBadge name="Whack-a-Mole" sessions={fw.length} color="bg-[#0015FF]" />
              <GameBadge name="Music Box" sessions={fm.length} color="bg-amber-500" />
              <GameBadge name="Gold Rush" sessions={fg.length} color="bg-emerald-500" />
            </div>
          </section>

          {/* Arm raise trend */}
          {whackTrend.length > 0 && (
            <section className="bg-white rounded-2xl border-2 border-black p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-1">Your Arm Raises<span className="text-[#0015FF]">.</span></h2>
              <p className="text-sm text-gray-500 mb-5">How high you've been lifting your arms — aim for higher each time!</p>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={whackTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                  <YAxis unit="°" tick={{ fontSize: 12 }} domain={[0, 180]} />
                  <Tooltip formatter={(v) => [`${v}°`, 'Arm raise']} />
                  <Line type="monotone" dataKey="Arm Raise (°)" stroke="#0015FF" strokeWidth={3} dot={{ r: 5, fill: '#0015FF' }} />
                </LineChart>
              </ResponsiveContainer>
              {bestWhackScore > 0 && (
                <p className="mt-3 text-sm text-center text-gray-500">
                  🏆 Best Whack-a-Mole score: <span className="font-bold text-[#0015FF]">{bestWhackScore}</span>
                </p>
              )}
            </section>
          )}

          {/* Reaction time trend */}
          {musicTrend.length > 0 && (
            <section className="bg-white rounded-2xl border-2 border-black p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-1">Your Reaction Speed<span className="text-[#0015FF]">.</span></h2>
              <p className="text-sm text-gray-500 mb-5">How quickly you're responding — a lower number means faster reactions!</p>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={musicTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                  <YAxis unit="ms" tick={{ fontSize: 12 }} />
                  <Tooltip formatter={(v) => [`${v}ms`, 'Reaction time']} />
                  <Line type="monotone" dataKey="Reaction (ms)" stroke="#f59e0b" strokeWidth={3} dot={{ r: 5, fill: '#f59e0b' }} />
                </LineChart>
              </ResponsiveContainer>
              {bestMusicCombo > 0 && (
                <p className="mt-3 text-sm text-center text-gray-500">
                  🎵 Best combo in Music Box: <span className="font-bold text-amber-500">{bestMusicCombo}</span>
                </p>
              )}
            </section>
          )}

          {/* Sit-stand highlight */}
          {fg.length > 0 && (
            <section className="bg-white rounded-2xl border-2 border-black p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Your Sit-Stand Effort<span className="text-[#0015FF]">.</span></h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f0f5ff] rounded-xl p-4 text-center">
                  <p className="text-4xl font-extrabold text-[#0015FF]">{totalSitStand}</p>
                  <p className="text-sm text-gray-500 mt-1">Total stand-ups</p>
                </div>
                <div className="bg-[#f0fff4] rounded-xl p-4 text-center">
                  <p className="text-4xl font-extrabold text-emerald-600">
                    {fg.length ? Math.round(fg.reduce((s, g) => s + Number(g.catch_rate ?? 0), 0) / fg.length * 100) : 0}%
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Avg catch rate</p>
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        <div className="bg-white rounded-2xl border-2 border-black p-12 text-center shadow-sm">
          <div className="text-6xl mb-4">🎮</div>
          <h2 className="text-2xl font-bold mb-2">No sessions yet</h2>
          <p className="text-gray-400">Your progress will appear here after you play your first game!</p>
        </div>
      )}
    </div>
  )
}
