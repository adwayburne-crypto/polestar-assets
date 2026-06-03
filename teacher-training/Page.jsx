/* Polestar Pilates landing page — Iso Fit brand. All sections + two hero directions. */

// ---------- Shared building blocks ----------

function Shell({ children, bg, id, pad = '96px 0' }) {
  return (
    <section id={id} style={{ background: bg || 'var(--white)', padding: pad }}>
      <div className="pp-wrap" style={{ maxWidth: 1180, margin: '0 auto', padding: '0 56px' }}>{children}</div>
    </section>
  );
}

function Eyebrow({ children, light }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ width: 26, height: 2, background: light ? 'var(--accent)' : 'var(--sage-600)', flex: 'none' }} />
      <span className="eyebrow" style={{ color: light ? 'var(--accent)' : 'var(--sage-700)' }}>{children}</span>
    </div>
  );
}

function PolestarBadge({ onLight }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 14px 7px 11px',
      borderRadius: 999, fontSize: 11.5, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase',
      color: onLight ? '#7a4d00' : '#fff',
      background: onLight ? 'rgba(242,169,0,0.16)' : 'rgba(255,255,255,0.1)',
      border: onLight ? '1px solid rgba(242,169,0,0.4)' : '1px solid rgba(255,255,255,0.22)',
    }}>
      <span style={{ width: 9, height: 9, borderRadius: 999, background: 'var(--special)', flex: 'none' }} />
      Authorised Polestar Master Training Centre
    </span>
  );
}

// ---------- Header ----------

