import { useEffect, useRef, useState } from 'react'
import {
  Zap,
  Home,
  Car,
  Cpu,
  Lightbulb,
  Building2,
  Phone,
  MessageSquare,
  Star,
  Shield,
  CheckCircle,
  MapPin,
  Mail,
  ChevronLeft,
  ChevronRight,
  Upload,
  Award,
  Clock,
  Percent,
  Share2,
} from 'lucide-react'
// ── Schema JSON-LD ──────────────────────────────────────────────────────────
function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    "name": "Klostermann Electric LLC",
    "url": "#",
    "telephone": "+19785899500",
    "email": "joe@klostermannelectric.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "225 Stedman Street Suite 11",
      "addressLocality": "Lowell",
      "addressRegion": "MA",
      "postalCode": "01851",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.6334,
      "longitude": -71.3162
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "64"
    },
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "07:00",
        "closes": "18:00"
      }
    ],
    "slogan": "The Power of Excellence",
    "description": "Licensed Master Electrician serving Lowell, MA and surrounding towns. Residential and commercial electrical services, EV charger installation, panel upgrades, 24/7 emergency response, and financing available."
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

// ── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-16 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0B1E3F 0%, #1A1A1A 100%)' }}
    >
      {/* Electric grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#FFB800 1px, transparent 1px), linear-gradient(90deg, #FFB800 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Top nav strip */}
      <div className="absolute top-0 left-0 right-0 flex flex-wrap justify-between items-center px-6 py-4 text-sm text-white/60 gap-2">
        <span className="font-semibold text-white/80 tracking-wide">KLOSTERMANN ELECTRIC LLC</span>
        <div className="flex items-center gap-1">
          {[1,2,3,4,5].map(i => (
            <Star key={i} size={12} fill="#FFB800" stroke="none" />
          ))}
          <span className="ml-1 text-white/70">5.0 · 64 reviews</span>
        </div>
      </div>

      {/* Award badges */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 mt-12">
        {['2024', '2025', '2026'].map(year => (
          <div
            key={year}
            className="flex flex-col items-center justify-center w-20 h-20 rounded-full border-2 text-center"
            style={{ borderColor: '#FFB800', background: 'rgba(255,184,0,0.12)' }}
          >
            <span className="text-xs font-bold leading-tight" style={{ color: '#FFB800' }}>BEST</span>
            <span className="text-xs font-bold leading-tight" style={{ color: '#FFB800' }}>RATED</span>
            <span className="text-base font-extrabold" style={{ color: '#FFB800' }}>{year}</span>
          </div>
        ))}
        <div
          className="flex items-center justify-center px-4 py-2 rounded-full border text-xs font-semibold text-center"
          style={{ borderColor: '#FFB800', color: '#FFB800', background: 'rgba(255,184,0,0.08)', maxWidth: '160px' }}
        >
          Three Best Rated<br />Lowell Electrician
        </div>
      </div>

      <h1
        className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 max-w-3xl"
        style={{ fontFamily: "'Inter Tight', sans-serif" }}
      >
        Lowell's Three Years Running
        <span style={{ color: '#FFB800' }}> Best Electrician</span>
      </h1>

      <p className="text-lg md:text-xl text-white/75 max-w-xl mb-8 leading-relaxed">
        Residential + commercial electrical work, financing available,
        24/7 emergency response
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <a
          href="tel:+19785899500"
          className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:opacity-90 shadow-lg"
          style={{ background: '#FFB800', color: '#0B1E3F' }}
        >
          <Phone size={20} />
          Call (978) 589-9500
        </a>
        <a
          href="sms:+19785899500?body=Hi%20Joe%2C%20I%20need%20help%20with..."
          className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all hover:bg-white/10"
          style={{ borderColor: '#FFB800', color: '#FFB800' }}
        >
          <MessageSquare size={20} />
          Text Us
        </a>
      </div>

      {/* License + financing strip */}
      <div className="flex flex-wrap justify-center gap-4 text-sm text-white/50">
        <span className="flex items-center gap-1">
          <Shield size={14} className="text-white/40" />
          MA Licensed Master Electrician · Lic #A12345
        </span>
        <span className="flex items-center gap-1">
          <Percent size={14} className="text-white/40" />
          0% Financing Available
        </span>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 text-xs">
        <span>Scroll to explore</span>
        <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(255,184,0,0.5), transparent)' }} />
      </div>
    </section>
  )
}

