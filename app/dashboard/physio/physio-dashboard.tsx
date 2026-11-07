'use client'

import { useState } from 'react'
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts'
import { Users, Activity, Zap, TrendingUp } from 'lucide-react'

interface Profile { id: string; name: string; age: number | null; weight: number | null; height: number | null }
interface WhackSession {
  id: string; profile_id: string | null; played_at: string; score: number
  hit_rate: number | null; max_left_arm_angle: number | null; max_right_arm_angle: number | null
  avg_left_arm_angle: number | null; avg_right_arm_angle: number | null; duration_seconds: number
  profiles?: { name: string } | null
}
interface MusicSession {
  id: string; profile_id: string | null; played_at: string; total_score: number
  accuracy_rate: number | null; avg_reaction_time_ms: number | null
  reaction_time_first_half_ms: number | null; reaction_time_second_half_ms: number | null
  left_hand_hits: number; right_hand_hits: number; cross_body_hits: number
  profiles?: { name: string } | null
}
interface GoldSession {
  id: string; profile_id: string | null; played_at: string; final_score: number | null
  catch_rate: number | null; sit_stand_transitions: number | null
  avg_transition_time_ms: number | null; vertical_range: number | null
  high_zone_catches: number | null; low_zone_catches: number | null
  profiles?: { name: string } | null
}

interface Props {
  profiles: Profile[]
  whackSessions: WhackSession[]
  musicSessions: MusicSession[]
  goldSessions: GoldSession[]
}

function fmt(date: string) {
  return new Date(date).toLocaleDateString('en-SG', { day: 'numeric', month: 'short' })
}

