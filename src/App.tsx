import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, MotionValue } from 'framer-motion'
import { Code, Globe, Smartphone, Cloud, Shield, Zap, ArrowRight, Mail, Phone, MapPin, ArrowUpRight, Menu, X, Palette, Cpu, BarChart2, Layers, GitBranch, Settings } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import './App.css'

const services = [
  { icon: Code, title: 'Web Dev', desc: 'Custom web applications & platforms' },
  { icon: Smartphone, title: 'Mobile Apps', desc: 'iOS & Android cross-platform apps' },
  { icon: Cloud, title: 'Cloud', desc: 'Scalable cloud infrastructure' },
  { icon: Shield, title: 'Security', desc: 'Enterprise-grade security solutions' },
  { icon: Globe, title: 'Strategy', desc: 'Digital transformation roadmaps' },
  { icon: Zap, title: 'Consulting', desc: 'Expert tech advisory services' },
  { icon: Palette, title: 'UI/UX Design', desc: 'Beautiful, intuitive interfaces' },
  { icon: Cpu, title: 'AI & ML', desc: 'Intelligent automation & models' },
  { icon: BarChart2, title: 'Data Analytics', desc: 'Insights from your data' },
  { icon: Layers, title: 'DevOps', desc: 'CI/CD pipelines & deployment' },
  { icon: GitBranch, title: 'Blockchain', desc: 'Decentralised app development' },
  { icon: Settings, title: 'Automation', desc: 'Workflow & process automation' },
]

const stats = [
  { value: '150+', label: 'Projects' },
  { value: '50+', label: 'Clients' },
  { value: '10+', label: 'Years' },
  { value: '24/7', label: 'Support' }
]

const sections = ['Hero', 'Stats', 'Services', 'Tech', 'Process', 'Portfolio', 'About', 'Contact', 'Footer']

const techStack = [
  { name: 'React', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Python', color: '#3776AB' },
  { name: 'GraphQL', color: '#E10098' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'Redis', color: '#DC382D' },
  { name: 'Kubernetes', color: '#326CE5' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'Tailwind', color: '#06B6D4' },
  { name: 'Figma', color: '#F24E1E' },
  { name: 'Adobe XD', color: '#FF61F6' },
  { name: 'Framer', color: '#0055FF' },
  { name: 'Flutter', color: '#02569B' },
  { name: 'Vue.js', color: '#4FC08D' },
  { name: 'OpenAI', color: '#74AA9C' },
  { name: 'TensorFlow', color: '#FF6F00' },
  { name: 'LangChain', color: '#65C6BB' },
  { name: 'PyTorch', color: '#EE4C2C' },
  { name: 'Hugging Face', color: '#FFD21E' },
]

const processSteps = [
  { num: '01', title: 'Discover', desc: 'Understanding your vision & goals' },
  { num: '02', title: 'Design', desc: 'Crafting intuitive experiences' },
  { num: '03', title: 'Build', desc: 'Engineering robust solutions' },
  { num: '04', title: 'Launch', desc: 'Deploying with precision' },
  { num: '05', title: 'Support', desc: 'Growing together post-launch' },
]

const projects = [
  {
    title: 'Orum Style',
    desc: 'Fashion e-commerce platform',
    tags: ['E-commerce', 'Fashion', 'UI/UX'],
    initials: 'OS',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
    link: 'https://www.orumstyle.com/',
  },
  {
    title: 'Eloop Motors',
    desc: 'Electric vehicle solutions platform',
    tags: ['Automotive', 'Electric', 'Web'],
    initials: 'EM',
    gradient: 'linear-gradient(135deg, #10b981 0%, #0284c7 100%)',
    link: 'https://eloopmotors.com',
  },
  {
    title: 'Biongo Shop',
    desc: 'Multi-vendor shopping platform',
    tags: ['E-commerce', 'React', 'Node.js'],
    initials: 'BS',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    link: 'https://biongo.shop',
  },
  {
    title: 'POS Software',
    desc: 'Point of sale management system',
    tags: ['POS', 'Software', 'Business'],
    initials: 'POS',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    link: 'https://birongopet.msrnayeem.cloud/pos',
  },
  {
    title: 'Great British Wills',
    desc: 'Online will writing service',
    tags: ['Legal', 'Web', 'UK'],
    initials: 'GBW',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)',
    link: 'https://www.greatbritishwills.com/',
  },
  {
    title: 'Stuart Porter FP',
    desc: 'Financial planning & advisory',
    tags: ['Finance', 'Advisory', 'Web'],
    initials: 'SP',
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0891b2 100%)',
    link: 'https://www.stuartporterfinancialplanning.com/',
  },
  {
    title: 'Dhaka Range Police',
    desc: 'Government law enforcement portal',
    tags: ['Government', 'Portal', 'Official'],
    initials: 'DRP',
    gradient: 'linear-gradient(135deg, #475569 0%, #1e293b 100%)',
    link: 'https://dhakarange.police.gov.bd/',
  },
  {
    title: 'Game Topup',
    desc: 'Gaming top-up service platform',
    tags: ['Gaming', 'Fintech', 'Web'],
    initials: 'GT',
    gradient: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
    link: 'https://gametopup.tech',
  },
]

