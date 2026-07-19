import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Download,
  Github,
  ChevronDown,
  AlertTriangle,
} from "lucide-react";

const GITHUB_REPO = "https://github.com/tkmrqq/UpsNeyro";
const GITHUB_RELEASE = "https://github.com/tkmrqq/UpsNeyro/releases/latest";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "UpsNeyro — AI Video Enhancer для Windows" },
      {
        name: "description",
        content:
          "UpsNeyro — десктопное приложение для Windows: апскейл и улучшение видео нейросетями локально. Real-ESRGAN, FFmpeg, CUDA.",
      },
      { property: "og:title", content: "UpsNeyro — AI Video Enhancer для Windows" },
      {
        property: "og:description",
        content: "Апскейл и улучшение видео с помощью нейросетей — локально, на вашем ПК.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const features = [
  {
    num: "01",
    title: "AI Upscale",
    kicker: "Real-ESRGAN · PyTorch",
    body: "Три режима: Fast (animevideov3), Balanced (x4plus), Quality (x4plus-anime). Целевые разрешения — 1080p, 4K и произвольные.",
  },
  {
    num: "02",
    title: "Быстрое превью",
    kicker: "ncnn-vulkan",
    body: "Проверка результата на одном кадре за секунды — без запуска полного пайплайна экспорта.",
  },
  {
    num: "03",
    title: "Фильтры и пресеты",
    kicker: "Color · Grain · Grade",
    body: "Яркость, контраст, насыщенность, hue, резкость, blur, виньетка, grain. Пресеты вроде Vintage. Живое превью на кадре.",
  },
  {
    num: "04",
    title: "Очередь экспорта",
    kicker: "Batch",
    body: "Пакетная обработка, перестановка задач, отмена, независимый прогресс и ETA по каждому файлу.",
  },
  {
    num: "05",
    title: "Производительность",
    kicker: "FFmpeg · CUDA · D3D12",
    body: "Монитор этапов decode → upscale → filter → encode. Опциональный аппаратный декод. Инференс на GPU через CUDA.",
  },
  {
    num: "06",
    title: "Удобство",
    kicker: "Sessions · Updates",
    body: "Сохранение сессий и настроек, проверка обновлений через GitHub Releases, логи и подсказки по железу.",
  },
];

const steps = [
  { n: "I", title: "Открыть видео", text: "Drag & drop или выбор файла: MP4, MKV, MOV, WebM и др." },
  { n: "II", title: "Режим и разрешение", text: "Fast / Balanced / Quality → 1080p или 4K." },
  { n: "III", title: "Превью", text: "Опциональная проверка одного кадра до полного рендера." },
  { n: "IV", title: "Экспорт", text: "Decode → нейро-апскейл → фильтры → encode в MP4." },
];

const faqs = [
  { q: "Это бесплатно?", a: "Да, open-source / дипломный проект. Скачивание с GitHub." },
  { q: "Нужен интернет для обработки?", a: "Нет, только для первой установки Python-зависимостей и проверки обновлений." },
  { q: "Какие форматы видео поддерживаются?", a: "MP4, MKV, MOV, WebM, AVI и др. — через FFmpeg." },
  { q: "Работает без NVIDIA?", a: "Да, на CPU, но медленнее. В настройках можно выбрать CPU." },
  { q: "Почему Balanced/Quality медленнее Fast?", a: "Более тяжёлые модели Real-ESRGAN, но заметно выше качество деталей." },
  { q: "Можно macOS / Linux?", a: "Сейчас релиз ориентирован на Windows; исходники позволяют собрать на Linux." },
];

const stack = [
  ["UI", "Qt 6, QML, Material dark theme"],
  ["Media", "FFmpeg (decode/encode, опц. HW-декод)"],
  ["ML", "Python subprocess, Real-ESRGAN, PyTorch (CUDA/CPU)"],
  ["Preview upscale", "ncnn-vulkan"],
  ["Platform", "Windows 10/11 x64 (portable)"],
];

const tickerItems = [
  { k: "Model", v: "RealESRGAN_x4plus_anime" },
  { k: "Backend", v: "PyTorch · CUDA 12.1" },
  { k: "Frame", v: "01247 / 03120" },
  { k: "Stage", v: "upscale → filter" },
  { k: "Throughput", v: "6.4 fps · 3.8× realtime" },
  { k: "VRAM", v: "5.2 / 12.0 GB" },
];

