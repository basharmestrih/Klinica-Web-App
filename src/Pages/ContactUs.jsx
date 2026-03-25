import React from "react";
import { Mail, MapPin, MessageSquareText, Phone, Send, Timer } from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit our clinic",
    detail: "Sheikh Zayed Road, Dubai, UAE",
  },
  {
    icon: Mail,
    title: "Email support",
    detail: "klinicasupport@gmail.com",
  },
  {
    icon: Phone,
    title: "Call us directly",
    detail: "07066979133",
  },
  {
    icon: Timer,
    title: "Working hours",
    detail: "Mon - Sat, 9:00 AM - 8:00 PM",
  },
];

const ContactPage = () => {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(180deg,_#f8fbff_0%,_#eef5ff_45%,_#ffffff_100%)]">
      <div className="absolute inset-x-0 top-0 h-64 bg-[linear-gradient(120deg,rgba(10,57,102,0.08),rgba(37,99,235,0.02))]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 shadow-sm backdrop-blur-sm">
            Contact Klinica
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Let&apos;s make reaching care feel simple.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Share your question, booking issue, or feedback and our team will get back to you with
            clear next steps.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:items-stretch">
          <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-8 lg:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <MessageSquareText size={22} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Send us a message</h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                  We usually reply within one business day. The form is designed to stay easy to
                  use on both mobile and desktop.
                </p>
              </div>
            </div>

            <form className="mt-8 grid gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Full name</span>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </label>

              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Email address</span>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Subject</span>
                <input
                  type="text"
                  placeholder="What can we help you with?"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Message</span>
                <textarea
                  placeholder="Tell us a bit about your request"
                  rows="6"
                  className="w-full resize-none rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </label>

              <div className="flex flex-col gap-3 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-slate-500">
                  Prefer email? Reach us directly at{" "}
                  <a
                    href="mailto:klinicasupport@gmail.com"
                    className="font-semibold text-blue-700 transition hover:text-blue-800"
                  >
                    klinicasupport@gmail.com
                  </a>
                  .
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0A3966] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#06274c] focus:outline-none focus:ring-4 focus:ring-blue-200"
                >
                  Send message
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>

          <aside className="rounded-[2rem] bg-[linear-gradient(160deg,#0A3966_0%,#1357a4_55%,#2b7de9_100%)] p-6 text-white shadow-[0_24px_80px_rgba(10,57,102,0.28)] sm:p-8 lg:p-10">
            <div className="max-w-md">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
                Reach us anytime
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight">
                Friendly support, clear answers, and a smoother clinic experience.
              </h2>
              <p className="mt-4 text-sm leading-7 text-blue-50/90 sm:text-base">
                Whether you need help with appointments, store questions, or general guidance, we
                want contacting Klinica to feel calm and straightforward.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactCards.map(({ icon: Icon, title, detail }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-blue-50/90">{detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
