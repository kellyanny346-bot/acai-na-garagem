import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, MapPin, Phone, Instagram, Utensils, Sparkles, Flame, Clock } from "lucide-react";
import heroImg from "@/assets/hero-acai.jpg";
import sobreImg from "@/assets/sobre-nos.jpg";
import imgMiniSalgados from "@/assets/mini-salgados.jpg";
import img100MiniSalgados from "@/assets/100-mini-salgados.jpg";
import imgPasteizinhos from "@/assets/pasteizinhos.jpg";
import img100Pasteizinhos from "@/assets/100-pasteizinhos.jpg";
import imgBatataP from "@/assets/batata-p.jpg";
import imgBatataG from "@/assets/batata-g.jpg";
import imgChurrosNutella from "@/assets/churros-nutella.jpg";
import imgChurrosDoce from "@/assets/churros-doce.jpg";

const WHATSAPP = "https://wa.me/5583991468820?text=Ol%C3%A1!%20Quero%20fazer%20um%20pedido%20no%20A%C3%A7a%C3%AD%20na%20Garagem";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Açaí na Garagem — Delivery de Açaí e Lanches em Campina Grande - PB" },
      { name: "description", content: "Açaí cremoso, salgados, churros, batatas e combos irresistíveis com delivery em Campina Grande. Peça agora pelo WhatsApp!" },
    ],
  }),
});

const salgados = [
  { name: "Mini Salgados (30 un.)", desc: "Coxinha, bolinha de queijo, pizza e calabresa", price: "12,00", image: imgMiniSalgados },
  { name: "100 Mini Salgados", desc: "Sortido — coxinha, queijo, pizza e calabresa", price: "35,00", featured: true, image: img100MiniSalgados },
  { name: "Pasteizinhos (15 un.)", desc: "Frango, carne ou doce", price: "12,00", image: imgPasteizinhos },
  { name: "100 Pasteizinhos", desc: "Sabores variados", price: "70,00", image: img100Pasteizinhos },
  { name: "Batata Frita P", desc: "Crocante e douradinha", price: "8,00", image: imgBatataP },
  { name: "Batata Frita G", desc: "Porção generosa", price: "15,00", image: imgBatataG },
  { name: "Churros Nutella (20 un.)", desc: "Recheados de Nutella", price: "12,00", image: imgChurrosNutella },
  { name: "Churros Doce de Leite (30 un.)", desc: "Doce de leite cremoso", price: "12,00", image: imgChurrosDoce },
];

const combos = [
  { n: "1", title: "Combo Amigos", items: "50 Salgados Mini + 2 Refris 250ml", price: "21,00" },
  { n: "2", title: "Combo Trio", items: "30 Salgados Mini + Batata P + 2 Refris 250ml", price: "22,00" },
  { n: "3", title: "Combo Festa", items: "100 Salgados Mini + Refri 1L", price: "40,00" },
  { n: "4", title: "Combo Doce & Salgado", items: "20 Churros Nutella + 50 Salgados + 2 Refris 250ml", price: "32,00" },
  { n: "5", title: "Combo Churros", items: "50 Churros Doce de Leite + Refri 250ml", price: "20,00" },
  { n: "6", title: "O Gigante", items: "30 Churros + 50 Salgados + 20 Pasteizinhos + Refri 1L", price: "50,00", featured: true },
];

const bebidas = [
  { name: "Água Mineral", price: "2,00" },
  { name: "Água com Gás", price: "3,00" },
  { name: "Refrigerante 250ml", price: "2,00" },
  { name: "Refrigerante Lata", price: "5,00" },
  { name: "Refrigerante 1L", price: "7,00" },
];

function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-2 group">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-neon shadow-neon">
        <span className="text-lg font-extrabold text-neon-foreground">A</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight">Açaí</span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-neon">na Garagem</span>
      </div>
    </a>
  );
}