function Landing() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <HowItWorks />
        <TechStack />
        <SystemRequirements />
        <Install />
        <FAQ />
        <Colophon />
      </main>
      <Footer />
    </div>
  );
}

/* ────────────────────────────── Header ────────────────────────────── */

function Header() {
  const nav = [
    { href: "#features", label: "Возможности" },
    { href: "#how", label: "Пайплайн" },
    { href: "#install", label: "Установка" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl leading-none">UpsNeyro</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-dim">
            v0.2
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="link-underline text-sm text-soft">
              {n.label}
            </a>
          ))}
          <a href={GITHUB_REPO} target="_blank" rel="noreferrer" className="link-underline text-sm text-soft">
            GitHub
          </a>
        </nav>
        <a
          href={GITHUB_RELEASE}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full btn-ink px-4 py-2 text-xs font-medium"
        >
          Скачать <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

/* ────────────────────────────── Hero ────────────────────────────── */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-14 md:pt-24 md:pb-20">
        {/* meta line */}
        <div className="mb-14 flex items-center justify-between border-b border-rule pb-4">
          <div className="eyebrow">Vol. 02 · Windows Edition · MMXXVI</div>
          <div className="eyebrow hidden md:block">Open-source · Diploma project</div>
        </div>

        {/* headline */}
        <h1 className="font-display text-[13vw] leading-[0.92] tracking-tight md:text-[104px]">
          Улучшение видео <em className="italic text-ember">нейросетями</em>,
          <br />
          локально — на вашем&nbsp;ПК.
        </h1>

        {/* dek + CTA */}
        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-rule pt-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow mb-3">Аннотация</div>
            <p className="font-display text-2xl leading-snug md:text-[28px]">
              UpsNeyro — десктопное приложение для Windows: увеличение разрешения,
              восстановление деталей и цветокоррекция. Без облака, без загрузки
              видео в интернет — вся обработка проходит на вашей машине.
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-7">
            <div className="eyebrow mb-3">Ключевое</div>
            <ul className="space-y-3 text-[15px] text-soft">
              <li className="flex gap-3 border-b border-rule pb-3">
                <span className="font-mono text-xs text-ember">01</span>
                <span>Три модели Real-ESRGAN: Fast, Balanced, Quality.</span>
              </li>
              <li className="flex gap-3 border-b border-rule pb-3">
                <span className="font-mono text-xs text-ember">02</span>
                <span>Быстрое превью кадра до полного экспорта.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-xs text-ember">03</span>
                <span>Очередь пакетной обработки, фильтры, ETA.</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 md:col-start-11 md:pl-6 md:border-l md:border-rule">
            <div className="eyebrow mb-3">Читать</div>
            <a
              href={GITHUB_RELEASE}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-2 font-display text-2xl leading-tight"
            >
              Скачать
              <ArrowUpRight className="mt-1 h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href="#install" className="mt-3 block text-xs text-dim link-underline w-fit">
              Как установить
            </a>
          </div>
        </div>

        {/* Interactive before/after + live engine ticker */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <BeforeAfter />
          </div>
          <div className="md:col-span-4">
            <EngineTicker />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Interactive before/after slider */
function BeforeAfter() {
  const [pos, setPos] = useState(52);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(4, Math.min(96, p)));
  };

  useEffect(() => {
    const up = () => (dragging.current = false);
    const mv = (e: MouseEvent) => dragging.current && move(e.clientX);
    const tmv = (e: TouchEvent) => dragging.current && move(e.touches[0].clientX);
    window.addEventListener("mouseup", up);
    window.addEventListener("mousemove", mv);
    window.addEventListener("touchend", up);
    window.addEventListener("touchmove", tmv);
    return () => {
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mousemove", mv);
      window.removeEventListener("touchend", up);
      window.removeEventListener("touchmove", tmv);
    };
  }, []);

  return (
    <figure>
      <div className="mb-3 flex items-baseline justify-between">
        <figcaption className="eyebrow">Figure 1 — Real-ESRGAN · 720p → 4K</figcaption>
        <div className="font-mono text-[11px] text-dim">← перетащите →</div>
      </div>
      <div
        ref={wrapRef}
        className="relative aspect-[16/9] w-full cursor-ew-resize overflow-hidden rounded-sm border border-rule select-none"
        onMouseDown={(e) => {
          dragging.current = true;
          move(e.clientX);
        }}
        onTouchStart={(e) => {
          dragging.current = true;
          move(e.touches[0].clientX);
        }}
      >
        {/* Before (soft, low-detail) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 40%, #b8a58a 0%, #7a6a55 40%, #3a3128 100%)",
            filter: "blur(6px) contrast(0.85) saturate(0.7)",
          }}
        />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle at 60% 55%, rgba(255,220,180,0.55), transparent 45%), radial-gradient(circle at 25% 70%, rgba(60,40,30,0.6), transparent 40%)",
            filter: "blur(4px)",
          }}
        />

        {/* After (sharp, saturated) — clipped */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 30% 40%, #f5d9a8 0%, #c47a3a 40%, #1a1613 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 60% 55%, rgba(255,230,190,0.9), transparent 40%), radial-gradient(circle at 25% 70%, rgba(194,65,12,0.55), transparent 40%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
        </div>

        {/* Labels */}
        <div className="absolute left-3 top-3 rounded-sm bg-black/50 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-paper">
          Original · 720p
        </div>
        <div className="absolute right-3 top-3 rounded-sm bg-[color:var(--ember)]/90 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-paper">
          UpsNeyro · 4K
        </div>

        {/* Handle */}
        <div
          className="absolute inset-y-0 w-px bg-paper"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-paper text-ink shadow-[0_2px_18px_rgba(0,0,0,0.35)]">
            <span className="font-mono text-[10px]">◄ ►</span>
          </div>
        </div>
      </div>
    </figure>
  );
}