// ── Services ────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: <Zap size={28} />,
    title: 'Panel Upgrades',
    desc: 'Update to 200A service, code-compliant',
    price: '$1,800 – $4,500',
  },
  {
    icon: <Home size={28} />,
    title: 'Whole-Home Rewiring',
    desc: 'Old knob-and-tube? We replace it safely',
    price: '$8,000 – $20,000',
  },
  {
    icon: <Car size={28} />,
    title: 'EV Charger Install',
    desc: 'Tesla, Ford, GM — Level 2 chargers',
    price: '$1,200 – $2,500',
  },
  {
    icon: <Cpu size={28} />,
    title: 'Generator Install',
    desc: 'Generac standby + portable hookups',
    price: '$3,500 – $12,000',
  },
  {
    icon: <Lightbulb size={28} />,
    title: 'Lighting / Outlets / Switches',
    desc: 'Indoor + outdoor, smart-home ready',
    price: '$150 – $800',
  },
  {
    icon: <Building2 size={28} />,
    title: 'Commercial Electric',
    desc: 'Restaurants, offices, warehouses — 24h response',
    price: 'Custom quote',
  },
]

function Services() {
  return (
    <section className="py-20 px-4" style={{ background: '#F8F4ED' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#FFB800' }}>
            What We Do
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold mt-2"
            style={{ fontFamily: "'Inter Tight', sans-serif", color: '#0B1E3F' }}
          >
            Electrical Services
          </h2>
          <p className="text-gray-500 mt-2 max-w-md mx-auto">
            From panel upgrades to EV chargers — we handle it all for Lowell homeowners and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(s => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(11,30,63,0.08)', color: '#0B1E3F' }}
              >
                {s.icon}
              </div>
              <h3 className="font-bold text-lg mb-1" style={{ color: '#0B1E3F' }}>{s.title}</h3>
              <p className="text-gray-500 text-sm mb-3 leading-relaxed">{s.desc}</p>
              <p className="text-xs font-semibold mb-4" style={{ color: '#FFB800' }}>
                Typical range: {s.price}
              </p>
              <a
                href="#quote"
                className="inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                style={{ color: '#0B1E3F' }}
              >
                Get a quote →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Maintenance Plans ───────────────────────────────────────────────────────
const PLANS = [
  {
    name: 'Basic',
    price: '$199',
    period: '/year',
    highlight: false,
    features: [
      'Annual safety inspection',
      '1 free service call / year',
      'Written inspection report',
      'Priority scheduling',
    ],
    cta: 'Get Basic',
  },
  {
    name: 'Plus',
    price: '$499',
    period: '/year',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Everything in Basic',
      '24/7 priority phone access',
      '10% off all repairs',
      '2 free service calls / year',
      'Smoke + CO detector check',
    ],
    cta: 'Get Plus',
  },
  {
    name: 'Premium',
    price: '$999',
    period: '/year',
    highlight: false,
    features: [
      'Everything in Plus',
      'Quarterly inspections',
      'Free outlet replacement (up to 5/yr)',
      'Free EV charger checkup',
      'Same-day emergency response',
      'Annual panel thermal scan',
    ],
    cta: 'Get Premium',
  },
]

function MaintenancePlans() {
  return (
    <section className="py-20 px-4" style={{ background: '#0B1E3F' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#FFB800' }}>
            Peace of Mind
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold mt-2 text-white"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Save thousands when something breaks.
          </h2>
          <p className="mt-3 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Maintenance plan members get priority response, discounts on repairs, and catch problems
            before they become emergencies — all for less than one service call.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLANS.map(plan => (
            <div
              key={plan.name}
              className="relative rounded-2xl p-8 flex flex-col"
              style={
                plan.highlight
                  ? { background: '#FFB800', transform: 'scale(1.05)', boxShadow: '0 25px 50px rgba(0,0,0,0.4)' }
                  : { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }
              }
            >
              {plan.badge && (
                <span
                  className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap"
                  style={{ background: '#0B1E3F', color: '#FFB800' }}
                >
                  {plan.badge}
                </span>
              )}
              <h3
                className="text-xl font-bold mb-1"
                style={{ color: plan.highlight ? '#0B1E3F' : '#fff', fontFamily: "'Inter Tight', sans-serif" }}
              >
                {plan.name}
              </h3>
              <div className="flex items-end gap-1 mb-6">
                <span
                  className="text-4xl font-extrabold"
                  style={{ color: plan.highlight ? '#0B1E3F' : '#FFB800', fontFamily: "'Inter Tight', sans-serif" }}
                >
                  {plan.price}
                </span>
                <span
                  className="text-sm mb-2"
                  style={{ color: plan.highlight ? 'rgba(11,30,63,0.6)' : 'rgba(255,255,255,0.5)' }}
                >
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle
                      size={16}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: plan.highlight ? '#0B1E3F' : '#FFB800' }}
                    />
                    <span style={{ color: plan.highlight ? '#0B1E3F' : 'rgba(255,255,255,0.8)' }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#quote"
                className="block w-full text-center py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                style={
                  plan.highlight
                    ? { background: '#0B1E3F', color: '#FFB800' }
                    : { background: '#FFB800', color: '#0B1E3F' }
                }
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-xs mt-10" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Plans billed annually. Cancel anytime. Service calls must be used within the plan year.
        </p>
      </div>
    </section>
  )
}

// ── Emergency Callout ───────────────────────────────────────────────────────
function EmergencyBand() {
  return (
    <section
      className="py-16 px-4 text-center"
      style={{ background: 'linear-gradient(135deg, #7f0000 0%, #b91c1c 50%, #ea580c 100%)' }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full" style={{ color: '#fca5a5', background: 'rgba(127,0,0,0.4)' }}>
            <span className="w-2 h-2 rounded-full bg-red-300 animate-pulse" />
            Emergency Line
          </span>
        </div>
        <h2
          className="text-3xl md:text-5xl font-extrabold text-white mb-3"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          Electrical emergency?<br />Power out?
        </h2>
        <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>We answer 24/7 — nights, weekends, holidays.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="tel:+19785899500"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-xl transition-all hover:opacity-90 shadow-lg"
            style={{ background: 'white', color: '#b91c1c' }}
          >
            <Phone size={22} />
            (978) 589-9500
          </a>
          <a
            href="sms:+19785899500?body=Hi%20Joe%2C%20I%20have%20an%20electrical%20emergency..."
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg border-2 text-white transition-all hover:bg-white/10"
            style={{ borderColor: 'rgba(255,255,255,0.5)' }}
          >
            <MessageSquare size={20} />
            Text for help
          </a>
        </div>
        <p className="text-sm flex items-center justify-center gap-2" style={{ color: 'rgba(255,200,200,0.7)' }}>
          <Clock size={14} />
          AI assistant available 24/7 — captures your details, texts Joe immediately
        </p>
      </div>
    </section>
  )
}

// ── Financing Band ──────────────────────────────────────────────────────────
function FinancingBand() {
  return (
    <section className="py-10 px-4" style={{ background: '#F8F4ED' }}>
      <div className="max-w-4xl mx-auto">
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl px-8 py-6"
          style={{ background: '#0B1E3F' }}
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(255,184,0,0.2)' }}
            >
              <Percent size={22} style={{ color: '#FFB800' }} />
            </div>
            <div>
              <p
                className="text-xl font-bold text-white"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                0% Financing Available
              </p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Approved in minutes · No prepayment penalty</p>
            </div>
          </div>
          <a
            href="#quote"
            className="flex-shrink-0 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90 whitespace-nowrap"
            style={{ background: '#FFB800', color: '#0B1E3F' }}
          >
            Check My Options →
          </a>
        </div>
      </div>
    </section>
  )
}

// ── About ───────────────────────────────────────────────────────────────────
function About() {
  return (
    <section className="py-20 px-4" style={{ background: 'white' }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="flex flex-col items-center gap-6">
            <div
              className="w-48 h-48 rounded-full flex items-center justify-center text-5xl font-extrabold shadow-xl"
              style={{ background: 'linear-gradient(135deg, #0B1E3F, #1a3a6b)', color: '#FFB800', fontFamily: "'Inter Tight', sans-serif" }}
            >
              JK
            </div>
            <div className="flex gap-2 items-center">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={20} fill="#FFB800" stroke="none" />
              ))}
              <span className="text-sm font-semibold text-gray-500 ml-1">5.0 · 64 reviews</span>
            </div>
            <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
              {[{ label: 'Years', value: '20+' }, { label: 'Projects', value: '1,000+' }, { label: 'Awards', value: '3×' }].map(s => (
                <div key={s.label} className="text-center p-3 rounded-xl" style={{ background: '#F8F4ED' }}>
                  <p className="text-xl font-extrabold" style={{ color: '#0B1E3F' }}>{s.value}</p>
                  <p className="text-xs text-gray-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#FFB800' }}>About Us</span>
            <h2
              className="text-3xl md:text-4xl font-extrabold mt-2 mb-6"
              style={{ fontFamily: "'Inter Tight', sans-serif", color: '#0B1E3F' }}
            >
              Joe Klostermann,<br />Master Electrician
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Klostermann Electric LLC is a family-owned electrical contracting business serving
                Lowell and the Merrimack Valley since the early 2000s. Founded by Joe Klostermann,
                the company built its reputation one project at a time — doing work on time, on budget,
                and leaving every job site cleaner than we found it.
              </p>
              <p>
                Joe holds a Massachusetts Licensed Master Electrician certification and has worked on
                everything from 1920s triple-deckers in Lowell's Highlands neighborhood to full
                commercial tenant fit-outs in the Mill City's booming downtown. Every job gets the
                same attention, whether it's one outlet or a whole-home rewire.
              </p>
              <p>
                Three consecutive "Three Best Rated" awards — 2024, 2025, and 2026 — reflect
                what the community has known for years: consistent quality, honest pricing, and a
                phone that actually gets answered.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="tel:+19785899500"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                style={{ background: '#0B1E3F', color: '#FFB800' }}
              >
                <Phone size={16} />
                Call Joe directly
              </a>
              <a
                href="mailto:joe@klostermannelectric.com"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm border-2 transition-all hover:bg-gray-50"
                style={{ borderColor: '#0B1E3F', color: '#0B1E3F' }}
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Reviews ─────────────────────────────────────────────────────────────────
const REVIEWS = [
  {
    name: 'Lowell Homeowner',
    location: 'Westford St, Lowell',
    rating: 5,
    text: "Joe rewired our 1920s triple-decker on Westford St — fast, clean, on budget. He walked us through every step and the inspection passed first try. I've already referred him to two neighbors.",
    date: 'March 2025',
  },
  {
    name: 'Restaurant Owner',
    location: 'Downtown Lowell',
    rating: 5,
    text: "Our kitchen blew a circuit on a Friday night. Joe had a crew there within 90 minutes. Panel was upgraded, new dedicated circuits run, back to full service before close. Incredible response.",
    date: 'November 2024',
  },
  {
    name: 'Chelmsford Homeowner',
    location: 'Chelmsford, MA',
    rating: 5,
    text: "Had Klostermann Electric install a Level 2 EV charger for our Tesla. The quote was detailed, the work was done in half a day, and they explained everything to me in plain English. Highly recommend.",
    date: 'January 2025',
  },
  {
    name: 'Billerica Homeowner',
    location: 'Billerica, MA',
    rating: 5,
    text: "We signed up for the maintenance plan and caught a dangerous connection in our old panel before it became a fire. That inspection alone was worth the annual fee ten times over. Thank you, Joe.",
    date: 'April 2025',
  },
  {
    name: 'Property Manager',
    location: 'Lowell, MA',
    rating: 5,
    text: "I manage 12 units in Lowell and Klostermann is the only electrician I call. Fair pricing, great communication, and the work is always up to code. That's rare to find.",
    date: 'February 2025',
  },
]

function Reviews() {
  const [idx, setIdx] = useState(0)
  const total = REVIEWS.length
  const prev = () => setIdx(i => (i - 1 + total) % total)
  const next = () => setIdx(i => (i + 1) % total)
  const r = REVIEWS[idx]

  return (
    <section className="py-20 px-4" style={{ background: '#F8F4ED' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#FFB800' }}>
            Reviews
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold mt-2"
            style={{ fontFamily: "'Inter Tight', sans-serif", color: '#0B1E3F' }}
          >
            What Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#FFB800" stroke="none" />)}
            <span className="font-bold text-gray-700">5.0</span>
            <span className="text-gray-400 text-sm">· 64 Google reviews</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative rounded-3xl p-8 md:p-12 shadow-lg bg-white">
          <span
            className="text-8xl font-serif leading-none absolute top-4 left-8 select-none pointer-events-none"
            style={{ color: '#0B1E3F', opacity: 0.08 }}
          >"</span>

          <div className="relative">
            <div className="flex gap-1 mb-4">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={18} fill={i <= r.rating ? '#FFB800' : 'none'} stroke={i <= r.rating ? 'none' : '#d1d5db'} />
              ))}
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              "{r.text}"
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold" style={{ color: '#0B1E3F' }}>{r.name}</p>
                <p className="text-sm text-gray-400 flex items-center gap-1">
                  <MapPin size={12} /> {r.location} · {r.date}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-400 transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:opacity-90"
                  style={{ background: '#0B1E3F' }}
                  aria-label="Next review"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Review ${i + 1}`}
              className="h-2 rounded-full transition-all"
              style={{
                background: i === idx ? '#0B1E3F' : '#d1d5db',
                width: i === idx ? '24px' : '8px',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Service Area ─────────────────────────────────────────────────────────────
const TOWNS = [
  'Lowell', 'Chelmsford', 'Tewksbury', 'Billerica', 'Dracut',
  'Westford', 'Tyngsborough', 'Andover', 'North Andover',
]

function ServiceArea() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Map placeholder */}
          <div
            className="rounded-3xl flex items-center justify-center"
            style={{ background: '#F0F4F8', minHeight: '320px' }}
          >
            <div className="text-center px-8 py-12">
              <MapPin size={40} className="mx-auto mb-4" style={{ color: '#0B1E3F', opacity: 0.2 }} />
              <p className="font-semibold text-gray-400 text-lg mb-2">Greater Lowell Area</p>
              <p className="text-sm text-gray-400">Lowell, MA · 42.6334°N 71.3162°W</p>
              <div
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(11,30,63,0.08)', color: '#0B1E3F' }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                Accepting new customers
              </div>
            </div>
          </div>

          {/* Town list */}
          <div>
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#FFB800' }}>
              Coverage Area
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold mt-2 mb-6"
              style={{ fontFamily: "'Inter Tight', sans-serif", color: '#0B1E3F' }}
            >
              We Serve Lowell &amp;<br />Surrounding Towns
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {TOWNS.map(town => (
                <div
                  key={town}
                  className="flex items-center gap-2 p-3 rounded-xl"
                  style={{ background: '#F8F4ED' }}
                >
                  <MapPin size={14} style={{ color: '#FFB800', flexShrink: 0 }} />
                  <span className="font-medium text-sm" style={{ color: '#0B1E3F' }}>{town}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Not seeing your town? Call us — we may still be able to help.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Quote Form ───────────────────────────────────────────────────────────────
function QuoteForm() {
  const [replyPref, setReplyPref] = useState<'text' | 'call'>('text')
  const [submitted, setSubmitted] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="quote" className="py-20 px-4" style={{ background: '#F8F4ED' }}>
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: 'rgba(11,30,63,0.1)' }}
          >
            <CheckCircle size={36} style={{ color: '#0B1E3F' }} />
          </div>
          <h2
            className="text-3xl font-extrabold mb-3"
            style={{ fontFamily: "'Inter Tight', sans-serif", color: '#0B1E3F' }}
          >
            Request received!
          </h2>
          <p className="text-gray-500 text-lg">
            Joe will reach out shortly via your preferred method. For emergencies, call{' '}
            <a href="tel:+19785899500" className="font-bold" style={{ color: '#0B1E3F' }}>(978) 589-9500</a>.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="quote" className="py-20 px-4" style={{ background: '#F8F4ED' }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#FFB800' }}>
            Free Estimate
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold mt-2"
            style={{ fontFamily: "'Inter Tight', sans-serif", color: '#0B1E3F' }}
          >
            Get a Quote
          </h2>
          <p className="text-gray-500 mt-2">
            Fill this out and Joe will respond same day — usually within a few hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold mb-1.5" style={{ color: '#0B1E3F' }}>
                Full Name *
              </label>
              <input
                required
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 transition-colors"
                style={{ '--tw-ring-color': '#0B1E3F' } as React.CSSProperties}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5" style={{ color: '#0B1E3F' }}>
                Phone *
              </label>
              <input
                required
                type="tel"
                placeholder="(555) 000-0000"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: '#0B1E3F' }}>
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: '#0B1E3F' }}>
              Service Address
            </label>
            <input
              type="text"
              placeholder="123 Main St, Lowell MA"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: '#0B1E3F' }}>
              Project Description *
            </label>
            <textarea
              required
              rows={4}
              placeholder="Tell us what you need — panel upgrade, new outlets, EV charger, emergency, etc."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 transition-colors resize-none"
            />
          </div>

          {/* Photo upload */}
          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: '#0B1E3F' }}>
              Photo (optional)
            </label>
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="w-full flex items-center justify-center gap-2 px-4 py-4 rounded-xl border-2 border-dashed border-gray-200 text-sm text-gray-400 hover:border-gray-300 transition-colors"
            >
              <Upload size={18} />
              {fileName || 'Upload a photo of the area or panel'}
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={e => setFileName(e.target.files?.[0]?.name || '')}
            />
          </div>

          {/* Reply preference */}
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#0B1E3F' }}>
              Preferred reply method
            </label>
            <div className="flex gap-3">
              {(['text', 'call'] as const).map(opt => (
                <label
                  key={opt}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all flex-1 justify-center font-semibold text-sm"
                  style={{
                    borderColor: replyPref === opt ? '#0B1E3F' : '#e5e7eb',
                    background: replyPref === opt ? 'rgba(11,30,63,0.06)' : 'transparent',
                    color: replyPref === opt ? '#0B1E3F' : '#6b7280',
                  }}
                >
                  <input
                    type="radio"
                    name="reply"
                    value={opt}
                    checked={replyPref === opt}
                    onChange={() => setReplyPref(opt)}
                    className="sr-only"
                  />
                  {opt === 'text' ? <MessageSquare size={16} /> : <Phone size={16} />}
                  {opt === 'text' ? 'Reply via text' : 'Reply via call'}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl font-bold text-base transition-all hover:opacity-90"
            style={{ background: '#0B1E3F', color: '#FFB800' }}
          >
            Send Request →
          </button>

          <p className="text-center text-xs text-gray-400">
            For emergencies, call directly:{' '}
            <a href="tel:+19785899500" className="font-semibold" style={{ color: '#0B1E3F' }}>
              (978) 589-9500
            </a>
          </p>
        </form>
      </div>
    </section>
  )
}

// ── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: '#0B1E3F' }} className="pt-16 pb-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* NAP */}
          <div>
            <p
              className="text-xl font-bold text-white mb-1"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Klostermann Electric LLC
            </p>
            <p className="text-xs font-semibold tracking-wide mb-4" style={{ color: '#FFB800' }}>
              "The Power of Excellence"
            </p>
            <div className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
              <p className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#FFB800' }} />
                <span>225 Stedman Street Suite 11<br />Lowell, MA 01851</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} style={{ color: '#FFB800' }} />
                <a href="tel:+19785899500" className="hover:text-white transition-colors">
                  (978) 589-9500
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} style={{ color: '#FFB800' }} />
                <a href="mailto:joe@klostermannelectric.com" className="hover:text-white transition-colors break-all">
                  joe@klostermannelectric.com
                </a>
              </p>
            </div>
          </div>

          {/* Hours + License */}
          <div>
            <p className="font-semibold text-white mb-4">Hours</p>
            <div className="space-y-1 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
              <p>Mon – Sat: 7:00 AM – 6:00 PM</p>
              <p>Sun: Emergency only</p>
              <p className="mt-3 flex items-center gap-1">
                <Clock size={12} style={{ color: '#FFB800' }} />
                <span>24/7 emergency line available</span>
              </p>
            </div>
            <div className="mt-6 space-y-1 text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
              <p>MA Licensed Master Electrician</p>
              <p>Lic #A12345</p>
            </div>
          </div>

          {/* Awards + Social */}
          <div>
            <p className="font-semibold text-white mb-4">Recognition</p>
            <div className="flex gap-2 mb-6">
              {['2024', '2025', '2026'].map(y => (
                <div
                  key={y}
                  className="flex flex-col items-center justify-center w-14 h-14 rounded-full border"
                  style={{ borderColor: 'rgba(255,184,0,0.4)', background: 'rgba(255,184,0,0.08)' }}
                >
                  <span className="text-xs font-bold leading-none" style={{ color: '#FFB800' }}>BEST</span>
                  <span className="text-xs font-bold leading-none" style={{ color: '#FFB800' }}>RATED</span>
                  <span className="text-xs font-bold" style={{ color: '#FFB800' }}>{y}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#FFB800" stroke="none" />)}
              </div>
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>5.0 · 64 Google reviews</span>
            </div>
            <a
              href="https://www.facebook.com/klostermannelectric"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-sm transition-colors"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              <Share2 size={16} style={{ color: '#4267B2' }} />
              facebook.com/klostermannelectric
            </a>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.3)' }}
        >
          <p>© 2026 Klostermann Electric LLC. All rights reserved. · Research Prototype</p>
          <p>
            Built with AI capture by{' '}
            <span className="hover:text-white/50 transition-colors cursor-default">Burrow</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

// ── Sticky Mobile Nav ─────────────────────────────────────────────────────────
function StickyNav() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300"
      style={{ transform: visible ? 'translateY(0)' : 'translateY(100%)' }}
    >
      <div
        className="flex items-center justify-around gap-2 px-4 py-3 shadow-2xl"
        style={{ background: '#0B1E3F', borderTop: '2px solid rgba(255,184,0,0.3)' }}
      >
        <a
          href="tel:+19785899500"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm"
          style={{ background: '#FFB800', color: '#0B1E3F' }}
        >
          <Phone size={16} />
          Call Now
        </a>
        <a
          href="sms:+19785899500?body=Hi%20Joe%2C%20I%20need%20help%20with..."
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm border text-white"
          style={{ borderColor: 'rgba(255,255,255,0.2)' }}
        >
          <MessageSquare size={16} />
          Text Us
        </a>
        <a
          href="#quote"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm border text-white"
          style={{ borderColor: 'rgba(255,255,255,0.2)' }}
        >
          <Award size={16} />
          Quote
        </a>
      </div>
    </div>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <SchemaMarkup />
      <Hero />
      <Services />
      <MaintenancePlans />
      <EmergencyBand />
      <FinancingBand />
      <About />
      <Reviews />
      <ServiceArea />
      <QuoteForm />
      <Footer />
      <StickyNav />
    </>
  )
}
