import React, { useState, useEffect } from 'react'
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
  ExternalLink,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight,
  ArrowUpRight,
  User,
  Sparkles,
  CheckCircle2
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

// DATA STRUCTURE - ALIBEK TO'LTAYEV PORTFOLIO MA'LUMOTLARI
const USER_DATA = {
  personal: {
    name: "Alibek To'ltayev",
    title: "Frontend & Telegram Bot Dasturchi",
    tagline: "Frontend sohasida zamonaviy veb-ilovalar hamda avtomatlashtirilgan foydali Telegram botlarni yaratuvchi dasturchi.",
    location: "Sirdaryo viloyati, O'zbekiston",
    email: "alibektultayev@gmail.com",
    phone: "+998 99 280 00 36",
    telegram: "https://t.me/[TELEGRAM_USER]",
    github: "https://github.com/alibektultayev-rgb",
    instagram: "https://instagram.com/[INSTAGRAM_USER]",
    linkedin: "#",
    cvUrl: "#",
    avatarUrl: profileImg,
  },
  about: {
    bio: "Salom! Men Alibek To'ltayev. 2026-yildan beri dasturlash sohasini qunt bilan o'rganib kelmoqdaman. Dasturlash olamiga 1-bosqichdan qadam qo'yib, dastlab C++ tili va fundamental algoritmik asoslarni chuqur o'rgandim. Hozirda Frontend yo'nalishini to'liq o'zlashtirganman hamda avtomatlashtirilgan Telegram botlar yaratish bilan shug'ullanaman.",
    currentStatus: "IT Live o'quv markazida tahsil olmoqdaman, Frontend loyihalari va Telegram botlar ustida ishlamoqdaman.",
    goals: "Frontend yo'nalishidagi ko'nikmalarimni yanada takomillashtirish, zamonaviy backend texnologiyalari hamda kiberxavfsizlikni mukammal o'rganish.",
    strengths: [
      "Frontend texnologiyalarini (HTML, CSS, JavaScript, React, Tailwind CSS) to'liq o'rganganlik",
      "Interaktiv va funksional Telegram botlarni ishlab chiqish ko'nikmasi",
      "C++ orqali dasturlashning mantiqiy va algoritmik asoslarini yaxshi bilish",
      "Python bo'yicha tushuncha va yangi texnologiyalarni tez o'zlashtirish",
      "Toza kod, mas'uliyat va qulay foydalanuvchi interfeysiga intilish"
    ],
    stats: [
      { label: "Frontend & Botlar", value: "100%" },
      { label: "O'rganish yili", value: "2026" },
      { label: "Asosiy texnologiyalar", value: "7+" }
    ]
  },
  skills: [
    { name: "Frontend (HTML, CSS, JavaScript)", level: 100, category: "Frontend" },
    { name: "Telegram Bot Development (Python / Bot API)", level: 85, category: "Bot & Backend" },
    { name: "React.js", level: 85, category: "Frontend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },
    { name: "C++ (Algoritmlar & Mantiq)", level: 80, category: "Dasturlash" },
    { name: "Python", level: 60, category: "Backend" },
    { name: "Git & GitHub", level: 80, category: "Tools" },
    { name: "Responsive Veb Dizayn", level: 95, category: "Frontend" }
  ],
  projects: [
    {
      id: 1,
      title: "Zamonaviy Shaxsiy Portfolio",
      description: "React va Tailwind CSS yordamida yaratilgan, Dark/Light rejimga va to'liq moslashuvchanlikka ega bo'lgan interaktiv portfolio.",
      technologies: ["React", "Tailwind CSS", "Vite", "Lucide Icons"],
      github: "https://github.com/alibektultayev-rgb/portifolya",
      demo: "https://example.com",
      status: "Tugallangan"
    },
    {
      id: 2,
      title: "Interaktiv Telegram Bot",
      description: "Foydalanuvchilar bilan muloqot qiluvchi, avtomatlashtirilgan xizmatlar, qulay inline va reply menyulariga ega Telegram bot.",
      technologies: ["Python", "Telegram Bot API", "Aiogram"],
      github: "https://github.com",
      demo: "https://t.me",
      status: "Faol"
    },
    {
      id: 3,
      title: "Algoritmik Masalalar & C++ Dasturlari",
      description: "C++ tilida yechilgan algoritmlar, ma'lumotlar tuzilmalari va mantiqiy masalalar to'plami.",
      technologies: ["C++", "Algoritmlar", "Data Structures"],
      github: "https://github.com",
      demo: "https://github.com",
      status: "Faol"
    }
  ],
  timeline: [
    {
      type: "education",
      title: "Frontend Dasturchi & Dasturlash Asoslari",
      organization: "IT Live o'quv markazi",
      period: "2026 - Hozirgacha",
      description: "1-bosqichdan boshlab IT Live da C++ tili, algoritmik mantiq va dasturlash asoslarini o'rgandim. Hozirda Frontend texnologiyalarini (HTML, CSS, JavaScript, React, Tailwind) to'liq o'rganib chiqdim."
    }
  ],
  certificates: [
    {
      title: "Frontend Dasturlash Kursi",
      issuer: "IT Live o'quv markazi",
      year: "2026",
      badge: "Frontend"
    }
  ]
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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

  const navLinks = [
    { name: "Bosh sahifa", href: "#home" },
    { name: "Men haqimda", href: "#about" },
    { name: "Ko'nikmalar", href: "#skills" },
    { name: "Loyihalar", href: "#projects" },
    { name: "Tajriba", href: "#experience" },
    { name: "Bog'lanish", href: "#contact" },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 selection:bg-indigo-500 selection:text-white">
      
      {/* 1. NAVIGATION BAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-200">
                A
              </div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                {USER_DATA.personal.name}
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action: Theme toggle + Contact button */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 transition-all cursor-pointer"
                title={darkMode ? "Yorug' rejim" : "Tungi rejim"}
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-600" />}
              </button>

              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all cursor-pointer"
              >
                <span>Bog'lanish</span>
                <ChevronRight size={16} />
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg px-4 pt-2 pb-5 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-indigo-600 text-white font-medium"
              >
                <span>Bog'lanish</span>
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative pt-16 pb-24 md:pt-28 md:pb-36 overflow-hidden">
        {/* Orqa fon uchun nafis gradient dog'lari */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-violet-500/10 dark:bg-violet-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Chap tomondagi matn qismi */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Yangi loyihalar uchun ochiqman</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                Salom, men <br />
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 bg-clip-text text-transparent">
                  {USER_DATA.personal.name}
                </span>
              </h1>

              <div className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200">
                {USER_DATA.personal.title}
              </div>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {USER_DATA.personal.tagline}
              </p>

              {/* Tugmalar */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Send size={18} />
                  <span>Men bilan bog'lanish</span>
                </a>
                
                <a
                  href="#projects"
                  className="px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-800 dark:text-slate-200 font-medium transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Briefcase size={18} />
                  <span>Portfolioimni ko'rish</span>
                </a>
              </div>

              {/* Ijtimoiy tarmoqlar */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-slate-500 dark:text-slate-400">
                <span className="text-sm font-medium">Ijtimoiy tarmoqlar:</span>
                <div className="flex gap-3">
                  <a
                    href={USER_DATA.personal.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    title="Telegram"
                  >
                    <TelegramIcon size={20} />
                  </a>
                  <a
                    href={USER_DATA.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    title="GitHub"
                  >
                    <GithubIcon size={20} />
                  </a>
                  <a
                    href={USER_DATA.personal.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    title="Instagram"
                  >
                    <InstagramIcon size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* O'ng tomondagi Profil Rasmi yoki Avatar */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
                
                <div className="relative w-72 sm:w-84 h-[380px] sm:h-[440px] rounded-3xl bg-slate-100 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-2 shadow-2xl flex flex-col items-center justify-center overflow-hidden">
                  {USER_DATA.personal.avatarUrl ? (
                    <img
                      src={USER_DATA.personal.avatarUrl}
                      alt={USER_DATA.personal.name}
                      className="w-full h-full object-cover object-top rounded-2xl group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full rounded-2xl bg-gradient-to-b from-indigo-500/10 to-violet-500/20 flex flex-col items-center justify-center p-6 text-center border border-indigo-500/20">
                      <div className="w-24 h-24 rounded-full bg-indigo-600/10 dark:bg-indigo-400/10 border border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                        <User size={48} />
                      </div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200">Profil Rasmi</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Rasmingizni <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded">src/assets</code> papkasiga qo'shishingiz mumkin
                      </p>
                    </div>
                  )}

                  {/* Suzuvchi kichik nishon */}
                  <div className="absolute bottom-5 right-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl px-3 py-1.5 rounded-xl flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <Sparkles size={14} className="text-amber-500" />
                    <span>Dasturchi</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MEN HAQIMDA (ABOUT ME) */}
      <section id="about" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              Tanishuv
            </h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Men Haqimda
            </h3>
            <div className="w-12 h-1 bg-indigo-600 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Bio & Maqsadlar */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <User className="text-indigo-600" size={22} />
                  <span>Kasbiy Yondashuv va Qiziqishlar</span>
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {USER_DATA.about.bio}
                </p>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    <span className="text-slate-700 dark:text-slate-200 font-semibold">Faoliyat sohasi:</span> {USER_DATA.about.currentStatus}
                  </p>
                </div>
              </div>

              {/* Maqsad va Intilishlar */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="text-violet-600" size={20} />
                  <span>Kelgusidagi Maqsadlarim</span>
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {USER_DATA.about.goals}
                </p>
              </div>
            </div>

            {/* Kuchli tomonlar & Statistika */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Kuchli tomonlar */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  Kuchli Tomonlarim
                </h4>
                <ul className="space-y-3">
                  {USER_DATA.about.strengths.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm">
                      <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Statistik kartochkalar */}
              <div className="grid grid-cols-3 gap-4">
                {USER_DATA.about.stats.map((stat, i) => (
                  <div key={i} className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
                    <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. KO'NIKMALAR (SKILLS) */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              Imkoniyatlar
            </h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Professional Ko'nikmalarim
            </h3>
            <div className="w-12 h-1 bg-indigo-600 mx-auto mt-3 rounded-full"></div>
            <p className="text-slate-600 dark:text-slate-400 mt-4 text-sm sm:text-base">
              Veb-ishlab chiqishda amaliy tajribaga ega bo'lgan asosiy texnologiyalar va bilim darajalarim
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {USER_DATA.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
                    <Code2 size={16} className="text-indigo-600 dark:text-indigo-400" />
                    <span>{skill.name}</span>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900">
                    {skill.level}%
                  </span>
                </div>
                
                {/* Progress bar */}
                <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. LOYIHALARIM (PROJECTS) */}
      <section id="projects" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              Portfolio
            </h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              So'nggi Loyihalarim
            </h3>
            <div className="w-12 h-1 bg-indigo-600 mx-auto mt-3 rounded-full"></div>
            <p className="text-slate-600 dark:text-slate-400 mt-4 text-sm sm:text-base">
              Har bir loyiha zamonaviy yondashuv va ilg'or arxitektura asosida amalga oshirilgan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {USER_DATA.projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                {/* Loyiha sarlavha qismi / Preview mockup */}
                <div className="h-44 bg-gradient-to-br from-indigo-500/15 via-violet-500/10 to-pink-500/10 border-b border-slate-100 dark:border-slate-800/80 p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                      {project.status}
                    </span>
                    <Code2 className="text-indigo-400 dark:text-indigo-500 opacity-70 group-hover:scale-110 transition-transform" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                      {project.title}
                    </h4>
                  </div>
                </div>

                {/* Tavsif va texnologiyalar */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    {/* Texnologiyalar */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Havolalar */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <GithubIcon size={15} />
                        <span>Kodni ko'rish</span>
                      </a>

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        <span>Jonli Demo</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. TAJRIBA VA TA'LIM (TIMELINE) */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              Yo'l xaritasi
            </h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Tajriba va Ta'lim
            </h3>
            <div className="w-12 h-1 bg-indigo-600 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto relative border-l-2 border-indigo-200 dark:border-indigo-950 pl-6 sm:pl-8 space-y-12">
            {USER_DATA.timeline.map((item, index) => (
              <div key={index} className="relative group">
                {/* Nuqta/Icon */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-600 flex items-center justify-center text-indigo-600 shadow-md group-hover:scale-110 transition-transform">
                  {item.type === 'work' ? <Briefcase size={14} /> : <GraduationCap size={14} />}
                </div>

                {/* Kontent */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                      {item.period}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {item.type === 'work' ? "Ish faoliyati" : "Ta'lim"}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                    {item.organization}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. SERTIFIKATLAR VA YUTUQLAR */}
      <section className="py-16 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              Malaka
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Sertifikatlar va Yutuqlar
            </h3>
            <div className="w-12 h-1 bg-indigo-600 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {USER_DATA.certificates.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-4 shadow-sm hover:border-indigo-400 transition-colors"
              >
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                  <Award size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    {cert.year} • {cert.badge}
                  </span>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white mt-0.5">
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

      {/* 8. BOG'LANISH (CONTACT & SOCIALS) */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              Aloqa
            </h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Men Bilan Bog'laning
            </h3>
            <div className="w-12 h-1 bg-indigo-600 mx-auto mt-3 rounded-full"></div>
            <p className="text-slate-600 dark:text-slate-400 mt-4 text-sm sm:text-base">
              Birgalikda yangi loyihalarni yaratish yoki hamkorlik qilish uchun xabar qoldiring
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
            
            {/* Aloqa ma'lumotlari */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  Aloqa Ma'lumotlari
                </h4>

                <div className="space-y-4">
                  <a
                    href={`mailto:${USER_DATA.personal.email}`}
                    className="flex items-start gap-3 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 group transition-colors"
                  >
                    <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Email</div>
                      <div className="font-medium text-sm">{USER_DATA.personal.email}</div>
                    </div>
                  </a>

                  <a
                    href="tel:+998992800036"
                    className="flex items-start gap-3 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 group transition-colors"
                  >
                    <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Telefon</div>
                      <div className="font-medium text-sm">{USER_DATA.personal.phone}</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                    <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Manzil</div>
                      <div className="font-medium text-sm">{USER_DATA.personal.location}</div>
                    </div>
                  </div>
                </div>

                {/* Tezkor tarmoqlar */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">
                    Ijtimoiy Tarmoqlar
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={USER_DATA.personal.telegram}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-colors"
                      title="Telegram"
                    >
                      <TelegramIcon size={18} />
                    </a>
                    <a
                      href={USER_DATA.personal.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-colors"
                      title="GitHub"
                    >
                      <GithubIcon size={18} />
                    </a>
                    <a
                      href={USER_DATA.personal.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-colors"
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
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  Xabar Yuborish
                </h4>

                {formSubmitted ? (
                  <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-2">
                    <CheckCircle2 size={36} className="text-emerald-500 mx-auto" />
                    <h5 className="font-bold text-emerald-800 dark:text-emerald-200">Xabaringiz qabul qilindi!</h5>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300">Tez orada siz bilan bog'lanaman.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                          Ismingiz
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Ismingizni kiriting"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                          Email manzilingiz
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="nom@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                        Mavzu
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Xat mavzusi"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                        Xabar matni
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Loyiha haqida yoki taklifingizni yozing..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
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

      {/* 9. FOOTER */}
      <footer className="py-8 border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} <span className="font-semibold text-slate-700 dark:text-slate-300">{USER_DATA.personal.name}</span>. Barcha huquqlar himoyalangan.
          </div>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Yuqoriga qaytish ↑
            </a>
          </div>
        </div>
      </footer>

    </div>
  )
}