function PHeader({ light }) {
  const link = (n) => (
    <a key={n.label} href={n.href} className="pp-navlink" style={{
      fontSize: 14.5, fontWeight: 400, textDecoration: 'none', letterSpacing: '.01em',
      position: 'relative', paddingBottom: 3, color: light ? 'rgba(255,255,255,.88)' : 'var(--fg-1)',
    }}>{n.label}</a>
  );
  return (
    <header style={{
      position: 'absolute', top: 0, left: 0, right: 0, zIndex: 40,
      borderBottom: light ? '1px solid rgba(255,255,255,.16)' : '1px solid var(--border)',
      background: light ? 'transparent' : 'rgba(255,255,255,.9)',
      backdropFilter: light ? 'none' : 'saturate(180%) blur(12px)',
    }}>
      <div className="pp-wrap pp-header-row" style={{ maxWidth: 1180, margin: '0 auto', padding: '0 56px', height: 78, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={light ? 'assets/isofit-logo-white.png' : 'assets/isofit-logo.png'} alt="Iso Fit" style={{ height: 32, width: 'auto', display: 'block' }} />
        </a>
        <nav className="pp-nav" style={{ display: 'flex', alignItems: 'center', gap: 30 }}>{PNAV.map(link)}</nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href={CONFIG.contactUrl} className={light ? 'pp-btn-ghost-light' : 'pp-btn-ghost-dark'} style={{ padding: '11px 20px' }}>Enquire</a>
          <a href="#dates" className="pp-btn-primary" style={{ padding: '12px 22px', boxShadow: 'none' }}>Register</a>
        </div>
      </div>
    </header>
  );
}

// ---------- Hero A — immersive full-bleed ----------

function HeroA() {
  return (
    <section id="top" style={{ position: 'relative', minHeight: 760, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${PPHOTO.reformerWide})`, backgroundSize: 'cover', backgroundPosition: 'center 32%' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(102deg, rgba(20,20,20,.9) 0%, rgba(20,20,20,.66) 44%, rgba(20,20,20,.2) 100%)' }} />
      <PHeader light />
      <div className="pp-herowrap" style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '120px 56px 0', width: '100%' }}>
        <div style={{ maxWidth: 680 }}>
          <Eyebrow light>Polestar Pilates Teacher Training &middot; Hong Kong</Eyebrow>
          <h1 className="heading-cap pp-hero-h1" style={{ color: '#fff', fontSize: 76, lineHeight: 0.98, margin: '22px 0 0' }}>
            Become a<br />globally certified<br /><span style={{ color: 'var(--accent)' }}>Pilates teacher</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,.84)', fontSize: 19, fontWeight: 300, lineHeight: 1.6, margin: '26px 0 0', maxWidth: 520 }}>
            Evidence-based certification with Hong Kong&rsquo;s original Polestar Master Training Centre &mdash; educating the city&rsquo;s leading instructors since 2001.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 38, flexWrap: 'wrap' }}>
            <a href="#dates" className="pp-btn-primary pp-btn-lg">Register now</a>
            <a href="#dates" className="pp-btn-ghost-light pp-btn-lg">View course dates</a>
          </div>
          <div style={{ marginTop: 46, paddingTop: 30, borderTop: '1px solid rgba(255,255,255,.18)', display: 'flex', gap: 52, alignItems: 'center', flexWrap: 'wrap' }}>
            {[['Since 2001', 'Master Centre in HK'], ['35,000+', 'Graduates worldwide'], ['40+', 'Countries recognised']].map(([a, b]) => (
              <div key={b}>
                <div className="heading-cap" style={{ color: '#fff', fontSize: 30, lineHeight: 1 }}>{a}</div>
                <div style={{ color: 'rgba(255,255,255,.6)', fontSize: 13, marginTop: 7 }}>{b}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Hero B — editorial split ----------

function HeroB() {
  return (
    <section id="top" style={{ position: 'relative', background: 'var(--cream)', overflow: 'hidden' }}>
      <PHeader />
      <div className="pp-wrap" style={{ maxWidth: 1180, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.04fr 0.96fr', gap: 64, alignItems: 'center', minHeight: 760, paddingTop: 78 }}>
          <div style={{ padding: '64px 0' }}>
            <Eyebrow>Polestar Pilates Teacher Training &middot; Hong Kong</Eyebrow>
            <h1 className="heading-cap" style={{ fontSize: 70, lineHeight: 0.98, margin: '22px 0 0' }}>
              Train to teach<br />Pilates, <span style={{ color: 'var(--sage-700)' }}>properly</span>
            </h1>
            <p style={{ fontSize: 19, fontWeight: 300, lineHeight: 1.62, color: 'var(--fg-2)', margin: '24px 0 0', maxWidth: 500 }}>
              A globally recognised, rehab-grounded certification with Hong Kong&rsquo;s original Polestar Master Training Centre &mdash; small cohorts and expert mentors, since 2001.
            </p>
            <div style={{ display: 'flex', gap: 14, margin: '36px 0 30px', flexWrap: 'wrap' }}>
              <a href="#dates" className="pp-btn-primary pp-btn-lg">Register now</a>
              <a href="#dates" className="pp-btn-ghost-dark pp-btn-lg">View course dates</a>
            </div>
            <PolestarBadge onLight />
          </div>
          <div style={{ position: 'relative', alignSelf: 'stretch', minHeight: 760 }}>
            <div style={{ position: 'absolute', inset: '64px 0', borderRadius: 'var(--radius-lg)', overflow: 'hidden', backgroundImage: `url(${PPHOTO.matPortrait})`, backgroundSize: 'cover', backgroundPosition: 'center 30%', boxShadow: 'var(--shadow-lg)' }} />
            <div style={{ position: 'absolute', left: -36, bottom: 108, background: 'var(--accent)', color: 'var(--black)', padding: '22px 26px', borderRadius: 'var(--radius-md)', maxWidth: 248, boxShadow: 'var(--shadow-md)' }}>
              <div className="heading-cap" style={{ fontSize: 38, lineHeight: 0.92 }}>35,000+</div>
              <div style={{ fontSize: 13.5, fontWeight: 500, marginTop: 8, lineHeight: 1.4 }}>teachers certified by Polestar across 40+ countries.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Trust bar ----------

function TrustBar() {
  const items = ['Polestar Master Training Centre', 'Educating in HK since 2001', '35,000+ graduates worldwide', 'Recognised in 40+ countries'];
  return (
    <div style={{ background: 'var(--accent)' }}>
      <div className="pp-wrap-trust" style={{ maxWidth: 1180, margin: '0 auto', padding: '20px 56px', display: 'flex', gap: 14, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        {items.map((t, i) => (
          <React.Fragment key={t}>
            {i > 0 && <span style={{ width: 4, height: 4, borderRadius: 999, background: 'rgba(26,26,26,.4)' }} />}
            <span style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--black)' }}>{t}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ---------- Why ----------

function Why() {
  return (
    <Shell id="why" bg="var(--white)" pad="100px 0">
      <div className="pp-why-grid" style={{ display: 'grid', gridTemplateColumns: '0.86fr 1.14fr', gap: 64, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 40 }}>
          <Eyebrow>Why train with us</Eyebrow>
          <h2 className="heading-cap" style={{ fontSize: 44, lineHeight: 1.02, margin: '18px 0 0' }}>The credential, and<br />the craft behind it</h2>
          <p className="lead" style={{ fontSize: 17, margin: '20px 0 28px', maxWidth: 380 }}>
            Polestar is taught here the way it&rsquo;s meant to be &mdash; mindful, intelligent, and grounded in how real bodies move.
          </p>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: 220, backgroundImage: `url(${PPHOTO.matWide})`, backgroundSize: 'cover', backgroundPosition: 'center 40%', boxShadow: 'var(--shadow-sm)' }} />
        </div>
        <div className="pp-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {WHY.map((w) => (
            <div key={w.title} className="pp-card" style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '28px 26px', boxShadow: 'var(--shadow-sm)' }}>
              <span style={{ width: 46, height: 46, borderRadius: 999, background: 'var(--sage-100)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--sage-700)' }}>
                <PIcon name={w.icon} size={22} stroke={1.6} />
              </span>
              <h3 style={{ fontSize: 19, fontFamily: 'var(--font-sans)', fontWeight: 600, lineHeight: 1.25, margin: '18px 0 10px' }}>{w.title}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg-2)', margin: 0 }}>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}

// ---------- Certification paths ----------

function Paths() {
  return (
    <Shell id="paths" bg="var(--bg-3)" pad="100px 0">
      <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 52px' }}>
        <div style={{ display: 'inline-flex' }}><Eyebrow>Certification paths</Eyebrow></div>
        <h2 className="heading-cap" style={{ fontSize: 46, lineHeight: 1.02, margin: '16px 0 14px' }}>Choose your path</h2>
        <p className="lead" style={{ fontSize: 17, margin: 0 }}>
          Start where you are and build toward full professional practice. Full curricula and entry requirements live on the Polestar site.
        </p>
      </div>
      <div className="pp-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, alignItems: 'stretch' }}>
        {PATHS.map((p) => {
          const hi = p.recommended;
          return (
            <div key={p.key} className="pp-card" style={{
              background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '32px 28px 30px',
              border: hi ? '1.5px solid var(--special)' : '1px solid var(--border)',
              boxShadow: hi ? '0 12px 32px rgba(242,169,0,.14)' : 'var(--shadow-sm)',
              display: 'flex', flexDirection: 'column', position: 'relative',
            }}>
              {hi && <span style={{ position: 'absolute', top: 22, right: 22, fontSize: 10.5, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#7a4d00', background: 'rgba(242,169,0,.16)', padding: '5px 11px', borderRadius: 999 }}>Most complete</span>}
              <span style={{ alignSelf: 'flex-start', fontSize: 11, fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase', color: hi ? '#9a6b00' : 'var(--sage-700)', background: hi ? 'rgba(242,169,0,.14)' : 'var(--sage-100)', padding: '6px 13px', borderRadius: 999 }}>{p.tag}</span>
              <h3 className="heading-cap" style={{ fontSize: 25, lineHeight: 1.05, margin: '18px 0 12px' }}>{p.title}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg-2)', margin: '0 0 22px', flex: 1 }}>{p.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {p.facts.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13.5, fontWeight: 500, color: 'var(--fg-1)' }}>
                    <span style={{ color: hi ? 'var(--special)' : 'var(--sage-600)', display: 'inline-flex' }}><PIcon name="check" size={15} stroke={2.4} /></span>{f}
                  </li>
                ))}
              </ul>
              <a href="#dates" className={hi ? 'pp-btn-dark' : 'pp-btn-ghost-dark'} style={{ justifyContent: 'center' }}>Learn more <PIcon name="arrow-up-right" size={15} style={{ marginLeft: 6 }} /></a>
            </div>
          );
        })}
      </div>
    </Shell>
  );
}

// ---------- Course dates ----------

// Course dates = the existing Iso Fit course-calendar widget, embedded as-is
// (../courses/ \u2014 same feed/refresh, single source of maintenance). The widget
// posts its height to the parent; index.html resizes #pp-cal so there's no inner scroll.
function Dates() {
  return (
    <Shell id="dates" bg="var(--white)" pad="48px 0">
      <iframe
        id="pp-cal"
        src="../courses/"
        title="Upcoming Polestar Pilates courses at Iso Fit"
        scrolling="no"
        style={{ width: '100%', border: 0, minHeight: 760, display: 'block' }}
      />
    </Shell>
  );
}

// ---------- Testimonials (placeholder) ----------

function Testimonials() {
  const quotes = [
    { q: 'Add a real graduate testimonial here \u2014 the outcome they achieved and how the training changed their teaching or career.', who: 'Graduate name', meta: 'Comprehensive \u00b7 2024' },
    { q: 'A second testimonial works well from a career-changer or a rehab professional who retrained with Polestar at Iso Fit.', who: 'Graduate name', meta: 'Reformer \u00b7 2023' },
  ];
  return (
    <Shell bg="var(--cream)" pad="92px 0">
      <div style={{ textAlign: 'center', marginBottom: 44 }}>
        <div style={{ display: 'inline-flex' }}><Eyebrow>From our graduates</Eyebrow></div>
        <h2 className="heading-cap" style={{ fontSize: 40, margin: '14px 0 0' }}>Where the training leads</h2>
      </div>
      <div className="pp-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {quotes.map((t, i) => (
          <figure key={i} style={{ margin: 0, background: 'var(--white)', border: '1px dashed var(--border-strong)', borderRadius: 'var(--radius-lg)', padding: '34px 34px 30px' }}>
            <span style={{ color: 'var(--accent)', display: 'inline-flex' }}><PIcon name="quote" size={26} stroke={1.5} /></span>
            <blockquote className="quote" style={{ fontSize: 21, lineHeight: 1.4, margin: '14px 0 22px', color: 'var(--fg-2)', fontStyle: 'italic' }}>{t.q}</blockquote>
            <figcaption style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg-1)' }}>{t.who}<span style={{ fontWeight: 400, color: 'var(--fg-3)' }}> &mdash; {t.meta}</span></figcaption>
          </figure>
        ))}
      </div>
      <p style={{ textAlign: 'center', fontSize: 12.5, color: 'var(--fg-3)', margin: '24px 0 0', letterSpacing: '.02em' }}>Placeholder testimonials &mdash; replace with real graduate quotes.</p>
    </Shell>
  );
}

// ---------- FAQ ----------

function Faq() {
  const [open, setOpen] = React.useState(0);
  return (
    <Shell id="faq" bg="var(--white)" pad="92px 0">
      <div className="pp-faq-grid" style={{ display: 'grid', gridTemplateColumns: '0.7fr 1.3fr', gap: 64, alignItems: 'start' }}>
        <div>
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="heading-cap" style={{ fontSize: 42, lineHeight: 1.02, margin: '18px 0 0' }}>Frequently asked</h2>
        </div>
        <div>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, background: 'none', border: 'none', cursor: 'pointer', padding: '22px 0', textAlign: 'left' }}>
                  <span style={{ fontSize: 18, fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--fg-1)' }}>{f.q}</span>
                  <span style={{ flex: 'none', color: 'var(--sage-700)', display: 'inline-flex', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform var(--dur-med) var(--ease-out)' }}><PIcon name="plus" size={20} stroke={2} /></span>
                </button>
                <div style={{ maxHeight: isOpen ? 200 : 0, overflow: 'hidden', transition: 'max-height var(--dur-slow) var(--ease-out)' }}>
                  <p style={{ fontSize: 15.5, lineHeight: 1.65, color: 'var(--fg-2)', margin: '0 0 24px', maxWidth: 600 }}>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Shell>
  );
}

// ---------- Final CTA ----------

function FinalCTA() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--black)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${PPHOTO.reformer1})`, backgroundSize: 'cover', backgroundPosition: 'center 35%', opacity: 0.32 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(20,20,20,.92) 0%, rgba(20,20,20,.7) 60%, rgba(20,20,20,.5) 100%)' }} />
      <div className="pp-wrap-cta" style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '96px 56px' }}>
        <div style={{ maxWidth: 600 }}>
          <Eyebrow light>Begin your training</Eyebrow>
          <h2 className="heading-cap" style={{ fontSize: 52, lineHeight: 1.0, color: '#fff', margin: '18px 0 0' }}>Ready to start teaching?</h2>
          <p style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.62, color: 'rgba(255,255,255,.82)', margin: '20px 0 34px', maxWidth: 500 }}>
            Register for an upcoming course, or talk to us &mdash; we&rsquo;ll guide you to the right starting point for where you are now.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#dates" className="pp-btn-primary pp-btn-lg">Register now</a>
            <a href={CONFIG.contactUrl} className="pp-btn-ghost-light pp-btn-lg">Contact us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------

