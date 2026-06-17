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
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80",
    eyebrow: "Unlock Your Potential",
    heading: "Learn Skills That\nActually Matter",
    description:
      "Join thousands of learners mastering real-world skills. Expert-led courses, hands-on projects, and a community that grows with you.",
    cta: "Get Started",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80",
    eyebrow: "Expert-Led Curriculum",
    heading: "Build the Future\nYou Deserve",
    description:
      "From beginner to pro — our adaptive learning paths are designed by industry experts to accelerate your career growth.",
    cta: "Explore Courses",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80",
    eyebrow: "Community Driven",
    heading: "Collaborate, Create\n& Conquer",
    description:
      "Connect with a global network of learners and mentors. Share ideas, get feedback, and reach your goals faster — together.",
    cta: "Join the Community",
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
                <Link href="courses">
                  <Button
                    color="primary"
                    variant="shadow"
                    size="lg"
                    radius="full"
                    className="hero-btn"
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