function NavBar() {
  const links = [
    { href: "#inicio", label: "Início", active: true },
    { href: "#sobre", label: "Sobre" },
    { href: "#cardapio", label: "Cardápio" },
    { href: "#combos", label: "Combos" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-background/70 border-b border-white/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:px-8">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
              {l.active && (
                <span className="absolute -bottom-2 left-0 right-0 mx-auto h-[2px] w-6 rounded-full bg-neon shadow-neon" />
              )}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-neon px-4 py-2.5 text-sm font-semibold text-neon-foreground shadow-neon hover:brightness-110 transition"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
          <span className="hidden sm:inline">Pedir no WhatsApp</span>
          <span className="sm:hidden">Pedir</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-hero pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:px-8 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-neon" />
            Delivery em Campina Grande - PB
          </span>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Mais que açaí,{" "}
            <span className="text-neon">uma experiência</span>{" "}
            inesquecível!
          </h1>
          <p className="max-w-lg text-base text-muted-foreground sm:text-lg">
            Açaí cremoso, ingredientes selecionados e aquele sabor que você ama.
            Venha se apaixonar!
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3.5 text-sm font-semibold text-neon-foreground shadow-neon hover:brightness-110 transition"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
              Pedir no WhatsApp
            </a>
            <a
              href="#cardapio"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-white/10 transition"
            >
              Ver Cardápio
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-6 pt-4 border-t border-white/5">
            <Stat icon={<Flame className="h-4 w-4 text-neon" />} label="+5 anos" sub="de tradição" />
            <Stat icon={<Clock className="h-4 w-4 text-neon" />} label="Entrega" sub="rápida" />
            <Stat icon={<Utensils className="h-4 w-4 text-neon" />} label="Cardápio" sub="variado" />
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-primary/40 blur-3xl animate-pulse-glow" />
          <img
            src={heroImg}
            alt="Copo de açaí cremoso com morangos, banana e granola ao lado de milkshake de açaí com calda de chocolate"
            width={1200}
            height={1200}
            className="relative mx-auto w-full max-w-md rounded-3xl object-cover shadow-glow animate-float lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, label, sub }: { icon: React.ReactNode; label: string; sub: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 border border-white/10">{icon}</div>
      <div className="leading-tight">
        <div className="text-sm font-semibold">{label}</div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-neon">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-3 text-muted-foreground">{description}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="sobre" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          eyebrow="Sobre Nós"
          title={<>Feito com <span className="text-neon">amor</span>, servido com carinho</>}
          description="O Açaí na Garagem nasceu do sonho de levar o açaí mais cremoso e os lanches mais gostosos de Campina Grande até a sua casa. Ingredientes selecionados, sabor que abraça e um atendimento que faz você voltar sempre."
        />
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 shadow-glow">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
          <img
            src={sobreImg}
            alt="Ambiente aconchegante do Açaí na Garagem com iluminação neon roxa"
            width={1600}
            height={900}
            loading="lazy"
            className="w-full h-[280px] sm:h-[380px] md:h-[460px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function MenuCard({ name, desc, price, featured, image }: { name: string; desc: string; price: string; featured?: boolean; image: string }) {
  return (
    <div
      className={`relative glass-card overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:border-primary/40 ${
        featured ? "ring-1 ring-primary/50 shadow-neon" : ""
      }`}
    >
      {featured && (
        <span className="absolute top-3 right-3 z-10 rounded-full bg-neon px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neon-foreground shadow-neon">
          Mais pedido
        </span>
      )}
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={name}
          width={800}
          height={600}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="font-display text-base font-bold leading-tight">{name}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
        <div className="mt-4 flex items-end justify-between">
          <div className="font-display text-2xl font-extrabold text-neon">
            <span className="text-sm text-muted-foreground mr-1">R$</span>
            {price}
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-foreground/80 hover:text-neon transition"
          >
            Pedir →
          </a>
        </div>
      </div>
    </div>
  );
}

function ComboCard({ n, title, items, price, featured }: { n: string; title: string; items: string; price: string; featured?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden glass-card rounded-2xl p-6 transition hover:-translate-y-1 ${
        featured ? "ring-2 ring-primary shadow-neon" : ""
      }`}
    >
      <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-neon text-sm font-black text-neon-foreground shadow-neon">
            {n}
          </div>
          <h3 className="font-display text-lg font-bold">{title}</h3>
        </div>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{items}</p>
        <div className="mt-5 flex items-end justify-between border-t border-white/5 pt-4">
          <div className="font-display text-3xl font-extrabold text-neon">
            <span className="text-sm text-muted-foreground mr-1">R$</span>
            {price}
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs font-semibold hover:bg-neon hover:text-neon-foreground hover:border-transparent transition"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Pedir
          </a>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <section id="cardapio" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          eyebrow="Cardápio"
          title={<>Salgados e <span className="text-neon">Lanches</span></>}
          description="Feitos na hora, crocantes por fora e recheados por dentro."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {salgados.map((s) => (
            <MenuCard key={s.name} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Combos() {
  return (
    <section id="combos" className="relative py-20 md:py-28 border-y border-white/5 bg-black/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          eyebrow="Combos Especiais"
          title={<>Aproveite e <span className="text-neon">economize</span></>}
          description="Combos pensados para reunir a família e os amigos com muito sabor."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {combos.map((c) => (
            <ComboCard key={c.n} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Drinks() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          eyebrow="Bebidas"
          title={<>Para acompanhar <span className="text-neon">geladinho</span></>}
        />
        <div className="mt-10 glass-card rounded-3xl divide-y divide-white/5 overflow-hidden">
          {bebidas.map((b) => (
            <div key={b.name} className="flex items-center justify-between px-6 py-4 hover:bg-white/5 transition">
              <span className="font-medium">{b.name}</span>
              <span className="font-display text-lg font-bold text-neon">R$ {b.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-neon p-10 text-center md:p-16 shadow-neon">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
          <div className="relative">
            <h2 className="font-display text-3xl font-extrabold leading-tight text-neon-foreground sm:text-4xl md:text-5xl">
              Bateu a vontade?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-neon-foreground/80">
              Faça seu pedido agora e receba na sua casa quentinho e cremoso.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-background/90 transition"
            >
              <MessageCircle className="h-5 w-5 text-neon" strokeWidth={2.5} />
              Pedir no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="relative border-t border-white/5 bg-black/40 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              O açaí mais cremoso e os lanches mais gostosos de Campina Grande — PB.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-neon">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition">
                  <Phone className="h-4 w-4 text-neon" /> (83) 99146-8820
                </a>
              </li>
              <li>
                <a href="https://instagram.com/acaii_na_garageem" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition">
                  <Instagram className="h-4 w-4 text-neon" /> @acaii_na_garageem
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-muted-foreground">
                <MapPin className="h-4 w-4 text-neon" /> Campina Grande — PB
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-neon">Navegação</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#inicio" className="hover:text-foreground transition">Início</a></li>
              <li><a href="#cardapio" className="hover:text-foreground transition">Cardápio</a></li>
              <li><a href="#combos" className="hover:text-foreground transition">Combos</a></li>
              <li><a href="#contato" className="hover:text-foreground transition">Contato</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Açaí na Garagem. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Política de Privacidade</a>
            <a href="#" className="hover:text-foreground">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhats() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-neon text-neon-foreground shadow-neon animate-pulse-glow hover:brightness-110 transition"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.5} />
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Combos />
        <Drinks />
        <CTA />
      </main>
      <Footer />
      <FloatingWhats />
    </div>
  );
}