function PFooter() {
  const cols = [
    { h: 'Training', items: ['Mat Qualification', 'Reformer Qualification', 'Comprehensive', 'Course dates'] },
    { h: 'Studio', items: ['About Iso Fit', 'Polestar Education', 'GYROTONIC\u00ae Training', 'Visit us'] },
  ];
  return (
    <footer style={{ background: '#141414', color: '#fff', padding: '64px 0 36px' }}>
      <div className="pp-wrap" style={{ maxWidth: 1180, margin: '0 auto', padding: '0 56px' }}>
        <div className="pp-footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr 1fr', gap: 48, paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,.14)' }}>
          <div>
            <img src="assets/isofit-logo-white.png" alt="Iso Fit" style={{ height: 32, marginBottom: 18 }} />
            <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 14, lineHeight: 1.6, maxWidth: 320, margin: '0 0 18px' }}>
              Hong Kong&rsquo;s original Polestar Pilates Master Training Centre &mdash; educating mindful, intelligent movement teachers since 2001.
            </p>
            <span style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 10, fontSize: 13.5, color: 'rgba(255,255,255,.7)', lineHeight: 1.5 }}><PIcon name="map-pin" size={15} style={{ marginTop: 2, flex: 'none' }} /> 802-805, 8/F Yu Yuet Lai Building, 43-55 Wyndham Street, Central, Hong Kong</span>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>{c.h}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                {c.items.map((i) => <li key={i}><a href="#top" style={{ color: 'rgba(255,255,255,.7)', textDecoration: 'none', fontSize: 14 }}>{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 26, flexWrap: 'wrap', gap: 14 }}>
          <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,.45)' }}>&copy; 1998&ndash;2026 Iso Fit Ltd. &middot; www.isofit.com.hk</span>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Instagram', 'linktr.ee/isofit'].map((s) => <a key={s} href="#top" style={{ color: 'rgba(255,255,255,.6)', textDecoration: 'none', fontSize: 13, fontWeight: 500 }}>{s}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ---------- Full page ----------

function LandingPage({ hero }) {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <div data-pp-page={hero} style={{ fontFamily: 'var(--font-sans)', background: 'var(--white)', color: 'var(--fg-1)' }}>
      {hero === 'b' ? <HeroB /> : <HeroA />}
      <TrustBar />
      <Why />
      <Paths />
      <Dates />
      <Testimonials />
      <Faq />
      <FinalCTA />
      <PFooter />
    </div>
  );
}

Object.assign(window, { LandingPage, HeroA, HeroB });
