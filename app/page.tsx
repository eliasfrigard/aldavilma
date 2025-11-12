'use client'

import Image from 'next/image';

export default function BandPage() {
  const musicians = [
    { name: 'Vilma Talvitie', role: 'Laulu', image: '/vilma.jpg' },
    { name: 'Timo Alakotila', role: 'Piano', image: '/timo.jpg' },
    { name: 'Veera Kuisma', role: 'Viulu', image: '/veera.jpg' },
    { name: 'Elias Frigård', role: 'Saksofoni', image: '/elias.jpg' }
  ];

  const concerts = [
    { date: 'Dec 15, 2025', venue: 'The Echo Chamber', city: 'Los Angeles, CA' },
    { date: 'Dec 22, 2025', venue: 'Velvet Underground', city: 'New York, NY' },
    { date: 'Jan 10, 2026', venue: 'The Empty Bottle', city: 'Chicago, IL' },
    { date: 'Jan 18, 2026', venue: 'Neumos', city: 'Seattle, WA' },
    { date: 'Jan 25, 2026', venue: 'The Independent', city: 'San Francisco, CA' }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#260101] via-[#592816] to-[#260101]">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        {/* Desktop Hero Image */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/vers2_AldaVilmaTalvitie_kuva_Carolina_Stenback_FULL-6.jpg"
            alt="Band performing live"
            className="w-full h-full object-cover"
            fill
            priority
          />
        </div>
        {/* Mobile Hero Image */}
        <div className="md:hidden absolute inset-0">
          <Image
            src="/vers2_AldaVilmaTalvitie_kuva_Carolina_Stenback_FULL-1.jpg"
            alt="Band performing live"
            className="w-full h-full object-cover"
            fill
            priority
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#260101]/40 via-[#592816]/20 to-[#260101]"></div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="animate-fade-in">
            <h1 className="text-7xl md:text-7xl font-bold text-white mb-2 tracking-tight font-devanagari tracking-wide">
              ALDA & Vilma Talvitie
            </h1>
            <p className="text-xl md:text-5xl text-white tracking-wider font-yellowtail">
              Unitähtien Taa
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#F2B28D]/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#F2B28D]/50 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-24 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Meistä
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#F2B28D] to-[#8C0303] mx-auto mb-8"></div>
        </div>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center text-pretty" style={{ fontFamily: 'system-ui, sans-serif' }}>
          Born in the underground music scene of Portland, Eclipse has been crafting atmospheric indie rock that blends ethereal melodies with raw, emotional power. Our sound is a collision of dreamy soundscapes and driving rhythms, creating an immersive experience that transports listeners to another dimension. With three critically acclaimed albums and hundreds of electrifying performances, we&apos;ve built a devoted following that spans continents. Our music explores themes of connection, transformation, and the beauty found in life&apos;s darker moments.
        </p>
      </section>

      {/* Band Members */}
      <section className="py-24 px-4 md:px-8 bg-[#260101]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Muusikot
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-[#F2B28D] to-[#8C0303] mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {musicians.map((musician, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg transform transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-[#F2B28D]/30">
                <div className="aspect-3/4 relative">
                  <Image
                    src={musician.image}
                    alt={musician.name}
                    className="w-full h-full object-cover brightness-110"
                    fill
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#260101] via-[#260101]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                      {musician.name}
                    </h3>
                    <p className="text-[#F2B28D] font-yellowtail text-2xl tracking-wider">
                      {musician.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CD Call to Action */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-linear-to-br from-[#c1661e]/50 to-[#8C0303]/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-[#c1661e]/30 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  Unitähtien taa
                </h2>
                <p className="text-xl text-gray-300 mb-6" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  Joku teksi tähän albumista, joka houkuttelee kävijöitä ostamaan CD:n.
                </p>
                <ul className="text-gray-300 mb-8 space-y-2" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  <li>✦ Limited Edition Digipak</li>
                  <li>✦ Includes Exclusive Art Print</li>
                  <li>✦ Behind-the-Scenes Documentary Access</li>
                </ul>
                <button className="bg-linear-to-r from-[#c1661e]/80 to-[#8C0303]/80 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-[#c1661e] hover:to-[#8C0303] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-[#c1661e]/50">
                  Osta nyt - 20€ + toimituskulut
                </button>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-br from-[#c1661e] to-[#8C0303] rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <Image
                    src="/kuva_carolina_stenback_PRINT-5.jpg"
                    alt="Midnight Reverie Album Cover"
                    className="relative w-full aspect-square rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-200 object-cover"
                    width={600}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Videos */}
      <section className="py-24 px-4 md:px-8 bg-[#260101]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Musiikkivideot
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-[#F2B28D] to-[#8C0303] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl hover:shadow-[#F2B28D]/10 transition-all duration-200">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Hgma_q-rWzA?si=OSwmDoOp_uebFk4t"
                  title="Music Video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="group">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl hover:shadow-[#F2B28D]/10 transition-all duration-200">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/z83TIlBvKzU?si=MpgFPh2LTDOXsa8O"
                  title="Music Video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Dates */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Keikat
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-[#F2B28D] to-[#8C0303] mx-auto mb-8"></div>
          </div>

          <div className="space-y-4">
            {concerts.map((concert, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-[#F2B28D]/50 transition-all duration-200 group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-[#F2B28D] text-sm mb-1 font-semibold" style={{ fontFamily: 'system-ui, sans-serif' }}>
                      {concert.date}
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                      {concert.venue}
                    </h3>
                    <p className="text-gray-400" style={{ fontFamily: 'system-ui, sans-serif' }}>
                      {concert.city}
                    </p>
                  </div>
                  <button className="bg-white/10 text-white px-6 py-3 rounded-full hover:bg-[#F2B28D] transition-all duration-200 group-hover:shadow-lg group-hover:shadow-[#F2B28D]/20 font-semibold cursor-pointer">
                    Tapahtuman sivulle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t border-white/10">
        <p className="text-white/70 mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
          © 2025 ALDA & Vilma Talvitie. All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-[#F2B28D]/70 hover:text-[#BF0413] transition-colors">Instagram</a>
          <a href="#" className="text-[#F2B28D]/70 hover:text-[#BF0413] transition-colors">Spotify</a>
          <a href="#" className="text-[#F2B28D]/70 hover:text-[#BF0413] transition-colors">YouTube</a>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
