'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { 
  Home, 
  Sparkles, 
  BookOpen, 
  FlaskConical, 
  Compass, 
  Users,
  Settings,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
  dropdown?: Array<{ label: string; href: string }>;
}

const professionalNavItems: NavItem[] = [
  { 
    label: 'Home', 
    href: '/', 
    icon: <Home className="w-5 h-5" />,
  },
  { 
    label: 'Age Selection', 
    href: '/age-selection', 
    icon: <Sparkles className="w-5 h-5" />,
  },
  { 
    label: 'Learning Path', 
    href: '/path', 
    icon: <Compass className="w-5 h-5" />,
    badge: 'New',
  },
  { 
    label: 'Truth Lab', 
    href: '/truth-lab', 
    icon: <FlaskConical className="w-5 h-5" />,
  },
  { 
    label: 'Spread Simulator', 
    href: '/spread-simulator', 
    icon: <Users className="w-5 h-5" />,
  },
  { 
    label: 'Facilitator', 
    href: '/facilitator', 
    icon: <BookOpen className="w-5 h-5" />,
  },
];

export function ProfessionalNavigation() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg' 
            : 'bg-slate-900/80 backdrop-blur-sm border-b border-slate-800/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25"
              >
                <FlaskConical className="w-6 h-6 text-white" />
              </motion.div>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
              >
                TruthLab Kids
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {professionalNavItems.map((item, index) => (
                <div key={item.href} className="relative">
                  <Link href={item.href}>
                    <motion.div
                      className="relative px-4 py-2 rounded-xl flex items-center gap-2 transition-all duration-300"
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Active indicator */}
                      {pathname === item.href && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl"
                          layoutId="activeTab"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}

                      {/* Hover background */}
                      {hoveredIndex === index && pathname !== item.href && (
                        <motion.div
                          className="absolute inset-0 bg-white/10 rounded-xl"
                          layoutId="hoverTab"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.3 }}
                        />
                      )}

                      {/* Content */}
                      <motion.div className={`relative z-10 flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                        pathname === item.href 
                          ? 'text-white' 
                          : 'text-gray-300 hover:text-white'
                      }`}>
                        <motion.div
                          animate={hoveredIndex === index ? { rotate: 360 } : {}}
                          transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                          {item.icon}
                        </motion.div>
                        {item.label}
                      </motion.div>

                      {/* Badge */}
                      {item.badge && (
                        <motion.span
                          className="absolute -top-1 -right-1 px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', damping: 15, stiffness: 300 }}
                        >
                          {item.badge}
                        </motion.span>
                      )}
                    </motion.div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/25"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden border-t border-slate-700/50"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: mobileMenuOpen ? 'auto' : 0, 
            opacity: mobileMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <div className="px-4 py-4 space-y-2">
            {professionalNavItems.map((item, index) => (
              <Link key={item.href} href={item.href}>
                <motion.div
                  className={`px-4 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 ${
                    pathname === item.href 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white' 
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.div
                    animate={hoveredIndex === index ? { rotate: 360 } : {}}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  >
                    {item.icon}
                  </motion.div>
                  <span className="text-sm font-medium">{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Floating particles effect */}
      <div className="fixed inset-0 pointer-events-none z-40">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            animate={{
              opacity: [0, 0.5, 0],
              scale: [1, 2, 1],
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: 'easeInOut',
            }}
            style={{
              left: `${20 + i * 30}%`,
              top: '20%',
            }}
          />
        ))}
      </div>
    </>
  );
}

export function BreadcrumbNavigation() {
  const pathname = usePathname();
  
  const getBreadcrumbs = () => {
    const paths = pathname.split('/').filter(path => path);
    const breadcrumbs = [{ label: 'Home', href: '/' }];
    
    paths.forEach((path, index) => {
      const href = '/' + paths.slice(0, index + 1).join('/');
      const label = path.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      breadcrumbs.push({ label, href });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex items-center space-x-2 text-sm text-gray-400 mb-8"
    >
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb.href} className="flex items-center space-x-2">
          {index > 0 && <span>/</span>}
          <Link 
            href={breadcrumb.href}
            className={`transition-colors duration-200 ${
              index === breadcrumbs.length - 1 
                ? 'text-white font-medium' 
                : 'hover:text-white'
            }`}
          >
            {breadcrumb.label}
          </Link>
        </div>
      ))}
    </motion.nav>
  );
}