/* Live engine ticker */
function EngineTicker() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % tickerItems.length), 1800);
    return () => clearInterval(t);
  }, []);
  return (
    <aside className="flex h-full flex-col justify-between rounded-sm border border-rule bg-card2 p-5 grain">
      <div>
        <div className="mb-3 flex items-center justify-between">
          <div className="eyebrow">Live engine</div>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--ember)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--ember)]" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-dim">
              running
            </span>
          </div>
        </div>

        <div className="min-h-[64px]">
          <div key={i} style={{ animation: "tickerFade 1.8s ease" }}>
            <div className="font-mono text-[10px] uppercase tracking-widest text-dim">
              {tickerItems[i].k}
            </div>
            <div className="mt-1 font-display text-2xl leading-tight">
              {tickerItems[i].v}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-2 border-t border-rule pt-4">
        <MicroBar label="decode" pct={100} />
        <MicroBar label="upscale" pct={72} active />
        <MicroBar label="filter" pct={12} />
        <MicroBar label="encode" pct={0} />
      </div>
    </aside>
  );
}

function MicroBar({ label, pct, active }: { label: string; pct: number; active?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-16 font-mono text-[10px] uppercase tracking-widest text-dim">
        {label}
      </span>
      <div className="h-[3px] flex-1 bg-[color:var(--rule)]">
        <div
          className="h-full"
          style={{
            width: `${pct}%`,
            background: active ? "var(--ember)" : "var(--ink)",
          }}
        />
      </div>
      <span className="w-8 text-right font-mono text-[10px] text-dim">{pct}%</span>
    </div>
  );
}

/* ────────────────────────────── Marquee ────────────────────────────── */

