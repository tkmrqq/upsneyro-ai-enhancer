import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Download,
  Github,
  Sparkles,
  Zap,
  SlidersHorizontal,
  ListVideo,
  Gauge,
  Settings2,
  Play,
  MonitorPlay,
  ChevronDown,
  AlertTriangle,
  Cpu,
  ShieldCheck,
  ArrowRight,
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
    icon: Sparkles,
    title: "AI Upscale",
    points: [
      "Real-ESRGAN через Python + PyTorch",
      "Режимы: Fast (animevideov3), Balanced (x4plus), Quality (x4plus-anime)",
      "Целевые разрешения: 1080p, 4K и др.",
    ],
  },
  {
    icon: Zap,
    title: "Быстрое превью",
    points: [
      "Просмотр результата на одном кадре до полного экспорта",
      "ncnn-vulkan для превью без запуска полного пайплайна",
    ],
  },
  {
    icon: SlidersHorizontal,
    title: "Фильтры и пресеты",
    points: [
      "Яркость, контраст, насыщенность, hue, резкость, blur, виньетка, grain",
      "Готовые пресеты (Vintage и др.)",
      "Превью фильтров на кадре",
    ],
  },
  {
    icon: ListVideo,
    title: "Очередь экспорта",
    points: [
      "Пакетная обработка нескольких файлов",
      "Перестановка, отмена, прогресс по каждой задаче",
    ],
  },
  {
    icon: Gauge,
    title: "Производительность",
    points: [
      "Монитор этапов: decode → upscale → filter → encode",
      "Опциональный аппаратный декод (FFmpeg: CUDA / D3D12)",
      "GPU-инференс через CUDA (PyTorch)",
    ],
  },
  {
    icon: Settings2,
    title: "Удобство",
    points: [
      "Сохранение сессий и настроек",
      "Проверка обновлений через GitHub Releases",
      "Логи и подсказки по железу",
    ],
  },
];

const steps = [
  {
    n: "01",
    title: "Открыть видео",
    text: "Drag & drop или выбор файла: MP4, MKV, MOV, WebM и др.",
  },
  {
    n: "02",
    title: "Выбрать режим и разрешение",
    text: "Fast / Balanced / Quality + 1080p / 4K",
  },
  {
    n: "03",
    title: "Превью (опционально)",
    text: "Посмотреть кадр до полного рендера",
  },
  {
    n: "04",
    title: "Экспорт",
    text: "Декод → нейро-апскейл → фильтры → кодирование в MP4",
  },
];

const faqs = [
  {
    q: "Это бесплатно?",
    a: "Да, open-source / дипломный проект. Скачивание с GitHub.",
  },
  {
    q: "Нужен интернет для обработки?",
    a: "Нет, только для первой установки Python-зависимостей и проверки обновлений.",
  },
  {
    q: "Какие форматы видео поддерживаются?",
    a: "MP4, MKV, MOV, WebM, AVI и др. — через FFmpeg.",
  },
  {
    q: "Работает без NVIDIA?",
    a: "Да, на CPU, но медленнее. В настройках можно выбрать CPU.",
  },
  {
    q: "Почему Balanced/Quality медленнее Fast?",
    a: "Более тяжёлые модели Real-ESRGAN, но заметно выше качество деталей.",
  },
  {
    q: "Можно macOS / Linux?",
    a: "Сейчас релиз ориентирован на Windows; исходники позволяют собрать на Linux.",
  },
];

const stackBadges = ["Qt 6", "FFmpeg", "PyTorch", "Real-ESRGAN", "CUDA"];

function Landing() {
  return (
    <div className="min-h-screen text-white antialiased">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Screenshot />
      <TechStack />
      <SystemRequirements />
      <Install />
      <FAQ />
      <ProjectContext />
      <Footer />
    </div>
  );
}