function App() {
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    setTimeout(() => setLoaded(true), 300)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (!loaded) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-10 h-10 border-2 border-white/20 border-t-red-400 rounded-full"
        />
      </div>
    )
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <BackgroundRing />

      {isMobile ? (
        <MobileLayout menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      ) : (
        <Desktop3DRing menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      )}
    </div>
  )
}

// Desktop Scroll Layout
const Desktop3DRing = ({ menuOpen, setMenuOpen }: any) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 30, damping: 25 })

  return (
    <div ref={containerRef} className="relative">
      <section id="hero" className="min-h-screen flex items-center justify-center px-8">
        <HeroContent />
      </section>
      <section id="stats" className="min-h-screen flex items-center justify-center px-8">
        <StatsContent />
      </section>
      <section id="services" className="min-h-screen flex items-center justify-center px-8">
        <ServicesContent />
      </section>
      <section id="tech" className="min-h-screen flex items-center justify-center px-8">
        <TechStackContent />
      </section>
      <section id="process" className="min-h-screen flex items-center justify-center px-8">
        <ProcessContent />
      </section>
      <section id="portfolio" className="min-h-screen flex items-center justify-center px-8">
        <CaseStudiesContent />
      </section>
      <section id="about" className="min-h-screen flex items-center justify-center px-8">
        <AboutContent />
      </section>
      <section id="contact" className="min-h-screen flex items-center justify-center px-8">
        <ContactContent />
      </section>
      <section id="footer" className="min-h-screen flex items-center justify-center px-8">
        <FooterContent />
      </section>

      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} isMobile={false} />
      <ProgressDots progress={smoothProgress} />
      <ScrollHint />
    </div>
  )
}

// Ring Section Component
const RingSection = ({ children, angle, activeIndex }: { children: React.ReactNode; angle: number; activeIndex: MotionValue<number> }) => {
  const sectionIndex = angle / 60
  const [isActive, setIsActive] = useState(sectionIndex === 0)

  useMotionValueEvent(activeIndex, "change", (v) => {
    setIsActive(Math.round(v) === sectionIndex)
  })

  return (
    // Outer div owns the 3D carousel positioning — never touched by Framer Motion
    <div
      className="absolute left-1/2 top-1/2 w-[min(500px,85vw)] h-auto"
      style={{
        transform: `translateX(-50%) translateY(-50%) rotateY(${angle}deg) translateZ(800px)`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Inner motion.div only handles opacity + scale — no transform conflict */}
      <motion.div
        className="w-full h-full"
        animate={{
          opacity: isActive ? 1 : 0,
          scale: isActive ? 1 : 0.85,
        }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// Content Components
const HeroContent = () => (
  <div className="text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-7xl font-bold tracking-tighter mb-6"
    >
      <span className="text-white">RISE</span><span className="text-red-500 font-bold">1</span>
    </motion.div>
    <span className="px-4 py-2 rounded-full border border-white/20 text-sm text-gray-300 bg-white/5 mb-6 inline-block">
      IT Solutions
    </span>
    <h1 className="text-4xl font-bold mb-4">We Build Digital Future</h1>
    <p className="text-gray-400 mb-6">Cutting-edge technology solutions</p>
    <div className="flex gap-3 justify-center">
      <button className="bg-white text-black px-6 py-3 rounded-full font-semibold">Start Project</button>
      <button className="border border-white/30 px-6 py-3 rounded-full">View Work</button>
    </div>
  </div>
)

const StatsContent = () => (
  <div className="text-center">
    <span className="text-gray-400 text-xs uppercase tracking-widest mb-4 block">Impact</span>
    <h2 className="text-3xl font-bold mb-8">Numbers That Speak</h2>
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="p-6 rounded-xl border border-white/10 bg-white/5">
          <div className="text-4xl font-bold text-red-400 mb-1">{stat.value}</div>
          <div className="text-gray-400 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
)

const ServicesContent = () => (
  <div className="text-center w-full max-w-3xl">
    <span className="text-gray-400 text-xs uppercase tracking-widest mb-4 block">Services</span>
    <h2 className="text-3xl font-bold mb-6">What We Do</h2>
    <div className="grid grid-cols-4 gap-3">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.04, borderColor: 'rgba(248,113,113,0.4)' }}
          className="p-4 rounded-xl border border-white/10 bg-white/5 text-left"
        >
          <s.icon size={20} className="mb-2 text-red-400" />
          <div className="font-semibold text-sm mb-1">{s.title}</div>
          <div className="text-gray-400 text-xs leading-relaxed">{s.desc}</div>
        </motion.div>
      ))}
    </div>
  </div>
)

