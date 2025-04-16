import { Button } from "@/components/ui/button"
import { RotatingTagline } from "@/components/rotating-tagline"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Reduced height of hero section and adjusted padding */}
      <div className="h-[70vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50 pb-12">
        <div className="text-center px-4 max-w-5xl mx-auto -mt-16">
          <h1 className="text-7xl md:text-9xl font-extrabold mb-4 tracking-tight text-blue-700">Rehabify</h1>
          <RotatingTagline />
        </div>
      </div>

      {/* Moved video section up by adding negative margin-top */}
      <div className="container mx-auto px-4 py-12 -mt-24">
        {/* Video Section */}
        <div className="mb-20">
          <div className="rounded-xl border-2 border-gray-300 aspect-video flex items-center justify-center bg-gray-50 mb-4 max-w-5xl mx-auto">
            <p className="text-3xl text-gray-400">Video</p>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <Link href="/demo">
              <Button variant="outline" className="px-8 font-medium border-2">
                Demo
              </Button>
            </Link>
            <Button className="px-8 font-medium">Download</Button>
          </div>
        </div>
      </div>

      {/* Start Moving Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24 ml-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Start moving<span className="text-green-500">.</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Our advanced motion detection is powered by proprietary technology that was proven in
            rehabilitation settings, applied in an entirely new way with Rehabify.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg mr-12">
          <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Person exercising"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Move Together Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24 ml-12">
        <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-lg">
          <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="People exercising together"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Move together<span className="text-green-500">.</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mr-12">
            Rehabify is a completely new way for friends and families to stay active together. Just like playing a
            game on the playground, or the board games we play on family night — Rehabify is a social activity.
            Multi-player exercises can be done together in-person or online.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24 ml-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Play Anywhere<span className="text-green-500">.</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Our advanced motion detection is powered by proprietary technology that was proven in
            rehabilitation settings, applied in an entirely new way with Rehabify.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg mr-12">
          <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Person exercising"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>


  )
}