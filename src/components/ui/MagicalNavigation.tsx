'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { 
  Home, 
  Wand2, 
  BookOpen, 
  FlaskConical, 
  Sparkles, 
  Users,
  Compass,
  Crown,
  Star
} from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  magical?: boolean;
}

const magicalNavItems: NavItem[] = [
  { 
    label: 'القصر السحري', 
    href: '/', 
    icon: <Home className="w-5 h-5" />,
    magical: true 
  },
  { 
    label: 'كرة البلور', 
    href: '/age-selection', 
    icon: <Sparkles className="w-5 h-5" />,
    magical: true 
  },
  { 
    label: 'المغامرات', 
    href: '/path', 
    icon: <Compass className="w-5 h-5" />,
    magical: true 
  },
  { 
    label: 'معهد السحرة', 
    href: '/truth-lab', 
    icon: <FlaskConical className="w-5 h-5" />,
    magical: true 
  },
  { 
    label: 'برج السحرة', 
    href: '/spread-simulator', 
    icon: <Wand2 className="w-5 h-5" />,
    magical: true 
  },
  { 
    label: 'مكتبة الحكمة', 
    href: '/facilitator', 
    icon: <BookOpen className="w-5 h-5" />,
    magical: false 
  },
];

export function MagicalNavigation() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [magicParticles, setMagicParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    // Generate magic particles for hovered item
    if (hoveredIndex !== null) {
      const particles = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
      }));
      setMagicParticles(particles);
    } else {
      setMagicParticles([]);
    }
  }, [hoveredIndex]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: 'spring' }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/90 via-indigo-900/90 to-purple-900/90 backdrop-blur-md border-b border-purple-400/30 shadow-lg shadow-purple-500/25"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Magical Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50"
            >
              <Crown className="w-6 h-6 text-white" />
            </motion.div>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent"
            >
              مملكة الحقيقة
            </motion.span>
          </Link>

          {/* Magical Navigation Items */}
          <div className="hidden md:flex items-center space-x-2">
            {magicalNavItems.map((item, index) => (
              <Link key={item.href} href={item.href}>
                <motion.div
                  className="relative"
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className={`relative px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
                      pathname === item.href
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                        : 'text-purple-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {/* Magic Particles */}
                    {hoveredIndex === index && (
                      <>
                        {magicParticles.map((particle) => (
                          <motion.div
                            key={particle.id}
                            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0],
                              x: particle.x,
                              y: particle.y,
                            }}
                            transition={{
                              duration: 1,
                              ease: 'easeOut',
                            }}
                            style={{
                              left: '50%',
                              top: '50%',
                            }}
                          />
                        ))}
                      </>
                    )}

                    {/* Magical Icon */}
                    <motion.div
                      animate={hoveredIndex === index ? { rotate: 360 } : {}}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                      {item.magical ? (
                        <div className="relative">
                          {item.icon}
                          {hoveredIndex === index && (
                            <motion.div
                              className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full opacity-50 blur-sm"
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity }}
                            />
                          )}
                        </div>
                      ) : (
                        item.icon
                      )}
                    </motion.div>

                    <span className="text-sm font-medium">{item.label}</span>

                    {/* Active Indicator */}
                    {pathname === item.href && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 w-2 h-2 bg-yellow-400 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white"
            >
              <Sparkles className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Magical Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 pointer-events-none"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.nav>
  );
}

export function MagicalPortal({ children, to }: { children: React.ReactNode; to: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={to}>
      <motion.div
        className="relative inline-block"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="relative px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full overflow-hidden"
          animate={isHovered ? {
            background: [
              'linear-gradient(to right, #9333ea, #ec4899)',
              'linear-gradient(to right, #ec4899, #9333ea)',
              'linear-gradient(to right, #9333ea, #ec4899)',
            ],
          } : {}}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Portal Effect */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-purple-400/30"
              animate={{
                opacity: [0, 0.5, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          )}

          {/* Swirling Particles */}
          {isHovered && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                  animate={{
                    rotate: [0, 360],
                    translateX: [0, 30, 0],
                    translateY: [0, -20, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.1,
                    ease: 'easeInOut',
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                />
              ))}
            </>
          )}

          <span className="relative z-10 text-white font-medium flex items-center gap-2">
            {children}
            <motion.div
              animate={isHovered ? { x: [0, 5, 0] } : {}}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <Star className="w-4 h-4" />
            </motion.div>
          </span>
        </motion.div>
      </motion.div>
    </Link>
  );
}