const AboutContent = () => (
  <div className="text-center max-w-2xl">
    <span className="text-gray-400 text-xs uppercase tracking-widest mb-4 block">About</span>
    <h2 className="text-3xl font-bold mb-4">Technology That Empowers</h2>
    <p className="text-gray-400 mb-3 leading-relaxed">
      We are a forward-thinking IT company delivering exceptional digital solutions across web, mobile, cloud, and enterprise software.
    </p>
    <p className="text-gray-500 text-sm mb-8 leading-relaxed">
      From startups to government institutions, we partner with organisations to design, build, and scale technology that drives real results. With 10+ years of experience and 150+ successful projects, Rise1 is the team behind the technology you trust.
    </p>
    <div className="grid grid-cols-3 gap-3 mb-8 text-left">
      <div className="p-4 rounded-xl border border-white/10 bg-white/5">
        <Zap size={20} className="text-red-400 mb-2" />
        <div className="font-semibold text-sm mb-1">Fast Delivery</div>
        <div className="text-gray-400 text-xs">Agile process with on-time, on-budget execution every time.</div>
      </div>
      <div className="p-4 rounded-xl border border-white/10 bg-white/5">
        <Shield size={20} className="text-red-400 mb-2" />
        <div className="font-semibold text-sm mb-1">Built to Last</div>
        <div className="text-gray-400 text-xs">Scalable, secure architecture designed for long-term growth.</div>
      </div>
      <div className="p-4 rounded-xl border border-white/10 bg-white/5">
        <Globe size={20} className="text-red-400 mb-2" />
        <div className="font-semibold text-sm mb-1">Global Reach</div>
        <div className="text-gray-400 text-xs">Serving clients across the UK, Asia, and beyond.</div>
      </div>
    </div>
    <button className="bg-white text-black px-6 py-3 rounded-full font-semibold">Learn More</button>
  </div>
)

const ContactContent = () => (
  <div className="text-center w-full max-w-2xl">
    <span className="text-gray-400 text-xs uppercase tracking-widest mb-4 block">Start a Project</span>
    <h2 className="text-3xl font-bold mb-2">Tell Us About Your Project</h2>
    <p className="text-gray-400 text-sm mb-6">Fill in the details below and we'll get back to you within 24 hours.</p>
    <form className="text-left space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <input type="text" placeholder="Full Name *" className="input-field" />
        <input type="email" placeholder="Email Address *" className="input-field" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <input type="text" placeholder="Company / Organization" className="input-field" />
        <select className="input-field">
          <option value="" disabled selected>Service Needed *</option>
          <option>Web Development</option>
          <option>Mobile App</option>
          <option>UI/UX Design</option>
          <option>AI & Machine Learning</option>
          <option>Cloud Infrastructure</option>
          <option>DevOps</option>
          <option>Blockchain</option>
          <option>Automation</option>
          <option>Other</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <select className="input-field">
          <option value="" disabled selected>Estimated Budget</option>
          <option>Under $1,000</option>
          <option>$1,000 – $5,000</option>
          <option>$5,000 – $20,000</option>
          <option>$20,000+</option>
          <option>Let's discuss</option>
        </select>
        <select className="input-field">
          <option value="" disabled selected>Timeline</option>
          <option>ASAP</option>
          <option>1 – 3 months</option>
          <option>3 – 6 months</option>
          <option>6+ months</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <textarea rows={4} placeholder="Describe your project — what are you building, what problem does it solve? *" className="input-field resize-none" />
      <button type="submit" className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
        Submit Project Inquiry
      </button>
    </form>
  </div>
)

