import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Github, Linkedin, ExternalLink, Download } from "lucide-react";

export const Route = createFileRoute("/resume")({
  component: Resume,
  head: () => ({
    meta: [
      { title: "Resume | Yerrajonnala Bhavyasree" },
      {
        name: "description",
        content: "Resume of Yerrajonnala Bhavyasree — B.Tech CSE (AI) student and Machine Learning enthusiast.",
      },
      { property: "og:title", content: "Resume | Yerrajonnala Bhavyasree" },
      {
        property: "og:description",
        content: "Resume of Yerrajonnala Bhavyasree — B.Tech CSE (AI) student and Machine Learning enthusiast.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function Resume() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-[850px] px-6 py-8 print:p-0">
        {/* Toolbar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand"
          >
            ← Back to Portfolio
          </a>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all"
          >
            <Download size={16} /> Save as PDF
          </button>
        </div>

        {/* Resume card */}
        <div className="bg-white p-8 md:p-10 shadow-sm print:shadow-none print:p-0">
          {/* Header */}
          <header className="border-b border-slate-200 pb-6">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
              Yerrajonnala Bhavyasree
            </h1>
            <p className="mt-1 text-lg text-slate-600">
              Computer Science & Engineering (Artificial Intelligence) Student
            </p>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-brand" />
                Anantapur, Andhra Pradesh
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail size={14} className="text-brand" />
                bhavyasreey3@gmail.com
              </span>
              <a
                href="https://www.linkedin.com/in/bhavyasreey"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-brand"
              >
                <Linkedin size={14} className="text-brand" />
                linkedin.com/in/bhavyasreey
              </a>
              <a
                href="https://github.com/ybhavyasree4"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-brand"
              >
                <Github size={14} className="text-brand" />
                github.com/ybhavyasree4
              </a>
            </div>
          </header>

          {/* Objective */}
          <section className="mt-6">
            <h2 className="font-display text-lg font-semibold text-slate-900 uppercase tracking-wide">
              Career Objective
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Motivated Computer Science and Engineering (AI) student seeking a challenging role in
              Machine Learning, Artificial Intelligence, or Data Analytics. Eager to contribute to
              innovative projects, apply analytical skills, and grow within a forward-thinking
              organization.
            </p>
          </section>

          {/* Education */}
          <section className="mt-6">
            <h2 className="font-display text-lg font-semibold text-slate-900 uppercase tracking-wide">
              Education
            </h2>
            <div className="mt-3 space-y-4">
              <div>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-semibold text-slate-900">
                    B.Tech in Computer Science & Engineering (Artificial Intelligence)
                  </h3>
                  <span className="text-sm text-slate-500">2022 – 2026</span>
                </div>
                <p className="text-sm text-slate-600">Karunya Institute of Technology and Sciences</p>
                <p className="text-sm text-slate-600">
                  <span className="font-medium text-slate-900">CGPA:</span> 8.34 / 10
                </p>
              </div>
              <div>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-semibold text-slate-900">
                    AP State Intermediate Board Intermediate - MPC - 96.9%
                  </h3>
                  <span className="text-sm text-slate-500">2020 – 2022</span>
                </div>
                <p className="text-sm text-slate-600">AP State Intermediate Board</p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mt-6">
            <h2 className="font-display text-lg font-semibold text-slate-900 uppercase tracking-wide">
              Experience
            </h2>
            <div className="mt-3">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="font-semibold text-slate-900">Machine Learning Intern</h3>
                <span className="text-sm text-slate-500">Ei Systems Company</span>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                <li>Developed an ML model to predict travel insurance purchases using Python.</li>
                <li>Performed data preprocessing and feature engineering with Pandas & NumPy.</li>
                <li>Built and optimized a Random Forest Classifier using Scikit-learn.</li>
                <li>Conducted Exploratory Data Analysis (EDA) on customer datasets.</li>
                <li>Created insightful visualizations using Matplotlib.</li>
                <li>Improved prediction accuracy through iterative model evaluation.</li>
                <li>Generated data-driven business insights for stakeholders.</li>
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section className="mt-6">
            <h2 className="font-display text-lg font-semibold text-slate-900 uppercase tracking-wide">
              Skills
            </h2>
            <div className="mt-3 grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
              <div>
                <span className="font-medium text-slate-900">Programming:</span> Python, Java
              </div>
              <div>
                <span className="font-medium text-slate-900">Machine Learning:</span> Scikit-learn, Pandas, NumPy
              </div>
              <div>
                <span className="font-medium text-slate-900">Web Development:</span> HTML, CSS, Streamlit
              </div>
              <div>
                <span className="font-medium text-slate-900">Database:</span> MySQL
              </div>
              <div>
                <span className="font-medium text-slate-900">Tools:</span> Git, GitHub, VS Code
              </div>
              <div>
                <span className="font-medium text-slate-900">Soft Skills:</span> Positive Attitude, Teamwork, Deterministic, Time Management
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mt-6">
            <h2 className="font-display text-lg font-semibold text-slate-900 uppercase tracking-wide">
              Projects
            </h2>
            <div className="mt-3 space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900">Wealth Vista — Expense Tracker</h3>
                <p className="text-sm text-slate-600">
                  Responsive frontend for a personal finance app to track daily expenses, manage
                  categories, and set financial goals. Built with HTML & CSS.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Data-Driven Analysis — Screen Time & Mental Health</h3>
                <p className="text-sm text-slate-600">
                  Analyzed the relationship between screen time, mental health, and academic
                  performance using Python, Pandas, and Matplotlib.
                </p>
              </div>
            </div>
          </section>

          {/* Certifications & Activities */}
          <section className="mt-6">
            <h2 className="font-display text-lg font-semibold text-slate-900 uppercase tracking-wide">
              Activities & Interests
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>Participated in hackathons and technical workshops.</li>
              <li>Active contributor to academic and collaborative coding projects.</li>
              <li>Interests: Machine Learning, Data Analytics, Web Development, Problem Solving.</li>
            </ul>
          </section>

          {/* Portfolio link */}
          <section className="mt-8 border-t border-slate-200 pt-4 print:hidden">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline"
            >
              <ExternalLink size={14} />
              View full portfolio at ybhavyasree.portfolio
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
