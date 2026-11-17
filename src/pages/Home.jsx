import { useEffect, useRef, useState } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Camera, Check,
  ChevronDown, Coins, MapPin, Menu, Refrigerator, ScanLine, ShoppingBasket, X,
} from 'lucide-react';
import HeroMotion from './HeroMotion';
import './Home.css';

const contact = 'mailto:info@lojer.app';
const linkedin = 'https://www.linkedin.com/company/lojer-app/';
const marketSource = 'https://fecomercio.com.br/imprensa/e-commerce-teve-o-maior-faturamento-da-historia-em-2025-puxado-por-mais-hubs-empresas-e-mudancas-no-mercado-1/';

const navigation = [
  { label: 'How it works', href: '#solution' },
  { label: 'Ecosystem', href: '#tech-vision' },
  { label: 'Tokenomics', href: '#tokenomics' },
  { label: 'Roadmap', href: '#roadmap' },
];

const steps = [
  {
    key: 'capture',
    shortLabel: 'Capture',
    icon: Camera,
    title: 'Capture a shelf price',
    description: 'Share a photo of the product and price tag as you shop.',
  },
  {
    key: 'compare',
    shortLabel: 'Compare',
    icon: ScanLine,
    title: 'Compare nearby stores',
    description: 'See prices side by side with the help of AI and community submissions.',
  },
  {
    key: 'earn',
    shortLabel: 'Earn',
    icon: Coins,
    title: 'Earn for contributing',
    description: 'Eligible, verified submissions are designed to earn LOJ rewards.',
  },
];

const capabilities = [
  {
    id: 'marketplace',
    title: 'Community marketplace',
    description: 'Help shoppers discover neighborhood stores alongside larger retailers using local price submissions.',
  },
  {
    id: 'agent-overview',
    title: 'Lojer Agent',
    description: 'Product search from a photo, price comparison and shopping automation with connected devices.',
    link: '#ai-agents',
  },
  {
    id: 'wallet',
    title: 'Wallet and rewards',
    description: 'The roadmap includes a non-custodial W5 wallet on TON, LOJ rewards and tools for retailer tokens and NFTs.',
  },
];

const allocations = [
  ['Reward pools', 70, '#a984ff'],
  ['Investors', 6, '#6cf6c2'],
  ['Staking pools', 5.5, '#73abf9'],
  ['Founders', 5, '#f0b9ff'],
  ['Team members', 5, '#825bd8'],
  ['Team expenses', 5, '#50a69d'],
  ['Emergency reserves', 1.5, '#ffd183'],
  ['Advisers', 1.5, '#f48cbf'],
  ['Delivery team', 0.5, '#e4dcff'],
];

let position = 0;
const allocationGradient = allocations.map(([, share, color]) => {
  const start = position;
  position += share;
  return `${color} ${start}% ${position}%`;
}).join(', ');

const phases = [
  {
    title: 'App and wallet',
    detail: 'Design and develop the core app, wallet and token. Introduce price capture and comparison in an initial São Paulo rollout.',
  },
  {
    title: 'Rewards and marketplace',
    detail: 'Introduce LOJ rewards and plan token distribution, airdrops and exchange listings. Expand into online shopping using feedback from the initial rollout.',
  },
  {
    title: 'Retailer tools and Lojer Agent',
    detail: 'Build retailer partnerships, explore staking and develop Lojer Agent to compare products and help with repeat purchases.',
  },
];

function Brand() {
  return (
    <a href="#top" className="brand" aria-label="Lojer home">
      <img src="/favicon.svg" alt="" width="30" height="30" />
      <span>LOJER</span>
    </a>
  );
}

function ActionLink({ href, children, variant = 'solid', icon: Icon = ArrowUpRight }) {
  return (
    <a className={`action action--${variant}`} href={href}>
      {children}
      <span className="action-icon"><Icon size={15} aria-hidden="true" /></span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggle = useRef(null);

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuToggle.current?.focus();
      }
    }}>
      <div className="page-width header-inner">
        <Brand />
        <button
          type="button"
          className="menu-toggle"
          ref={menuToggle}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav
          id="main-navigation"
          className="main-navigation"
          aria-label="Main navigation"
          data-open={menuOpen}
          onClick={(event) => {
            if (event.target.closest('a')) setMenuOpen(false);
          }}
        >
          {navigation.map(({ href, label }) => <a href={href} key={href}>{label}</a>)}
          <ActionLink href="#contact" variant="outline">Get in touch</ActionLink>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="page-width hero-inner">
          <div className="hero-copy">
            <h1 id="hero-title">Take Photo,<br /><span>Earn Crypto</span></h1>
            <p>Take photos of products and shelf prices. Compare nearby stores and see how verified photos could earn LOJ.</p>
            <ActionLink href="#solution" icon={ArrowDown}>Explore how it works</ActionLink>
          </div>
          <HeroMotion />
          <a className="hero-preview" href="#demo">
            <span className="preview-icon"><ScanLine size={24} aria-hidden="true" /></span>
            <span><strong>Try the shopping demo</strong><small>Capture, compare and earn</small></span>
            <ArrowUpRight className="preview-arrow" size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
      <div className="capability-strip">
        <div className="page-width strip-inner">
          <span><Camera aria-hidden="true" /> Shelf price capture</span>
          <span><ScanLine aria-hidden="true" /> AI price comparison</span>
          <span><Coins aria-hidden="true" /> Community rewards</span>
          <span><MapPin aria-hidden="true" /> Built for Brazil</span>
        </div>
      </div>
    </>
  );
}

function PricePreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { key, title, icon: Icon } = steps[activeIndex];
  const isCapture = key === 'capture';

  return (
    <div className="price-preview" id="demo" data-ui>
      <div className="workflow" role="group" aria-label="Choose a step to preview">
        {steps.map(({ key: stepKey, icon: StepIcon, title: stepTitle, shortLabel, description }, index) => (
          <button
            type="button"
            key={stepKey}
            aria-label={stepTitle}
            aria-pressed={activeIndex === index}
            aria-controls="demo-panel"
            onClick={() => setActiveIndex(index)}
          >
            <StepIcon aria-hidden="true" />
            <span className="workflow-label"><strong>{stepTitle}</strong><small>{description}</small></span>
            <span className="workflow-label-short" aria-hidden="true">{shortLabel}</span>
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        ))}
      </div>

      <div className={`receipt-stage${isCapture ? ' receipt-stage--capture' : ''}`} id="demo-panel" aria-live="polite" aria-atomic="true">
        {isCapture ? (
          <figure className="capture-preview">
            <img
              src="/images/lojer-capture.webp"
              alt="A shopper uses their phone to photograph a coffee bag and its shelf price label"
              width="1120"
              height="840"
              loading="lazy"
            />
            <figcaption>
              <h3>{title}</h3>
              <p>Frame the product and its price tag together before submitting the photo for verification.</p>
            </figcaption>
          </figure>
        ) : (
          <div className="receipt">
            <div className="receipt-top"><span>LOJER</span><span>Demo · São Paulo</span></div>
            <div className="receipt-heading"><Icon size={23} aria-hidden="true" /><h3>{title}</h3></div>
            {key === 'compare' ? (
              <div className="receipt-body" key={key}>
                <p className="receipt-product"><ShoppingBasket size={17} aria-hidden="true" /> Ground coffee · 500 g</p>
                <ul className="price-list">
                  <li><span>Neighborhood market</span><strong>R$ 18,90</strong></li>
                  <li><span>Local grocery</span><strong>R$ 21,50</strong></li>
                  <li><span>Supermarket</span><strong>R$ 23,90</strong></li>
                </ul>
                <div className="receipt-total"><Check size={17} aria-hidden="true" /> R$ 5,00 between lowest and highest</div>
              </div>
            ) : (
              <div className="receipt-body" key={key}>
                <div className="receipt-item"><span>Sample contribution</span><strong>Verified</strong></div>
                <p>Verified price photos could qualify for LOJ under the planned rewards program.</p>
              </div>
            )}
            <div className="receipt-bottom"><span>Illustrative data</span><span className="barcode" aria-hidden="true" /></div>
          </div>
        )}
      </div>
    </div>
  );
}