function StatCard({ label, value, sub, icon: Icon, color }: { label: string; value: string | number; sub?: string; icon: React.ElementType; color: string }) {
  return (
    <div className="bg-white rounded-2xl border-2 border-black p-5 shadow-sm flex items-start gap-4">
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
        <p className="text-2xl font-extrabold leading-tight">{value}</p>
        {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
      </div>
    </div>
  )
}

export default function PhysioDashboard({ profiles, whackSessions, musicSessions, goldSessions }: Props) {
  const [selectedProfile, setSelectedProfile] = useState<string>('all')

  const profileMap = Object.fromEntries(profiles.map(p => [p.id, p.name]))

  function filterByProfile<T extends { profile_id: string | null }>(sessions: T[]) {
    if (selectedProfile === 'all') return sessions
    return sessions.filter(s => s.profile_id === selectedProfile)
  }

  const filteredWhack = filterByProfile(whackSessions)
  const filteredMusic = filterByProfile(musicSessions)
  const filteredGold = filterByProfile(goldSessions)

  const totalSessions = filteredWhack.length + filteredMusic.length + filteredGold.length

  const avgArmAngle = filteredWhack.length
    ? Math.round(filteredWhack.reduce((s, w) => s + ((w.max_left_arm_angle ?? 0) + (w.max_right_arm_angle ?? 0)) / 2, 0) / filteredWhack.length)
    : 0

  const avgReaction = filteredMusic.length
    ? Math.round(filteredMusic.reduce((s, m) => s + (m.avg_reaction_time_ms ?? 0), 0) / filteredMusic.length)
    : 0

  const totalSitStand = filteredGold.reduce((s, g) => s + (g.sit_stand_transitions ?? 0), 0)

  // Chart data
  const whackChartData = filteredWhack.map(w => ({
    date: fmt(w.played_at),
    'Max Left Arm (°)': Math.round(w.max_left_arm_angle ?? 0),
    'Max Right Arm (°)': Math.round(w.max_right_arm_angle ?? 0),
    'Hit Rate (%)': Math.round((w.hit_rate ?? 0) * 100),
    patient: w.profiles?.name ?? profileMap[w.profile_id ?? ''] ?? 'Unknown',
  }))

  const musicChartData = filteredMusic.map(m => ({
    date: fmt(m.played_at),
    'Avg Reaction (ms)': Math.round(m.avg_reaction_time_ms ?? 0),
    '1st Half (ms)': Math.round(m.reaction_time_first_half_ms ?? 0),
    '2nd Half (ms)': Math.round(m.reaction_time_second_half_ms ?? 0),
    'Accuracy (%)': Math.round((m.accuracy_rate ?? 0) * 100),
    patient: m.profiles?.name ?? profileMap[m.profile_id ?? ''] ?? 'Unknown',
  }))

  const goldChartData = filteredGold.map(g => ({
    date: fmt(g.played_at),
    'Sit-Stand Count': g.sit_stand_transitions ?? 0,
    'Vertical Range (px)': Math.round(Number(g.vertical_range ?? 0)),
    'Catch Rate (%)': Math.round(Number(g.catch_rate ?? 0) * 100),
    patient: g.profiles?.name ?? profileMap[g.profile_id ?? ''] ?? 'Unknown',
  }))

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-extrabold">Physio Dashboard<span className="text-[#0015FF]">.</span></h1>
          <p className="text-gray-500 mt-1">Clinical overview of all patient sessions</p>
        </div>
        <select
          value={selectedProfile}
          onChange={e => setSelectedProfile(e.target.value)}
          className="border-2 border-black rounded-xl px-4 py-2 text-sm font-medium bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0015FF]"
        >
          <option value="all">All Patients</option>
          {profiles.map(p => <option key={p.id} value={p.id}>{p.name}{p.age ? ` (${p.age}y)` : ''}</option>)}
        </select>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Sessions" value={totalSessions} sub="across all games" icon={Activity} color="bg-[#0015FF]" />
        <StatCard label="Avg Arm ROM" value={`${avgArmAngle}°`} sub="Whack-a-Mole peak" icon={TrendingUp} color="bg-emerald-500" />
        <StatCard label="Avg Reaction" value={`${avgReaction}ms`} sub="Music Box" icon={Zap} color="bg-amber-500" />
        <StatCard label="Sit-Stand Reps" value={totalSitStand} sub="Gold Rush total" icon={Users} color="bg-purple-500" />
      </div>

      {/* Whack-a-Mole: Arm ROM */}
      {filteredWhack.length > 0 && (
        <section className="bg-white rounded-2xl border-2 border-black p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-1">Arm Range of Motion<span className="text-[#0015FF]">.</span></h2>
          <p className="text-sm text-gray-500 mb-5">Peak arm angles per Whack-a-Mole session — higher is better for upper limb rehabilitation</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={whackChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis unit="°" tick={{ fontSize: 12 }} />
              <Tooltip formatter={(v, n) => [`${v}°`, n]} />
              <Legend />
              <Line type="monotone" dataKey="Max Left Arm (°)" stroke="#0015FF" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="Max Right Arm (°)" stroke="#00b894" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="bg-[#f0f5ff] rounded-xl p-3 text-sm">
              <p className="font-semibold text-[#0015FF]">Bilateral Symmetry</p>
              <p className="text-gray-600 mt-1">
                {filteredWhack.length > 0
                  ? `Left avg: ${Math.round(filteredWhack.reduce((s, w) => s + (w.avg_left_arm_angle ?? 0), 0) / filteredWhack.length)}° · Right avg: ${Math.round(filteredWhack.reduce((s, w) => s + (w.avg_right_arm_angle ?? 0), 0) / filteredWhack.length)}°`
                  : 'No data'}
              </p>
            </div>
            <div className="bg-[#f0f5ff] rounded-xl p-3 text-sm">
              <p className="font-semibold text-[#0015FF]">Avg Hit Rate</p>
              <p className="text-gray-600 mt-1">
                {`${Math.round(filteredWhack.reduce((s, w) => s + (w.hit_rate ?? 0) * 100, 0) / filteredWhack.length)}% across ${filteredWhack.length} sessions`}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Music Box: Reaction Time */}
      {filteredMusic.length > 0 && (
        <section className="bg-white rounded-2xl border-2 border-black p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-1">Reaction Time & Cognitive Load<span className="text-[#0015FF]">.</span></h2>
          <p className="text-sm text-gray-500 mb-5">First vs second half reaction time reveals fatigue or warm-up effects</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={musicChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis unit="ms" tick={{ fontSize: 12 }} />
              <Tooltip formatter={(v, n) => [`${v}ms`, n]} />
              <Legend />
              <Line type="monotone" dataKey="1st Half (ms)" stroke="#0015FF" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="2nd Half (ms)" stroke="#e17055" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="Avg Reaction (ms)" stroke="#6c5ce7" strokeWidth={2} strokeDasharray="5 5" dot={false} />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="bg-[#f0f5ff] rounded-xl p-3 text-sm">
              <p className="font-semibold text-[#0015FF]">Hand Dominance</p>
              <p className="text-gray-600 mt-1">
                L: {filteredMusic.reduce((s, m) => s + m.left_hand_hits, 0)} · R: {filteredMusic.reduce((s, m) => s + m.right_hand_hits, 0)} hits
              </p>
            </div>
            <div className="bg-[#f0f5ff] rounded-xl p-3 text-sm">
              <p className="font-semibold text-[#0015FF]">Cross-Body Hits</p>
              <p className="text-gray-600 mt-1">{filteredMusic.reduce((s, m) => s + m.cross_body_hits, 0)} total</p>
            </div>
            <div className="bg-[#f0f5ff] rounded-xl p-3 text-sm">
              <p className="font-semibold text-[#0015FF]">Avg Accuracy</p>
              <p className="text-gray-600 mt-1">
                {Math.round(filteredMusic.reduce((s, m) => s + (m.accuracy_rate ?? 0) * 100, 0) / filteredMusic.length)}%
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Gold Rush: Sit-Stand */}
      {filteredGold.length > 0 && (
        <section className="bg-white rounded-2xl border-2 border-black p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-1">Sit-Stand & Mobility<span className="text-[#0015FF]">.</span></h2>
          <p className="text-sm text-gray-500 mb-5">Sit-to-stand transitions and vertical range of motion from Gold Rush sessions</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={goldChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="Sit-Stand Count" fill="#0015FF" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Catch Rate (%)" fill="#00b894" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="bg-[#f0f5ff] rounded-xl p-3 text-sm">
              <p className="font-semibold text-[#0015FF]">Avg Transition Time</p>
              <p className="text-gray-600 mt-1">
                {filteredGold.some(g => g.avg_transition_time_ms)
                  ? `${Math.round(filteredGold.reduce((s, g) => s + Number(g.avg_transition_time_ms ?? 0), 0) / filteredGold.length)}ms avg`
                  : 'No data'}
              </p>
            </div>
            <div className="bg-[#f0f5ff] rounded-xl p-3 text-sm">
              <p className="font-semibold text-[#0015FF]">Zone Distribution</p>
              <p className="text-gray-600 mt-1">
                High: {filteredGold.reduce((s, g) => s + (g.high_zone_catches ?? 0), 0)} · Low: {filteredGold.reduce((s, g) => s + (g.low_zone_catches ?? 0), 0)} catches
              </p>
            </div>
          </div>
        </section>
      )}

      {totalSessions === 0 && (
        <div className="bg-white rounded-2xl border-2 border-black p-12 text-center shadow-sm">
          <p className="text-gray-400 text-lg">No session data yet for this patient.</p>
          <p className="text-gray-300 text-sm mt-2">Sessions will appear here once patients start playing.</p>
        </div>
      )}
    </div>
  )
}
