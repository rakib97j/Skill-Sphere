"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Button } from "@heroui/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Slide data
// ---------------------------------------------------------------------------
const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80",
    eyebrow: " DEVELOPMENT & TECH",
    heading: "Code the Future with Industry Leaders",
    description:
      "Dive into full-stack development, React, and Next.js. Master building highly scalable applications from scratch with guidance from top engineering experts.",
    cta: "Start Learning Code",
    link: "/courses",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
    eyebrow: " DATA SCIENCE & CYBER SECURITY",
    heading: "Turn Data Into Power & Secure Systems",
    description:
      "From cleaning complex datasets and training advanced neural networks to understanding modern network cryptography. Secure your spot in the high-demand tech ecosystem.",
    cta: "Explore Tech Courses",
    link: "/courses",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1600&q=80",
    eyebrow: " UI/UX DESIGN & DIGITAL MARKETING",
    heading: "Design Exceptional Experiences, Drive Massive Growth",
    description:
      "Learn user research, wire framing, and interactive prototypes in Figma. Pair those creative designs with data-driven SEO and digital marketing strategies to convert leads into loyal customers.",
    cta: "Unleash Your Creativity",
    link: "/courses",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1600&q=80",
    eyebrow: " BUSINESS, MANAGEMENT & CLOUD",
    heading: "Lead Agile Teams & Architect Scalable Infrastructures",
    description:
      "Master the lifecycle of product management from initial vision to launch. Combine leadership strategies with reliable cloud architecture on AWS to handle production-ready workloads.",
    cta: "Browse Advanced Tracks",
    link: "/courses",
  },
];
// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function Hero() {
  return (
    <section className="hero-section">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ dynamicBullets: true, clickable: true }}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* image */}
            <div
              className="slide-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            <div className="slide-overlay" />

            <div className="slide-content">
              <span className="slide-eyebrow">{slide.eyebrow}</span>

              <h1 className="slide-heading">{slide.heading}</h1>

              <p className="slide-description">{slide.description}</p>

              <div className="slide-cta">
                <Link href={slide.link}>
                  <Button
                    color="primary"
                    variant="shadow"
                    size="lg"
                    radius="full"
                    className="hero-btn inline-block  bg-primary text-primary-foreground  rounded-full font-medium hover:bg-primary/40   transition"
                  >
                    {slide.cta}
                  </Button>
                </Link>
                <Button
                  variant="bordered"
                  size="lg"
                  radius="full"
                  className="hero-btn-outline"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        /* ---------- wrapper ---------- */
        .hero-section {
          position: relative;
          width: 100%;
        }

        /* ---------- swiper container ---------- */
        .hero-swiper {
          width: 100%;
          height: 100vh;
          min-height: 560px;
        }

        /* ---------- background image ---------- */
        .slide-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          /* subtle Ken-Burns zoom */
          animation: kenBurns 8s ease-in-out infinite alternate;
        }

        @keyframes kenBurns {
          from { transform: scale(1); }
          to   { transform: scale(1.06); }
        }

        /* ---------- overlay ---------- */
        .slide-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(2, 6, 23, 0.78) 0%,
            rgba(15, 23, 42, 0.55) 60%,
            rgba(79, 70, 229, 0.25) 100%
          );
        }

        /* ---------- content ---------- */
        .slide-content {
          position: relative;
          z-index: 10;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 1.5rem;
          gap: 1.25rem;
          animation: fadeUp 0.7s ease both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ---------- eyebrow ---------- */
        .slide-eyebrow {
          display: inline-block;
          background: rgba(99, 102, 241, 0.20);
          border: 1px solid rgba(129, 140, 248, 0.45);
          color: #a5b4fc;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 0.35rem 1.1rem;
          border-radius: 9999px;
          backdrop-filter: blur(6px);
        }

        /* ---------- heading ---------- */
        .slide-heading {
          font-size: clamp(2.4rem, 6vw, 5rem);
          font-weight: 800;
          line-height: 1.1;
          white-space: pre-line;
          color: #ffffff;
          text-shadow: 0 4px 32px rgba(0,0,0,0.45);
          max-width: 820px;
          letter-spacing: -0.02em;
        }

        /* ---------- description ---------- */
        .slide-description {
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          color: rgba(226, 232, 240, 0.88);
          max-width: 600px;
          line-height: 1.7;
        }

        /* ---------- CTA row ---------- */
        .slide-cta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 0.5rem;
        }

        .hero-btn {
          font-weight: 700 !important;
          letter-spacing: 0.02em;
          padding: 0 2rem !important;
        }

        .hero-btn-outline {
          color: #e2e8f0 !important;
          border-color: rgba(148, 163, 184, 0.45) !important;
          font-weight: 600 !important;
          padding: 0 2rem !important;
          backdrop-filter: blur(6px);
        }

        .hero-btn-outline:hover {
          background: rgba(255,255,255,0.08) !important;
        }

        /* ---------- Swiper pagination overrides ---------- */
        .hero-swiper .swiper-pagination {
          bottom: 2rem;
        }

        .hero-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.55);
          opacity: 1;
          transition: transform 0.25s, background 0.25s;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          background: #6366f1;
        }

        /* dynamic bullets scale — Swiper already does this, but ensure colour */
        .hero-swiper .swiper-pagination-bullet-active-main {
          background: #818cf8;
        }
        .hero-swiper .swiper-pagination-bullet-active-prev,
        .hero-swiper .swiper-pagination-bullet-active-next {
          background: rgba(99, 102, 241, 0.6);
        }
        .hero-swiper .swiper-pagination-bullet-active-prev-prev,
        .hero-swiper .swiper-pagination-bullet-active-next-next {
          background: rgba(99, 102, 241, 0.3);
        }
      `}</style>
    </section>
  );
}
