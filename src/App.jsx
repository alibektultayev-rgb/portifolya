import { useState, useEffect } from 'react'
import profileImg from './assets/profile.png'
import {
  Sun,
  Moon,
  Menu,
  X,
  Send,
  Mail,
  Phone,
  MapPin,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight,
  ArrowUpRight,
  User,
  Sparkles,
  CheckCircle2,
  Film,
  Bot,
  Terminal,
  Layers,
  Copy,
  Check,
  Flame,
  ArrowRight,
  Play,
  Star,
  Zap,
  Monitor,
  ShieldCheck,
  MessageSquare
} from 'lucide-react'

// Ijtimoiy tarmoqlar SVG ikonalar
const GithubIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
)

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
)

const TelegramIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m21.5 2-19 8.5 7 3 2 7 3.5-4 4.5 4.5z"></path>
    <path d="m9.5 13.5 8.5-7.5"></path>
  </svg>
)

// Aylanib turuvchi zamonaviy Typewriter komponenti
const ROTATING_ROLES = [
  "Frontend & Telegram Bot Dasturchi",
  "Full Stack Developer",
  "Frontend Dasturchi",
  "Telegram Bot Dasturchi"
]

function TypewriterRoles() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState(ROTATING_ROLES[0])
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const fullText = ROTATING_ROLES[roleIndex]
    const speed = isDeleting ? 28 : 60

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2200)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(fullText.slice(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, roleIndex])

  return (
    <div className="inline-flex items-center">
      <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent font-extrabold tracking-tight">
        {currentText}
      </span>
      <span className="inline-block w-1 sm:w-1.5 h-6 sm:h-8 ml-1.5 bg-indigo-400 shadow-[0_0_12px_#6366f1] animate-pulse rounded-full"></span>
    </div>
  )
}

