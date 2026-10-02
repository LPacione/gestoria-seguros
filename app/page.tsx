'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  FileCheck2,
  Camera,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'

const services = [
  {
    number: '01',
    icon: FileCheck2,
    title: 'Gestoría',
    text: 'Resuelvo tus trámites de forma clara, ágil y segura, sin vueltas ni sorpresas.',
    items: ['Inscripciones iniciales', 'Transferencias', 'Informes de dominio', 'Infracciones', 'Prendas', 'Altas y bajas impositivas'],
  },
  {
    number: '02',
    icon: ShieldCheck,
    title: 'Seguros',
    text: 'Te ayudo a encontrar la cobertura que realmente necesitás para cuidar lo que importa.',
    items: ['Auto y moto', 'Hogar', 'Comercio', 'Responsabilidad civil'],
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Asesoramiento personalizado',
    text: 'Te acompaño antes, durante y después de cada gestión para que tomes buenas decisiones.',
    items: ['Seguimiento online', 'Atención personalizada', 'Respuestas rápidas'],
  },
]

const faqs = [
  ['¿Qué documentación necesito para una transferencia?', 'Depende de cada caso, pero te indico todo lo necesario antes de comenzar para que no pierdas tiempo.'],
  ['¿Puedo contratar un seguro aunque el auto no esté a mi nombre?', 'Sí, existen distintas alternativas. Analizamos tu situación y buscamos la opción más conveniente.'],
  ['¿Trabajás a distancia?', 'Sí. Podemos hacer gran parte del proceso de forma online y coordinar la firma o entrega cuando sea necesario.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="site-shell">
      <div className="topbar"><span>Trámites en todo el país - Automotores, Motovehículos y Maquinarias</span><span className="topbar-contact"><Phone size={13} /> 2923 449859</span></div>
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Navegación principal">
          <a href="#inicio" className="brand" aria-label="Maria Belen Alvez inicio"><span className="brand-mark">MBA</span><span><strong>Maria Belen Alvez</strong><small>Gestoría & Seguros</small></span></a>
          <button className="menu-toggle" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a><a href="#como-trabajo" onClick={() => setMenuOpen(false)}>Cómo trabajo</a><a href="#preguntas" onClick={() => setMenuOpen(false)}>Preguntas</a><a className="nav-cta" href="#contacto" onClick={() => setMenuOpen(false)}>Hablemos <ArrowUpRight size={16} /></a>
          </div>
        </nav>
      </header>

      <section id="inicio" className="hero container">
        <div className="hero-copy"><p className="eyebrow"><span /> Tu trámite, en buenas manos</p><h1>Tu vehículo.<br /><em>En orden.</em></h1><p className="hero-lead">Gestoría y seguros para autos, motos y maquinarias, con la tranquilidad de contar con un equipo que te acompaña en cada paso.</p><div className="hero-actions"><a className="button button-primary" href="#contacto">Quiero asesorarme <ArrowUpRight size={18} /></a><a className="text-link" href="#servicios">Conocé mis servicios <span>↓</span></a></div><div className="hero-proof"></div></div>
        <div className="hero-visual"><div className="image-frame"><img src="/hero-automotor.png" alt="Profesional asesorando sobre trámites y seguros del automotor" /></div><div className="floating-note"><span className="note-icon"><Check size={15} /></span><span><strong>Gestión resuelta</strong><small>Simple. Segura. A tiempo.</small></span></div><div className="round-stamp">DESDE<br /><strong>1997</strong><br />CON VOS</div></div>
      </section>

      <section className="trust-strip"><div className="container trust-inner"><span>UN ACOMPAÑAMIENTO QUE MARCA LA DIFERENCIA</span><div><span><Check size={15} /> Atención cercana</span><span><Check size={15} /> Gestión transparente</span><span><Check size={15} /> Respuesta rápida</span></div></div></section>

      <section id="servicios" className="services-section container"><div className="section-intro"><div><p className="eyebrow"><span /> Lo que hago</p><h2>Todo lo que necesitás,<br /><em>en un solo lugar.</em></h2></div><p>Ya sea que estés comprando, vendiendo o buscando proteger tu vehículo, estoy para hacer que el proceso sea más simple.</p></div><div className="service-grid">{services.map(({ number, icon: Icon, title, text, items }) => <article className="service-card" key={number}><div className="service-top"><span className="service-number">{number}</span><Icon size={27} strokeWidth={1.4} /></div><h3>{title}</h3><p>{text}</p><ul>{items.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul><a href="#contacto" className="card-link">Quiero saber más <ArrowUpRight size={16} /></a></article>)}</div></section>

      <section id="como-trabajo" className="process-section"><div className="container process-grid"><div><p className="eyebrow light"><span /> Así de simple</p><h2>Resolverlo bien<br /><em>también puede ser fácil.</em></h2><p className="process-copy">Me ocupo de cada detalle para que vos puedas ocuparte de lo importante. Sin lenguaje complicado, sin trámites interminables.</p><a className="button button-light" href="#contacto">Empezar una consulta <ArrowUpRight size={18} /></a></div><div className="steps"><div className="step"><b>01</b><span><strong>Me contás qué necesitás</strong><small>Por WhatsApp, mail o en la oficina.</small></span></div><div className="step"><b>02</b><span><strong>Te explico las opciones</strong><small>Presupuesto claro y sin compromiso.</small></span></div><div className="step"><b>03</b><span><strong>Lo gestiono por vos</strong><small>Seguimiento en cada etapa hasta el final.</small></span></div></div></div></section>

      <section id="preguntas" className="faq-section container"><div><p className="eyebrow"><span /> Para tener en cuenta</p><h2>Preguntas<br /><em>frecuentes.</em></h2><p className="faq-intro">Si no encontrás lo que buscás, escribime. Siempre es mejor preguntar.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'active' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={20} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></section>

      <section id="contacto" className="contact-section"><div className="container contact-inner"><div><p className="eyebrow light"><span /> ¿Hablamos?</p><h2>Tu próxima gestión<br /><em>empieza acá.</em></h2><p>Contame qué necesitás y te respondo a la brevedad.</p></div><div className="contact-details"><a href="https://wa.me/542923449859" className="contact-line"><span><Phone size={19} /></span><div><small>WhatsApp</small><strong>2923 449859</strong></div><ArrowUpRight /></a><a href="mailto:mariabelenalvez@hotmail.com" className="contact-line"><span><Mail size={19} /></span><div><small>Email</small><strong>mariabelenalvez@hotmail.com</strong></div><ArrowUpRight /></a><div className="contact-line"><span><MapPin size={19} /></span><div><small>Lugar de atención</small><strong>Dr. Rivkin 546</strong></div></div></div></div></section>
      <footer className="footer container"><a href="#inicio" className="brand"><span className="brand-mark">MBA</span><span><strong>Maria Belen Alvez</strong><small>Gestoría & Seguros</small></span></a><p>Gestiones que avanzan. Personas que acompañan.</p><div className="footer-social"></div></footer>
    </main>
  )
}

