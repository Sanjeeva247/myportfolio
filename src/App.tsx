import { useState, useEffect, useRef, useCallback } from 'react'
import portraitImg from '@/imports/sanjeeva_hero_section.png'
import aboutimage from '@/imports/SANJEEV.png'
import {
  SiPython,
  SiReact,
  SiTensorflow,
  // SiMicrosoftazure,
} from 'react-icons/si';
// import { FaMicrosoft } from 'react-icons/fa';
import { TbBrandAzure } from 'react-icons/tb';
import type { IconType } from 'react-icons';
import {
  Bot,
  Workflow,
  Zap,
  Cloud,
  Container,
  GitBranch,
  Database,
  Eye,
  Brain,
  Sparkles,
  Search,
  Network,
  Code2,
  Server,
  ShieldCheck,
  Layers,
  BarChart3,
  GitPullRequest,
  FileSearch,
  Cpu,
  Braces,
  Boxes,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

import React from 'react';
import {
  // Bot,
  // Workflow,
  // Eye,
  // Database,
  // Cloud,
  // Brain,
  TrendingUp,
  ScanLine,
  // Code2,
  // Sparkles,
  // Search,
  // Network,
} from 'lucide-react';

import {
 
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  // SiCss3,
  SiFastapi,
  SiDocker,
  SiGit,
  // SiAmazon,
  SiDatabricks,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  // SiTensorflow,
  SiKeras,
  // SiXgboost,
  SiPostman,
  // SiPowerbi,
  // SiMatplotlib,
  // SiSeaborn,
} from 'react-icons/si';
import {
  FaCss3Alt,
  FaAws,
  FaChartLine,
  FaChartBar,
  FaChartPie,
} from 'react-icons/fa';
import {
  FaDatabase,
  FaCode,
  FaCubes,
  // FaChartBar,
  FaMicrosoft,
} from 'react-icons/fa';

import {
  FaSeedling,
  FaRobot,
  // FaChartLine,
  // FaDatabase,
  FaPython,
  FaCloud,
  FaBrain,
  FaSearch,
  FaLayerGroup,
  // FaCode,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight,
  FaArrowLeft,
  FaProjectDiagram
} from 'react-icons/fa';

import {
  SiLangchain,
  SiAzuredevops,
  SiOpenai,
  // SiPandas,
  // SiScikitlearn,
} from 'react-icons/si';
import { start } from 'repl';

// ── Scroll reveal hook ──────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}
const techStack = [
  { label: 'Python', icon: SiPython, color: '#3B82F6' },
  { label: 'React', icon: SiReact, color: '#22D3EE' },
  { label: 'AI/ML', icon: SiTensorflow, color: '#A855F7' },
  { label: 'Azure', icon: TbBrandAzure , color: '#60A5FA' },
];
// ── Geometric background deco ───────────────────────────────────────────────
function BgDeco() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      {/* Radial glow top-right */}
      <div style={{
        position: 'absolute', top: -120, right: -80,
        width: 520, height: 520,
        background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />
      {/* Radial glow bottom-left */}
      <div style={{
        position: 'absolute', bottom: 200, left: -100,
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(22,139,255,0.10) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />
      {/* Grid lines */}
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.04 }}>
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      {/* Floating neon orbs */}
      <div className="animate-pulse-glow" style={{
        position: 'absolute', top: 320, left: '55%',
        width: 2, height: 180,
        background: 'linear-gradient(180deg, transparent, #A855F7, transparent)',
        borderRadius: 1, opacity: 0.35
      }} />
      <div className="animate-pulse-glow" style={{
        position: 'absolute', top: 80, left: '75%',
        width: 1, height: 120,
        background: 'linear-gradient(180deg, transparent, #168BFF, transparent)',
        borderRadius: 1, opacity: 0.25, animationDelay: '1.5s'
      }} />
    </div>
  )
}

// ── SK Monogram ─────────────────────────────────────────────────────────────
function SKMonogram({ size = 30 }: { size?: number }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: 7,
      background: 'linear-gradient(135deg, #168BFF, #A855F7)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
      boxShadow: '0 0 12px rgba(168,85,247,0.4)'
    }}>
      <span style={{ fontSize: size * 0.38, fontWeight: 800, color: '#fff', letterSpacing: '-0.5px', fontFamily: 'Inter' }}>SK</span>
    </div>
  )
}

// ── Section label ───────────────────────────────────────────────────────────
function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
      <span style={{ fontSize: 9, fontWeight: 700, color: '#A855F7', letterSpacing: '0.08em', fontFamily: 'JetBrains Mono, monospace' }}>{number}</span>
      <span style={{ width: 20, height: 1, background: '#173456' }} />
      <span style={{ fontSize: 9, fontWeight: 600, color: '#8293AD', letterSpacing: '0.14em', textTransform: 'uppercase' }}>{label}</span>
    </div>
  )
}

// ── Navbar ──────────────────────────────────────────────────────────────────
const NAV_LINKS = ['Home', 'About', 'Projects', 'Experience', 'Skills', 'Contact']

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); setActive(id); setMobileOpen(false) }
  }

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 52,
      background: scrolled ? 'rgba(3,11,25,0.92)' : 'rgba(3,11,25,0.4)',
      backdropFilter: scrolled ? 'blur(12px)' : 'blur(4px)',
      borderBottom: scrolled ? '1px solid #173456' : '1px solid transparent',
      transition: 'all 0.3s ease',
      display: 'flex', alignItems: 'center',
      padding: '0 24px'
    }}>
      <div style={{ maxWidth: 1100, width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', gap: 14 }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: '0 0 auto' }}>
          <SKMonogram size={30} />
          <span style={{ fontSize: 13, fontWeight: 600, color: '#F5F7FF', whiteSpace: 'nowrap' }}>Sanjeeva Kumar M</span>
        </div>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 24, marginLeft: 'auto', flex: 1, justifyContent: 'center' }} className="hidden-mobile">
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`nav-link${active === link ? ' active' : ''}`}
              style={{
                background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0',
                fontSize: 11, fontWeight: 500, color: active === link ? '#A855F7' : '#A8B6CB',
                fontFamily: 'Inter, sans-serif'
              }}
            >{link}</button>
          ))}
        </nav>

        {/* Download Resume */}
        <a
  href="/SANJEEVA_KUMAR_AI_ENGINEER.docx"
  download="Sanjeeva_Kumar_AI_Engineer_Resume.docx"
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    height: 30,
    padding: '0 14px',
    borderRadius: 20,
    background: 'transparent',
    border: '1px solid',
    borderColor: '#3B5EA6',
    color: '#A8B6CB',
    fontSize: 10,
    fontWeight: 500,
    cursor: 'pointer',
    fontFamily: 'Inter',
    transition: 'all 0.2s ease',
    flexShrink: 0,
    textDecoration: 'none',
  }}
  className="hidden-mobile"
  onMouseEnter={e => {
    e.currentTarget.style.borderColor = '#A855F7'
    e.currentTarget.style.color = '#F5F7FF'
  }}
  onMouseLeave={e => {
    e.currentTarget.style.borderColor = '#3B5EA6'
    e.currentTarget.style.color = '#A8B6CB'
  }}
>
  <svg
    width="11"
    height="11"
    viewBox="0 0 12 12"
    fill="none"
  >
    <path
      d="M6 1v7M3 6l3 3 3-3M2 11h8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

  Download Resume
</a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-only"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#A8B6CB', marginLeft: 'auto', padding: 4 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen
              ? <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
              : <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div style={{
          position: 'absolute', top: 52, left: 0, right: 0,
          background: 'rgba(7,21,42,0.98)', backdropFilter: 'blur(16px)',
          borderBottom: '1px solid #173456', padding: '12px 0'
        }}>
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '10px 24px', background: 'none', border: 'none',
                cursor: 'pointer', fontSize: 13, color: active === link ? '#A855F7' : '#A8B6CB',
                fontFamily: 'Inter'
              }}
            >{link}</button>
          ))}
        </div>
      )}
    </header>
  )
}

