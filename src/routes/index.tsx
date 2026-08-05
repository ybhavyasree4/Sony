import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Download,
  GraduationCap,
  Briefcase,
  Code2,
  Database,
  Brain,
  Layout,
  Wrench,
  Users,
  ArrowUp,
  ExternalLink,
  Menu,
  X,
  Sparkles,
  BarChart3,
  LayoutDashboard,
  Globe,
} from "lucide-react";
import image from "@/assets/image.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-slate-100">
        <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="font-display font-bold text-lg tracking-tight"
          >
            <span className="text-slate-900">Bhavya Sree</span>
            <span className="text-brand">.</span>
          </button>
          <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {NAV.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => scrollTo(n.id)}
                  className="hover:text-brand transition-colors"
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white">
            <ul className="px-6 py-4 flex flex-col gap-3 text-sm font-medium">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => scrollTo(n.id)}
                    className="w-full text-left py-1 text-slate-700 hover:text-brand"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-soft via-white to-white" />
        <div className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute top-40 -left-20 -z-10 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
              <Sparkles size={14} className="text-brand" />
              Available for Internships & Full-time
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05]">
              Hi, I'm <span className="text-brand">Bhavyasree</span>{"\n\n"}
              <span className="block mt-2 text-slate-800">
                {"\n"}
              </span>
            </h1>
            <p className="mt-3 text-lg font-medium text-slate-600">
              Computer Science & Engineering (Artificial Intelligence) Student
            </p>
            <p className="mt-5 max-w-xl text-slate-600 leading-relaxed">
              Passionate about Machine Learning, Artificial Intelligence, Data Analytics and Web
              Development. Dedicated to building innovative solutions that solve real-world
              problems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/resume"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 hover:shadow-brand/40 hover:-translate-y-0.5 transition-all"
              >
                <Download size={16} /> Download Resume
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-800 hover:border-brand hover:text-brand transition-all"
              >
                <Mail size={16} /> Contact Me
              </button>
              <a
                href="https://github.com/ybhavyasree4"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 hover:-translate-y-0.5 transition-all"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/bhavyasreey"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0958ab] hover:-translate-y-0.5 transition-all"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end animate-fade-up">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand to-indigo-400 opacity-20 blur-2xl" />
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-brand to-indigo-500 opacity-70" />
              <img
                src={image}
                alt="Bhavyasree"
                width={1024}
                height={1024}
                className="relative w-64 sm:w-80 md:w-[22rem] aspect-square rounded-[2rem] object-cover shadow-2xl shadow-brand/20 animate-float"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 border border-slate-100">
                <Brain size={20} className="text-brand" />
                <div>
                  <p className="text-xs font-semibold text-slate-900">AI / ML</p>
                  <p className="text-[10px] text-slate-500">Enthusiast</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 border border-slate-100">
                <BarChart3 size={20} className="text-brand" />
                <div>
                  <p className="text-xs font-semibold text-slate-900">CGPA 8.34</p>
                  <p className="text-[10px] text-slate-500">B.Tech CSE (AI)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" eyebrow="About Me" title="A quick introduction">
        <div className="grid md:grid-cols-5 gap-8">
          <p className="md:col-span-3 text-slate-600 leading-relaxed">
            Computer Science and Engineering student passionate about Machine Learning, Artificial
            Intelligence, and emerging technologies. Proficient in Python, data analysis, and
            implementing machine learning algorithms to solve real-world problems. Strong
            problem-solving and analytical skills with experience working in collaborative
            environments. Eager to develop innovative, data-driven solutions while contributing to
            organizational growth — seeking opportunities to apply my knowledge and gain practical
            experience in the IT and AI/ML domains.
          </p>
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {[
              { label: "Location", value: "Anantapur, AP", icon: MapPin },
              { label: "Degree", value: "B.Tech CSE (AI)", icon: GraduationCap },
              { label: "CGPA", value: "8.34 / 10", icon: BarChart3 },
              { label: "Status", value: "Open to Work", icon: Sparkles },
            ].map((c) => (
              <div
                key={c.label}
                className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <c.icon size={18} className="text-brand" />
                <p className="mt-2 text-xs uppercase tracking-wider text-slate-500">{c.label}</p>
                <p className="text-sm font-semibold text-slate-900">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" eyebrow="Education" title="Academic journey">
        <div className="relative pl-8 border-l-2 border-brand/20 space-y-8">
          <div className="relative">
            <div className="absolute -left-[38px] top-2 h-4 w-4 rounded-full bg-brand ring-4 ring-brand/20" />
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-lg transition-all">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display font-semibold text-lg text-slate-900">
                    B.Tech in Computer Science & Engineering (Artificial Intelligence)
                  </h3>
                  <p className="text-slate-600 mt-1">
                    Karunya Institute of Technology and Sciences
                  </p>
                </div>
                <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                  2022 – 2026
                </span>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm">
                <span className="rounded-lg bg-slate-50 px-3 py-1 text-slate-700 font-medium">
                  CGPA: <span className="text-brand font-bold">8.34</span>
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[38px] top-2 h-4 w-4 rounded-full bg-brand ring-4 ring-brand/20" />
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-lg transition-all">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display font-semibold text-lg text-slate-900">
                    AP State Intermediate Board - MPC
                  </h3>
                  <p className="text-slate-600 mt-1">Narayana Junior College</p>
                </div>
                <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                  2020 – 2022
                </span>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm">
                <span className="rounded-lg bg-slate-50 px-3 py-1 text-slate-700 font-medium">
                  CGPA: <span className="text-brand font-bold">9.69</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>


      {/* Experience */}
      <Section id="experience" eyebrow="Experience" title="Internship experience">
        <div className="rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-sm hover:shadow-lg transition-all">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                <Briefcase size={22} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-slate-900">
                  Machine Learning Intern
                </h3>
                <p className="text-slate-600">Ei Systems Company</p>
              </div>
            </div>
            <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
              Internship
            </span>
          </div>
          <ul className="mt-6 grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-600">
            {[
              "Developed an ML model to predict travel insurance purchases using Python.",
              "Performed data preprocessing and feature engineering with Pandas & NumPy.",
              "Built and optimized a Random Forest Classifier using Scikit-learn.",
              "Conducted Exploratory Data Analysis (EDA) on customer datasets.",
              "Created insightful visualizations using Matplotlib.",
              "Improved prediction accuracy through iterative model evaluation.",
              "Generated data-driven business insights for stakeholders.",
            ].map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="Skills" title="What I work with">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: Code2, title: "Programming", items: ["Python", "Java"] },
            { icon: Brain, title: "Machine Learning", items: ["Scikit-learn", "Pandas", "NumPy"] },
            { icon: Layout, title: "Web Development", items: ["HTML", "CSS", "Streamlit"] },
            { icon: Database, title: "Database", items: ["MySQL"] },
            { icon: Wrench, title: "Tools", items: ["Git", "GitHub", "VS Code"] },
            {
              icon: Users,
              title: "Soft Skills",
              items: ["Positive Attitude", "Teamwork", "Deterministic", "Time Management"],
            },
          ].map((cat) => (
            <div
              key={cat.title}
              className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                <cat.icon size={20} />
              </div>
              <h3 className="mt-4 font-display font-semibold text-slate-900">{cat.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {cat.items.map((i) => (
                  <span
                    key={i}
                    className="rounded-full bg-slate-50 border border-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section id="services" eyebrow="Services" title="What I can build for you">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: Brain,
              title: "ML Model Development",
              desc: "Intelligent ML models for predictive analytics and classification.",
            },
            {
              icon: BarChart3,
              title: "Data Analysis & Viz",
              desc: "Analyze datasets, generate insights, and craft interactive visuals.",
            },
            {
              icon: Globe,
              title: "Web Development",
              desc: "Responsive, user-friendly websites using modern technologies.",
            },
            {
              icon: LayoutDashboard,
              title: "Streamlit Dashboards",
              desc: "Interactive dashboards for data and ML applications.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-brand-soft opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand to-indigo-500 text-white shadow-md">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-4 font-display font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" eyebrow="Projects" title="Selected work">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Wealth Vista — Expense Tracker",
              desc: "Responsive frontend for a personal finance app to track daily expenses, manage categories and set financial goals. Focused on clean UI/UX for usability and accessibility.",
              tech: ["HTML", "CSS"],
              gradient: "from-blue-500 to-indigo-500",
              icon: BarChart3,
            },
            {
              title: "Screen Time, Mental Health & Academics Analytics",
              desc: "Interactive analytics platform in Python & Streamlit — EDA, correlation analysis, Z-score outlier detection, a rule-based recommendation engine, plus CSV/PDF export.",
              tech: ["Python", "Streamlit", "Pandas", "Matplotlib"],
              gradient: "from-indigo-500 to-purple-500",
              icon: Brain,
            },
          ].map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div className={`h-40 bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 grid place-items-center">
                  <p.icon size={56} className="text-white/90" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-lg text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/ybhavyasree4"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all"
                >
                  View on GitHub <ExternalLink size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="Contact" title="Get in touch">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: Mail,
              label: "Email",
              value: "bhavyasreey3@gmail.com",
              href: "mailto:bhavyasreey3@gmail.com",
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              value: "linkedin.com/in/bhavyasreey",
              href: "https://www.linkedin.com/in/bhavyasreey",
            },
            {
              icon: Github,
              label: "GitHub",
              value: "github.com/ybhavyasree4",
              href: "https://github.com/ybhavyasree4",
            },
            {
              icon: MapPin,
              label: "Location",
              value: "Anantapur, Andhra Pradesh, India",
            },
          ].map((c) => {
            const inner = (
              <>
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                  <c.icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-slate-500">{c.label}</p>
                  <p className="truncate text-sm font-semibold text-slate-900">{c.value}</p>
                </div>
              </>
            );
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                {inner}
              </a>
            ) : (
              <div
                key={c.label}
                className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
              >
                {inner}
              </div>
            );
          })}
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display font-bold text-slate-900">
            Yerrajonnala Bhavyasree
            <span className="text-brand">.</span>
          </p>
          <p className="text-xs text-slate-500 text-center">
            © {new Date().getFullYear()} — Designed & Developed by Yerrajonnala Bhavyasree
          </p>
          <div className="flex items-center gap-2">
            {[
              { icon: Github, href: "https://github.com/ybhavyasree4" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/bhavyasreey" },
              { icon: Mail, href: "mailto:bhavyasreey3@gmail.com" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-600 hover:border-brand hover:text-brand hover:-translate-y-0.5 transition-all"
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => scrollTo("home")}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-brand text-white shadow-xl shadow-brand/30 hover:-translate-y-0.5 transition-all"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