function Header() {
  const nav = [
    { href: "#features", label: "Возможности" },
    { href: "#how", label: "Как работает" },
    { href: "#install", label: "Установка" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-[#2f2f36] bg-[#1c1c1f]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg btn-accent">
            <MonitorPlay className="h-4 w-4" />
          </div>
          <span className="text-lg font-bold tracking-tight">UpsNeyro</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-secondary transition-colors hover:text-white"
            >
              {n.label}
            </a>
          ))}
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-secondary transition-colors hover:text-white"
          >
            GitHub
          </a>
        </nav>
        <a
          href={GITHUB_RELEASE}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg btn-accent px-4 py-2 text-sm font-semibold"
        >
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Скачать</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2f2f36] bg-[#25252b] px-3 py-1 text-xs text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ffa14f]" />
            v0.2.0 · Open-source · Windows 10/11
          </div>

          <h1 className="text-balance text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Апскейл и улучшение видео{" "}
            <span className="gradient-text">нейросетями</span> — локально, на вашем ПК
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-secondary md:text-lg">
            UpsNeyro — десктопное приложение для Windows: увеличение разрешения,
            улучшение деталей и цветокоррекция. Без облака: видео обрабатывается на
            вашем компьютере (CPU/GPU).
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={GITHUB_RELEASE}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg btn-accent px-6 py-3 text-sm font-semibold"
            >
              <Download className="h-4 w-4" />
              Скачать для Windows
            </a>
            <a
              href={GITHUB_REPO}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#2f2f36] bg-[#25252b] px-6 py-3 text-sm font-semibold transition-colors hover:border-[#ffa14f]/40"
            >
              <Github className="h-4 w-4" />
              Исходный код на GitHub
            </a>
            <a
              href="#install"
              className="inline-flex items-center gap-1 px-3 py-3 text-sm text-secondary transition-colors hover:text-white"
            >
              Как установить <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <ul className="mx-auto mt-10 grid max-w-2xl gap-3 text-sm text-secondary sm:grid-cols-3">
            {[
              "Три режима: Fast / Balanced / Quality",
              "Превью кадра за секунды + экспорт в MP4",
              "Очередь задач, фильтры, прогресс и ETA",
            ].map((t) => (
              <li
                key={t}
                className="rounded-lg border border-[#2f2f36] bg-[#25252b]/60 px-3 py-2"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <MockAppWindow />
        </div>
      </div>
    </section>
  );
}

function MockAppWindow() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="panel overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 border-b border-[#2f2f36] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#3a3a42]" />
            <span className="h-3 w-3 rounded-full bg-[#3a3a42]" />
            <span className="h-3 w-3 rounded-full bg-[#3a3a42]" />
          </div>
          <div className="ml-3 text-xs text-secondary">UpsNeyro — AI Video Enhancer</div>
        </div>
        <div className="grid grid-cols-12 gap-0">
          {/* Sidebar */}
          <aside className="col-span-3 hidden border-r border-[#2f2f36] p-4 md:block">
            <div className="mb-4 text-xs uppercase tracking-wider text-secondary">
              Проекты
            </div>
            <ul className="space-y-1 text-sm">
              {["clip_01.mp4", "shot_02.mkv", "raw_final.mov"].map((f, i) => (
                <li
                  key={f}
                  className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${
                    i === 0
                      ? "bg-[#ffa14f]/10 text-white"
                      : "text-secondary hover:bg-[#2f2f36]/50"
                  }`}
                >
                  <Play className="h-3 w-3" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-6 text-xs uppercase tracking-wider text-secondary">
              Очередь
            </div>
            <div className="mt-2 space-y-2 text-xs text-secondary">
              <QueueItem name="clip_01" pct={62} />
              <QueueItem name="shot_02" pct={12} />
              <QueueItem name="raw_final" pct={0} />
            </div>
          </aside>

          {/* Preview */}
          <div className="col-span-12 md:col-span-6">
            <div className="relative aspect-video overflow-hidden bg-black">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "conic-gradient(from 210deg at 50% 50%, #1c1c1f, #2a1f18, #402615, #ffa14f33, #1c1c1f)",
                  filter: "blur(4px)",
                }}
              />
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 border-t border-[#2f2f36] bg-[#1c1c1f]/80 px-4 py-2 backdrop-blur">
                <Play className="h-4 w-4 text-[#ffa14f]" />
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-[#2f2f36]">
                  <div className="h-full w-2/5 rounded-full btn-accent" />
                </div>
                <span className="text-xs text-secondary">00:42 / 01:48</span>
              </div>
              <div className="absolute left-4 top-4 rounded-md border border-[#2f2f36] bg-[#1c1c1f]/70 px-2 py-1 text-xs backdrop-blur">
                4K · Quality
              </div>
              <div className="absolute right-4 top-4 rounded-md border border-[#ffa14f]/40 bg-[#ffa14f]/10 px-2 py-1 text-xs text-[#ffa14f] backdrop-blur">
                Preview
              </div>
            </div>
          </div>

          {/* Right panel */}
          <aside className="col-span-12 border-t border-[#2f2f36] p-4 md:col-span-3 md:border-l md:border-t-0">
            <div className="text-xs uppercase tracking-wider text-secondary">
              Upscale
            </div>
            <div className="mt-2 grid grid-cols-3 gap-1 text-xs">
              {["Fast", "Balanced", "Quality"].map((m, i) => (
                <button
                  key={m}
                  className={`rounded-md border px-2 py-1.5 ${
                    i === 2
                      ? "border-[#ffa14f] bg-[#ffa14f]/10 text-white"
                      : "border-[#2f2f36] text-secondary"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
            <div className="mt-4 text-xs uppercase tracking-wider text-secondary">
              Разрешение
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1 text-xs">
              {["1080p", "4K"].map((r, i) => (
                <button
                  key={r}
                  className={`rounded-md border px-2 py-1.5 ${
                    i === 1
                      ? "border-[#ffa14f] bg-[#ffa14f]/10 text-white"
                      : "border-[#2f2f36] text-secondary"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
            <div className="mt-4 space-y-3 text-xs">
              <Slider label="Резкость" value={70} />
              <Slider label="Насыщенность" value={45} />
              <Slider label="Виньетка" value={20} />
            </div>
            <button className="mt-5 w-full rounded-md btn-accent px-3 py-2 text-xs font-semibold">
              Экспорт в MP4
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}

function QueueItem({ name, pct }: { name: string; pct: number }) {
  return (
    <div>
      <div className="flex justify-between">
        <span className="truncate">{name}</span>
        <span>{pct}%</span>
      </div>
      <div className="mt-1 h-1 overflow-hidden rounded-full bg-[#2f2f36]">
        <div
          className="h-full rounded-full btn-accent"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function Slider({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-secondary">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="mt-1 h-1 overflow-hidden rounded-full bg-[#2f2f36]">
        <div
          className="h-full rounded-full btn-accent"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffa14f]">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-black tracking-tight md:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-secondary">{desc}</p>}
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="border-t border-[#2f2f36] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Возможности"
          title="Всё для качественного апскейла"
          desc="Локальная обработка, честные метрики и полный контроль над пайплайном."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="panel group p-6 transition-colors hover:border-[#ffa14f]/40"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#2f2f36] bg-[#1c1c1f] text-[#ffa14f]">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-secondary">
                {f.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#ffa14f]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="border-t border-[#2f2f36] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Как работает"
          title="Четыре шага от исходника до 4K"
        />
        <div className="grid gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="panel relative p-6">
              <div className="mb-4 text-3xl font-black gradient-text">{s.n}</div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-secondary">{s.text}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-[#2f2f36] md:block" />
              )}
            </div>
          ))}
        </div>

        {/* Architecture diagram */}
        <div className="panel mt-10 p-6 md:p-8">
          <div className="mb-4 text-xs uppercase tracking-wider text-secondary">
            Архитектура пайплайна
          </div>
          <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
            <Node label="Qt QML UI" />
            <Arrow />
            <Node label="PipelineManager" highlight />
            <Arrow />
            <div className="flex flex-1 flex-col gap-3">
              <Node label="FFmpeg decode/encode" />
              <Node label="Python Real-ESRGAN (shared memory)" />
            </div>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-secondary">
            <ShieldCheck className="h-4 w-4 text-[#ffa14f]" />
            Обработка полностью локальна. Видео не загружается никуда.
          </p>
        </div>
      </div>
    </section>
  );
}

function Node({ label, highlight }: { label: string; highlight?: boolean }) {
  return (
    <div
      className={`flex-1 rounded-lg border px-4 py-3 text-center text-sm ${
        highlight
          ? "border-[#ffa14f]/50 bg-[#ffa14f]/10 text-white"
          : "border-[#2f2f36] bg-[#1c1c1f] text-secondary"
      }`}
    >
      {label}
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center justify-center text-[#ffa14f]">
      <ArrowRight className="h-5 w-5 rotate-90 md:rotate-0" />
    </div>
  );
}

function Screenshot() {
  return (
    <section className="border-t border-[#2f2f36] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Сравнение"
          title="До и после"
          desc="Превью кадра позволяет оценить результат за секунды, до полного экспорта."
        />
        <div className="panel overflow-hidden">
          <div className="grid grid-cols-2">
            <div className="relative aspect-video overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg,#2a2a30,#1c1c1f)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 40%, rgba(120,120,140,0.35), transparent 40%), radial-gradient(circle at 70% 60%, rgba(80,80,100,0.35), transparent 40%)",
                  filter: "blur(2px) contrast(0.9)",
                }}
              />
              <div className="absolute left-3 top-3 rounded bg-black/60 px-2 py-1 text-xs">
                Original · 720p
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden border-l border-[#2f2f36]">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg,#3a2a1a,#1c1c1f)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 40%, rgba(255,161,79,0.5), transparent 40%), radial-gradient(circle at 70% 60%, rgba(255,145,77,0.35), transparent 40%)",
                }}
              />
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute right-3 top-3 rounded bg-[#ffa14f]/20 px-2 py-1 text-xs text-[#ffa14f] ring-1 ring-[#ffa14f]/40">
                UpsNeyro · 4K Quality
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section className="border-t border-[#2f2f36] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Под капотом" title="Технологический стек" />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="panel p-6">
            <ul className="space-y-3 text-sm">
              <StackRow label="UI" value="Qt 6, QML, Material dark theme" />
              <StackRow label="Media" value="FFmpeg (decode/encode, опц. HW-декод)" />
              <StackRow
                label="ML"
                value="Python subprocess, Real-ESRGAN, PyTorch (CUDA/CPU)"
              />
              <StackRow label="Preview upscale" value="ncnn-vulkan" />
              <StackRow label="Platform" value="Windows 10/11 x64 (portable)" />
            </ul>
          </div>
          <div className="panel flex flex-col justify-between p-6">
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm text-secondary">
                <Cpu className="h-4 w-4 text-[#ffa14f]" /> Ключевые технологии
              </div>
              <div className="flex flex-wrap gap-2">
                {stackBadges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-[#2f2f36] bg-[#1c1c1f] px-3 py-1 text-xs"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-6 text-sm text-secondary">
              Портативный релиз: приложение поставляется как папка с exe, DLL,
              ai_engine и локальным Python-окружением. Никаких инсталляторов и
              облачных зависимостей.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StackRow({ label, value }: { label: string; value: string }) {
  return (
    <li className="grid grid-cols-[7rem_1fr] gap-3 border-b border-[#2f2f36] pb-3 last:border-0 last:pb-0">
      <span className="text-secondary">{label}</span>
      <span>{value}</span>
    </li>
  );
}

function SystemRequirements() {
  return (
    <section className="border-t border-[#2f2f36] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Требования" title="Что нужно для работы" />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="panel p-6">
            <h3 className="mb-4 font-semibold">Минимум</h3>
            <ul className="space-y-2 text-sm text-secondary">
              <ReqRow text="Windows 10/11 x64" />
              <ReqRow text="8 GB RAM" />
              <ReqRow text="Visual C++ Redistributable 2015–2022 (x64)" />
            </ul>
          </div>
          <div className="panel p-6">
            <h3 className="mb-4 font-semibold">Рекомендуется</h3>
            <ul className="space-y-2 text-sm text-secondary">
              <ReqRow text="NVIDIA GPU + актуальный драйвер" />
              <ReqRow text="16 GB RAM" />
              <ReqRow text="~4 GB свободного места (PyTorch и зависимости)" />
            </ul>
          </div>
        </div>
        <div className="panel mt-4 flex gap-3 p-5 text-sm text-secondary">
          <AlertTriangle className="h-5 w-5 shrink-0 text-[#ffa14f]" />
          <p>
            Первый запуск требует однократного{" "}
            <code className="rounded bg-[#1c1c1f] px-1.5 py-0.5 text-xs text-white">
              setup_python.bat
            </code>{" "}
            (нужен интернет) для установки PyTorch и пакетов. Превью кадра работает
            без этого шага.
          </p>
        </div>
      </div>
    </section>
  );
}

function ReqRow({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#ffa14f]" />
      <span>{text}</span>
    </li>
  );
}

function Install() {
  const items = [
    <>
      Скачать{" "}
      <code className="rounded bg-[#1c1c1f] px-1.5 py-0.5 text-xs">
        UpsNeyro2-x.x.x-win64.zip
      </code>{" "}
      с GitHub Releases
    </>,
    <>Распаковать папку целиком (не только exe)</>,
    <>
      Один раз запустить{" "}
      <code className="rounded bg-[#1c1c1f] px-1.5 py-0.5 text-xs">
        setup_python.bat
      </code>
    </>,
    <>
      Запустить{" "}
      <code className="rounded bg-[#1c1c1f] px-1.5 py-0.5 text-xs">
        appUpsNeyro2.exe
      </code>
    </>,
  ];
  return (
    <section id="install" className="border-t border-[#2f2f36] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <SectionTitle eyebrow="Установка" title="Четыре шага до запуска" />
        <ol className="space-y-3">
          {items.map((it, i) => (
            <li key={i} className="panel flex items-start gap-4 p-5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md btn-accent text-sm font-bold">
                {i + 1}
              </span>
              <div className="pt-1 text-sm">{it}</div>
            </li>
          ))}
        </ol>
        <div className="panel mt-4 flex gap-3 border-[#ffa14f]/30 bg-[#ffa14f]/5 p-5 text-sm">
          <AlertTriangle className="h-5 w-5 shrink-0 text-[#ffa14f]" />
          <p className="text-secondary">
            Не переносите один <code className="rounded bg-[#1c1c1f] px-1.5 py-0.5 text-xs text-white">exe</code>{" "}
            без Qt DLL, <code className="rounded bg-[#1c1c1f] px-1.5 py-0.5 text-xs text-white">ai_engine</code> и{" "}
            <code className="rounded bg-[#1c1c1f] px-1.5 py-0.5 text-xs text-white">python</code>. Приложение работает только целиком.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={GITHUB_RELEASE}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg btn-accent px-6 py-3 text-sm font-semibold"
          >
            <Download className="h-4 w-4" />
            Скачать релиз
          </a>
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#2f2f36] bg-[#25252b] px-6 py-3 text-sm font-semibold hover:border-[#ffa14f]/40"
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
    <section id="faq" className="border-t border-[#2f2f36] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <SectionTitle eyebrow="FAQ" title="Частые вопросы" />
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="panel overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-medium">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#ffa14f] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-[#2f2f36] px-5 py-4 text-sm text-secondary">
                    {f.a}
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

function ProjectContext() {
  return (
    <section className="border-t border-[#2f2f36] py-16">
      <div className="mx-auto max-w-3xl px-5">
        <div className="panel p-6 text-center">
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffa14f]">
            Дипломный проект
          </div>
          <p className="text-sm text-secondary">
            UpsNeyro разработан как открытый дипломный проект.
            Автор: <span className="text-white">takamaro</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#2f2f36] py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg btn-accent">
              <MonitorPlay className="h-4 w-4" />
            </div>
            <span className="text-lg font-bold">UpsNeyro</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-secondary">
            AI Video Enhancer для Windows. Локальный апскейл и улучшение видео на
            базе Real-ESRGAN.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#2f2f36] bg-[#25252b] px-3 py-1 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ffa14f]" />
            v0.2.0
          </div>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold">Проект</div>
          <ul className="space-y-2 text-sm text-secondary">
            <li>
              <a href={GITHUB_REPO} target="_blank" rel="noreferrer" className="hover:text-white">
                GitHub
              </a>
            </li>
            <li>
              <a href={GITHUB_RELEASE} target="_blank" rel="noreferrer" className="hover:text-white">
                Releases / Download
              </a>
            </li>
            <li>
              <a href="#install" className="hover:text-white">
                Установка
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold">Инфо</div>
          <ul className="space-y-2 text-sm text-secondary">
            <li>License: MIT</li>
            <li>Автор: takamaro</li>
            <li>Windows 10/11 x64</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-[#2f2f36] px-5 pt-6 text-xs text-secondary">
        © {new Date().getFullYear()} UpsNeyro. Open-source diploma project.
      </div>
    </footer>
  );
}
