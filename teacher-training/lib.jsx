/* Shared helpers + content for the Polestar Pilates landing page (Iso Fit brand) */

// Lucide icon wrapper
function PIcon({ name, size = 20, stroke = 1.75, color, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: { width: size, height: size, 'stroke-width': stroke },
        nameAttr: 'data-lucide',
      });
    }
  }, [name, size, stroke]);
  return <span ref={ref} style={{ display: 'inline-flex', color: color || 'currentColor', lineHeight: 0, ...style }} />;
}

const PPHOTO = {
  reformerWide: 'assets/reformer-class-wide.jpg',
  reformer1: 'assets/reformer-class-1.jpg',
  reformerPortrait: 'assets/reformer-class-portrait.jpg',
  matWide: 'assets/mat-class-wide.jpg',
  mat1: 'assets/mat-class-1.jpg',
  matPortrait: 'assets/mat-class-portrait.jpg',
};

const PNAV = [
  { label: 'Why Polestar', href: '#why' },
  { label: 'Certifications', href: '#paths' },
  { label: 'Course dates', href: '#dates' },
  { label: 'FAQ', href: '#faq' },
];

// Why train here — four pillars
const WHY = [
  { icon: 'globe', title: 'A globally recognised qualification',
    desc: 'Polestar has certified 35,000+ teachers across 40+ countries. Your certification is portable — it travels with you, wherever you choose to teach.' },
  { icon: 'stethoscope', title: 'Evidence-based & rehab-grounded',
    desc: 'Founded by physiotherapist Dr. Brent Anderson. You learn the science and the reasoning to work confidently with real bodies — injuries, conditions and special populations.' },
  { icon: 'landmark', title: "Hong Kong's original Master Training Centre",
    desc: 'Iso Fit has educated Hong Kong\u2019s leading instructors since 2001 — small cohorts, mentor-led teaching practice, and full studio apparatus on every course.' },
  { icon: 'route', title: 'A genuine career path',
    desc: 'From your first Mat certification to full Comprehensive (Studio + Rehab) — build, step by step, toward teaching, clinical work, or a studio of your own.' },
];

// Certification tracks (concise — full detail lives on the Polestar site)
const PATHS = [
  { key: 'mat', tag: 'Mat', title: 'Mat Qualification', recommended: false,
    desc: 'The foundation. Teach intelligent, principles-based mat work — the ideal entry point into Polestar education.',
    facts: ['Entry level', 'From HK$14,128', '~8\u201310 weeks'] },
  { key: 'reformer', tag: 'Reformer', title: 'Reformer Qualification', recommended: false,
    desc: 'Precision and progression on the Reformer — springs, sequencing and cueing to build effective, individualised programmes.',
    facts: ['Mat recommended first', 'From HK$17,357', '~8\u201310 weeks'] },
  { key: 'comprehensive', tag: 'Comprehensive', title: 'Comprehensive — Studio + Rehabilitation', recommended: true,
    desc: 'Our most complete certification — integrated training across all apparatus, grounded in rehabilitation science. The path to clinical, professional practice.',
    facts: ['All apparatus', 'Rehab-grounded', 'Runs Oct\u2013Jan'] },
];

// Upcoming course dates — realistic sample data (wire to the live feed later)
const COURSES = [
  { month: 'JUN 2026', day: '20', mon: 'Jun', track: 'Reformer',
    title: 'Polestar Reformer Qualification', range: '20 Jun \u2013 8 Aug 2026',
    loc: 'Yoga Senses HK', price: 'HK$17,357', lang: 'English' },
  { month: 'JUN 2026', day: '20', mon: 'Jun', track: 'Mat + Reformer',
    title: 'Fitness Combo \u2014 Mat + Reformer Qualification', range: '20 Jun \u2013 29 Aug 2026',
    loc: 'Yoga Senses HK & Iso Fit HK', price: 'HK$26,802' },
  { month: 'JUL 2026', day: '4', mon: 'Jul', track: 'Mat',
    title: 'Polestar Mat Qualification', range: '4 Jul \u2013 30 Aug 2026',
    loc: 'Iso Fit HK', price: 'HK$14,128' },
  { month: 'JUL 2026', day: '25', mon: 'Jul', track: 'Reformer',
    title: 'Polestar Reformer Qualification', range: '25 Jul \u2013 19 Sep 2026',
    loc: 'Iso Fit HK', price: 'HK$17,357' },
  { month: 'SEP 2026', day: '5', mon: 'Sep', track: 'Reformer',
    title: 'Polestar Reformer Qualification', range: '5 Sep \u2013 31 Oct 2026',
    loc: 'Iso Fit HK', price: 'HK$17,357', early: 'Early bird \u201310% \u00b7 until 5 Jun' },
  { month: 'OCT 2026', day: '3', mon: 'Oct', track: 'Comprehensive',
    title: 'Comprehensive Qualification \u2014 Studio + Rehabilitation', range: '3 Oct 2026 \u2013 Jan 2027',
    loc: 'Iso Fit HK', price: 'HK$48,000', early: 'Early bird \u201310% \u00b7 until 3 Jul' },
];

const TRACK_TINT = {
  'Mat': { bg: 'var(--sage-100)', fg: 'var(--sage-700)' },
  'Reformer': { bg: 'var(--sage-100)', fg: 'var(--sage-700)' },
  'Mat + Reformer': { bg: 'var(--sage-100)', fg: 'var(--sage-700)' },
  'Comprehensive': { bg: 'rgba(242,169,0,0.16)', fg: '#9a6b00' },
};

const FAQS = [
  { q: 'Do I need prior Pilates experience?',
    a: 'Most tracks suit dedicated practitioners, and the Comprehensive path welcomes movement and rehabilitation professionals. Contact us and we\u2019ll advise the right starting point for you.' },
  { q: 'How long does certification take?',
    a: 'The Mat Qualification runs a few months; the Comprehensive certification runs across modules, typically October to January. See the live course dates above for exact schedules.' },
  { q: 'Is the qualification internationally recognised?',
    a: 'Yes. Polestar Pilates certification is recognised across 40+ countries, so your qualification travels with you wherever you choose to teach.' },
  { q: 'What does it cost?',
    a: 'Fees vary by track, from HK$14,128 for the Mat Qualification. Early-bird discounts apply on selected courses \u2014 see current dates and pricing above, or contact us.' },
];

// ---------- Live wiring (web-studio) ----------
// Course dates are served by the existing Iso Fit calendar widget (embedded from
// ../courses/), so no course data lives here. CONFIG holds only the contact target.
const CONFIG = {
  contactUrl: 'mailto:info@polestarpilatesasia.com',   // Enquire / Contact buttons
};

Object.assign(window, { PIcon, PPHOTO, PNAV, WHY, PATHS, COURSES, TRACK_TINT, FAQS, CONFIG });