const FooterContent = () => (
  <div className="text-center">
    <h2 className="text-3xl font-bold mb-4">Ready to Transform?</h2>
    <p className="text-gray-400 mb-6">Let's create something amazing.</p>
    <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-black px-8 py-3 rounded-full font-semibold">Get Started</button>
    <div className="mt-8 pt-6 border-t border-white/10">
      <div className="text-xl font-bold"><span className="text-white">RISE</span><span className="text-red-500 font-bold">1</span></div>
      <div className="text-gray-400 text-xs">© 2024 Rise 1</div>
    </div>
  </div>
)

const TechStackContent = () => (
  <div className="text-center w-full max-w-3xl overflow-hidden">
    <span className="text-gray-400 text-xs uppercase tracking-widest mb-4 block">Technologies</span>
    <h2 className="text-3xl font-bold mb-8">Built With The Best</h2>
    <div className="space-y-4 overflow-hidden">
      <div className="flex gap-3 marquee-track">
        {[...techStack.slice(0, 7), ...techStack.slice(0, 7)].map((t, i) => (
          <span key={i} className="flex-shrink-0 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: t.color }} />
            {t.name}
          </span>
        ))}
      </div>
      <div className="flex gap-3 marquee-track-reverse">
        {[...techStack.slice(7), ...techStack.slice(7)].map((t, i) => (
          <span key={i} className="flex-shrink-0 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: t.color }} />
            {t.name}
          </span>
        ))}
      </div>
    </div>
  </div>
)

const ProcessContent = () => (
  <div className="text-center w-full max-w-4xl">
    <span className="text-gray-400 text-xs uppercase tracking-widest mb-4 block">Process</span>
    <h2 className="text-3xl font-bold mb-12">How We Work</h2>
    <div className="relative flex justify-between items-start">
      <div className="absolute top-8 left-0 right-0 h-px bg-white/10" />
      {processSteps.map((step, i) => (
        <motion.div
          key={step.num}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.12 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center w-1/5"
        >
          <div className="w-16 h-16 rounded-full border border-red-400/40 bg-red-400/10 flex items-center justify-center mb-4 z-10">
            <span className="text-red-400 font-bold text-sm">{step.num}</span>
          </div>
          <div className="font-semibold mb-1 text-sm">{step.title}</div>
          <div className="text-gray-400 text-xs text-center px-1">{step.desc}</div>
        </motion.div>
      ))}
    </div>
  </div>
)

const CaseStudiesContent = () => {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? projects : projects.slice(0, 4)
  return (
    <div className="text-center w-full max-w-5xl">
      <span className="text-gray-400 text-xs uppercase tracking-widest mb-4 block">Portfolio</span>
      <h2 className="text-3xl font-bold mb-8">Our Work</h2>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {visible.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="relative rounded-2xl border border-white/10 overflow-hidden group cursor-pointer text-left"
            whileHover={{ scale: 1.04, y: -4 }}
          >
            <div
              className="h-28 flex items-center justify-center relative overflow-hidden"
              style={{ background: p.gradient }}
            >
              <div className="absolute inset-0 bg-black/30" />
              <span className="relative text-3xl font-black text-white/30 tracking-tighter select-none">{p.initials}</span>
            </div>
            <div className="p-3 bg-white/5">
              <div className="font-semibold text-sm mb-1 truncate">{p.title}</div>
              <div className="text-gray-400 text-xs mb-2 line-clamp-2">{p.desc}</div>
              <div className="flex flex-wrap gap-1">
                {p.tags.map((tag) => (
                  <span key={tag} className="px-1.5 py-0.5 rounded-full bg-white/5 text-gray-400 text-xs border border-white/10">{tag}</span>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: 'rgba(0,0,0,0.75)' }}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-white text-black px-4 py-2 rounded-full font-semibold text-sm"
              >
                Visit Site <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      {projects.length > 4 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="border border-white/20 px-7 py-2.5 rounded-full text-sm text-gray-300 hover:text-white hover:border-white/50 transition-all"
        >
          {showAll ? 'See Less ↑' : `See More (${projects.length - 4} more) ↓`}
        </button>
      )}
    </div>
  )
}

// Mobile Layout
const MobileLayout = ({ menuOpen, setMenuOpen }: any) => (
  <>
    <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} isMobile={true} />
    <div className="pt-20 px-4 pb-12 space-y-20">
      <MobileHero />
      <MobileStats />
      <MobileServices />
      <MobileTechStack />
      <MobileProcess />
      <MobileCaseStudies />
      <MobileAbout />
      <MobileContact />
      <MobileFooter />
    </div>
  </>
)

