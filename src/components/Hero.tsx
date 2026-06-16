// Hero.jsx
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroVideo from "../assets/video/hero_video_1.mp4";

// Import sister company logos
import sister1 from "../assets/images/sisters/SUPER_LIGHT.jpg";
import sister2 from "../assets/images/sisters/NOOR_cl5w3QT.jpg";
import sister3 from "../assets/images/sisters/AUTO_F4bci0W.jpg";
import sister4 from "../assets/images/sisters/DIGITAL_LEGENDS_QfNVSa3.jpg";
import sister5 from "../assets/images/sisters/BRIGHT__1.jpg";
import sister6 from "../assets/images/sisters/CITY_NUTS_daXk7gG.jpg";
import sister7 from "../assets/images/sisters/LED_HOUSE_TUhVmsA.jpg";
import sister8 from "../assets/images/sisters/CABLE_HOUSE_25e73Zx.jpg";
import sister9 from "../assets/images/sisters/PRIME_STAR_5o11L02.jpg";

const sisterCompanies = [
  { name: "Super Light", logo: sister1 },
  { name: "Noor", logo: sister2 },
  { name: "Auto", logo: sister3 },
  { name: "Digital Legends", logo: sister4 },
  { name: "Bright", logo: sister5 },
  { name: "City Nuts", logo: sister6 },
  { name: "LED House", logo: sister7 },
  { name: "Cable House", logo: sister8 },
  { name: "Prime Star", logo: sister9 },
];

export function Hero() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [duplicatedSisters, setDuplicatedSisters] = useState([]);

  useEffect(() => {
    // Duplicate sisters for seamless scrolling (3x for smooth loop)
    setDuplicatedSisters([...sisterCompanies, ...sisterCompanies, ...sisterCompanies]);
    
    // Play video immediately when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.log("Autoplay failed:", error));
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full overflow-hidden min-h-screen flex items-center justify-center">
      {/* Video Background - Darker overlay */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Darker Overlay - increased opacity from 60% to 80% */}
        <div className="absolute inset-0 bg-black/80"></div>
        
        {/* Additional gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
      </div>

      {/* Content - Split into 2 columns */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Hero Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-pink-accent/20 backdrop-blur-sm text-pink-300 text-sm font-medium border border-pink-accent/30">
              {t("premiumMountingSolutions")}
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t("mountSmarter")}
              <br />
              <span className="text-pink-accent">{t("workBetter")}</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200/90 mt-4 max-w-xl mx-auto lg:mx-0">
              {t("heroDescription")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <button className="group bg-pink-accent hover:bg-pink-600 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg">
                {t("exploreProducts")}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-full transition-all duration-300">
                {t("viewProjects")}
              </button>
            </div>
          </motion.div>

          {/* Right Column - Sister Concerns Carousel with 2 Rows */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-pink-accent rounded-full"></div>
              <h3 className="text-white text-lg font-semibold tracking-wider">
                {t("sisterConcerns") || "Our Sister Concerns"}
              </h3>
            </div>
            
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
              
              <div className="overflow-hidden">
                {/* Row 1 */}
                <div className="animate-sister-scroll flex gap-4 py-3">
                  {duplicatedSisters.map((sister, idx) => (
                    <div
                      key={`row1-${idx}`}
                      className="flex-none w-24 md:w-28 h-20 flex items-center justify-center bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                    >
                      <img
                        src={sister.logo}
                        alt={sister.name}
                        className="max-w-[75%] max-h-[65%] object-contain transition-all duration-300 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          console.log(`Failed to load logo: ${sister.name}`, sister.logo);
                          e.target.style.display = 'none';
                          const fallback = document.createElement('span');
                          fallback.className = 'text-white/70 text-xs font-medium text-center px-2';
                          fallback.textContent = sister.name;
                          e.target.parentElement?.appendChild(fallback);
                        }}
                      />
                    </div>
                  ))}
                </div>
                
                {/* Row 2 - Offset for staggered effect */}
                <div className="animate-sister-scroll-reverse flex gap-4 py-3 mt-2">
                  {duplicatedSisters.slice(0, Math.ceil(duplicatedSisters.length / 2)).map((sister, idx) => (
                    <div
                      key={`row2-${idx}`}
                      className="flex-none w-24 md:w-28 h-20 flex items-center justify-center bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                    >
                      <img
                        src={sister.logo}
                        alt={sister.name}
                        className="max-w-[75%] max-h-[65%] object-contain transition-all duration-300 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          console.log(`Failed to load logo: ${sister.name}`, sister.logo);
                          e.target.style.display = 'none';
                          const fallback = document.createElement('span');
                          fallback.className = 'text-white/70 text-xs font-medium text-center px-2';
                          fallback.textContent = sister.name;
                          e.target.parentElement?.appendChild(fallback);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Scroll indicator dots */}
            <div className="flex justify-center gap-1.5 mt-4">
              {sisterCompanies.map((_, idx) => (
                <div
                  key={idx}
                  className="w-1.5 h-1.5 rounded-full bg-white/30 transition-all duration-300"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-20 bg-white/10 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 focus:outline-none"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>

      <style>{`
        @keyframes sisterScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes sisterScrollReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-sister-scroll {
          animation: sisterScroll 40s linear infinite;
          width: fit-content;
        }
        
        .animate-sister-scroll-reverse {
          animation: sisterScrollReverse 40s linear infinite;
          width: fit-content;
        }
        
        .animate-sister-scroll:hover,
        .animate-sister-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}