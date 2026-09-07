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
  ArrowRight
} from 'lucide-react'

// Ijtimoiy tarmoqlar uchun toza SVG ikonalar
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

// ROTATING TYPEWRITER EFFECT COMPONENT
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
    const typingSpeed = isDeleting ? 30 : 65

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1))
        } else {
          // Pause when full title is typed
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
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, roleIndex])

  return (
    <div className="inline-flex items-center min-h-[44px]">
      <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
        {currentText}
      </span>
      <span className="inline-block w-[3px] h-7 sm:h-9 ml-2 bg-indigo-500 dark:bg-indigo-400 animate-pulse rounded-full"></span>
    </div>
  )
}

// DATA STRUCTURE - ALIBEK TULTAYEV PORTFOLIO MA'LUMOTLARI
const USER_DATA = {
  personal: {
    name: "Alibek Tultayev",
    title: "Frontend & Telegram Bot Dasturchi | Full Stack Developer",
    tagline: "Zamonaviy kino platformalari, interaktiv veb-ilovalar hamda avtomatlashtirilgan kuchli Telegram botlarni ishlab chiquvchi dasturchi.",
    location: "Sirdaryo viloyati, O'zbekiston",
    email: "alibektultayev@gmail.com",
    phone: "+998 99 280 00 36",
    telegram: "https://t.me/alibektultayev",
    github: "https://github.com/alibektultayev-rgb",
    instagram: "https://instagram.com/alibektultayev",
    avatarUrl: profileImg,
  },
  stats: [
    { label: "Frontend & Bot Tajriba", value: "100%", sub: "Yuqori sifat" },
    { label: "Loyihalar Soni", value: "4+", sub: "Ishlab chiqilgan" },
    { label: "Asosiy Texnologiyalar", value: "8+", sub: "React, Python, C++" },
    { label: "Mijozlar Muloqoti", value: "24/7", sub: "Tezkor aloqa" },
  ],
  about: {
    bio: "Salom! Men Alibek Tultayev. Dasturlash olamiga 1-bosqichdan qat'iy intilish bilan qadam qo'yib, dastlab C++ tili va fundamental algoritmik asoslarni chuqur o'rgandim. Hozirda Frontend yo'nalishini to'liq o'zlashtirganman va zamonaviy kino saytlari, veb-platformalar hamda murakkab vazifalarni avtomatlashtiruvchi Telegram botlar yaratish bilan shug'ullanaman.",
    currentStatus: "IT Live o'quv markazida tahsil olmoqdaman, yangi Frontend loyihalari, kino platformalari va aqlli Telegram botlar ustida faol ishlamoqdaman.",
    goals: "Frontend ko'nikmalarini Full Stack darajasiga yetkazish, ilg'or backend arxitekturasi hamda kiberxavfsizlik sohasida yetuk mutaxassis bo'lib shakllanish.",
    strengths: [
      "Frontend texnologiyalari: HTML, CSS, JavaScript, React.js, Tailwind CSS bilan mukammal ishlash",
      "Kino portallari va interaktiv multimedia veb-ilovalarini ishlab chiqish",
      "Avtomatlashtirilgan, qulay va xavfsiz Telegram botlarni yaratish (Python / Telegram API)",
      "C++ tili orqali dasturlashning mantiqiy va chuqur algoritmik asoslariga ega bo'lish",
      "Toza kod arxitekturasi, chiroyli UI/UX dizayn va yuqori ishlash tezligi"
    ]
  },
  skills: [
    { name: "React.js & Vite", level: 92, category: "Frontend", icon: "⚛️" },
    { name: "Tailwind CSS & Responsive UI", level: 95, category: "Frontend", icon: "🎨" },
    { name: "JavaScript (ES6+) & TypeScript Asoslari", level: 90, category: "Frontend", icon: "⚡" },
    { name: "HTML5 & Modern CSS3", level: 98, category: "Frontend", icon: "🌐" },
    { name: "Telegram Bot Development (Python / API)", level: 88, category: "Bot & Backend", icon: "🤖" },
    { name: "Python (Asinxron Botlar & Skriptlar)", level: 75, category: "Bot & Backend", icon: "🐍" },
    { name: "REST API & Ma'lumotlar bilan ishlash", level: 85, category: "Bot & Backend", icon: "🔄" },
    { name: "C++ (Algoritmlar & Ma'lumotlar Tuzilmalari)", level: 82, category: "Asoslar & Tools", icon: "💻" },
    { name: "Git & GitHub Versiya Nazorati", level: 88, category: "Asoslar & Tools", icon: "🐙" },
  ],
  projects: [
    {
      id: 1,
      title: "Kino Sayt (Onlayn Film & Seriallar Platformasi)",
      category: "frontend",
      featured: true,
      badge: "Eng So'nggi Loyiha",
      description: "Zamonaviy kino qidiruv tizimi, film va seriallar katalogi, janrlar bo'yicha saralash, film treylerlari va tavsiflarini taqdim etuvchi yuqori sifatli kino platformasi.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "REST API", "Vite"],
      github: "https://github.com/alibektultayev-rgb/kino-sayt",
      demo: "https://github.com/alibektultayev-rgb/kino-sayt",
      gitClone: "git@github.com:alibektultayev-rgb/kino-sayt.git",
      status: "Yangi loyiha",
      icon: Film
    },
    {
      id: 2,
      title: "Zamonaviy Shaxsiy Portfolio",
      category: "frontend",
      featured: false,
      badge: "Portfolio",
      description: "React va Tailwind CSS asosida yaratilgan, Dark/Light rejim, zamonaviy typing animatsiyasi, loyihalar filtri va to'liq moslashuvchan dizaynga ega shaxsiy portfolio.",
      technologies: ["React", "Tailwind CSS", "Vite", "Lucide Icons"],
      github: "https://github.com/alibektultayev-rgb/portifolya",
      demo: "https://github.com/alibektultayev-rgb/portifolya",
      gitClone: "git@github.com:alibektultayev-rgb/portifolya.git",
      status: "Tugallangan",
      icon: Code2
    },
    {
      id: 3,
      title: "Avtomatlashtirilgan Aqlli Telegram Bot",
      category: "bot",
      featured: false,
      badge: "Telegram Bot",
      description: "Foydalanuvchilar bilan 24/7 muloqot qiluvchi, buyurtmalarni qabul qiluvchi, inline tugmalar va xabarnomalar tizimiga ega ko'p funksiyali Telegram bot.",
      technologies: ["Python", "Telegram Bot API", "Aiogram", "SQLite"],
      github: "https://github.com/alibektultayev-rgb",
      demo: "https://t.me/alibektultayev",
      status: "Faol",
      icon: Bot
    },
    {
      id: 4,
      title: "C++ Algoritmik Tizimlar & Masalalar",
      category: "cpp",
      featured: false,
      badge: "Algoritmlar",
      description: "Dasturlash asoslari va chuqur algoritmik mantiq: qidiruv, saralash, ma'lumotlar tuzilmalari va mantiqiy hisoblash algoritmlari to'plami.",
      technologies: ["C++", "Algoritmlar", "Data Structures", "OOP"],
      github: "https://github.com/alibektultayev-rgb",
      demo: "https://github.com/alibektultayev-rgb",
      status: "Faol",
      icon: Terminal
    }
  ],
  timeline: [
    {
      type: "education",
      title: "Frontend Dasturchi & Dasturlash Asoslari",
      organization: "IT Live o'quv markazi",
      period: "2026 - Hozirgacha",
      description: "1-bosqichdan boshlab IT Live da C++ tili, algoritmik mantiq va dasturlash asoslarini puxta o'rgandim. Hozirda Frontend texnologiyalarini (HTML, CSS, JavaScript, React, Tailwind) to'liq o'rganib chiqdim va Telegram botlar yaratishda faol qo'llayapman."
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
  const [activeProjectFilter, setActiveProjectFilter] = useState('all')
  const [copiedClone, setCopiedClone] = useState(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  // Dark/light mode sinflarini root elementga ulash
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 4000)
  }

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopiedClone(id)
    setTimeout(() => setCopiedClone(null), 2500)
  }

  const navLinks = [
    { name: "Bosh sahifa", href: "#home" },
    { name: "Men haqimda", href: "#about" },
    { name: "Ko'nikmalar", href: "#skills" },
    { name: "Loyihalarim", href: "#projects" },
    { name: "Tajriba", href: "#experience" },
    { name: "Aloqa", href: "#contact" },
  ]

  const filteredProjects = USER_DATA.projects.filter(p => {
    if (activeProjectFilter === 'all') return true
    return p.category === activeProjectFilter
  })

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#090d16] dark:text-slate-100 transition-colors duration-300 selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
      
      {/* Background Decorative Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40 dark:opacity-25 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Ambient Glowing Orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-indigo-500/15 dark:bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>
      <div className="fixed bottom-1/4 right-10 w-96 h-96 bg-violet-500/15 dark:bg-fuchsia-600/15 rounded-full blur-[130px] pointer-events-none animate-pulse-glow"></div>

      {/* 1. NAVIGATION BAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-[#090d16]/80 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-pink-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-500/25 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent group-hover:text-indigo-500 transition-colors">
                  {USER_DATA.personal.name}
                </span>
                <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase">
                  Frontend & Bot Dev
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800/80 shadow-none hover:shadow-sm transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action: Theme toggle + Contact button */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 transition-all cursor-pointer shadow-sm hover:scale-105"
                title={darkMode ? "Yorug' rejim" : "Tungi rejim"}
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={19} className="text-amber-400" /> : <Moon size={19} className="text-indigo-600" />}
              </button>

              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Bog'lanish</span>
                <ChevronRight size={16} />
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-md shadow-indigo-600/30"
              >
                <span>Bog'lanish</span>
                <ChevronRight size={18} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Chap tomondagi matn qismi */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              
              {/* Ochiqlik holati belgisi */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 text-emerald-700 dark:text-emerald-300 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Yangi loyihalar & jamoalar uchun ochiqman</span>
              </div>

              {/* Asosiy Sarlavha & Ism */}
              <div className="space-y-2">
                <p className="text-lg sm:text-xl font-semibold text-slate-600 dark:text-slate-400">
                  Assalomu alaykum, men
                </p>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                  <span className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-800 dark:from-white dark:via-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                    {USER_DATA.personal.name}
                  </span>
                </h1>
              </div>

              {/* ROTATING TITLE / TYPEWRITER EFFECT */}
              <div className="flex items-center justify-center lg:justify-start text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700 dark:text-slate-200 min-h-[48px]">
                <TypewriterRoles />
              </div>

              {/* Tavsif matni */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {USER_DATA.personal.tagline}
              </p>

              {/* Mini Texnologiya Nishonlari */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                {["React.js", "Kino Saytlar", "Telegram Bot API", "Tailwind CSS", "Python", "C++"].map((badge, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm hover:border-indigo-500/50 transition-colors"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Asosiy Tugmalar */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
                <a
                  href="#projects"
                  className="px-6 sm:px-8 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Briefcase size={19} />
                  <span>Loyihalarimni ko'rish</span>
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#contact"
                  className="px-6 sm:px-7 py-3.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 hover:border-indigo-500/60 dark:hover:border-indigo-500/60 text-slate-800 dark:text-slate-200 font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Send size={18} className="text-indigo-500" />
                  <span>Bog'lanish</span>
                </a>
              </div>

              {/* Ijtimoiy tarmoqlar */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-slate-500 dark:text-slate-400">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Tezkor aloqa:</span>
                <div className="flex gap-2">
                  <a
                    href={USER_DATA.personal.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#229ED9] hover:border-[#229ED9] dark:hover:bg-[#229ED9] dark:hover:border-[#229ED9] transition-all shadow-sm hover:scale-105"
                    title="Telegram orqali yozish"
                  >
                    <TelegramIcon size={19} />
                  </a>
                  <a
                    href={USER_DATA.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-slate-900 hover:border-slate-900 dark:hover:bg-indigo-600 dark:hover:border-indigo-600 transition-all shadow-sm hover:scale-105"
                    title="GitHub profil"
                  >
                    <GithubIcon size={19} />
                  </a>
                  <a
                    href={USER_DATA.personal.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:border-pink-500 transition-all shadow-sm hover:scale-105"
                    title="Instagram profil"
                  >
                    <InstagramIcon size={19} />
                  </a>
                </div>
              </div>
            </div>

            {/* O'ng tomondagi zamonaviy rasm kartasi va suzuvchi nishonlar */}
            <div className="lg:col-span-5 flex justify-center relative">
              
              {/* Orqa fon porlashi */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-600 via-violet-600 to-pink-500 rounded-[2.5rem] blur-2xl opacity-40 dark:opacity-50 animate-pulse-glow"></div>

              {/* Asosiy Rasm Konteyneri */}
              <div className="relative w-80 sm:w-96 h-[440px] sm:h-[490px] rounded-[2.2rem] bg-gradient-to-b from-white/90 to-slate-100/90 dark:from-slate-900/90 dark:to-[#0c121e]/95 p-3.5 border-2 border-indigo-500/20 dark:border-indigo-500/30 shadow-2xl backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden group">
                
                {USER_DATA.personal.avatarUrl ? (
                  <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative">
                    <img
                      src={USER_DATA.personal.avatarUrl}
                      alt={USER_DATA.personal.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
                  </div>
                ) : (
                  <div className="w-full h-full rounded-[1.8rem] bg-gradient-to-b from-indigo-500/10 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 text-center border border-indigo-500/20">
                    <div className="w-24 h-24 rounded-full bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 mb-4">
                      <User size={48} />
                    </div>
                    <h4 className="font-bold text-slate-100 text-lg">{USER_DATA.personal.name}</h4>
                    <p className="text-xs text-indigo-300 mt-1">Dasturchi</p>
                  </div>
                )}

                {/* Suzuvchi Kartochka 1: Top Right */}
                <div className="absolute top-6 -right-4 sm:-right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/80 shadow-2xl px-4 py-2.5 rounded-2xl flex items-center gap-3 animate-float">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                    <Film size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Yangi Loyiha</div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Kino Sayt Platformasi</div>
                  </div>
                </div>

                {/* Suzuvchi Kartochka 2: Bottom Left */}
                <div className="absolute bottom-6 -left-4 sm:-left-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/80 shadow-2xl px-4 py-2.5 rounded-2xl flex items-center gap-3 animate-float-reverse">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                    <Bot size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Avtomatlashtirish</div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Telegram Botlar</div>
                  </div>
                </div>

                {/* Suzuvchi Kartochka 3: Center Bottom Badge */}
                <div className="absolute bottom-3 bg-slate-900/85 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full flex items-center gap-2 text-xs font-semibold text-white shadow-lg">
                  <Sparkles size={14} className="text-amber-400 animate-spin" />
                  <span>Frontend & Telegram Bot</span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* STATISTIKA BLOKI */}
      <section className="py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {USER_DATA.stats.map((stat, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-3xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80 backdrop-blur-xl hover:border-indigo-500/40 transition-all duration-300 shadow-sm hover:shadow-lg group"
              >
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform origin-left">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-2">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MEN HAQIMDA (ABOUT ME) */}
      <section id="about" className="py-20 bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 mb-3">
              <User size={13} />
              <span>Tanishuv</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Men Haqimda
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-3 rounded-full"></div>
            <p className="text-slate-600 dark:text-slate-400 mt-4 text-sm sm:text-base">
              Dasturlash sohasidagi yo'nalishim, qiziqishlarim va texnologik tajribam
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Chap tomondagi Bio & Maqsadlar */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              <div className="bg-white dark:bg-slate-900/80 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                    <User size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Kasbiy Yondashuv va Dasturlash Falsafasi
                    </h3>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
                      Alibek Tultayev — Dasturchi
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                  {USER_DATA.about.bio}
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800/80">
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-white">Faoliyat sohasi:</strong> {USER_DATA.about.currentStatus}
                  </p>
                </div>
              </div>

              {/* Maqsad va Intilishlar */}
              <div className="bg-white dark:bg-slate-900/80 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-600/10 dark:bg-violet-400/10 text-violet-600 dark:text-violet-400 flex items-center justify-center font-bold">
                    <Sparkles size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Kelgusidagi Asosiy Maqsadlarim
                  </h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base pl-2">
                  {USER_DATA.about.goals}
                </p>
              </div>
            </div>

            {/* Kuchli tomonlar */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-white dark:bg-slate-900/80 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-pink-600/10 dark:bg-pink-400/10 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold">
                      <CheckCircle2 size={20} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      Kuchli Tomonlarim & Afzalliklar
                    </h4>
                  </div>

                  <ul className="space-y-4">
                    {USER_DATA.about.strengths.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        <span className="w-6 h-6 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 size={15} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-semibold">Doimiy o'rganish & yuksalish</span>
                  <a
                    href="#skills"
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <span>Ko'nikmalarni ko'rish</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. KO'NIKMALAR (SKILLS) */}
      <section id="skills" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 mb-3">
              <Layers size={13} />
              <span>Imkoniyatlar</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Professional Ko'nikmalarim
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-3 rounded-full"></div>
            <p className="text-slate-600 dark:text-slate-400 mt-4 text-sm sm:text-base">
              Veb-ishlab chiqish, kino platformalari va Telegram botlar yaratishda qo'llanadigan asosiy stek
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {USER_DATA.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900/80 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-indigo-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-200 group-hover:text-indigo-500 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[11px] font-semibold text-slate-400">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold px-2.5 py-1 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    {skill.level}%
                  </span>
                </div>
                
                {/* Progress bar */}
                <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800/90 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. LOYIHALARIM (PROJECTS) - KINO SAYT QO'SHILGAN & ZAMONAVIY DIZAYN */}
      <section id="projects" className="py-20 bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 mb-3">
              <Briefcase size={13} />
              <span>Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Mening Loyihalarim
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-3 rounded-full"></div>
            <p className="text-slate-600 dark:text-slate-400 mt-4 text-sm sm:text-base">
              Har bir loyiha qulay dizayn, toza kod va amaliy natija berishga qaratilgan
            </p>
          </div>

          {/* Filter Kategoriyalari */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: 'all', label: 'Barchasi', count: USER_DATA.projects.length },
              { id: 'frontend', label: 'Frontend & Veb (Kino)', count: USER_DATA.projects.filter(p => p.category === 'frontend').length },
              { id: 'bot', label: 'Telegram Botlar', count: USER_DATA.projects.filter(p => p.category === 'bot').length },
              { id: 'cpp', label: 'C++ & Algoritmlar', count: USER_DATA.projects.filter(p => p.category === 'cpp').length },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveProjectFilter(tab.id)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeProjectFilter === tab.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                    : 'bg-white dark:bg-slate-900/90 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-slate-800'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeProjectFilter === tab.id ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Loyihalar Karti Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredProjects.map((project) => {
              const IconComponent = project.icon || Code2
              const isKino = project.title.toLowerCase().includes('kino')

              return (
                <div
                  key={project.id}
                  className={`rounded-3xl border overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group relative ${
                    isKino
                      ? 'bg-gradient-to-b from-indigo-950/20 via-slate-900/90 to-slate-950 border-indigo-500/50 dark:border-indigo-500/40 shadow-indigo-500/10'
                      : 'bg-white dark:bg-slate-900/90 border-slate-200/80 dark:border-slate-800'
                  }`}
                >
                  {/* Agar Kino Sayt bo'lsa yuqori neon chiziq */}
                  {isKino && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 via-indigo-500 to-pink-500"></div>
                  )}

                  {/* Loyiha sarlavha qismi / Header Mockup Banner */}
                  <div className={`p-7 flex flex-col justify-between relative overflow-hidden border-b ${
                    isKino
                      ? 'bg-gradient-to-br from-indigo-600/20 via-violet-600/15 to-pink-600/15 border-indigo-500/20'
                      : 'bg-gradient-to-br from-indigo-500/10 via-slate-100 to-violet-500/5 dark:from-slate-800/40 dark:via-slate-900 dark:to-slate-800/20 border-slate-100 dark:border-slate-800'
                  }`}>
                    
                    {/* Yuqori qator: Badge & Katta Icon */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-extrabold px-3 py-1 rounded-xl border ${
                          isKino
                            ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-400 border-pink-500/30 shadow-sm'
                            : 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20'
                        }`}>
                          {project.badge || project.status}
                        </span>
                        {isKino && (
                          <span className="flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                            <Flame size={12} className="animate-pulse" />
                            <span>Tavsiya etiladi</span>
                          </span>
                        )}
                      </div>

                      <div className={`p-3 rounded-2xl ${
                        isKino
                          ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30 group-hover:scale-110 group-hover:rotate-6'
                          : 'bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 group-hover:scale-110'
                      } transition-transform duration-300`}>
                        <IconComponent size={26} />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-500 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Tavsif va texnologiyalar */}
                  <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-5">
                      {/* Texnologiyalar ro'yxati */}
                      <div>
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                          Ishlatilgan texnologiyalar:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200/60 dark:border-slate-700/60"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Git clone buyrug'i agar mavjud bo'lsa */}
                      {project.gitClone && (
                        <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs">
                          <code className="text-slate-700 dark:text-indigo-300 font-mono truncate mr-2">
                            {project.gitClone}
                          </code>
                          <button
                            onClick={() => copyToClipboard(project.gitClone, project.id)}
                            className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 hover:text-indigo-500 transition-colors shrink-0"
                            title="Git clone manzilini nusxalash"
                          >
                            {copiedClone === project.id ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                          </button>
                        </div>
                      )}

                      {/* Havolalar & Tugmalar */}
                      <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        >
                          <GithubIcon size={16} />
                          <span>GitHub Kod</span>
                        </a>

                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-500 hover:to-violet-500 shadow-md shadow-indigo-600/25 transition-all"
                        >
                          <span>Loyihani Ko'rish</span>
                          <ArrowUpRight size={16} />
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

      {/* 6. TAJRIBA VA TA'LIM (TIMELINE) */}
      <section id="experience" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 mb-3">
              <GraduationCap size={13} />
              <span>Yo'l xaritasi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Tajriba va Ta'lim
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto relative border-l-2 border-indigo-200 dark:border-indigo-900/60 pl-6 sm:pl-10 space-y-12">
            {USER_DATA.timeline.map((item, index) => (
              <div key={index} className="relative group">
                {/* Nuqta/Icon */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-10 h-10 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-600 flex items-center justify-center text-indigo-600 shadow-lg group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  {item.type === 'work' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                </div>

                {/* Kontent kartasi */}
                <div className="bg-white dark:bg-slate-900/80 p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-indigo-500/40 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-extrabold px-3 py-1 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                      {item.period}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {item.type === 'work' ? "Ish faoliyati" : "Ta'lim & Amaliyot"}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                    {item.organization}
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. SERTIFIKATLAR VA YUTUQLAR */}
      <section className="py-16 bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 mb-3">
              <Award size={13} />
              <span>Malaka</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Sertifikatlar va Yutuqlar
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {USER_DATA.certificates.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900/80 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 flex items-start gap-4 shadow-sm hover:border-indigo-500/50 hover:shadow-lg transition-all"
              >
                <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Award size={26} />
                </div>
                <div>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    {cert.year} • {cert.badge}
                  </span>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white mt-2">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Tashkilot: {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. ALOQA (CONTACT) */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 mb-3">
              <Send size={13} />
              <span>Aloqa</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Men Bilan Bog'laning
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-3 rounded-full"></div>
            <p className="text-slate-600 dark:text-slate-400 mt-4 text-sm sm:text-base">
              Yangi veb-loyihalar, kino platformasi yoki Telegram botlar buyurtmasi bo'yicha bog'lanishingiz mumkin
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
            
            {/* Aloqa ma'lumotlari */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white dark:bg-slate-900/80 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    To'g'ridan-to'g'ri Aloqa
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Har doim muloqotga va yangi imkoniyatlarga tayyorman
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Telegram */}
                  <a
                    href={USER_DATA.personal.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 group transition-all"
                  >
                    <div className="p-3 rounded-xl bg-sky-500/10 text-sky-500 group-hover:bg-[#229ED9] group-hover:text-white transition-colors shrink-0">
                      <TelegramIcon size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Telegram</div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white">@alibektultayev</div>
                    </div>
                  </a>

                  {/* Telefon */}
                  <a
                    href="tel:+998992800036"
                    className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 group transition-all"
                  >
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Telefon</div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white">{USER_DATA.personal.phone}</div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${USER_DATA.personal.email}`}
                    className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 group transition-all"
                  >
                    <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Email</div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white">{USER_DATA.personal.email}</div>
                    </div>
                  </a>

                  {/* Manzil */}
                  <div className="flex items-start gap-4 p-3 text-slate-600 dark:text-slate-300">
                    <div className="p-3 rounded-xl bg-violet-500/10 text-violet-500 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Manzil</div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white">{USER_DATA.personal.location}</div>
                    </div>
                  </div>
                </div>

                {/* Tarmoqlar tugmalari */}
                <div className="pt-5 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Profil Havolalari
                  </div>
                  <div className="flex gap-2.5">
                    <a
                      href={USER_DATA.personal.telegram}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-[#229ED9] hover:text-white hover:border-[#229ED9] transition-all"
                      title="Telegram"
                    >
                      <TelegramIcon size={18} />
                    </a>
                    <a
                      href={USER_DATA.personal.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-900 hover:text-white dark:hover:bg-indigo-600 hover:border-indigo-600 transition-all"
                      title="GitHub"
                    >
                      <GithubIcon size={18} />
                    </a>
                    <a
                      href={USER_DATA.personal.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all"
                      title="Instagram"
                    >
                      <InstagramIcon size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Aloqa Formasi */}
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-slate-900/80 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Xabar Yuborish
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                  Quyidagi formani to'ldiring, xabaringizga tez orada javob beraman
                </p>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                    <CheckCircle2 size={42} className="text-emerald-500 mx-auto" />
                    <h4 className="font-bold text-lg text-emerald-800 dark:text-emerald-300">Xabaringiz qabul qilindi!</h4>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400">Tez orada siz bilan bog'lanaman. Rahmat!</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                          Ismingiz
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Masalan: Aziz"
                          className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all shadow-inner"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                          Email manzilingiz
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="aziz@example.com"
                          className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                        Mavzu
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Loyiha buyurtmasi / Hamkorlik"
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all shadow-inner"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                        Xabar matni
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Loyiha talablari yoki taklifingiz haqida yozing..."
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all resize-none shadow-inner"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send size={17} />
                      <span>Xabarni yuborish</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="py-10 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-[#060910] backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-pink-500 flex items-center justify-center text-white font-black text-sm">
              A
            </div>
            <div>
              © {new Date().getFullYear()} <strong className="text-slate-800 dark:text-slate-200">{USER_DATA.personal.name}</strong>. Barcha huquqlar himoyalangan.
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">
              Bosh sahifa
            </a>
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">
              Loyihalar
            </a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">
              Aloqa
            </a>
            <a href="#home" className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-semibold">
              Yuqoriga ↑
            </a>
          </div>
        </div>
      </footer>

    </div>
  )
}