const MobileHero = () => (
  <motion.section className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <div className="text-5xl font-bold tracking-tighter mb-4"><span className="text-white">RISE</span><span className="text-red-500 font-bold">1</span></div>
    <span className="px-3 py-1.5 rounded-full border border-white/20 text-xs text-gray-300 bg-white/5 mb-4 inline-block">IT Solutions</span>
    <h1 className="text-2xl font-bold mb-3">We Build<br /><span className="text-red-400">Digital Future</span></h1>
    <p className="text-gray-400 text-sm mb-5">Cutting-edge technology solutions.</p>
    <div className="flex gap-2 justify-center">
      <button className="bg-white text-black px-5 py-2.5 rounded-full font-semibold text-sm">Start</button>
      <button className="border border-white/30 px-5 py-2.5 rounded-full text-sm">View</button>
    </div>
  </motion.section>
)

const MobileStats = () => (
  <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <span className="text-gray-400 text-xs uppercase tracking-widest mb-3 block text-center">Impact</span>
    <h2 className="text-xl font-bold text-center mb-5">Numbers</h2>
    <div className="grid grid-cols-2 gap-3">
      {stats.map((s) => (
        <div key={s.label} className="p-4 rounded-xl border border-white/10 bg-white/5 text-center">
          <div className="text-2xl font-bold text-red-400">{s.value}</div>
          <div className="text-gray-400 text-xs">{s.label}</div>
        </div>
      ))}
    </div>
  </motion.section>
)

const MobileServices = () => (
  <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <span className="text-gray-400 text-xs uppercase tracking-widest mb-3 block text-center">Services</span>
    <h2 className="text-xl font-bold text-center mb-5">What We Do</h2>
    <div className="grid grid-cols-2 gap-3">
      {services.map((s) => (
        <div key={s.title} className="p-3 rounded-xl border border-white/10 bg-white/5">
          <s.icon size={18} className="mb-1.5 text-red-400" />
          <div className="font-semibold text-xs mb-0.5">{s.title}</div>
          <div className="text-gray-400 text-xs leading-relaxed">{s.desc}</div>
        </div>
      ))}
    </div>
  </motion.section>
)

const MobileTechStack = () => (
  <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-hidden">
    <span className="text-gray-400 text-xs uppercase tracking-widest mb-3 block text-center">Technologies</span>
    <h2 className="text-xl font-bold text-center mb-5">Built With The Best</h2>
    <div className="space-y-3 overflow-hidden">
      <div className="flex gap-2 marquee-track">
        {[...techStack.slice(0, 7), ...techStack.slice(0, 7)].map((t, i) => (
          <span key={i} className="flex-shrink-0 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: t.color }} />
            {t.name}
          </span>
        ))}
      </div>
      <div className="flex gap-2 marquee-track-reverse">
        {[...techStack.slice(7), ...techStack.slice(7)].map((t, i) => (
          <span key={i} className="flex-shrink-0 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: t.color }} />
            {t.name}
          </span>
        ))}
      </div>
    </div>
  </motion.section>
)

