import { Button } from "@/components/ui/button"
import { RotatingTagline } from "@/components/rotating-tagline"
import { FooterRotate } from "@/components/footerRotate"
import Image from "next/image"
import { Mail, Linkedin } from 'lucide-react'; // Import icons
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Reduced height of hero section and adjusted padding */}
      <div
        className="h-[70vh] flex items-center justify-center bg-white pb-12 relative overflow-hidden" // Use bg-white or bg-gray-50 as base
        style={{
          backgroundImage: 'radial-gradient(circle, #dce4f5 2px, transparent 1px)', // #e5e7eb is gray-200
          backgroundSize: '40px 40px' // Adjust size for dot spacing
        }}
      >
        <div className="text-center px-4 max-w-4xl mx-auto -mt-16 relative z-10"> {/* Ensure content is above the background */}
          <h1 className="text-7xl md:text-7xl font-extrabold mb-4 tracking-tight">Play More. <span className="text-[#0015ff]">Move More.</span></h1>
          <div className="mt-8">
            <RotatingTagline />
          </div>
        </div>
      </div>

      {/* Moved video section up by adding negative margin-top */}
      <div className="container mx-auto px-4 py-12 -mt-32 relative z-"> {/* Ensure this section overlaps correctly */}
        {/* Video Section */}
        <div className="mb-20">
          <div className="rounded-xl overflow-hidden aspect-video flex items-center justify-center mb-4 max-w-6xl mx-auto">
            <video className="w-full h-full object-cover" controls autoPlay muted loop>
              <source src="/videos/RehabifyPlay4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="https://jianpinglim.itch.io/rehabify-play"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="px-8 text-lg font-semibold">Download</Button>
            </a>
          </div>
        </div>
      </div>


      {/* Start Moving Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24 ml-12">

        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Start moving<span className="text-[#0015FF] font-black">.</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Play games using your body, powered by advanced motion detection. Rehabify makes movement more fun and engaging. By turning your body into the controller, it transforms regular exercise into a game.
          </p>
        </div>
        <div className="rounded-xl shadow-lg mr-12">
          <div className="rounded-xl overflow-hidden flex items-center justify-center">
            <video className="w-full h-full object-cover" controls autoPlay muted loop>
              <source src="/videos/StartMoving.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Move Together Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24 ml-12">
        <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-lg">
          <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
            <Image
              src="/images/PlayTogether.jpg"
              alt="People exercising together"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Move together<span className="text-[#0015FF] font-black">.</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mr-12">
            Rehabify is a completely new way for seniors to stay active together. Just like playing a
            game at the playground, or the board games we play on family night — Rehabify allows multiple players to join in on the fun.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24 ml-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Play Anywhere<span className="text-[#0015FF] font-black">.</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Turn any place into a playground — with Rehabify, you can play anywhere. Whether at home or in a center, just power up your device and get moving. We use your laptop camera to track your movements and support TV connection for an enhanced experience.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg mr-12">
          <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
            <Image
              src="/images/playAnywhere.jpeg"
              alt="Person exercising"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24 ml-12">
        <div className="order-2 md:order-1 rounded-xl">
          <div className=" flex items-center justify-center">
            <Image
              src="/images/Thumbnail.png"
              alt="People exercising together"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for you<span className="text-[#0015FF] font-black">.</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mr-12">
            Rehabify is built with you in mind, we created games that keeps your mind and body active while keeping it challenging. We are expanding our suite of games to keep you entertained for a long time.
          </p>
        </div>
      </div>
      <div className="bg-[#f0f5ff] py-16 mb-0">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Get Your Seniors Moving!
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-8">
            We offer game sessions for seniors to experience a new way of moving, powered by motion-tracking technology.
            No special devices needed—just a laptop.
          </p>
          <a
            href="mailto:jianpinglim62@gmail.com"
            className="inline-flex items-center"
          >
            <Button size="lg" className="px-10 py-6 text-lg font-semibold">
              Reach out - Email
            </Button>
          </a>
        </div>
      </div>
      <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-24">
        <div className="container mx-auto px-4">
          {/* Optional: Rotating element and call to action */}
          <div className="text-center mb-12">
            <p className="font-semibold text-xl mb-6 text-[#0015ff]">Work with us today!</p>
            <div className="flex justify-center">
              <FooterRotate />
            </div>
          </div>

          {/* Footer content grid */}
          <div className="grid md:grid-cols-3 gap-8 text-gray-600 text-base"> {/* Changed text-sm to text-base */}
            {/* Column 1: Copyright */}
            <div className="text-center md:text-left">
              {/* Increased heading size */}
              <p className="font-semibold text-lg mb-2">Rehabify</p>
              <p>&copy; {new Date().getFullYear()} Rehabify. All rights reserved.</p>
            </div>

            {/* Column 2: Contact Links */}
            <div className="text-center">
              {/* Increased heading size */}
              <p className="font-semibold text-lg mb-2">Contact Us</p>
              <div className="flex flex-col md:flex-row justify-center md:justify-center space-y-1 md:space-y-0 md:space-x-4"> {/* Stack vertically on small screens */}
                <a href="mailto:jianpinglim62@gmail.com" className="hover:text-[#0015ff]">
                  Jianpinglim62@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/jian-ping-lim" target="_blank" rel="noopener noreferrer" className="hover:text-[#0015ff]"> {/* Added https:// */}
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Column 3: Short Description */}
            <div className="text-center md:text-left">
              {/* Increased heading size */}
              <p className="font-semibold text-lg mb-2">About Rehabify</p>
              <p>Making rehabilitation fun and accessible through interactive motion-based games. Leveraging machine learning and computer vision to make ageing more fun</p>
            </div>
          </div>
        </div>
      </footer>
    </main >
  )
}