import { Button } from "@/components/ui/button"
import { RotatingTagline } from "@/components/rotating-tagline"
import { FooterRotate } from "@/components/footerRotate"
import Image from "next/image"
import { Mail, Linkedin, Video } from 'lucide-react'; // Import icons
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Reduced height of hero section and adjusted padding */}
      <div
        className="h-[80vh] flex items-center justify-center bg-white pb-14 relative overflow-hidden" // Increased height to 80vh
        style={{
          backgroundImage: 'radial-gradient(circle, #dce4f5 2px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      >
        <div className="text-center px-4 max-w-4xl mx-auto mt-8 relative z-10"> {/* Changed -mt-16 to mt-12 */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/rehabifyicon2.png"
              alt="Rehabify Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight">Play More. <span className="text-[#0015ff]">Move More.</span></h1>
          <div className="mt-8">
            <RotatingTagline />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-4 py-8 -mt-12 relative z-10 max-w-8xl">
        <div className="mb-20 relative overflow-hidden rounded-xl py-8" style={{ maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 3%, rgb(0, 0, 0) 97%, rgba(0, 0, 0, 0) 100%)' }}>
          <div className="flex animate-scroll-left hover:pause w-fit">
            {/* First set of cards */}
            <div className="flex shrink-0">
              {/* Card 1 */}
              <div className="w-80 h-96 bg-white rounded-xl shadow-lg border-4 border-black overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-10 relative transform -rotate-3 ml-4">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <Image
                    src="/images/thumbnails5/soloElderly.jpg"
                    alt="Feature 1"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-80 h-96 bg-white rounded-xl shadow-lg border-4 border-black overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-10 relative transform rotate-2 -ml-4">
                <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <Image
                    src="/images/thumbnails5/duouncle.jpeg"
                    alt="Feature 2"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-80 h-96 bg-white rounded-xl shadow-lg border-4 border-black overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-10 relative transform -rotate-2 -ml-4">
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <video
                    className="w-full h-full object-cover scale-150"
                    autoPlay
                    loop
                    muted
                  >
                    <source src="/images/thumbnails5/auntieplaying.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Card 4 */}
              <div className="w-80 h-96 bg-white rounded-xl shadow-lg border-4 border-black overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-10 relative transform rotate-3 -ml-4">
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Image
                    src="/images/thumbnails5/slimegameauntie.jpeg"
                    alt="Feature 4"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Card 5 */}
              <div className="w-80 h-96 bg-white rounded-xl shadow-lg overflow-hidden border-4 border-black hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-10 relative transform -rotate-4 -ml-4">
                <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                  <Image
                    src="/images/thumbnails5/soloElderly2.jpg"
                    alt="Feature 5"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Card 6 */}
              <div className="w-80 h-96 bg-white rounded-xl shadow-lg border-4 border-black overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-10 relative transform rotate-1 -ml-4">
                <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                  <Image
                    src="/images/redcross_uncle.jpg"
                    alt="Feature 6"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Card 7 */}
              <div className="w-80 h-96 bg-white rounded-xl shadow-lg border-4 border-black overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-10 relative transform -rotate-1 -ml-4">
                <div className="w-full h-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                  <Image
                    src="/images/playAnywhere.jpg"
                    alt="Feature 7"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex shrink-0">
              {/* Card 1 */}
              <div className="w-80 h-96 bg-white rounded-xl shadow-lg border-4 border-black overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-10 relative transform -rotate-3 ml-4">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <Image
                    src="/images/thumbnails5/soloElderly.jpg"
                    alt="Feature 1"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-80 h-96 bg-white rounded-xl shadow-lg border-4 border-black overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-10 relative transform rotate-2 -ml-4">
                <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <Image
                    src="/images/thumbnails5/duouncle.jpeg"
                    alt="Feature 2"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-80 h-96 bg-white rounded-xl shadow-lg border-4 border-black overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-10 relative transform -rotate-2 -ml-4">
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <video
                    className="w-full h-full object-cover scale-150"
                    autoPlay
                    loop
                    muted
                  >
                    <source src="/images/thumbnails5/auntieplaying.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Card 4 */}
              <div className="w-80 h-96 bg-white rounded-xl shadow-lg border-4 border-black overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-10 relative transform rotate-3 -ml-4">
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Image
                    src="/images/thumbnails5/slimegameauntie.jpeg"
                    alt="Feature 4"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Card 5 */}
              <div className="w-80 h-96 bg-white rounded-xl shadow-lg overflow-hidden border-4 border-black hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-10 relative transform -rotate-4 -ml-4">
                <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                  <Image
                    src="/images/thumbnails5/soloElderly2.jpg"
                    alt="Feature 5"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Card 6 */}
              <div className="w-80 h-96 bg-white rounded-xl shadow-lg border-4 border-black overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-10 relative transform rotate-1 -ml-4">
                <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                  <Image
                    src="/images/redcross_uncle.jpg"
                    alt="Feature 6"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Card 7 */}
              <div className="w-80 h-96 bg-white rounded-xl shadow-lg border-4 border-black overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-10 relative transform -rotate-1 -ml-4">
                <div className="w-full h-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                  <Image
                    src="/images/playAnywhere.jpg"
                    alt="Feature 7"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Partners Section */}
      <div className="container mx-auto px-4 py-16 mb-8">
        <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-2">Our Partners</p>
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">Trusted by Communities That Care</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          <div className="flex flex-col items-center">
            <Image
              src="/images/logos/lb.png"
              alt="Partner 1"
              width={120}
              height={70}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/logos/thk.png"
              alt="Partner 2"
              width={180}
              height={70}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/logos/redcross.jpg"
              alt="Partner 3"
              width={140}
              height={70}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/logos/mkac.png"
              alt="Partner 4"
              width={140}
              height={70}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* As Featured On Section */}
      <div className="container mx-auto px-4 py-12 mb-8">
        <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">As featured on</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          <div className="flex flex-col items-center">
            <Image
              src="/images/logos/cna938.png"
              alt="CNA 938"
              width={120}
              height={60}
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/logos/businesstimes-thrive.png"
              alt="Business Times Thrive"
              width={150}
              height={60}
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/logos/e27.png"
              alt="CNA Today"
              width={120}
              height={60}
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/logos/sp.png"
              alt="CNA Today"
              width={120}
              height={60}
            />
          </div>
        </div>
      </div>

      {/* At Rehabify Section */}
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 mb-4 max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">What We Do!</h2>
        <p className="text-gray-600 text-base sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
          Rehabify gamifies physiotherapy and active ageing exercises through engaging, motion-tracking games.
        </p>
        <br />
        <p className="text-gray-600 text-base sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
          Our platform uses evidence-based movements, designed with physiotherapists, to support strength, balance, coordination, and cognitive health, all through simple, camera-based gameplay.
        </p>
      </div>

      {/* Before Graphic Section */}
      <div className="container mx-auto px-4 mb-4 text-center">
        <div className="flex justify-center">
          <Image
            src="/images/before2.png"
            alt="Before Graphic"
            width={1200}
            height={600}
            className="object-contain max-w-full h-auto"
          />
        </div>
      </div>

      {/* Arrow Section */}
      <div className="container mx-auto px-4 py-8 mb-6 text-center">
        <div className="flex justify-center">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0015ff]">
            <path d="M12 4V20M5 13L12 20L19 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* After Section - 5 Cards */}
      <div className="container mx-auto px-4 py-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          {/* Card 1 */}
          <div className="w-64 h-80 bg-white rounded-xl shadow-lg border-4 border-black overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <Image
                    src="/images/legraise.png"
                    alt="gamified leg raises"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-64 h-80 bg-white rounded-xl shadow-lg border-4 border-black overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
              >
                <source src="/videos/armraise.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-64 h-80 bg-white rounded-xl shadow-lg border-4 border-black overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
              >
                <source src="/videos/taichi.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-64 h-80 bg-white rounded-xl shadow-lg border-4 border-black overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
              >
                <source src="/videos/sidestep.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Card 5 */}
          <div className="w-64 h-80 bg-white rounded-xl shadow-lg border-4 border-black overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
              >
                <source src="/videos/squats.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Why It Works Section */}
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 pb-4 text-center">Why It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Left Image Panel - 1/3 */}
          <div className="md:col-span-1 rounded-2xl overflow-hidden shadow-lg h-full">
            <Image
              src="/images/whyitworks.jpg"
              alt="Why It Works"
              width={300}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Panel - 2/3 with 3 stacked cards */}
          <div className="md:col-span-2 flex flex-col gap-6 sm:gap-8 md:gap-12 mt-2">
            {/* Point 1 */}
            <div className="bg-[#f2f2f2] rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8">
              <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 overflow-hidden">
                <Image
                  src="/images/happyNur.png"
                  alt="Happy senior"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-center sm:text-left">Movement feels fun, not forced<span className="text-[#0015FF] text-2xl sm:text-3xl md:text-4xl font-black">.</span></h3>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed text-center sm:text-left">
                  When exercise feels like a game, seniors stay engaged longer, smile more, and naturally move more.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-[#f2f2f2] rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8">
              <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 overflow-hidden">
                <Image
                  src="/images/happyTan.png"
                  alt="Happy senior"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-center sm:text-left">Designed with physiotherapists<span className="text-[#0015FF] text-2xl sm:text-3xl md:text-4xl font-black">.</span></h3>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed text-center sm:text-left">
                  Every game is based on real exercises — from arm raises to balance and coordination — ensuring every movement is both meaningful and safe.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-[#f2f2f2] rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8">
              <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 overflow-hidden">
                <Image
                  src="/images/happyUnc.png"
                  alt="Happy senior"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-center sm:text-left">Simple and accessible for all seniors<span className="text-[#0015FF] text-2xl sm:text-3xl md:text-4xl font-black">.</span></h3>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed text-center sm:text-left">
                  No wearables, no complicated equipment. Just a laptop camera. Seniors can start instantly, and centres save time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start Moving Section */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24 px-4 md:px-0 md:ml-12">

        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Start moving<span className="text-[#0015FF] font-black">.</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Play games using your body, powered by advanced motion detection. Rehabify makes movement more fun and engaging. By turning your body into the controller, it transforms regular exercise into a game.
          </p>
        </div>
        <div className="rounded-xl shadow-lg md:mr-12">
          <div className="rounded-xl overflow-hidden flex items-center justify-center">
            <video className="w-full h-full object-cover" controls autoPlay muted loop>
              <source src="/videos/uncletaichi.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Move Together Section */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24 px-4 md:px-0 md:ml-12">
        <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-lg">
          <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
            {/* Replace Video component with video element */}
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
            >
              {/* Fix the src attribute - remove the extra text */}
              <source src="/videos/playtogether.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Move together<span className="text-[#0015FF] font-black">.</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed md:mr-12">
            Rehabify is a completely new way for seniors to stay active together. Just like playing a
            game at the playground, or the board games we play on family night — Rehabify allows multiple players to join in on the fun.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24 px-4 md:px-0 md:ml-12">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Play Anywhere<span className="text-[#0015FF] font-black">.</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Turn any place into a playground — with Rehabify, you can play anywhere. Whether at home or in a center, just power up your device and get moving. We use your laptop camera to track your movements and support TV connection for an enhanced experience.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg md:mr-12">
          <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
            <Image
              src="/images/playAnywhere.jpg"
              alt="Person exercising"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24 px-4 md:px-0 md:ml-12">
        <div className="order-2 md:order-1 rounded-xl">
          <div className="flex items-center justify-center">
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Built for you<span className="text-[#0015FF] font-black">.</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed md:mr-12">
            Rehabify is built with you in mind, we created games that keeps your mind and body active while keeping it challenging. We are expanding our suite of games to keep you entertained for a long time.
          </p>
        </div>
      </div>
      <div className="bg-[#f0f5ff] py-16 mb-0">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's Get Our Seniors Moving!
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 sm:mb-8">
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
      <footer className="bg-gray-50 border-t border-gray-200 py-8 sm:py-12 mt-12 sm:mt-16 md:mt-24">
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
              <p>Making rehabilitation fun and accessible through interactive motion-based games. Leveraging machine learning and computer vision to make ageing more fun.</p>
            </div>
          </div>
        </div>
      </footer>
    </main >
  )
}