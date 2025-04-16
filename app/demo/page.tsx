import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Demo() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <Link href="/" className="text-3xl font-bold text-blue-700">Rehabify</Link>
          <Link href="/" className="text-gray-500 hover:text-gray-800">
            Back to Home
          </Link>
        </div>

        {/* Demo Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Try Rehabify<span className="text-green-500">.</span>
          </h1>
          
          <div className="rounded-xl border-2 border-gray-300 aspect-video flex items-center justify-center bg-gray-50 mb-8">
            <p className="text-3xl text-gray-400">Demo Video</p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">How it works</h2>
            <p className="text-gray-600 text-lg mb-4">
              Experience Rehabify's innovative approach to rehabilitation through movement and play. 
              Our technology tracks your motion and turns everyday exercises into fun, engaging activities.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2">1. Connect</h3>
                <p className="text-gray-600">Set up your device and connect to Rehabify</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2">2. Calibrate</h3>
                <p className="text-gray-600">Follow the on-screen instructions to calibrate</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2">3. Play</h3>
                <p className="text-gray-600">Start moving and enjoy the interactive experience</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <Button className="px-8 py-6 text-lg">
              Download Full Version
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg border-2">
              Schedule a Live Demo
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}