function Marquee() {
  const items = [
    "Real-ESRGAN",
    "PyTorch",
    "FFmpeg",
    "Qt 6",
    "CUDA",
    "ncnn-vulkan",
    "QML",
    "Python 3.11",
    "Windows 10/11",
  ];
  const track = [...items, ...items];
  return (
    <section className="overflow-hidden border-y border-rule bg-paper-2">
      <div className="flex marquee-track">
        {track.map((t, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-6 whitespace-nowrap px-8 py-4"
          >
            <span className="font-display text-3xl">{t}</span>
            <span className="text-ember">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ────────────────────────────── Sections ────────────────────────────── */

function SectionHead({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
}) {
  return (
    <div className="mb-14 grid grid-cols-1 items-end gap-6 border-b border-rule pb-8 md:grid-cols-12">
      <div className="md:col-span-2 eyebrow">{eyebrow}</div>
      <h2 className="font-display text-5xl leading-none tracking-tight md:col-span-7 md:text-[64px]">
        {title}
      </h2>
      {desc && (
        <p className="text-[15px] text-soft md:col-span-3 md:pl-4 md:border-l md:border-rule">
          {desc}
        </p>
      )}
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHead
          eyebrow="§ Возможности"
          title={
            <>
              Инструменты, а не <em className="italic text-ember">магия</em>.
            </>
          }
          desc="Локальная обработка, честные метрики и полный контроль над пайплайном."
        />
        <div className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article key={f.num} className="group">
              <div className="mb-4 flex items-baseline justify-between border-b border-rule pb-3">
                <span className="font-mono text-xs text-ember">{f.num}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-dim">
                  {f.kicker}
                </span>
              </div>
              <h3 className="font-display text-3xl leading-tight">{f.title}</h3>
              <p className="mt-3 text-[15px] text-soft">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="border-t border-rule bg-paper-2 py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHead
          eyebrow="§ Пайплайн"
          title={
            <>
              Четыре шага <em className="italic text-ember">до 4K</em>.
            </>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`p-6 md:p-8 ${
                i < steps.length - 1 ? "md:border-r border-rule" : ""
              } ${i > 0 ? "border-t md:border-t-0 border-rule" : ""}`}
            >
              <div className="font-display text-6xl text-ember">{s.n}</div>
              <h3 className="mt-4 font-display text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm text-soft">{s.text}</p>
            </div>
          ))}
        </div>

        {/* Architecture */}
        <div className="mt-16 border-t border-rule pt-10">
          <div className="eyebrow mb-6">Архитектура</div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-5 md:items-center">
            <Node label="Qt QML UI" />
            <Divider />
            <Node label="PipelineManager" highlight />
            <Divider />
            <div className="flex flex-col gap-3">
              <Node label="FFmpeg decode/encode" />
              <Node label="Python Real-ESRGAN" small />
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-[15px] text-soft">
            <span className="text-ember">✦ </span>
            Обработка полностью локальна. Видео не покидает ваш компьютер, не
            уходит в облако и не логируется.
          </p>
        </div>
      </div>
    </section>
  );
}

function Node({ label, highlight, small }: { label: string; highlight?: boolean; small?: boolean }) {
  return (
    <div
      className={`rounded-sm border px-4 py-4 text-center ${
        highlight
          ? "border-ink bg-ink text-paper"
          : "border-rule bg-card2 text-ink"
      } ${small ? "text-xs" : "font-display text-lg"}`}
    >
      {label}
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center justify-center py-1 text-ember">
      <span className="font-mono text-lg">→</span>
    </div>
  );
}

function TechStack() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHead
          eyebrow="§ Под капотом"
          title={
            <>
              Технологический <em className="italic text-ember">стек</em>.
            </>
          }
        />
        <dl className="border-t border-rule">
          {stack.map(([k, v]) => (
            <div
              key={k}
              className="grid grid-cols-1 border-b border-rule py-6 md:grid-cols-12 md:items-baseline"
            >
              <dt className="eyebrow md:col-span-3">{k}</dt>
              <dd className="font-display text-2xl leading-tight md:col-span-9">
                {v}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 max-w-2xl text-[15px] text-soft">
          Портативный релиз: приложение поставляется как папка с exe, DLL,
          <span className="font-mono text-[13px]"> ai_engine</span> и локальным
          Python-окружением. Никаких инсталляторов и облачных зависимостей.
        </p>
      </div>
    </section>
  );
}

function SystemRequirements() {
  return (
    <section className="border-t border-rule bg-paper-2 py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHead
          eyebrow="§ Требования"
          title={<>Что нужно для работы.</>}
        />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <ReqBlock
            label="Минимум"
            items={["Windows 10/11 x64", "8 GB RAM", "Visual C++ Redistributable 2015–2022 (x64)"]}
          />
          <ReqBlock
            label="Рекомендуется"
            items={["NVIDIA GPU + актуальный драйвер", "16 GB RAM", "~4 GB свободного места"]}
            right
          />
        </div>
        <div className="mt-8 flex items-start gap-3 border border-rule bg-card2 p-5 text-sm text-soft">
          <AlertTriangle className="h-5 w-5 shrink-0 text-ember" />
          <p>
            Первый запуск требует однократного{" "}
            <code className="font-mono text-[13px] text-ink">setup_python.bat</code>{" "}
            (нужен интернет) для установки PyTorch и пакетов. Превью кадра
            работает без этого шага.
          </p>
        </div>
      </div>
    </section>
  );
}

function ReqBlock({ label, items, right }: { label: string; items: string[]; right?: boolean }) {
  return (
    <div className={right ? "md:border-l border-rule md:pl-10" : "md:pr-10"}>
      <div className="eyebrow mb-4">{label}</div>
      <ul className="divide-y divide-[color:var(--rule)]">
        {items.map((t) => (
          <li key={t} className="py-3 font-display text-xl">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Install() {
  const items = [
    <>Скачать <code className="font-mono text-[13px]">UpsNeyro2-x.x.x-win64.zip</code> с GitHub Releases</>,
    <>Распаковать папку целиком (не только exe)</>,
    <>Один раз запустить <code className="font-mono text-[13px]">setup_python.bat</code></>,
    <>Запустить <code className="font-mono text-[13px]">appUpsNeyro2.exe</code></>,
  ];
  return (
    <section id="install" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHead
          eyebrow="§ Установка"
          title={
            <>
              Четыре шага <em className="italic text-ember">до запуска</em>.
            </>
          }
        />
        <ol className="border-t border-rule">
          {items.map((it, i) => (
            <li
              key={i}
              className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-rule py-6"
            >
              <span className="font-display text-4xl text-ember tabular-nums">
                0{i + 1}
              </span>
              <div className="font-display text-2xl">{it}</div>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex items-start gap-3 border border-rule bg-card2 p-5 text-sm text-soft">
          <AlertTriangle className="h-5 w-5 shrink-0 text-ember" />
          <p>
            Не переносите один <code className="font-mono text-[13px] text-ink">exe</code> без Qt DLL,{" "}
            <code className="font-mono text-[13px] text-ink">ai_engine</code> и{" "}
            <code className="font-mono text-[13px] text-ink">python</code>. Приложение работает только целиком.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={GITHUB_RELEASE}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full btn-ink px-6 py-3 text-sm"
          >
            <Download className="h-4 w-4" />
            Скачать релиз
          </a>
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full btn-ghost px-6 py-3 text-sm"
          >
            <Github className="h-4 w-4" />
            Открыть репозиторий
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-t border-rule bg-paper-2 py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHead
          eyebrow="§ FAQ"
          title={<>Частые вопросы.</>}
        />
        <div className="border-t border-rule">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-rule">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-6 py-6 text-left"
                >
                  <span className="font-mono text-xs text-ember tabular-nums">
                    0{i + 1}
                  </span>
                  <span className="font-display text-2xl">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-ink transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="grid grid-cols-[auto_1fr_auto] gap-6 pb-6">
                    <span />
                    <p className="max-w-2xl text-[15px] text-soft">{f.a}</p>
                    <span />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Colophon() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-end gap-6 border-t border-rule pt-10 md:grid-cols-12">
          <div className="eyebrow md:col-span-2">Colophon</div>
          <p className="font-display text-2xl leading-snug md:col-span-7">
            UpsNeyro — открытый дипломный проект. Набран Instrument Serif и
            Inter. Собран на Qt 6 и PyTorch. Автор — <em className="italic text-ember">takamaro</em>.
          </p>
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noreferrer"
            className="link-underline w-fit text-sm text-soft md:col-span-3 md:justify-self-end"
          >
            github.com/tkmrqq/UpsNeyro ↗
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-rule bg-paper py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-4 px-6 md:flex-row md:items-center">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-2xl">UpsNeyro</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-dim">
            © {new Date().getFullYear()} · MIT · Windows 10/11
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-soft">
          <a href={GITHUB_REPO} target="_blank" rel="noreferrer" className="link-underline">
            GitHub
          </a>
          <a href={GITHUB_RELEASE} target="_blank" rel="noreferrer" className="link-underline">
            Releases
          </a>
          <a href="#install" className="link-underline">Установка</a>
          <a href="#top" className="link-underline">↑ Наверх</a>
        </div>
      </div>
    </footer>
  );
}