// ── Tech icon chip ──────────────────────────────────────────────────────────
// function TechChip({ label, color = '#3B82F6' }: { label: string; color?: string }) {
//   return (
//     <span style={{
//       fontSize: 9, padding: '2px 7px', borderRadius: 4,
//       border: `1px solid ${color}40`,
//       background: `${color}12`,
//       color: color, fontWeight: 500, letterSpacing: '0.03em',
//       whiteSpace: 'nowrap'
//     }}>{label}</span>
//   )
// }

// ── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      paddingTop: 52, position: 'relative', overflow: 'hidden'
    }}>
      {/* Hero glow behind portrait */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0,
        width: '55%', pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 70% 50%, rgba(168,85,247,0.15) 0%, rgba(22,139,255,0.08) 40%, transparent 70%)'
      }} />

      <div style={{ maxWidth: 1100, width: '100%', margin: '0 auto', padding: '0 60px', position: 'relative', zIndex: 1 }} className="hero-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center', minHeight: 'calc(100vh - 52px)' }} className="hero-grid">

          {/* Left: Text */}
          <div style={{ animation: 'fadeInLeft 0.7s ease-out forwards' }}>
            <p style={{ fontSize: 13, color: '#A78BFA', fontWeight: 500, marginBottom: 10, animation: 'fadeIn 0.5s ease-out 0.1s both' }}>Hi, I'm</p>

            <h1 style={{
              fontSize: 'clamp(32px, 4vw, 46px)', fontWeight: 800,
              lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 14,
              animation: 'fadeInLeft 0.7s ease-out 0.2s both'
            }}>
              <span className="gradient-text">Sanjeeva Kumar M</span>
            </h1>

            <p style={{
              fontSize: 15, fontWeight: 500, color: '#E0E8F5', marginBottom: 16,
              animation: 'fadeIn 0.7s ease-out 0.35s both'
            }}>
              <span className="gradient-text-blue">AI/ML Engineer</span>
              <span style={{ color: '#8293AD', margin: '0 10px' }}>|</span>
              <span style={{ color: '#C4B5FD' }}>Frontend Developer</span>
            </p>

            <p style={{
              fontSize: 11.5, lineHeight: 1.65, color: '#A8B6CB',
              maxWidth: 330, marginBottom: 28,
              animation: 'fadeIn 0.7s ease-out 0.45s both'
            }}>
              Building intelligent and scalable AI solutions with modern web technologies. Passionate about Agentic AI, Generative AI and creating real-world impact through innovation.
            </p>

            <div style={{ display: 'flex', gap: 12, marginBottom: 32, flexWrap: 'wrap', animation: 'fadeInUp 0.7s ease-out 0.55s both' }}>
              <button
                className="btn-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  height: 38, padding: '0 22px', borderRadius: 20,
                  border: 'none', cursor: 'pointer', color: '#fff',
                  fontSize: 12, fontWeight: 600, fontFamily: 'Inter',
                  display: 'flex', alignItems: 'center', gap: 6
                }}
              >
                View My Projects
                <span style={{ fontSize: 14 }}>→</span>
              </button>
              <button
                className="btn-secondary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  height: 38, padding: '0 22px', borderRadius: 20,
                  background: 'transparent',
                  border: '1px solid #3B82F6',
                  cursor: 'pointer', color: '#E0E8F5',
                  fontSize: 12, fontWeight: 600, fontFamily: 'Inter'
                }}
              >
                Contact Me
              </button>
            </div>

            {/* Social/tech icons row */}
            <div
  style={{
    display: 'flex',
    gap: 14,
    alignItems: 'center',
    animation: 'fadeIn 0.8s ease-out 0.7s both',
  }}
>
{techStack.map(({ label, icon: Icon, color }) => (
  <div
    key={label}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
    }}
  >
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: 16,
        background: `${color}18`,
        border: `1px solid ${color}35`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: color,
      }}
    >
      <Icon
        size={34}
        style={{
          display: 'block',
          color: color,
        }}
      />
    </div>

    <span
      style={{
        fontSize: 16,
        color: '#8293AD',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  </div>
))}

  {/* GitHub */}
  {/* <a
    href="https://github.com"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: '#8293AD',
      display: 'flex',
      transition: 'all 0.2s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.color = '#F5F7FF';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.color = '#8293AD';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d={SiGithub.path} />
    </svg>
  </a> */}

  {/* LinkedIn */}
  {/* <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: '#8293AD',
      display: 'flex',
      transition: 'all 0.2s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.color = '#60A5FA';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.color = '#8293AD';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d={SiLinkedin.path} />
    </svg>
  </a> */}
</div>

          </div>

          {/* Right: Portrait */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', animation: 'fadeIn 0.8s ease-out 0.3s both' }}>
            {/* Glow ring */}
            <div style={{
              position: 'absolute', inset: -16,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(22,139,255,0.12) 50%, transparent 75%)',
              filter: 'blur(20px)',
              animation: 'pulse-glow 4s ease-in-out infinite'
            }} />
            {/* Portrait container */}
            <div className="animate-float" style={{
              position: 'relative',
              width: 'min(540px, 90%)', aspectRatio: '1/1',
              marginLeft: 50,
              borderRadius: 20,
              overflow: 'hidden',
              border: '1px solid rgba(168,85,247,0.3)',
              boxShadow: '0 0 40px rgba(168,85,247,0.2), 0 0 80px rgba(22,139,255,0.1), inset 0 0 40px rgba(168,85,247,0.05)'
            }}>
              <img
                src={portraitImg}
                alt="Sanjeeva Kumar M — AI/ML Engineer"
                style={{ width: '200%', height: '100%', objectPosition: 'center top' }}
              />
              {/* Subtle overlay gradient at bottom */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '100%',
                background: 'linear-gradient(transparent, rgba(3,11,25,0.6))'
              }} />
            </div>

            {/* Decorative text right */}
            

            {/* Neon vertical accent */}
            <div style={{
              position: 'absolute', left: -20, top: '15%', bottom: '15%',
              width: 2,
              background: 'linear-gradient(180deg, transparent, #A855F7 40%, #168BFF 60%, transparent)',
              borderRadius: 1, opacity: 0.2
            }} className="hidden-mobile" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ── About Section ────────────────────────────────────────────────────────────
function AboutSection() {
  const ref = useReveal() as React.RefObject<HTMLElement>
  return (
    <section ref={ref} id="about" className="reveal" style={{
      borderTop: '1px solid #173456', borderBottom: '1px solid #173456',
      padding: '56px 0', position: 'relative', zIndex: 1
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 60px' }} className="section-pad">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }} className="about-grid">

          {/* Left */}
          <div>
            <SectionLabel number="01" label="ABOUT ME" />
            <h2 style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.15, marginBottom: 18 }}>
              Turning Ideas into<br/>
              <span className="gradient-text">Intelligent Solutions</span>
            </h2>
            <p style={{ fontSize: 11.5, lineHeight: 1.6, color: '#A8B6CB', marginBottom: 24, maxWidth: 380 }}>
              I'm an AI/ML Engineer with 3+ years of experience building production Agentic AI and Generative AI systems for a global agribusiness client. I specialise in agent orchestration, enterprise RAG, multimodal AI, and modern web technologies to create scalable and intelligent solutions.
            </p>

            {/* Info chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {[
                { icon: '📍', label: 'Bengaluru, India' },
                { icon: '⏱', label: '3+ Years Experience' },
                { icon: '🎓', label: 'B.Tech (CSE)' },
                { icon: '✉', label: 'sanjeevakumarm4u@gmail.com' },
                { icon: '📱', label: '+91 95153 85297' },
              ].map(({ icon, label }) => (
                <div key={label} style={{
                  display: 'flex', alignItems: 'center', gap: 5,
                  padding: '5px 10px', borderRadius: 6,
                  background: '#08182D', border: '1px solid #173456',
                  fontSize: 10, color: '#A8B6CB'
                }}>
                  <span style={{ fontSize: 11 }}>{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={{ display: 'flex', gap: 20, alignItems: 'start' }}>
            {/* Quick info card */}
            <div style={{
              flex: 1, background: '#08182D', border: '1px solid #173456',
              borderRadius: 12, padding: 18, minWidth: 0
            }} className="skill-card">
              {[
                { icon: '🤖', title: 'Agentic AI & Generative AI', sub: 'LangGraph, LangChain, RAG, Multi-Agent' },
                { icon: '⚛', title: 'Frontend Development', sub: 'React, Next.js, TypeScript, CSS3' },
                { icon: '☁', title: 'Cloud & DevOps', sub: 'Azure, Docker, CI/CD, Databricks' },
                { icon: '💡', title: 'Problem Solving', sub: 'Architecture, Optimization, Innovation' },
              ].map((row, i) => (
                <div key={row.title}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 0' }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                      background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15
                    }}>{row.icon}</div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: '#E0E8F5', marginBottom: 2 }}>{row.title}</div>
                      <div style={{ fontSize: 9.5, color: '#8293AD', lineHeight: 1.4 }}>{row.sub}</div>
                    </div>
                  </div>
                  {i < 3 && <div style={{ height: 1, background: '#173456' }} />}
                </div>
              ))}
            </div>

            {/* Profile Image + Quotation */}