const MobileProcess = () => (
  <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <span className="text-gray-400 text-xs uppercase tracking-widest mb-3 block text-center">Process</span>
    <h2 className="text-xl font-bold text-center mb-6">How We Work</h2>
    <div className="relative space-y-4 pl-8">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
      {processSteps.map((step, i) => (
        <motion.div
          key={step.num}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className="relative flex items-start gap-3"
        >
          <div className="absolute -left-8 w-8 h-8 rounded-full border border-red-400/40 bg-red-400/10 flex items-center justify-center flex-shrink-0">
            <span className="text-red-400 font-bold text-xs">{step.num}</span>
          </div>
          <div>
            <div className="font-semibold text-sm">{step.title}</div>
            <div className="text-gray-400 text-xs">{step.desc}</div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
)

const MobileCaseStudies = () => {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? projects : projects.slice(0, 4)
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <span className="text-gray-400 text-xs uppercase tracking-widest mb-3 block text-center">Portfolio</span>
      <h2 className="text-xl font-bold text-center mb-5">Our Work</h2>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {visible.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 overflow-hidden block"
          >
            <div
              className="h-20 flex items-center justify-center relative"
              style={{ background: p.gradient }}
            >
              <div className="absolute inset-0 bg-black/30" />
              <span className="relative text-2xl font-black text-white/30 tracking-tighter select-none">{p.initials}</span>
            </div>
            <div className="p-2.5 bg-white/5">
              <div className="font-semibold text-xs mb-1 truncate">{p.title}</div>
              <div className="flex flex-wrap gap-1">
                {p.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="px-1.5 py-0.5 rounded-full bg-white/5 text-gray-400 text-xs border border-white/10">{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
      {projects.length > 4 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="w-full border border-white/20 py-2.5 rounded-full text-sm text-gray-300"
        >
          {showAll ? 'See Less ↑' : `See More (${projects.length - 4} more) ↓`}
        </button>
      )}
    </motion.section>
  )
}

const MobileAbout = () => (
  <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <span className="text-gray-400 text-xs uppercase tracking-widest mb-2 block">About</span>
    <h2 className="text-xl font-bold mb-3">Technology That <span className="text-red-400">Empowers</span></h2>
    <p className="text-gray-400 text-sm mb-2 leading-relaxed">
      We are a forward-thinking IT company delivering exceptional digital solutions across web, mobile, cloud, and enterprise software.
    </p>
    <p className="text-gray-500 text-xs mb-5 leading-relaxed">
      From startups to government institutions, we partner with organisations to design, build, and scale technology that drives real results. With 10+ years of experience and 150+ successful projects, Rise1 is the team behind the technology you trust.
    </p>
    <div className="space-y-2 mb-5">
      <div className="p-3 rounded-xl border border-white/10 bg-white/5 flex items-start gap-3">
        <Zap size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
        <div>
          <div className="font-semibold text-xs mb-0.5">Fast Delivery</div>
          <div className="text-gray-400 text-xs">Agile process with on-time, on-budget execution.</div>
        </div>
      </div>
      <div className="p-3 rounded-xl border border-white/10 bg-white/5 flex items-start gap-3">
        <Shield size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
        <div>
          <div className="font-semibold text-xs mb-0.5">Built to Last</div>
          <div className="text-gray-400 text-xs">Scalable, secure architecture for long-term growth.</div>
        </div>
      </div>
      <div className="p-3 rounded-xl border border-white/10 bg-white/5 flex items-start gap-3">
        <Globe size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
        <div>
          <div className="font-semibold text-xs mb-0.5">Global Reach</div>
          <div className="text-gray-400 text-xs">Serving clients across the UK, Asia, and beyond.</div>
        </div>
      </div>
    </div>
    <button className="bg-white text-black px-5 py-2.5 rounded-full font-semibold text-sm">Learn More</button>
  </motion.section>
)

const MobileContact = () => (
  <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <span className="text-gray-400 text-xs uppercase tracking-widest mb-2 block">Start a Project</span>
    <h2 className="text-xl font-bold mb-1">Tell Us About Your Project</h2>
    <p className="text-gray-400 text-xs mb-4">We'll get back to you within 24 hours.</p>
    <form className="space-y-3">
      <input type="text" placeholder="Full Name *" className="input-field text-sm" />
      <input type="email" placeholder="Email Address *" className="input-field text-sm" />
      <input type="text" placeholder="Company / Organization" className="input-field text-sm" />
      <select className="input-field text-sm">
        <option value="" disabled selected>Service Needed *</option>
        <option>Web Development</option>
        <option>Mobile App</option>
        <option>UI/UX Design</option>
        <option>AI & Machine Learning</option>
        <option>Cloud Infrastructure</option>
        <option>DevOps</option>
        <option>Blockchain</option>
        <option>Automation</option>
        <option>Other</option>
      </select>
      <select className="input-field text-sm">
        <option value="" disabled selected>Estimated Budget</option>
        <option>Under $1,000</option>
        <option>$1,000 – $5,000</option>
        <option>$5,000 – $20,000</option>
        <option>$20,000+</option>
        <option>Let's discuss</option>
      </select>
      <select className="input-field text-sm">
        <option value="" disabled selected>Timeline</option>
        <option>ASAP</option>
        <option>1 – 3 months</option>
        <option>3 – 6 months</option>
        <option>6+ months</option>
        <option>Not sure yet</option>
      </select>
      <textarea rows={3} placeholder="Describe your project *" className="input-field resize-none text-sm" />
      <button type="submit" className="w-full bg-white text-black py-3 rounded-xl font-semibold text-sm">Submit Inquiry</button>
    </form>
  </motion.section>
)

const MobileFooter = () => (
  <motion.section className="text-center pb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <h2 className="text-xl font-bold mb-4">Ready to <span className="text-red-400">Transform</span>?</h2>
    <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm mb-6">Get Started</button>
    <div className="pt-6 border-t border-white/10">
      <div className="font-bold"><span className="text-white">RISE</span><span className="text-red-500 font-bold">1</span></div>
    </div>
  </motion.section>
)

// Background Ring
const BackgroundRing = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const scrollRef = useRef(0)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const rotationRef = useRef(0)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const defaultPos = () => ({ x: canvas.width * 0.72, y: canvas.height * 0.45 })

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      mouseRef.current = defaultPos()
    }
    resize()
    window.addEventListener('resize', resize)

    const onScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight
      scrollRef.current = maxScroll > 0 ? window.scrollY / maxScroll : 0
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    const onMouseLeave = () => { mouseRef.current = defaultPos() }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)

    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0]
      mouseRef.current = { x: t.clientX, y: t.clientY }
    }
    const onTouchEnd = () => { mouseRef.current = defaultPos() }

    const SPOKE_COUNT = 12
    const RING_RADII = [0.18, 0.28, 0.38, 0.46]

    const draw = () => {
      const W = canvas.width
      const H = canvas.height
      const cx = W / 2
      const cy = H / 2
      const base = Math.min(W, H) * 0.5

      const targetRotation = scrollRef.current * Math.PI * 4
      rotationRef.current += (targetRotation - rotationRef.current) * 0.04

      ctx.clearRect(0, 0, W, H)

      const mouse = mouseRef.current

      const isMobile = W < 768
      const glowAt = (ax: number, ay: number, bx: number, by: number) => {
        if (isMobile) {
          const midX = (ax + bx) / 2
          const midY = (ay + by) / 2
          const dist = Math.sqrt((midX - cx) ** 2 + (midY - cy) ** 2)
          return Math.max(0.06, 1 - dist / (base * 0.55))
        }
        const midX = (ax + bx) / 2
        const midY = (ay + by) / 2
        const d = Math.sqrt((mouse.x - midX) ** 2 + (mouse.y - midY) ** 2)
        return Math.max(0, 1 - d / 160)
      }

      // Build spoke angles
      const spokeAngles = Array.from({ length: SPOKE_COUNT }, (_, i) =>
        (i / SPOKE_COUNT) * Math.PI * 2 + rotationRef.current
      )

      // Draw radial spokes from center to outermost ring
      const outerR = base * RING_RADII[RING_RADII.length - 1]
      spokeAngles.forEach((angle) => {
        const ex = cx + Math.cos(angle) * outerR
        const ey = cy + Math.sin(angle) * outerR
        const glow = glowAt(cx, cy, ex, ey)
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(ex, ey)
        ctx.strokeStyle = `rgba(252, 165, 165, ${0.07 + glow * 0.35})`
        ctx.lineWidth = 0.5 + glow
        ctx.stroke()
      })

      // Draw concentric rings and cross-web threads
      RING_RADII.forEach((rFrac) => {
        const r = base * rFrac

        // Ring nodes at this level
        const ringNodes = spokeAngles.map((angle) => ({
          x: cx + Math.cos(angle) * r,
          y: cy + Math.sin(angle) * r,
        }))

        // Connect adjacent nodes (the ring arc as straight segments)
        for (let i = 0; i < SPOKE_COUNT; i++) {
          const a = ringNodes[i]
          const b = ringNodes[(i + 1) % SPOKE_COUNT]
          const glow = glowAt(a.x, a.y, b.x, b.y)
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = `rgba(252, 165, 165, ${0.1 + glow * 0.45})`
          ctx.lineWidth = 0.5 + glow * 1.2
          ctx.stroke()
        }

        // Skip-one cross threads (every other node) for web density
        for (let i = 0; i < SPOKE_COUNT; i++) {
          const a = ringNodes[i]
          const b = ringNodes[(i + 2) % SPOKE_COUNT]
          const glow = glowAt(a.x, a.y, b.x, b.y)
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = `rgba(252, 165, 165, ${0.04 + glow * 0.25})`
          ctx.lineWidth = 0.4 + glow * 0.8
          ctx.stroke()
        }

        // Draw nodes
        ringNodes.forEach((node) => {
          const d = Math.sqrt((mouse.x - node.x) ** 2 + (mouse.y - node.y) ** 2)
          const glow = isMobile
            ? Math.max(0.06, 1 - Math.sqrt((node.x - cx) ** 2 + (node.y - cy) ** 2) / (base * 0.55))
            : Math.max(0, 1 - d / 100)
          if (glow > 0.05) {
            ctx.beginPath()
            ctx.arc(node.x, node.y, 8 + glow * 6, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(248, 113, 113, ${glow * 0.2})`
            ctx.fill()
          }
          ctx.beginPath()
          ctx.arc(node.x, node.y, 1.5 + glow * 2.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${0.2 + glow * 0.8})`
          ctx.fill()
        })
      })

      // Center dot
      ctx.beginPath()
      ctx.arc(cx, cy, 2, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(252, 165, 165, 0.3)'
      ctx.fill()

      frameRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.65 }} />
}

// Particle Background
// UI Components
const NavBar = ({ menuOpen, setMenuOpen, isMobile }: any) => (
  <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 left-0 right-0 z-50 glass-nav"
  >
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <div className="text-xl font-bold tracking-tighter"><span className="text-white">RISE</span><span className="text-red-500 font-bold">1</span></div>
      
      {!isMobile && (
        <>
          <div className="flex gap-6 text-sm text-gray-300">
            {sections.slice(0, 5).map((s) => (
              <span
                key={s}
                className="hover:text-white cursor-pointer transition-colors"
                onClick={() => document.getElementById(s.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
              >
                {s}
              </span>
            ))}
          </div>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
            Get Started <ArrowUpRight size={14} />
          </button>
        </>
      )}

      {isMobile && (
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}
    </div>

    {isMobile && menuOpen && (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 px-4 py-4"
      >
        {sections.slice(0, 5).map((s) => (
          <div
            key={s}
            className="py-2 cursor-pointer"
            onClick={() => {
              document.getElementById(s.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
              setMenuOpen(false)
            }}
          >{s}</div>
        ))}
        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-white text-black py-3 rounded-full font-semibold mt-2">Get Started</button>
      </motion.div>
    )}
  </motion.nav>
)

const ProgressDots = ({ progress }: { progress: any }) => {
  const [active, setActive] = useState(0)
  
  useEffect(() => {
    const unsub = progress.on("change", (v: number) => setActive(Math.round(v * 8)))
    return () => unsub()
  }, [progress])

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === active ? 'bg-white scale-125' : 'bg-white/30'}`} />
      ))}
    </div>
  )
}

const ScrollHint = () => (
  <motion.div 
    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:flex flex-col items-center gap-1"
    animate={{ y: [0, 6, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
  >
    <span className="text-gray-400 text-xs">Scroll</span>
    <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1">
      <motion.div className="w-1 h-1.5 bg-white rounded-full" animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
    </div>
  </motion.div>
)

export default App