// ASOSIY MA'LUMOTLAR
const USER_DATA = {
  personal: {
    name: "Alibek Tultayev",
    tagline: "Zamonaviy kino platformalari, interaktiv multimedia veb-saytlar va avtomatlashtirilgan aqlli Telegram botlar yaratuvchi professional dasturchi.",
    location: "Sirdaryo viloyati, O'zbekiston",
    email: "alibektultayev@gmail.com",
    phone: "+998 99 280 00 36",
    telegram: "https://t.me/alibektultayev",
    telegramUsername: "@alibektultayev",
    github: "https://github.com/alibektultayev-rgb",
    instagram: "https://instagram.com/alibektultayev",
    avatarUrl: profileImg,
  },
  stats: [
    { label: "Frontend & Botlar", value: "100%", sub: "Yuqori daraja", icon: Zap },
    { label: "Loyihalar Soni", value: "4+", sub: "Faol va sifatli", icon: Briefcase },
    { label: "Asosiy Texnologiyalar", value: "8+", sub: "React, Python, C++", icon: Code2 },
    { label: "Muloqot Tezligi", value: "24/7", sub: "Doimiy onlayn", icon: MessageSquare },
  ],
  skills: [
    { name: "React.js & Vite", level: 95, category: "Frontend", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
    { name: "Tailwind CSS & UI/UX", level: 98, category: "Frontend", icon: "🎨", color: "from-sky-400 to-indigo-500" },
    { name: "JavaScript (ES6+) & Web APIs", level: 92, category: "Frontend", icon: "⚡", color: "from-amber-400 to-orange-500" },
    { name: "HTML5 & Zamonaviy CSS3", level: 99, category: "Frontend", icon: "🌐", color: "from-orange-500 to-rose-500" },
    { name: "Telegram Bot API (Python / Aiogram)", level: 90, category: "Bot & Backend", icon: "🤖", color: "from-emerald-400 to-teal-500" },
    { name: "Python (Skriptlar & Avtomatika)", level: 80, category: "Bot & Backend", icon: "🐍", color: "from-blue-500 to-indigo-600" },
    { name: "REST API & Asinxron So'rovlar", level: 88, category: "Bot & Backend", icon: "🔄", color: "from-violet-500 to-purple-600" },
    { name: "C++ (Algoritmlar & Mantiq)", level: 85, category: "Asoslar", icon: "💻", color: "from-pink-500 to-rose-600" },
    { name: "Git & GitHub Versiya Nazorati", level: 90, category: "Asoslar", icon: "🐙", color: "from-fuchsia-500 to-indigo-500" },
  ],
  projects: [
    {
      id: "kino-sayt",
      title: "Kino Sayt — Onlayn Film & Seriallar Platformasi",
      category: "kino",
      featured: true,
      badge: "Flagship / Asosiy Loyiha",
      description: "Zamonaviy kino qidiruv tizimi, film va seriallar katalogi, janrlar bo'yicha saralash, HD treylerlar va to'liq moslashuvchan kino ko'rish interfeysiga ega zamonaviy kino portali.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "REST API", "Vite", "Lucide Icons"],
      github: "https://github.com/alibektultayev-rgb/kino-sayt",
      demo: "https://github.com/alibektultayev-rgb/kino-sayt",
      gitClone: "git@github.com:alibektultayev-rgb/kino-sayt.git",
      status: "Yangi loyiha",
      icon: Film,
      accentGradient: "from-rose-500 via-purple-600 to-indigo-600"
    },
    {
      id: "portfolio",
      title: "Zamonaviy Shaxsiy Portfolio Platformasi",
      category: "frontend",
      featured: false,
      badge: "Portfolio",
      description: "React va Tailwind CSS asosida yaratilgan, Dark/Light rejim, zamonaviy typing animatsiyasi, loyihalar filtri va to'liq moslashuvchan dizaynga ega shaxsiy portfolio.",
      technologies: ["React", "Tailwind CSS", "Vite", "Lucide Icons"],
      github: "https://github.com/alibektultayev-rgb/portifolya",
      demo: "https://github.com/alibektultayev-rgb/portifolya",
      gitClone: "git@github.com:alibektultayev-rgb/portifolya.git",
      status: "Tugallangan",
      icon: Code2,
      accentGradient: "from-indigo-500 to-cyan-500"
    },
    {
      id: "telegram-bot",
      title: "Avtomatlashtirilgan Aqlli Telegram Bot",
      category: "bot",
      featured: false,
      badge: "Telegram Bot",
      description: "Foydalanuvchilar bilan 24/7 muloqot qiluvchi, buyurtmalarni qabul qiluvchi, inline interaktiv tugmalar va xabarnomalar tizimiga ega ko'p funksiyali Telegram bot.",
      technologies: ["Python", "Telegram Bot API", "Aiogram", "SQLite"],
      github: "https://github.com/alibektultayev-rgb",
      demo: "https://t.me/alibektultayev",
      gitClone: "https://github.com/alibektultayev-rgb",
      status: "Faol",
      icon: Bot,
      accentGradient: "from-emerald-500 to-teal-500"
    },
    {
      id: "cpp-algorithms",
      title: "C++ Algoritmik Tizimlar & Masalalar",
      category: "cpp",
      featured: false,
      badge: "Algoritmlar",
      description: "Dasturlash asoslari va chuqur algoritmik mantiq: qidiruv, saralash, ma'lumotlar tuzilmalari va murakkab hisoblash algoritmlari to'plami.",
      technologies: ["C++", "Algoritmlar", "Data Structures", "OOP"],
      github: "https://github.com/alibektultayev-rgb",
      demo: "https://github.com/alibektultayev-rgb",
      gitClone: "https://github.com/alibektultayev-rgb",
      status: "Faol",
      icon: Terminal,
      accentGradient: "from-amber-500 to-orange-500"
    }
  ],
  timeline: [
    {
      title: "Frontend Dasturchi & Dasturlash Asoslari",
      organization: "IT Live o'quv markazi",
      period: "2026 - Hozirgacha",
      description: "1-bosqichdan boshlab IT Live da C++ tili, algoritmik mantiq va dasturlash asoslarini o'rgandim. Hozirda Frontend texnologiyalarini (HTML, CSS, JavaScript, React, Tailwind) mukammal o'zlashtirgan holda Telegram botlar va kino saytlari yaratmoqdaman."
    }
  ],
  certificates: [
    {
      title: "Frontend Dasturlash Kursi",
      issuer: "IT Live o'quv markazi",
      year: "2026",
      badge: "Frontend & Web"
    }
  ]
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [copiedId, setCopiedId] = useState(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  // Dark/light mode boshqaruvi
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2500)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 4000)
  }

  const filteredProjects = USER_DATA.projects.filter(p => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'kino') return p.category === 'kino' || p.category === 'frontend'
    return p.category === activeFilter
  })

  const navLinks = [
    { name: "Bosh sahifa", href: "#home" },
    { name: "Loyiha (Kino)", href: "#featured-kino" },
    { name: "Loyihalarim", href: "#projects" },
    { name: "Men haqimda", href: "#about" },
    { name: "Ko'nikmalar", href: "#skills" },
    { name: "Bog'lanish", href: "#contact" },
  ]

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
      
      {/* 1. FUTURISTIC BACKGROUND LIGHTING */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle grid mesh */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:36px_36px]"></div>
        
        {/* Glowing Aurora Lights */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-indigo-600/25 via-purple-600/20 to-pink-600/15 rounded-full blur-[140px] animate-pulse-glow"></div>
        <div className="absolute top-[40%] -left-32 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[150px] animate-pulse-glow"></div>
        <div className="absolute top-[70%] -right-32 w-[550px] h-[550px] bg-violet-600/15 rounded-full blur-[160px] animate-pulse-glow"></div>
      </div>

      {/* 2. FLOATING GLASS NAVBAR */}
      <header className="sticky top-4 z-50 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="glass-panel rounded-full px-4 sm:px-6 py-3 flex items-center justify-between shadow-[0_10px_35px_-5px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-2xl">
          
          {/* Logo & Status */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(99,102,241,0.5)] group-hover:scale-105 group-hover:rotate-3 transition-transform">
              A
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-extrabold text-sm tracking-tight text-white flex items-center gap-1.5">
                {USER_DATA.personal.name}
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
              </span>
              <span className="text-[10px] text-indigo-400 font-semibold tracking-wider uppercase">
                Frontend & Bot Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Telegram & Theme Toggle */}
          <div className="flex items-center gap-2.5">
            <a
              href={USER_DATA.personal.telegram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_25px_rgba(14,165,233,0.6)] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <TelegramIcon size={15} />
              <span className="hidden xs:inline">Telegramda yozish</span>
            </a>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-white/10"
              title={darkMode ? "Yorug' rejim" : "Tungi rejim"}
            >
              {darkMode ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-indigo-400" />}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-slate-800/80 text-slate-300"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 glass-panel rounded-3xl p-4 space-y-1 border border-white/10 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/10 hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-lg"
              >
                <span>Bog'lanish</span>
                <ChevronRight size={15} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (HIGH IMPACT) */}
      <section id="home" className="relative pt-14 pb-20 sm:pt-24 sm:pb-32 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading & Typewriter */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              
              {/* Neon Radar Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
                </span>
                <span>Yangi loyihalar & jamoalar uchun ochiqman</span>
              </div>

              {/* Main Name */}
              <div className="space-y-1">
                <p className="text-sm sm:text-base font-semibold text-slate-400 tracking-wide uppercase">
                  Assalomu alaykum, men
                </p>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-white">
                  <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                    {USER_DATA.personal.name}
                  </span>
                </h1>
              </div>

              {/* ROTATING TYPEWRITER BANNER (THE MAIN REQUIREMENT) */}
              <div className="p-3.5 sm:p-4 rounded-2xl glass-panel border border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.15)] flex items-center justify-center lg:justify-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono font-bold text-sm shrink-0 border border-indigo-500/30">
                  &gt;_
                </div>
                <div className="text-lg sm:text-2xl font-bold">
                  <TypewriterRoles />
                </div>
              </div>

              {/* Tagline */}
              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {USER_DATA.personal.tagline}
              </p>

              {/* Interactive Quick Tech Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                {[
                  { label: "React 19", icon: "⚛️" },
                  { label: "Kino Platformalari", icon: "🎬" },
                  { label: "Telegram Bot API", icon: "🤖" },
                  { label: "Tailwind CSS", icon: "🎨" },
                  { label: "Python", icon: "🐍" },
                  { label: "C++", icon: "⚡" },
                ].map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-medium bg-slate-900/80 border border-white/10 text-slate-300 hover:border-indigo-500/50 hover:text-white transition-colors"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                ))}
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
                <a
                  href="#featured-kino"
                  className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:from-indigo-400 hover:to-pink-400 text-white font-bold text-sm shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] hover:-translate-y-0.5 transition-all flex items-center gap-2.5 cursor-pointer"
                >
                  <Film size={18} />
                  <span>Kino Saytini ko'rish</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href={USER_DATA.personal.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-2xl glass-panel border border-sky-500/40 hover:border-sky-400 text-sky-300 hover:text-white font-bold text-sm shadow-[0_0_20px_rgba(14,165,233,0.2)] hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <TelegramIcon size={18} />
                  <span>Telegramda yozish</span>
                </a>

                <a
                  href={USER_DATA.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-2xl glass-panel border border-white/10 hover:border-white/30 text-slate-300 hover:text-white transition-all shadow-sm hover:scale-105"
                  title="GitHub Repozitoriyalar"
                >
                  <GithubIcon size={19} />
                </a>

                <a
                  href={USER_DATA.personal.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-2xl glass-panel border border-white/10 hover:border-pink-500/40 text-slate-300 hover:text-pink-400 transition-all shadow-sm hover:scale-105"
                  title="Instagram profil"
                >
                  <InstagramIcon size={19} />
                </a>
              </div>

            </div>

            {/* Right Column: High-Tech Avatar Showcase */}
            <div className="lg:col-span-5 flex justify-center relative">
              
              {/* Spinning gradient ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-[3rem] blur-2xl opacity-40 animate-pulse-glow"></div>

              {/* Avatar Box */}
              <div className="relative w-72 sm:w-88 h-[420px] sm:h-[480px] rounded-[2.5rem] bg-gradient-to-b from-slate-900/90 to-slate-950 p-3 border border-white/15 shadow-2xl backdrop-blur-2xl flex flex-col items-center justify-center overflow-hidden group">
                
                {/* Profile Photo */}
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative border border-white/10">
                  <img
                    src={USER_DATA.personal.avatarUrl}
                    alt={USER_DATA.personal.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70"></div>
                </div>

                {/* Floating Widget 1: Top-Left (Kino Sayt) */}
                <div className="absolute top-5 -left-4 sm:-left-6 glass-panel border border-rose-500/30 px-3.5 py-2 rounded-2xl flex items-center gap-2.5 shadow-2xl animate-float">
                  <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold">
                    <Film size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-rose-300">Yangi Loyiha</div>
                    <div className="text-xs font-bold text-white">Kino Sayt Platformasi</div>
                  </div>
                </div>

                {/* Floating Widget 2: Bottom-Right (Telegram Bot) */}
                <div className="absolute bottom-6 -right-4 sm:-right-6 glass-panel border border-emerald-500/30 px-3.5 py-2 rounded-2xl flex items-center gap-2.5 shadow-2xl animate-float-reverse">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    <Bot size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-emerald-300">Avtomatlashtirish</div>
                    <div className="text-xs font-bold text-white">Telegram Botlar</div>
                  </div>
                </div>

                {/* Bottom Center Status Pill */}
                <div className="absolute bottom-3 glass-panel border border-white/15 px-4 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold text-white shadow-xl">
                  <Star size={13} className="text-amber-400 fill-amber-400 animate-spin-slow" />
                  <span>100% Sifatli Kod & Natija</span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. STATISTIKA RAQAMLARI */}
      <section className="py-6 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {USER_DATA.stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="glass-panel p-5 sm:p-6 rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300 shadow-lg group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform origin-left">
                      {stat.value}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                      <Icon size={17} />
                    </div>
                  </div>
                  <div className="text-sm font-bold text-white">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {stat.sub}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. BLOCKBUSTER SHOWCASE: "KINO SAYT" (THE SPECIAL PROJECT USER ASKED FOR) */}
      <section id="featured-kino" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-950/50 border border-rose-500/30 mb-3 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
              <Flame size={14} className="text-rose-400 animate-pulse" />
              <span>Flagship Loyiha</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Kino Sayt Platformasi
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-300 mt-4 text-sm sm:text-base">
              Har qanday qurilmaga moslashuvchan, yuqori tezlikda ishlovchi zamonaviy kino va seriallar portali
            </p>
          </div>

          {/* Cinematic Browser Mockup Card */}
          <div className="rounded-3xl border border-rose-500/40 bg-gradient-to-b from-slate-900/90 via-[#0a0f1d] to-[#040711] shadow-[0_0_50px_-10px_rgba(244,63,94,0.2)] overflow-hidden">
            
            {/* Browser Top Window Bar */}
            <div className="px-5 py-3.5 bg-slate-950 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <span className="ml-3 text-xs font-mono text-slate-400 hidden sm:inline">kino-sayt (v1.0)</span>
              </div>
              <div className="px-4 py-1 rounded-xl bg-slate-900 text-[11px] font-mono text-slate-400 border border-white/5 flex items-center gap-2">
                <span className="text-emerald-400">https://</span>github.com/alibektultayev-rgb/kino-sayt
              </div>
              <div className="flex items-center gap-2 text-xs text-rose-400 font-bold">
                <Sparkles size={14} />
                <span>HD CINEMA</span>
              </div>
            </div>

            {/* Inner Content Grid */}
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details & Clone Command */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-xl text-xs font-extrabold bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-md">
                    🔥 Eng So'nggi Loyiha
                  </span>
                  <span className="px-3 py-1 rounded-xl text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    React & REST API
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  Kino Sayti — Onlayn Filmlar, Seriallar va Treylerlar Portali
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Foydalanuvchilarga eng so'nggi premyeralar, reytingi baland filmlar va seriallarni qulay qidirish, janrlar bo'yicha saralash hamda HD sifatda treylerlarni ko'rish imkonini beruvchi zamonaviy multimedia platformasi.
                </p>

                {/* Features Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {[
                    "Kino va seriallar keng katalogi",
                    "Tezkor qidiruv va janrlar filtri",
                    "HD treylerlar va to'liq ma'lumotlar",
                    "100% Mobile & Desktop Responsive",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                      <CheckCircle2 size={16} className="text-rose-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Ishlatilgan Texnologiyalar:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["React.js", "JavaScript ES6+", "Tailwind CSS", "REST Movie API", "Vite"].map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-xl text-xs font-bold bg-slate-800 text-slate-200 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Git Clone Box */}
                <div className="p-3.5 rounded-2xl bg-black/60 border border-white/15 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 truncate">
                    <Terminal size={15} className="text-rose-400 shrink-0" />
                    <code className="text-rose-300 font-mono truncate">
                      git clone git@github.com:alibektultayev-rgb/kino-sayt.git
                    </code>
                  </div>
                  <button
                    onClick={() => copyToClipboard("git clone git@github.com:alibektultayev-rgb/kino-sayt.git", "kino-clone")}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-rose-600 text-white transition-colors shrink-0 flex items-center gap-1.5 font-semibold text-xs cursor-pointer"
                  >
                    {copiedId === "kino-clone" ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span>Nusxalandi!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Nusxalash</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://github.com/alibektultayev-rgb/kino-sayt"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-400 hover:to-purple-500 text-white font-bold text-sm shadow-[0_0_20px_rgba(244,63,94,0.4)] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <GithubIcon size={17} />
                    <span>GitHub Repozitoriy</span>
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href="https://github.com/alibektultayev-rgb/kino-sayt"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-2xl glass-panel border border-white/15 hover:border-white/30 text-white font-bold text-sm flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Play size={16} className="text-rose-400 fill-rose-400" />
                    <span>Jonli Demo</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Cinema Card Mockup */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm rounded-3xl bg-gradient-to-b from-slate-900 to-black p-5 border border-white/10 shadow-2xl space-y-4">
                  
                  {/* Simulated Movie Hero Banner */}
                  <div className="h-48 rounded-2xl bg-gradient-to-br from-rose-900/50 via-purple-900/40 to-slate-900 p-4 flex flex-col justify-between relative overflow-hidden border border-rose-500/20">
                    <div className="flex justify-between items-start">
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-500 text-white font-black text-[10px]">
                        PREMYERA
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-black/60 px-2 py-0.5 rounded-full">
                        ⭐ 9.8
                      </span>
                    </div>
                    <div>
                      <div className="text-xs text-rose-300 font-semibold uppercase tracking-wider">Top Kino</div>
                      <div className="text-lg font-black text-white">Avatar: Suv Yo'li & Marvel</div>
                    </div>
                  </div>

                  {/* Simulated Search & Categories */}
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-slate-400 flex items-center gap-2">
                    <span>🔍</span>
                    <span>Qidiruv: "Kino nomi, janri..."</span>
                  </div>

                  {/* Simulated Genre Chips */}
                  <div className="flex gap-1.5 flex-wrap">
                    {["🎬 Barchasi", "💥 Jangari", "🍿 Fantastika", "🎭 Drama"].map((g, idx) => (
                      <span
                        key={idx}
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-lg ${
                          idx === 0 ? "bg-rose-500 text-white" : "bg-slate-900 text-slate-400 border border-white/5"
                        }`}
                      >
                        {g}
                      </span>
                    ))}
                  </div>

                  {/* Simulated Movie Grid Items */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="p-3 rounded-xl bg-slate-950 border border-white/5 space-y-1">
                      <div className="w-full h-16 rounded-lg bg-rose-950/40 flex items-center justify-center text-rose-400">
                        <Play size={22} />
                      </div>
                      <div className="text-xs font-bold text-white truncate">Qasoskorlar: Intiho</div>
                      <div className="text-[10px] text-slate-400">Jangari • 2026</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-white/5 space-y-1">
                      <div className="w-full h-16 rounded-lg bg-purple-950/40 flex items-center justify-center text-purple-400">
                        <Play size={22} />
                      </div>
                      <div className="text-xs font-bold text-white truncate">Interstellar</div>
                      <div className="text-[10px] text-slate-400">Fantastika • 2026</div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. BARCHA LOYIHALAR (PROJECTS GRID) */}
      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/50 border border-indigo-500/30 mb-3">
              <Briefcase size={14} />
              <span>Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Barcha Loyihalarim
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-3 rounded-full"></div>
            <p className="text-slate-400 mt-4 text-sm sm:text-base">
              Har bir loyiha yuqori sifat, toza kod va aniq natija berishga mo'ljallangan
            </p>
          </div>

          {/* Interactive Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {[
              { id: 'all', label: 'Barchasi', count: USER_DATA.projects.length },
              { id: 'kino', label: 'Kino & Veb Platformalar', count: 2 },
              { id: 'bot', label: 'Telegram Botlar', count: 1 },
              { id: 'cpp', label: 'C++ & Algoritmlar', count: 1 },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] scale-105'
                    : 'glass-panel text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeFilter === tab.id ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Projects Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => {
              const Icon = project.icon
              const isKino = project.id === 'kino-sayt'

              return (
                <div
                  key={project.id}
                  className={`rounded-3xl glass-panel border overflow-hidden shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group ${
                    isKino
                      ? 'border-rose-500/40 hover:border-rose-500/80 shadow-[0_0_30px_-5px_rgba(244,63,94,0.15)]'
                      : 'border-white/10 hover:border-indigo-500/40'
                  }`}
                >
                  {/* Card Header Banner */}
                  <div className={`p-6 sm:p-7 flex flex-col justify-between border-b border-white/10 relative overflow-hidden bg-gradient-to-br ${
                    isKino
                      ? 'from-rose-950/40 via-purple-950/30 to-slate-950'
                      : 'from-indigo-950/40 via-slate-900 to-slate-950'
                  }`}>
                    <div className="flex justify-between items-start mb-4">
                      <span className={`text-xs font-black px-3 py-1 rounded-xl border ${
                        isKino
                          ? 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                          : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
                      }`}>
                        {project.badge}
                      </span>
                      <div className={`p-3 rounded-2xl ${
                        isKino ? 'bg-rose-500/20 text-rose-400' : 'bg-indigo-500/20 text-indigo-400'
                      } group-hover:scale-110 transition-transform`}>
                        <Icon size={24} />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-4">
                      {/* Tech Chips */}
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Texnologiyalar:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((t, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2.5 py-1 rounded-lg bg-slate-900/80 text-slate-300 border border-white/10 font-mono"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Git clone row */}
                      {project.gitClone && (
                        <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between text-xs">
                          <code className="text-slate-300 font-mono truncate mr-2 text-[11px]">
                            {project.gitClone}
                          </code>
                          <button
                            onClick={() => copyToClipboard(project.gitClone, project.id)}
                            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors shrink-0 cursor-pointer"
                            title="Nusxalash"
                          >
                            {copiedId === project.id ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                          </button>
                        </div>
                      )}

                      {/* Action Links */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-300 hover:text-white transition-colors"
                        >
                          <GithubIcon size={16} />
                          <span>Kodni ko'rish</span>
                        </a>

                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 transition-all"
                        >
                          <span>Loyihani Ko'rish</span>
                          <ArrowUpRight size={15} />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* 7. BENTO GRID: "MEN HAQIMDA" (MODERN TECH BENTO STYLE) */}
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/50 border border-indigo-500/30 mb-3">
              <User size={14} />
              <span>Tanishuv</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Men Haqimda & Yondashuv
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-400 mt-4 text-sm sm:text-base">
              Har bir loyiha va vazifaga chuqur muhandislik yondashuvi
            </p>
          </div>

          {/* Bento Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Bento 1: Developer Code Snippet Card (Wide 8-col) */}
            <div className="md:col-span-8 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  <span className="ml-2 text-xs font-mono text-slate-400">developer.ts</span>
                </div>
                <span className="text-xs font-bold text-indigo-400">Alibek Tultayev</span>
              </div>

              <div className="font-mono text-xs sm:text-sm text-slate-300 space-y-1.5 leading-relaxed overflow-x-auto">
                <div><span className="text-pink-400">const</span> <span className="text-blue-400">dasturchi</span> = &#123;</div>
                <div className="pl-4"><span className="text-slate-400">ism:</span> <span className="text-amber-300">"Alibek Tultayev"</span>,</div>
                <div className="pl-4"><span className="text-slate-400">mutaxassislik:</span> <span className="text-amber-300">"Frontend & Telegram Bot Dasturchi"</span>,</div>
                <div className="pl-4"><span className="text-slate-400">tajribaBosqichi:</span> <span className="text-amber-300">"IT Live o'quv markazi va amaliy loyihalar"</span>,</div>
                <div className="pl-4"><span className="text-slate-400">yondashuv:</span> <span className="text-emerald-400">["Toza kod", "Yuqori tezlik", "Zamonaviy UI/UX", "24/7 Botlar"]</span>,</div>
                <div className="pl-4"><span className="text-slate-400">maqsad:</span> <span className="text-amber-300">"Full Stack va yuqori darajali xavfsiz tizimlar mutaxassisi"</span></div>
                <div>&#125;;</div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2 border-t border-white/10">
                Salom! Men Alibek Tultayev. 2026-yildan beri dasturlash sohasini qunt bilan o'rganib kelmoqdaman. Dastlab C++ tili va algoritmik poydevordan boshlab, hozirda zamonaviy React, kino platformalari va avtomatlashtirilgan Telegram botlar yaratishda faoliyat yuritmoqdaman.
              </p>
            </div>

            {/* Bento 2: Fast Stats (4-col) */}
            <div className="md:col-span-4 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                  <ShieldCheck size={22} />
                </div>
                <h4 className="text-lg font-bold text-white">Ishonchli Hamkor</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Har bir loyiha muddatida va mijoz talabiga mos yuqori standartlarda amalga oshiriladi.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-semibold">Frontend Sifati</span>
                  <span className="text-xs font-black text-emerald-400">100%</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-semibold">Botlar Barqarorligi</span>
                  <span className="text-xs font-black text-indigo-400">24/7 Online</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-semibold">Kod Xavfsizligi</span>
                  <span className="text-xs font-black text-purple-400">Toza & Optimallashtirilgan</span>
                </div>
              </div>
            </div>

            {/* Bento 3: Kuchli Tomonlarim (Wide 12-col) */}
            <div className="md:col-span-12 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-5">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles size={18} className="text-indigo-400" />
                <span>Nima Uchun Aynan Meni Tanlashadi?</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: "Kino & Multimedia Saytlar",
                    desc: "Filmlar, seriallar va audio-vizual veb-portallarni noldan yaratish tajribasi",
                    icon: Film,
                    color: "text-rose-400"
                  },
                  {
                    title: "Telegram Botlar & Aiogram",
                    desc: "Buyurtmalar qabul qiluvchi, to'lov tizimlariga ega avtomatlashtirilgan botlar",
                    icon: Bot,
                    color: "text-emerald-400"
                  },
                  {
                    title: "C++ & Algoritmlar",
                    desc: "Dasturlashning fundamental mantiqiy asoslari va toza arxitektura bilimlari",
                    icon: Terminal,
                    color: "text-amber-400"
                  },
                  {
                    title: "Yuqori Tezlik & Optimallashtirish",
                    desc: "Vite va React yordamida tez yuklanuvchi, engil va sifatli veb-sahifalar",
                    icon: Zap,
                    color: "text-cyan-400"
                  },
                  {
                    title: "Moslashuvchan Dizayn (Mobile/Desktop)",
                    desc: "Smartfon, planshet va kompyuter ekranlarida birdek chiroyli ko'rinish",
                    icon: Monitor,
                    color: "text-purple-400"
                  },
                  {
                    title: "Doimiy Aloqa & Qo'llab-quvvatlash",
                    desc: "Loyiha topshirilgandan keyin ham ishonchli muloqot va yangilashlar",
                    icon: MessageSquare,
                    color: "text-sky-400"
                  }
                ].map((item, idx) => {
                  const ItemIcon = item.icon
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-indigo-500/30 transition-all space-y-2"
                    >
                      <div className="flex items-center gap-2.5">
                        <ItemIcon size={18} className={item.color} />
                        <h5 className="font-bold text-sm text-white">{item.title}</h5>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. KO'NIKMALAR (SKILLS MATRIX) */}
      <section id="skills" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/50 border border-indigo-500/30 mb-3">
              <Layers size={14} />
              <span>Imkoniyatlar</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Texnologik Ko'nikmalarim
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-400 mt-4 text-sm sm:text-base">
              Veb-ilovalarni yaratish va avtomatlashtirishda qo'llanadigan asosiy stek
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {USER_DATA.skills.map((skill, index) => (
              <div
                key={index}
                className="glass-panel p-5 rounded-3xl border border-white/10 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 shadow-md group"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-indigo-400 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[11px] font-semibold text-slate-400">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-black px-2.5 py-1 rounded-xl bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {skill.level}%
                  </span>
                </div>
                
                {/* Progress bar */}
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-white/5">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. TAJRIBA VA MALAKA (TIMELINE & AWARDS) */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Timeline (7-col) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
                <GraduationCap size={16} />
                <span>Ta'lim & Tajriba</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Dasturlash Yo'lim
              </h3>

              <div className="space-y-6 pt-2">
                {USER_DATA.timeline.map((item, index) => (
                  <div key={index} className="glass-panel p-6 rounded-3xl border border-white/10 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-black px-3 py-1 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {item.period}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">{item.organization}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates (5-col) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-pink-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Award size={16} />
                <span>Sertifikatlar</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Yutuq va Malakalar
              </h3>

              <div className="space-y-4 pt-2">
                {USER_DATA.certificates.map((cert, idx) => (
                  <div key={idx} className="glass-panel p-5 rounded-3xl border border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 text-pink-400 flex items-center justify-center font-bold shrink-0 border border-pink-500/30">
                      <Award size={24} />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-indigo-400">{cert.year} • {cert.badge}</div>
                      <h5 className="font-bold text-white text-base">{cert.title}</h5>
                      <p className="text-xs text-slate-400 mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. ALOQA (CONTACT SECTION) */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/50 border border-indigo-500/30 mb-3">
              <Send size={14} />
              <span>Aloqa</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Men Bilan Bog'laning
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-400 mt-4 text-sm sm:text-base">
              Yangi loyihalar, kino platformasi yoki Telegram botlar buyurtmasi bo'yicha bog'lanishingiz mumkin
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Contact Cards (5-col) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Special Direct Telegram Card */}
              <a
                href={USER_DATA.personal.telegram}
                target="_blank"
                rel="noreferrer"
                className="block p-6 rounded-3xl bg-gradient-to-br from-sky-600/30 via-blue-900/40 to-slate-900 border border-sky-500/40 shadow-[0_0_30px_rgba(14,165,233,0.2)] hover:border-sky-400 hover:scale-[1.02] transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 rounded-2xl bg-sky-500 text-white shadow-lg shadow-sky-500/40">
                    <TelegramIcon size={24} />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
                    Eng Tezkor Aloqa ⚡
                  </span>
                </div>
                <h4 className="text-lg font-black text-white group-hover:text-sky-300 transition-colors">
                  Telegram orqali yozish
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Har qanday savol yoki loyiha bo'yicha to'g'ridan-to'g'ri bog'laning: <strong className="text-white">@alibektultayev</strong>
                </p>
              </a>

              {/* Phone Card */}
              <a
                href="tel:+998992800036"
                className="glass-panel p-5 rounded-3xl border border-white/10 flex items-center gap-4 hover:border-emerald-500/40 transition-all group"
              >
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Telefon raqam</div>
                  <div className="text-sm font-bold text-white">{USER_DATA.personal.phone}</div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${USER_DATA.personal.email}`}
                className="glass-panel p-5 rounded-3xl border border-white/10 flex items-center gap-4 hover:border-indigo-500/40 transition-all group"
              >
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Elektron pochta</div>
                  <div className="text-sm font-bold text-white">{USER_DATA.personal.email}</div>
                </div>
              </a>

              {/* Location */}
              <div className="glass-panel p-5 rounded-3xl border border-white/10 flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-violet-500/10 text-violet-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Manzil</div>
                  <div className="text-sm font-bold text-white">{USER_DATA.personal.location}</div>
                </div>
              </div>

            </div>

            {/* Right Contact Form (7-col) */}
            <div className="lg:col-span-7">
              <div className="glass-panel p-7 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-2">
                  Xabar Yuborish
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Quyidagi formani to'ldiring, xabaringizga tez orada javob beraman
                </p>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                    <CheckCircle2 size={42} className="text-emerald-400 mx-auto" />
                    <h4 className="font-bold text-lg text-white">Xabaringiz muvaffaqiyatli qabul qilindi!</h4>
                    <p className="text-xs text-slate-300">Tez orada siz bilan bog'lanaman. Rahmat!</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                          Ismingiz
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ismingiz"
                          className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                          Email manzilingiz
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="nom@example.com"
                          className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                        Mavzu
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Loyiha buyurtmasi / Hamkorlik"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                        Xabar matni
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Loyiha haqida yoki taklifingizni yozing..."
                        className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm transition-all resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:from-indigo-400 hover:to-pink-400 text-white font-bold text-sm shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send size={16} />
                      <span>Xabarni yuborish</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="py-12 border-t border-white/10 bg-slate-950/80 backdrop-blur-xl relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white font-black text-sm shadow-md">
              A
            </div>
            <div>
              © {new Date().getFullYear()} <strong className="text-white">{USER_DATA.personal.name}</strong>. Barcha huquqlar himoyalangan.
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white transition-colors">Bosh sahifa</a>
            <a href="#featured-kino" className="hover:text-white transition-colors">Kino Sayt</a>
            <a href="#projects" className="hover:text-white transition-colors">Loyihalar</a>
            <a href="#contact" className="hover:text-white transition-colors">Aloqa</a>
            <a href="#home" className="px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white transition-colors">
              Yuqoriga ↑
            </a>
          </div>
        </div>
      </footer>

      {/* 12. FLOATING TELEGRAM QUICK BUTTON */}
      <a
        href={USER_DATA.personal.telegram}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-tr from-[#229ED9] to-sky-400 text-white shadow-[0_0_25px_rgba(34,158,217,0.6)] hover:scale-110 hover:shadow-[0_0_35px_rgba(34,158,217,0.9)] transition-all flex items-center gap-2 group cursor-pointer"
        title="Telegram orqali yozish"
      >
        <TelegramIcon size={22} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold">
          Telegramda muloqot
        </span>
      </a>

    </div>
  )
}