function Ecosystem() {
  return (
    <section className="section section--ecosystem" id="tech-vision" aria-labelledby="ecosystem-title">
      <div className="page-width">
        <div className="section-heading">
          <h2 id="ecosystem-title">The Lojer ecosystem</h2>
          <p>Three planned tools connect everyday shopping with local retail and community rewards.</p>
        </div>
        <div className="capabilities">
          {capabilities.map(({ title, description, id, link }) => (
            <article className="capability" key={title} id={id}>
              <h3>{title}</h3>
              <p>{description}</p>
              {link && <a className="text-link" href={link}>Explore Lojer Agent <ArrowDown size={16} aria-hidden="true" /></a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LojerAgent() {
  return (
    <section className="section section--agent" id="ai-agents" aria-labelledby="agent-title">
      <div className="page-width agent-layout">
        <div className="agent-copy">
          <h2 id="agent-title">Lojer Agent</h2>
          <p>Lojer Agent is designed to automate shopping around your preferences. With a product photo, it could find the item in nearby stores, suggest alternatives, and compare options by price, quality, and distance using verified shopper feedback.</p>
        </div>
        <div className="agent-device">
          <Refrigerator size={31} aria-hidden="true" />
          <h3>Smart IoT integration</h3>
          <p>A connected device, such as a smart refrigerator, could detect when an item is running low and trigger a purchase request through Lojer.</p>
        </div>
      </div>
    </section>
  );
}

function Market() {
  return (
    <section className="section section--market" id="about" aria-labelledby="market-title">
      <div className="page-width market-layout">
        <img className="market-image" src="/images/lojer-brazil-market.webp" alt="Illustration of a Brazilian neighborhood produce shop at dusk" width="1400" height="788" loading="lazy" />
        <div className="market-copy" id="problem">
          <h2 id="market-title">Built for Brazil.</h2>
          <p>Prices can be hard to compare across neighborhood shops and big retailers. Lojer aims to make those prices easier to find and give small stores a way to reach nearby shoppers.</p>
          <dl className="market-stats">
            <div><dt>Brazilian e-commerce sales in 2025</dt><dd>R$ 295.6B</dd></div>
            <div><dt>Growth from 2024 to 2025</dt><dd>20%</dd></div>
          </dl>
          <a className="text-link" href={marketSource} target="_blank" rel="noreferrer">FecomercioSP market report <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}

function Tokenomics() {
  return (
    <section className="section section--token" id="tokenomics" aria-labelledby="token-title">
      <div className="page-width">
        <div className="section-heading">
          <h2 id="token-title">LOJ tokenomics</h2>
          <p>The proposed LOJ allocation puts 70% of tokens into community reward pools.</p>
        </div>
        <div className="token-layout" data-ui>
          <div className="token-visual" aria-hidden="true">
            <div className="token-ring" style={{ '--allocation': allocationGradient }}>
              <span><strong>70%</strong><small>Reward pools</small></span>
            </div>
          </div>
          <ul className="allocation-list" aria-label="Proposed token allocation">
            {allocations.map(([label, share, color]) => (
              <li key={label}><span className="allocation-swatch" style={{ backgroundColor: color }} /><span>{label}</span><strong>{share}%</strong></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section className="section section--roadmap" id="roadmap" aria-labelledby="roadmap-title">
      <div className="page-width roadmap-layout">
        <div>
          <h2 id="roadmap-title">The roadmap</h2>
          <p>From a São Paulo rollout to tools for more shoppers and local retailers. Timing is subject to change.</p>
        </div>
        <div className="phases">
          {phases.map(({ title, detail }, index) => (
            <details key={title} open={index === 0 ? true : undefined}>
              <summary><span>{title}</span><ChevronDown size={20} aria-hidden="true" /></summary>
              <p>{detail}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-main">
        <div><Brand /><p>Price discovery for everyday shopping.</p></div>
        <nav aria-label="Footer navigation">
          {navigation.map(({ href, label }) => <a href={href} key={href}>{label}</a>)}
          <a href="#about-founder">About Lojer</a>
        </nav>
        <div className="footer-contact">
          <a className="text-link" href={contact}>info@lojer.app <ArrowUpRight size={15} aria-hidden="true" /></a>
          <a className="text-link" href={linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="page-width footer-bottom">© {new Date().getFullYear()} Lojer</div>
    </footer>
  );
}

export default function Home() {
  useEffect(() => {
    const sectionId = window.location.hash.slice(1);
    if (sectionId) document.getElementById(sectionId)?.scrollIntoView();
  }, []);

  return (
    <div id="top">
      <a className="skip-link" href="#content">Skip to content</a>
      <Header />
      <main id="content" tabIndex={-1}>
        <Hero />
        <section className="section section--workflow" id="solution" aria-labelledby="workflow-title">
          <div className="page-width">
            <div className="section-heading">
              <h2 id="workflow-title">From shelf to savings.</h2>
              <p>Take a photo, compare prices in nearby stores, and see how verified contributions could earn LOJ.</p>
            </div>
            <PricePreview />
          </div>
        </section>
        <Ecosystem />
        <LojerAgent />
        <Market />
        <Tokenomics />
        <Roadmap />
        <section className="section section--contact" id="about-founder" aria-labelledby="contact-title">
          <div className="page-width contact-panel" id="contact">
            <div>
              <h2 id="contact-title">Build with Lojer.</h2>
              <p>Our founder builds AI agents that work with real-world data and services. Get in touch about the project, retailer partnerships or early interest.</p>
            </div>
            <ActionLink href={contact}>Email Lojer</ActionLink>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