<div
  style={{
    width: 180,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
  className="hidden-mobile"
>
  {/* Profile Image */}
  <img
    src={aboutimage}
    alt="Sanjeeva Kumar"
    style={{
      width: 160,
      height: 190,
      objectFit: 'cover',
      borderRadius: 12,
      border: '1px solid #173456',
      display: 'block',
    }}
  />

  {/* Quotation */}
  <div
    style={{
      width: '100%',
      marginTop: 16,
      padding: '0 8px',
      boxSizing: 'border-box',
    }}
  >
    <div
      style={{
        fontSize: 28,
        color: '#A855F7',
        lineHeight: 1,
        marginBottom: 6,
        fontFamily: 'Georgia, serif',
      }}
    >
      "
    </div>

    <p
      style={{
        fontSize: 12,
        fontStyle: 'italic',
        color: '#C4B5FD',
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      Technology is most powerful when it builds a better tomorrow.
    </p>

    <div
      style={{
        width: 48,
        height: 2,
        marginTop: 8,
        background: 'linear-gradient(90deg, #A855F7, #168BFF)',
        borderRadius: 1,
      }}
    />
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Skills Section ───────────────────────────────────────────────────────────
// ── Skills Section ───────────────────────────────────────────────────────────

const SKILL_GROUPS = [
  {
    title: 'Programming Languages',
    color: '#3B82F6',
    items: ['Python', 'SQL'],
  },
  {
    title: 'Frontend',
    color: '#22D3EE',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'HTML5',
      'CSS3',
      'REST API',
    ],
  },
  {
    title: 'Backend & APIs',
    color: '#A855F7',
    items: [
      'FastAPI',
      'REST APIs',
      'Microservices',
    ],
  },
  {
    title: 'Cloud & DevOps',
    color: '#60A5FA',
    items: [
      'Azure',
      'Docker',
      'Git',
      'CI/CD',
      'AWS',
      'Databricks',
    ],
  },
  {
    title: 'Data & ML',
    color: '#F472B6',
    items: [
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'TensorFlow',
      'Keras',
      'XGBoost',
      'LSTM',
    ],
  },
  {
    title: 'Tools & Others',
    color: '#34D399',
    items: [
      'VS Code',
      'Postman',
      'Power BI',
      'Matplotlib',
      'Seaborn',
    ],
  },
];

const AI_FLOW = [
  {
    step: '01',
    title: 'User Query',
    subtitle: 'Input',
  },
  {
    step: '02',
    title: 'Planner',
    subtitle: 'Supervisor',
  },
  {
    step: '03',
    title: 'Routing',
    subtitle: 'Intent',
  },
  {
    step: '04',
    title: 'Retrieval',
    subtitle: 'RAG',
  },
  {
    step: '05',
    title: 'Reranking',
    subtitle: 'Context',
  },
  {
    step: '06',
    title: 'Agents',
    subtitle: 'Specialists',
  },
  {
    step: '07',
    title: 'Tools',
    subtitle: 'Execution',
  },
  {
    step: '08',
    title: 'Synthesis',
    subtitle: 'LLM',
  },
  {
    step: '09',
    title: 'Validation',
    subtitle: 'Guardrails',
  },
  {
    step: '10',
    title: 'Response',
    subtitle: 'Grounded',
  },
];

const RAG_FLOW = [
  {
    step: '01',
    title: 'User Query',
    subtitle: 'Question',
  },
  {
    step: '02',
    title: 'Query Analysis',
    subtitle: 'Intent',
  },
  {
    step: '03',
    title: 'Hybrid Search',
    subtitle: 'Vector + BM25',
  },
  {
    step: '04',
    title: 'Metadata Filter',
    subtitle: 'Scope',
  },
  {
    step: '05',
    title: 'Reranking',
    subtitle: 'Relevance',
  },
  {
    step: '06',
    title: 'Context',
    subtitle: 'Top-K',
  },
  {
    step: '07',
    title: 'LLM',
    subtitle: 'Generation',
  },
  {
    step: '08',
    title: 'Groundedness',
    subtitle: 'Validation',
  },
  {
    step: '09',
    title: 'Response',
    subtitle: 'Citations',
  },
];


// ── Skill Icon Mapping ───────────────────────────────────────────────────────

const SKILL_ICONS: Record<string, IconType> = {
  Python: SiPython,
  SQL: FaDatabase,

  React: SiReact,
  'Next.js': SiNextdotjs,
  TypeScript: SiTypescript,
  HTML5: SiHtml5,
  CSS3: FaCss3Alt,
  'REST API': FaCode,

  FastAPI: SiFastapi,
  'REST APIs': FaCode,
  Microservices: FaCubes,

  // Azure handled separately with inline SVG
  Docker: SiDocker,
  Git: SiGit,
  'CI/CD': FaCode,
  AWS: FaAws,
  Databricks: SiDatabricks,

  Pandas: SiPandas,
  NumPy: SiNumpy,
  'Scikit-learn': SiScikitlearn,
  TensorFlow: SiTensorflow,
  Keras: SiKeras,
  XGBoost: FaChartLine,
  LSTM: FaChartBar,

  'VS Code': FaCode,
  Postman: SiPostman,
  'Power BI': FaChartBar,
  Matplotlib: FaChartLine,
  Seaborn: FaChartPie,
};


// ── Azure Icon ───────────────────────────────────────────────────────────────

function AzureIcon({
  size = 18,
  color = '#60A5FA',
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Azure"
    >
      <path
        d="M13.1 3H18L12.3 18.8H7.8L13.1 3Z"
        fill={color}
      />

      <path
        d="M7.8 18.8H12.3L18.8 21H5L7.8 18.8Z"
        fill={color}
        opacity="0.75"
      />

      <path
        d="M13.1 3L5 17.1L7.8 18.8L15.1 9.2L13.1 3Z"
        fill={color}
        opacity="0.9"
      />
    </svg>
  );
}


// ── Tech Chip ────────────────────────────────────────────────────────────────

function TechChip({
  label,
  color,
}: {
  label: string;
  color: string;
}) {
  const Icon = SKILL_ICONS[label];

  return (
    <div
      style={{
        minWidth: 62,
        padding: '9px 8px 8px',
        borderRadius: 8,
        border: `1px solid ${color}35`,
        background: `${color}0D`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        transition: 'all 0.2s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.borderColor = `${color}80`;
        e.currentTarget.style.background = `${color}18`;
        e.currentTarget.style.boxShadow = `0 5px 15px ${color}18`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = `${color}35`;
        e.currentTarget.style.background = `${color}0D`;
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {Icon ? (
        <Icon
          size={18}
          color={color}
          style={{
            display: 'block',
            flexShrink: 0,
          }}
        />
      ) : (
        <FaCode
          size={18}
          color={color}
        />
      )}

      <span
        style={{
          fontSize: 8.5,
          color: '#AAB8CC',
          whiteSpace: 'nowrap',
          lineHeight: 1.2,
          textAlign: 'center',
        }}
      >
        {label}
      </span>
    </div>
  );
}


function SkillFlow({
  title,
  flow,
}: {
  title: string;
  flow: {
    step: string;
    title: string;
    subtitle: string;
  }[];
}) {
  return (
    <div
      style={{
        width: '100%',
        marginBottom: 28,
        padding: '18px 16px',
        borderRadius: 10,
        border: '1px solid rgba(168,85,247,0.28)',
        background: 'rgba(8,24,45,0.65)',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 20,
        }}
      >
        <div
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: '#A855F7',
            boxShadow:
              '0 0 10px rgba(168,85,247,0.75)',
            flexShrink: 0,
          }}
        />

        <span
          style={{
            fontSize: 10,
            fontWeight: 600,
            color: '#E0E8F5',
            letterSpacing: '0.5px',
          }}
        >
          {title}
        </span>
      </div>

      {/* Horizontal Flow */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box',
        }}
      >
        {flow.map((item, index) => (
          <React.Fragment key={item.step}>

            {/* Node */}
            <div
              style={{
                flex: '1 1 0',
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              {/* Step */}
              <span
                style={{
                  height: 12,
                  fontSize: 7,
                  color: '#8B5CF6',
                  fontWeight: 700,
                  lineHeight: '12px',
                  marginBottom: 5,
                  textAlign: 'center',
                }}
              >
                {item.step}
              </span>

              {/* Circle */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  border:
                    '1px solid rgba(168,85,247,0.65)',
                  background:
                    'linear-gradient(145deg, rgba(168,85,247,0.17), rgba(59,130,246,0.08))',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxSizing: 'border-box',
                  boxShadow:
                    '0 0 16px rgba(168,85,247,0.08)',
                  transition: 'all 0.25s ease',
                  cursor: 'default',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    'translateY(-4px) scale(1.05)';

                  e.currentTarget.style.borderColor =
                    'rgba(168,85,247,1)';

                  e.currentTarget.style.boxShadow =
                    '0 0 24px rgba(168,85,247,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    'translateY(0) scale(1)';

                  e.currentTarget.style.borderColor =
                    'rgba(168,85,247,0.65)';

                  e.currentTarget.style.boxShadow =
                    '0 0 16px rgba(168,85,247,0.08)';
                }}
              >
                {/* Title */}
                <span
                  style={{
                    fontSize: 8,
                    fontWeight: 600,
                    color: '#DDD6FE',
                    textAlign: 'center',
                    lineHeight: 1.2,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.title}
                </span>

                {/* Subtitle */}
                <span
                  style={{
                    fontSize: 6.5,
                    color: '#8B9BB4',
                    marginTop: 4,
                    textAlign: 'center',
                    lineHeight: 1.2,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.subtitle}
                </span>
              </div>
            </div>

            {/* Arrow */}
            {index < flow.length - 1 && (
              <div
                style={{
                  flex: '0 0 22px',
                  height: 2,
                  position: 'relative',
                  marginTop: 17,
                  background:
                    'linear-gradient(90deg, rgba(168,85,247,0.8), rgba(59,130,246,0.65))',
                  boxSizing: 'border-box',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    right: -2,
                    top: -7,
                    fontSize: 12,
                    fontWeight: 600,
                    color: '#8B5CF6',
                    lineHeight: '14px',
                  }}
                >
                  ›
                </span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

const AI_AGENTIC_GROUPS = [
  {
    title: 'Generative AI',
    color: '#A855F7',
    items: [
      'LLMs',
      'Prompt Engineering',
      'Function Calling',
      'Structured Output',
      'LLM Evaluation',
    ],
  },

  {
    title: 'Agentic AI',
    color: '#8B5CF6',
    items: [
      'LangGraph',
      'LangChain',
      'Multi-Agent Systems',
      'Agent Orchestration',
      'Supervisor Agents',
      'Tool Calling',
    ],
  },

  {
    title: 'RAG & Retrieval',
    color: '#6366F1',
    items: [
      'RAG',
      'Hybrid Retrieval',
      'Vector Search',
      'Semantic Search',
      'Reranking',
      'Metadata Filtering',
    ],
  },

  {
    title: 'Multimodal AI',
    color: '#EC4899',
    items: [
      'VLM',
      'Multimodal RAG',
      'Image Understanding',
      'Document Intelligence',
      'Vision + LLM',
    ],
  },

  {
    title: 'AI Architecture',
    color: '#3B82F6',
    items: [
      'Agent Workflows',
      'State Management',
      'Human-in-the-Loop',
      'Memory',
      'Retries & Recovery',
      'Parallel Execution',
    ],
  },

  {
    title: 'AI Evaluation',
    color: '#14B8A6',
    items: [
      'Groundedness',
      'Faithfulness',
      'Relevance',
      'Hallucination Detection',
      'LLM-as-a-Judge',
      'Golden Dataset',
    ],
  },
];
function AISkillCard({
  group,
}: {
  group: {
    title: string;
    color: string;
    items: string[];
  };
}) {
  return (
    <div
      style={{
        background: '#08182D',
        border: '1px solid #173456',
        borderRadius: 10,
        padding: '14px 16px',
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor =
          `${group.color}70`;

        e.currentTarget.style.transform =
          'translateY(-2px)';

        e.currentTarget.style.boxShadow =
          `0 8px 25px ${group.color}12`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor =
          '#173456';

        e.currentTarget.style.transform =
          'translateY(0)';

        e.currentTarget.style.boxShadow =
          'none';
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 12,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: group.color,
            boxShadow:
              `0 0 8px ${group.color}90`,
            flexShrink: 0,
          }}
        />

        <span
          style={{
            fontSize: 10,
            fontWeight: 600,
            color: '#E0E8F5',
          }}
        >
          {group.title}
        </span>
      </div>

      {/* Skills */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 6,
        }}
      >
        {group.items.map((item) => (
          <span
            key={item}
            style={{
              padding: '6px 9px',
              borderRadius: 6,
              border:
                `1px solid ${group.color}35`,
              background:
                `${group.color}0D`,
              color: '#B9C5D8',
              fontSize: 8.5,
              fontWeight: 500,
              lineHeight: 1.2,
              transition: 'all 0.2s ease',
              cursor: 'default',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color =
                '#FFFFFF';

              e.currentTarget.style.borderColor =
                `${group.color}80`;

              e.currentTarget.style.background =
                `${group.color}18`;

              e.currentTarget.style.transform =
                'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color =
                '#B9C5D8';

              e.currentTarget.style.borderColor =
                `${group.color}35`;

              e.currentTarget.style.background =
                `${group.color}0D`;

              e.currentTarget.style.transform =
                'translateY(0)';
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
// ── Skills Section ───────────────────────────────────────────────────────────
function SkillsSection() {
  const ref = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      ref={ref}
      id="skills"
      className="reveal"
      style={{
        padding: '56px 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 60px',
        }}
        className="section-pad"
      >

        {/* ================================================= */}
        {/* SECTION HEADER                                    */}
        {/* ================================================= */}

        <SectionLabel
          number="02"
          label="TECHNICAL SKILLS"
        />

        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 28,
          }}
        >
          Technologies I{' '}
          <span className="gradient-text">
            Work With
          </span>
        </h2>


        {/* ================================================= */}
        {/* AGENTIC AI FLOW                                   */}
        {/* ================================================= */}

        <SkillFlow
          title="AGENTIC AI + RAG — END-TO-END WORKFLOW"
          flow={AI_FLOW}
        />


        {/* ================================================= */}
        {/* RAG FLOW                                          */}
        {/* ================================================= */}

        <SkillFlow
          title="RAG — END-TO-END RETRIEVAL WORKFLOW"
          flow={RAG_FLOW}
        />


        {/* ================================================= */}
        {/* AI & AGENTIC SKILLS                               */}
        {/* ================================================= */}

        <div
          style={{
            marginTop: 36,
            marginBottom: 18,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 8,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#A855F7',
                boxShadow:
                  '0 0 10px rgba(168,85,247,0.7)',
              }}
            />

            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: '#E0E8F5',
                letterSpacing: '0.4px',
              }}
            >
              AI & AGENTIC SKILLS
            </span>
          </div>

          <p
            style={{
              fontSize: 9,
              color: '#71819A',
              margin: 0,
            }}
          >
            Generative AI, RAG, agent orchestration,
            multimodal systems and AI evaluation
          </p>
        </div>


        {/* ================================================= */}
        {/* AI SKILL GRID                                     */}
        {/* ================================================= */}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(3, minmax(0, 1fr))',
            gap: 14,
            marginBottom: 32,
          }}
          className="ai-skills-grid"
        >
          {AI_AGENTIC_GROUPS.map((group) => (
            <AISkillCard
              key={group.title}
              group={group}
            />
          ))}
        </div>


        {/* ================================================= */}
        {/* TRADITIONAL TECHNICAL SKILLS                      */}
        {/* ================================================= */}

        <div
          style={{
            marginTop: 20,
            marginBottom: 18,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#3B82F6',
                boxShadow:
                  '0 0 8px rgba(59,130,246,0.7)',
              }}
            />

            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: '#E0E8F5',
                letterSpacing: '0.4px',
              }}
            >
              SOFTWARE & DATA SKILLS
            </span>
          </div>
        </div>


        {/* ================================================= */}
        {/* EXISTING TECHNICAL SKILLS                         */}
        {/* ================================================= */}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(3, minmax(0, 1fr))',
            gap: 14,
          }}
          className="skills-grid"
        >
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="skill-card"
              style={{
                background: '#08182D',
                border: '1px solid #173456',
                borderRadius: 10,
                padding: '14px 16px',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  `${group.color}55`;

                e.currentTarget.style.transform =
                  'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  '#173456';

                e.currentTarget.style.transform =
                  'translateY(0)';
              }}
            >
              {/* Group Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: group.color,
                    boxShadow:
                      `0 0 8px ${group.color}80`,
                  }}
                />

                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: '#E0E8F5',
                  }}
                >
                  {group.title}
                </span>
              </div>

              {/* Technology Chips */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 6,
                }}
              >
                {group.items.map((item) => (
                  <TechChip
                    key={item}
                    label={item}
                    color={group.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ── Projects Section ─────────────────────────────────────────────────────────
const PROJECTS = [
  {
    title: 'Agentic Crop Advisory & Field Intelligence Platform',

    desc: 'Multi-agent advisory system for crop guidance, pest management, nutrition and product selection using multimodal inputs.',

    tags: ['Agentic AI', 'LangGraph', 'VLM', 'RAG', 'Azure'],

    tagColors: [
      '#A855F7',
      '#3B82F6',
      '#22D3EE',
      '#F472B6',
      '#60A5FA',
    ],

    gradient:
      'linear-gradient(135deg, #0a2010 0%, #0f3020 50%, #071828 100%)',

    accent: '#22D3EE',

    icon: '🌱',

    image:
      'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=80',

    overview:
      'Built a supervisor-led multi-agent advisory platform for complex agricultural questions covering crop guidance, pest management, nutrition and product selection.',

    architecture:
      'User Query → Supervisor → Specialist Agents → Retrieval → Synthesis → Validation → Grounded Response',

    contributions: [
      'Designed a LangGraph state graph with planner, specialist, synthesis and validation nodes.',
      'Implemented specialist agents for crop advisory, pest management, nutrition and research analysis.',
      'Integrated retrieval tools, agent memory, tool calling and multimodal inputs.',
      'Added deterministic guardrails, bounded retries and human-in-the-loop validation.',
      'Implemented parallel specialist execution and agent trajectory evaluation.',
    ],

    technologies:
      'Python, LangGraph, LangChain, Azure OpenAI, GPT-4o, GPT-4o Vision, Azure Cosmos DB Vector Search, FastAPI, React, Docker',
  },

  {
    title: 'Buy Box Price and Sales Price Prediction',

    desc: 'Predicted Buy Box and Sales Prices using linear regression and PCA. Analysed key drivers and evaluated with R², RMSE, MAE and MSE.',

    tags: [
      'Machine Learning',
      'Regression',
      'PCA',
      'Python',
    ],

    tagColors: [
      '#F472B6',
      '#A855F7',
      '#60A5FA',
      '#3B82F6',
    ],

    gradient:
      'linear-gradient(135deg, #0c1428 0%, #101830 50%, #0a1020 100%)',

    accent: '#A855F7',

    icon: '📊',

    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',

    overview:
      'Regression-based pricing prediction project focused on estimating Buy Box Price and Sales Price while identifying important pricing drivers.',

    architecture:
      'Data Preparation → EDA → Feature Engineering → PCA → Regression → Evaluation → Driver Analysis',

    contributions: [
      'Built a regression workflow for Buy Box Price and Sales Price prediction.',
      'Applied PCA as part of dimensionality reduction and feature analysis.',
      'Analysed important positive and negative pricing drivers.',
      'Evaluated model performance using R², Adjusted R², RMSE, MAE and MSE.',
      'Used statistical assumptions and model diagnostics to assess regression quality.',
    ],

    technologies:
      'Python, Linear Regression, PCA, Feature Engineering, Statistical Analysis, R², Adjusted R², RMSE, MAE, MSE',
  },

  {
    title: 'RAG Policy Q&A Assistant',

    desc: 'Enterprise RAG solution for policy Q&A using Azure OpenAI and Cosmos DB with vector search and hybrid retrieval.',

    tags: [
      'Generative AI',
      'RAG',
      'Azure OpenAI',
      'Vector Search',
    ],

    tagColors: [
      '#A855F7',
      '#22D3EE',
      '#60A5FA',
      '#3B82F6',
    ],

    gradient:
      'linear-gradient(135deg, #0d0a1e 0%, #120d28 50%, #0a1228 100%)',

    accent: '#168BFF',

    icon: '🤖',

    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',

    overview:
      'Enterprise RAG solution designed for policy question answering using Azure OpenAI, Cosmos DB, vector search and hybrid retrieval.',

    architecture:
      'User Query → Query Processing → Hybrid Retrieval → Reranking → Context Assembly → LLM → Grounded Answer',

    contributions: [
      'Designed an enterprise retrieval-augmented generation workflow for policy documents.',
      'Implemented semantic and metadata-aware document retrieval.',
      'Integrated Azure OpenAI for grounded question answering.',
      'Used vector search and hybrid retrieval for relevant context selection.',
      'Designed the workflow to reduce unsupported responses through grounded generation.',
    ],

    technologies:
      'Python, Azure OpenAI, GPT, Azure Cosmos DB, Vector Search, Hybrid Retrieval, RAG, FastAPI',
  },
];
const TECH_ICONS: Record<string, React.ElementType> = {
  'Agentic AI': Bot,
  'LangGraph': Workflow,
  'VLM': Eye,
  'RAG': Database,
  'Azure': Cloud,

  'Machine Learning': Brain,
  'Regression': TrendingUp,
  'PCA': ScanLine,
  'Python': Code2,

  'Generative AI': Sparkles,
  'Azure OpenAI': Cloud,
  'Vector Search': Search,
};

function ProjectTag({
  label,
  Icon,
  color,
}: {
  label: string;
  Icon: React.ElementType;
  color: string;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        padding: '6px 9px',
        borderRadius: 6,
        border: `1px solid ${color}35`,
        background: `${color}0D`,
        color: '#AAB8CC',
        fontSize: 8.5,
        fontWeight: 500,
        whiteSpace: 'nowrap',
      }}
    >
      <Icon
        size={12}
        color={color}
        style={{
          flexShrink: 0,
        }}
      />

      <span>{label}</span>
    </div>
  );
}
function ProjectDetails({
  project,
  onClose,
}: {
  project: typeof PROJECTS[0];
  onClose: () => void;
}) {
  return (
    <div
      style={{
        flex: 1,
        minWidth: 0,
        background: '#07162B',
        border: `1px solid ${project.accent}55`,
        borderRadius: 12,
        padding: '24px 26px',
        animation: 'projectDetailsIn 0.35s ease',
        boxShadow: `0 20px 50px ${project.accent}12`,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 20,
          marginBottom: 20,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              color: project.accent,
              letterSpacing: '1px',
              marginBottom: 7,
            }}
          >
            PROJECT DETAILS
          </div>

          <h3
            style={{
              margin: 0,
              fontSize: 20,
              lineHeight: 1.3,
              fontWeight: 700,
              color: '#E0E8F5',
            }}
          >
            {project.title}
          </h3>
        </div>

        <button
          onClick={onClose}
          style={{
            border: `1px solid ${project.accent}45`,
            background: `${project.accent}10`,
            color: project.accent,
            borderRadius: 6,
            padding: '7px 11px',
            fontSize: 10,
            fontWeight: 600,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          ← Back
        </button>
      </div>

      {/* Divider */}
      <div
        style={{
          height: 1,
          background: '#173456',
          marginBottom: 20,
        }}
      />

      {/* Overview */}
      <div style={{ marginBottom: 20 }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: project.accent,
            letterSpacing: '0.8px',
            marginBottom: 8,
          }}
        >
          OVERVIEW
        </div>

        <p
          style={{
            margin: 0,
            fontSize: 11.5,
            lineHeight: 1.7,
            color: '#8FA1BA',
          }}
        >
          {project.overview}
        </p>
      </div>

      {/* Architecture */}
      <div
        style={{
          padding: '14px 16px',
          borderRadius: 9,
          border: `1px solid ${project.accent}30`,
          background: `${project.accent}08`,
          marginBottom: 22,
        }}
      >
        <div
          style={{
            fontSize: 9.5,
            fontWeight: 700,
            color: project.accent,
            letterSpacing: '0.8px',
            marginBottom: 8,
          }}
        >
          ARCHITECTURE
        </div>

        <div
          style={{
            fontSize: 10.5,
            lineHeight: 1.7,
            color: '#AAB8CC',
          }}
        >
          {project.architecture}
        </div>
      </div>

      {/* Contributions */}
      <div style={{ marginBottom: 22 }}>
        <div
          style={{
            fontSize: 9.5,
            fontWeight: 700,
            color: project.accent,
            letterSpacing: '0.8px',
            marginBottom: 12,
          }}
        >
          KEY CONTRIBUTIONS
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          {project.contributions.map((item) => (
            <div
              key={item}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 9,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  minWidth: 7,
                  marginTop: 5,
                  borderRadius: '50%',
                  background: project.accent,
                  boxShadow: `0 0 8px ${project.accent}80`,
                }}
              />

              <span
                style={{
                  fontSize: 10.5,
                  lineHeight: 1.55,
                  color: '#8FA1BA',
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div
        style={{
          borderTop: '1px solid #173456',
          paddingTop: 18,
        }}
      >
        <div
          style={{
            fontSize: 9.5,
            fontWeight: 700,
            color: project.accent,
            letterSpacing: '0.8px',
            marginBottom: 8,
          }}
        >
          TECHNOLOGIES
        </div>

        <p
          style={{
            margin: 0,
            fontSize: 10.5,
            lineHeight: 1.65,
            color: '#8293AD',
          }}
        >
          {project.technologies}
        </p>
      </div>
    </div>
  );
}
function ProjectCard({
  project,
  delay,
  selected,
  onView,
}: {
  project: typeof PROJECTS[0];
  delay: number;
  selected?: boolean;
  onView: () => void;
}) {
  return (
    <div
      className="project-card"
      style={{
        background: '#07162B',
        border: `1px solid ${
          selected ? project.accent : '#173456'
        }`,
        borderRadius: 12,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        animationDelay: `${delay}ms`,
        boxShadow: selected
          ? `0 0 30px ${project.accent}12`
          : 'none',
      }}
    >
      {/* Image */}
      <div
        style={{
          height: 150,
          background: project.gradient,
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        {/* Image */}
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.42,
            }}
          />
        )}

        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            // background:
            //   'linear-gradient(180deg, rgba(78, 96, 126, 0.2), rgba(172, 201, 242, 0.92))',
          }}
        />

        {/* Icon */}
        {/* <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 68,
            height: 68,
            borderRadius: 18,
            background: `${project.accent}18`,
            border: `1px solid ${project.accent}55`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 30,
            backdropFilter: 'blur(8px)',
            boxShadow: `0 0 30px ${project.accent}20`,
          }}
        >
          {project.icon}
        </div> */}
      </div>

      {/* Content */}
      <div
        style={{
          padding: '16px 16px 18px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        {/* Tags */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 5,
            marginBottom: 13,
          }}
        >
          {project.tags.map((tag, i) => (
  <TechChip
    key={tag}
    label={tag}
    color={project.tagColors[i] || '#3B82F6'}
    Icon={TECH_ICONS[tag] || Code2}
  />
))}
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: '#E0E8F5',
            lineHeight: 1.4,
            margin: '0 0 9px',
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: 10.5,
            color: '#8293AD',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {project.desc}
        </p>

        {/* Button */}
        <button
          onClick={onView}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            background: 'none',
            border: 'none',
            padding: 0,
            marginTop: 18,
            color: project.accent,
            fontSize: 11,
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'Inter',
            alignSelf: 'flex-start',
          }}
        >
          View Project
          <span
            style={{
              fontSize: 14,
              transition: 'transform 0.2s ease',
            }}
          >
            →
          </span>
        </button>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const ref = useReveal() as React.RefObject<HTMLElement>;

  const [selectedProject, setSelectedProject] =
    React.useState<number | null>(null);

  const selected =
    selectedProject !== null
      ? PROJECTS[selectedProject]
      : null;

  return (
    <section
      ref={ref}
      id="projects"
      className="reveal"
      style={{
        borderTop: '1px solid #173456',
        padding: '56px 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 60px',
        }}
        className="section-pad"
      >
        {/* Section heading */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 28,
          }}
        >
          <div>
            <SectionLabel
              number="03"
              label="PROJECTS"
            />

            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                margin: 0,
              }}
            >
              My{' '}
              <span className="gradient-text">
                Work
              </span>
            </h2>
          </div>

          {/* {selectedProject === null && (
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#A855F7',
                fontSize: 11,
                fontWeight: 600,
                fontFamily: 'Inter',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
              }}
            >
              View All Projects
              <span>→</span>
            </button>
          )} */}
        </div>

        {/* ================================================= */}
        {/* NORMAL STATE                                      */}
        {/* ================================================= */}

        {selectedProject === null ? (
          <div
            className="projects-grid"
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(3, minmax(0, 1fr))',
              gap: 18,
            }}
          >
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                delay={index * 80}
                onView={() =>
                  setSelectedProject(index)
                }
              />
            ))}
          </div>
        ) : (
          /* ================================================= */
          /* EXPANDED STATE                                   */
          /* ================================================= */

          <div
            className="project-expanded-layout"
            style={{
              display: 'grid',
              gridTemplateColumns:
                'minmax(300px, 0.85fr) minmax(0, 1.5fr)',
              gap: 18,
              alignItems: 'stretch',
              animation:
                'projectExpandIn 0.35s ease',
            }}
          >
            {/* LEFT — ORIGINAL PROJECT CARD */}
            <ProjectCard
              project={selected!}
              selected
              delay={0}
              onView={() =>
                setSelectedProject(null)
              }
            />

            {/* RIGHT — DETAILS */}
            <ProjectDetails
              project={selected!}
              onClose={() =>
                setSelectedProject(null)
              }
            />
          </div>
        )}
      </div>
    </section>
  );
}

// ── Experience Section ───────────────────────────────────────────────────────
const BULLETS = [
  'Built a supervisor-led multi-agent advisory assistant using LangGraph',
  'Designed planner, specialist, synthesis and validation nodes',
  'Implemented hybrid retrieval, metadata filtering and reranking',
  'Integrated multimodal AI and visual-grounded responses',
  'Applied guardrails and evaluation workflows',
  'Worked with FastAPI, Docker and Azure CI/CD',
]
const EXPERIENCE_SKILLS = [
  {
    label: 'Agentic AI',
    Icon: Bot,
    color: '#A855F7',
  },
  {
    label: 'LangGraph',
    Icon: Workflow,
    color: '#3B82F6',
  },
  {
    label: 'LangChain',
    Icon: Network,
    color: '#22D3EE',
  },
  {
    label: 'Generative AI',
    Icon: Sparkles,
    color: '#F472B6',
  },
  {
    label: 'RAG',
    Icon: Database,
    color: '#60A5FA',
  },
  {
    label: 'VLM',
    Icon: Eye,
    color: '#22D3EE',
  },
  {
    label: 'Multimodal AI',
    Icon: Layers,
    color: '#A855F7',
  },

  {
    label: 'Azure OpenAI',
    Icon: Cloud,
    color: '#168BFF',
  },
  {
    label: 'Azure',
    Icon: Cloud,
    color: '#60A5FA',
  },
  {
    label: 'Cosmos DB',
    Icon: Database,
    color: '#22D3EE',
  },
  {
    label: 'Vector Search',
    Icon: Search,
    color: '#A855F7',
  },
  {
    label: 'Hybrid Retrieval',
    Icon: FileSearch,
    color: '#3B82F6',
  },
  {
    label: 'Reranking',
    Icon: BarChart3,
    color: '#F472B6',
  },

  {
    label: 'Python',
    Icon: Code2,
    color: '#3B82F6',
  },
  {
    label: 'FastAPI',
    Icon: Zap,
    color: '#22D3EE',
  },
  {
    label: 'Machine Learning',
    Icon: Brain,
    color: '#A855F7',
  },
  {
    label: 'NLP',
    Icon: Braces,
    color: '#60A5FA',
  },
  {
    label: 'Embeddings',
    Icon: Cpu,
    color: '#F472B6',
  },

  {
    label: 'Docker',
    Icon: Container,
    color: '#3B82F6',
  },
  {
    label: 'CI/CD',
    Icon: GitBranch,
    color: '#22D3EE',
  },
  {
    label: 'Git',
    Icon: GitPullRequest,
    color: '#F472B6',
  },
  {
    label: 'React',
    Icon: Boxes,
    color: '#60A5FA',
  },

  {
    label: 'LLM Evaluation',
    Icon: BarChart3,
    color: '#A855F7',
  },
  {
    label: 'Guardrails',
    Icon: ShieldCheck,
    color: '#22D3EE',
  },
  {
    label: 'Tool Calling',
    Icon: Server,
    color: '#3B82F6',
  },
]
function SkillsCarousel() {
  const [offset, setOffset] = useState(0)

  const skills = [
    { label: 'Agentic AI', Icon: Bot, color: '#A855F7' },
    { label: 'LangGraph', Icon: Workflow, color: '#3B82F6' },
    { label: 'LangChain', Icon: Network, color: '#22D3EE' },
    { label: 'Generative AI', Icon: Sparkles, color: '#F472B6' },
    { label: 'RAG', Icon: Database, color: '#60A5FA' },
    { label: 'VLM', Icon: Eye, color: '#22D3EE' },
    { label: 'Multimodal AI', Icon: Layers, color: '#A855F7' },
    { label: 'Azure OpenAI', Icon: Cloud, color: '#168BFF' },
    { label: 'Azure', Icon: Cloud, color: '#60A5FA' },
    { label: 'Cosmos DB', Icon: Database, color: '#22D3EE' },
    { label: 'Vector Search', Icon: Search, color: '#A855F7' },
    { label: 'Hybrid Retrieval', Icon: FileSearch, color: '#3B82F6' },
    { label: 'Reranking', Icon: BarChart3, color: '#F472B6' },
    { label: 'Python', Icon: Code2, color: '#3B82F6' },
    { label: 'FastAPI', Icon: Zap, color: '#22D3EE' },
    { label: 'Machine Learning', Icon: Brain, color: '#A855F7' },
    { label: 'NLP', Icon: Braces, color: '#60A5FA' },
    { label: 'Embeddings', Icon: Cpu, color: '#F472B6' },
    { label: 'Docker', Icon: Container, color: '#3B82F6' },
    { label: 'CI/CD', Icon: GitBranch, color: '#22D3EE' },
    { label: 'Git', Icon: GitPullRequest, color: '#F472B6' },
    { label: 'React', Icon: Boxes, color: '#60A5FA' },
    { label: 'LLM Evaluation', Icon: BarChart3, color: '#A855F7' },
    { label: 'Guardrails', Icon: ShieldCheck, color: '#22D3EE' },
    { label: 'Tool Calling', Icon: Server, color: '#3B82F6' },
  ]

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => {
        const next = prev - 1

        // Once first set finishes,
        // jump back to beginning.
        if (Math.abs(next) >= skills.length) {
          return 0
        }

        return next
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [skills.length])

  // Left arrow
  const moveLeft = () => {
    setOffset(prev => {
      const next = prev - 1

      if (Math.abs(next) >= skills.length) {
        return 0
      }

      return next
    })
  }

  // Right arrow
  const moveRight = () => {
    setOffset(prev => {
      if (prev >= 0) {
        return -(skills.length - 1)
      }

      return prev + 1
    })
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minWidth: 0,
        maxWidth: '100%',
        marginTop: 18,
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* LEFT BUTTON */}
      <button
        onClick={moveLeft}
        style={{
          position: 'absolute',
          left: 2,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,

          width: 28,
          height: 28,

          borderRadius: '50%',
          border: '1px solid #24466B',
          background: '#08182D',
          color: '#60A5FA',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          cursor: 'pointer',
        }}
      >
        <ChevronLeft size={15} />
      </button>

      {/* VIEWPORT */}
      <div
        style={{
          width: '100%',
          minWidth: 0,
          maxWidth: '100%',
          overflow: 'hidden',

          // Space for arrows
          padding: '2px 34px',

          boxSizing: 'border-box',
        }}
      >
        {/* TRACK */}
        <div
          style={{
            display: 'flex',
            gap: 8,

            width: 'max-content',

            transform: `translateX(${offset * 100}px)`,

            transition:
              'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {[...skills, ...skills].map((skill, index) => {
            const Icon = skill.Icon

            return (
              <div
                key={`${skill.label}-${index}`}
                style={{
                  width: 92,
                  height: 76,

                  flexShrink: 0,

                  borderRadius: 10,

                  border:
                    `1px solid ${skill.color}35`,

                  background:
                    `${skill.color}0D`,

                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',

                  gap: 7,

                  boxSizing: 'border-box',

                  transition:
                    'border-color 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    `${skill.color}90`

                  e.currentTarget.style.transform =
                    'translateY(-3px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    `${skill.color}35`

                  e.currentTarget.style.transform =
                    'translateY(0)'
                }}
              >
                <Icon
                  size={20}
                  color={skill.color}
                  strokeWidth={2.2}
                />

                <span
                  style={{
                    fontSize: 9.5,
                    color: '#A8B6CB',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {skill.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* RIGHT BUTTON */}
      <button
        onClick={moveRight}
        style={{
          position: 'absolute',
          right: 2,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,

          width: 28,
          height: 28,

          borderRadius: '50%',
          border: '1px solid #24466B',
          background: '#08182D',
          color: '#60A5FA',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          cursor: 'pointer',
        }}
      >
        <ChevronRight size={15} />
      </button>
    </div>
  )
}
function ExperienceSection() {
  const ref = useReveal() as React.RefObject<HTMLElement>
  const [expanded, setExpanded] = useState(false)
  const bullets = expanded ? BULLETS : BULLETS.slice(0, 4)

  return (
    <section ref={ref} id="experience" className="reveal" style={{
      borderTop: '1px solid #173456', padding: '56px 0', position: 'relative', zIndex: 1
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 60px' }} className="section-pad">
        <SectionLabel number="04" label="EXPERIENCE" />
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 28 }}>
          Professional <span className="gradient-text">Experience</span>
        </h2>

        <div
  style={{
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)',
    gap: 28,
    alignItems: 'start',
    width: '100%',
  }}
  className="exp-grid"
>
          {/* Main panel */}
          <div
  style={{
    background: '#08182D',
    border: '1px solid #173456',
    borderRadius: 12,
    padding: '24px 26px',
    minWidth: 0,
    width: '100%',
    boxSizing: 'border-box',
  }}
>
            {/* Timeline dot */}
            <div
  style={{
    display: 'flex',
    alignItems: 'flex-start',
    gap: 16,
    minWidth: 0,
    width: '100%',
  }}
>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, paddingTop: 4 }}>
                <div style={{
                  width: 12, height: 12, borderRadius: '50%', flexShrink: 0,
                  background: 'linear-gradient(135deg, #168BFF, #A855F7)',
                  boxShadow: '0 0 12px rgba(168,85,247,0.5)'
                }} />
                <div style={{ width: 1, flex: 1, minHeight: 80, background: 'linear-gradient(180deg, #A855F7, transparent)', marginTop: 4 }} />
              </div>
              <div
  style={{
    flex: 1,
    minWidth: 0,
    width: '100%',
  }}
>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                  <div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: '#E0E8F5', margin: '0 0 4px' }}>
                      Prolytics IT Private Limited
                    </h3>
                    <p style={{ fontSize: 11.5, color: '#A78BFA', fontWeight: 500, margin: '0 0 2px' }}>
                      AI/ML Engineer (Agentic AI &amp; Generative AI Systems)
                    </p>
                    <p style={{ fontSize: 10, color: '#8293AD', margin: 0 }}>
                      Client: <span style={{ color: '#60A5FA' }}>Syngenta — Global Agribusiness</span> · Bengaluru, India
                    </p>
                  </div>
                  <span style={{
                    fontSize: 9, padding: '4px 10px', borderRadius: 4,
                    background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.3)',
                    color: '#C4B5FD', fontWeight: 500, whiteSpace: 'nowrap', height: 'fit-content'
                  }}>
                    Sep 2023 – Present
                  </span>
                </div>

                <ul style={{ margin: '14px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {bullets.map((b, i) => (
                    <li key={i} style={{ display: 'flex', gap: 10, fontSize: 11, color: '#A8B6CB', lineHeight: 1.5 }}>
                      <span style={{ color: '#168BFF', flexShrink: 0, marginTop: 1 }}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {!expanded && (
                  <button
                    onClick={() => setExpanded(true)}
                    style={{
                      marginTop: 12, background: 'none', border: 'none',
                      color: '#A855F7', fontSize: 10.5, cursor: 'pointer',
                      fontFamily: 'Inter', fontWeight: 500,
                      display: 'flex', alignItems: 'center', gap: 4, padding: 0
                    }}
                  >
                    Read more ↓
                  </button>
                )}

                <div style={{ marginTop: 18 }}>
  <SkillsCarousel />
</div>
              </div>
            </div>
          </div>

          {/* Right visual panel */}
          <div style={{
            background: 'linear-gradient(135deg, #07152A, #0a1a2e)',
            border: '1px solid #173456', borderRadius: 12, padding: 20,
            display: 'flex', flexDirection: 'column', gap: 14
          }} className="hidden-mobile">
            <div style={{ fontSize: 11, fontWeight: 600, color: '#8293AD', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Core Competencies
            </div>
            {[
              { label: 'Agentic AI Systems', pct: 92, color: '#A855F7' },
              { label: 'Generative AI / RAG', pct: 88, color: '#168BFF' },
              { label: 'Frontend (React)', pct: 80, color: '#22D3EE' },
              { label: 'Cloud & DevOps', pct: 75, color: '#60A5FA' },
              { label: 'NLP,DL & ML ', pct: 75, color: '#8fc0fd' },
            ].map(({ label, pct, color }) => (
              <div key={label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5, fontSize: 10, color: '#A8B6CB' }}>
                  <span>{label}</span>
                  <span style={{ color }}>{pct}%</span>
                </div>
                <div style={{ height: 4, borderRadius: 2, background: '#173456', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', width: `${pct}%`,
                    background: `linear-gradient(90deg, ${color}, ${color}80)`,
                    borderRadius: 2,
                    boxShadow: `0 0 8px ${color}60`
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Contact / Footer Section ─────────────────────────────────────────────────
function ContactSection() {
  const ref = useReveal() as React.RefObject<HTMLElement>
  return (
    <section ref={ref} id="contact" className="reveal" style={{
      borderTop: '1px solid #173456', padding: '56px 0 0', position: 'relative', zIndex: 1
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 60px' }} className="section-pad">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <SectionLabel number="05" label="CONTACT" />
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p style={{ fontSize: 12, color: '#8293AD', maxWidth: 400, margin: '0 auto' }}>
            Open to AI/ML and frontend opportunities. Feel free to reach out for collaborations or just a conversation.
          </p>
        </div>

        <div
  style={{
    display: 'flex',
    gap: 14,
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 48,
  }}
>
  {[
    {
      label: '📧 sanjeevakumarm4u@gmail.com',
      href: 'mailto:sanjeevakumarm4u@gmail.com',
      color: '#A855F7',
    },
    {
      label: '📱 +91 95153 85297',
      href: 'tel:+919515385297',
      color: '#168BFF',
    },
    {
      label: '📍 Bengaluru, India',
      href: 'https://www.google.com/maps/search/?api=1&query=Bengaluru%2C%20India',
      color: '#22D3EE',
    },
  ].map(({ label, href, color }) => (
    <a
      key={label}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      style={{
        padding: '10px 18px',
        borderRadius: 8,
        background: '#08182D',
        border: `1px solid ${color}35`,
        fontSize: 11,
        color: '#A8B6CB',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        display: 'inline-flex',
        alignItems: 'center',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}90`
        e.currentTarget.style.color = '#E0E8F5'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${color}35`
        e.currentTarget.style.color = '#A8B6CB'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {label}
    </a>
  ))}
</div>
      </div>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid #173456', padding: '20px 60px',
        background: '#020B1A'
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }} className="footer-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <SKMonogram size={26} />
            <span style={{ fontSize: 12, fontWeight: 600, color: '#A8B6CB' }}>Sanjeeva Kumar M</span>
          </div>
          <div style={{ fontSize: 9, color: '#4A5F7A', textAlign: 'center' }}>
            © 2026 Sanjeeva Kumar M. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 14 }}>
            {[
              { href: 'https://github.com', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg> },
              { href: 'https://linkedin.com', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
            ].map(({ href, icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                style={{ color: '#4A5F7A', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#A8B6CB'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#4A5F7A'}
              >{icon}</a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  )
}

// ── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ background: '#030B19', minHeight: '100vh', position: 'relative' }}>
      <BgDeco />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-only { display: block !important; }
          .hero-container { padding: 0 20px !important; }
          .section-pad { padding: 0 20px !important; }
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; min-height: unset !important; padding: 32px 0 !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .exp-grid { grid-template-columns: 1fr !important; }
          .footer-inner { flex-direction: column !important; align-items: center !important; text-align: center !important; }
        }
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .hero-container { padding: 0 32px !important; }
          .section-pad { padding: 0 32px !important; }
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  )
}
