"use client";
import React, { useState } from "react";
import {
  HelpCircle,
  Sparkles,
  ArrowRight,
  MessageSquare,
  ShieldQuestion,
  Zap,
} from "lucide-react";

const AdvancedFAQ = () => {
  const [activeTab, setActiveTab] = useState(0);

  const faqs = [
    {
      question: "How do I join a hackathon?",
      answer:
        "Browse our curated list of events, select your challenge, and hit 'Register'. You can join existing teams or go solo to build the future.",
      icon: <Zap className="w-5 h-5" />,
      tag: "Onboarding",
    },
    {
      question: "Can I participate with a team?",
      answer:
        "Yes! Our platform features a 'Squad Finder' that matches you with builders possessing complementary skills to your own stack.",
      icon: <HelpCircle className="w-5 h-5" />,
      tag: "Collaboration",
    },
    {
      question: "How do I submit my project?",
      answer:
        "Submit directly from your dashboard by linking your repo and demo. Our automated pipeline handles the validation instantly.",
      icon: <MessageSquare className="w-5 h-5" />,
      tag: "Submissions",
    },
    {
      question: "How are winners selected?",
      answer:
        "Evaluations are handled by a hybrid system: elite human judges and our proprietary AI scoring engine for technical depth.",
      icon: <ShieldQuestion className="w-5 h-5" />,
      tag: "Judging",
    },
    {
      question: "What does Premium include?",
      answer:
        "Exclusive badges, priority matching with recruiters, and access to high-stakes 'Invite-Only' global innovation challenges.",
      icon: <Sparkles className="w-5 h-5" />,
      tag: "Premium",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-32">
      {/* <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-hero-secondary/10 blur-[140px]" />
      <div className="absolute -left-20 bottom-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[140px]" /> */}

      <div className="container relative z-10 mx-auto">
        <div className="relative mb-20 text-center md:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3 py-1.5 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgb(var(--primary))]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
              Support Protocol
            </span>
          </div>
          <h2 className="mb-6 text-5xl font-extrabold tracking-tight text-foreground md:text-6xl">
            Got{" "}
            <span className="bg-gradient-to-r from-primary via-hero-tertiary to-hero-secondary bg-clip-text text-transparent">
              Questions?
            </span>
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            Navigate through our advanced help system to understand how we
            empower the next generation of builders.
          </p>
          <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-primary to-transparent md:mx-0" />
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-5">
            {faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`group relative flex w-full items-center justify-between rounded-2xl border p-5 transition-all duration-500 ${
                  activeTab === index
                    ? "border-primary/45 bg-primary/10 shadow-[0_0_20px_rgb(var(--primary)_/_0.12)]"
                    : "border-border/60 bg-card/40 hover:border-border-strong/70 hover:bg-card/70"
                }`}
              >
                <div className="flex items-center gap-4 text-left">
                  <div
                    className={`rounded-xl p-2 transition-all duration-500 ${
                      activeTab === index
                        ? "scale-110 bg-primary text-primary-foreground"
                        : "bg-accent text-muted"
                    }`}
                  >
                    {faq.icon}
                  </div>
                  <div>
                    <p
                      className={`mb-1 text-xs font-bold uppercase tracking-wider ${
                        activeTab === index ? "text-primary" : "text-muted"
                      }`}
                    >
                      {faq.tag}
                    </p>
                    <h4
                      className={`font-bold transition-colors ${
                        activeTab === index ? "text-foreground" : "text-muted"
                      }`}
                    >
                      {faq.question}
                    </h4>
                  </div>
                </div>
                <ArrowRight
                  className={`h-4 w-4 transition-all duration-500 ${
                    activeTab === index
                      ? "translate-x-0 text-primary opacity-100"
                      : "-translate-x-4 text-muted opacity-0"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="lg:col-span-7">
            <div className="group sticky top-10 flex h-full min-h-[400px] items-center justify-center overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-1 shadow-2xl backdrop-blur-3xl">
              <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-primary/15 blur-[60px] transition-transform duration-700 group-hover:scale-150" />
              <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-hero-secondary/15 blur-[60px] transition-transform duration-700 group-hover:scale-150" />

              <div className="relative z-10 p-8 text-center lg:p-12 lg:text-left">
                <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-3xl border border-border bg-background shadow-inner">
                  {React.cloneElement(
                    faqs[activeTab].icon as React.ReactElement<{
                      className?: string;
                    }>,
                    { className: "w-10 h-10 text-hero-secondary" },
                  )}
                </div>

                <h3 className="mb-6 text-3xl font-bold leading-tight text-foreground">
                  {faqs[activeTab].question}
                </h3>

                <p className="mb-10 text-xl leading-relaxed text-muted">
                  {faqs[activeTab].answer}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <button className="rounded-2xl bg-button-primary px-8 py-4 font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105">
                    Learn More
                  </button>
                  <button className="rounded-2xl border border-border bg-card px-8 py-4 font-bold text-foreground transition-colors hover:bg-accent">
                    View Documentation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-border/60 pt-10 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-background bg-card"
                />
              ))}
            </div>
            <p className="text-sm text-muted">
              Our{" "}
              <span className="font-bold text-hero-secondary underline">
                Success Engineers
              </span>{" "}
              are online 24/7.
            </p>
          </div>
          <button className="group flex items-center gap-2 font-bold text-foreground transition-colors hover:text-primary">
            Ask a custom question{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFAQ;
