import { ToggleButton } from "@heroui/react";
import { Bookmark } from "lucide-react";
import Image from "next/image";
import {
  FaStar,
  FaClock,
  FaSignal,
  FaUserTie,
  FaCheckCircle,
} from "react-icons/fa";

const CourseDetailsCard = ({ singleCourse }) => {
  const {
    category,
    title,
    rating,
    level,
    instructor,
    image,
    duration,
    description,
  } = singleCourse;

  return (
    <section className=" mx-auto">
      {/* Hero Section */}
      <div className="relative  h-[450px] md:h-[500px] overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          height={2200}
          width={2200}
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />

        <div className="absolute bottom-10 left-8 md:left-12 max-w-3xl text-white">
          <span className="inline-block px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold">
            {category}
          </span>

          <h1 className="text-3xl md:text-5xl font-black mt-4">{title}</h1>

          <p className="mt-4 text-white/80 leading-7">{description}</p>

          <div className="flex flex-wrap gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              {rating}
            </div>

            <div className="flex items-center gap-2">
              <FaClock />
              {duration}
            </div>

            <div className="flex items-center gap-2">
              <FaSignal />
              {level}
            </div>

            <div className="flex items-center gap-2">
              <FaUserTie />
              {instructor}
            </div>
          </div>
        </div>
      </div>

      
      <div className="grid lg:grid-cols-3 gap-8 mt-10">
       
        <div className="lg:col-span-2 space-y-8">
  
          <div className="bg-card border border-border rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-5">About This Course</h2>

            <p className="text-foreground/70 leading-8">{description}</p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">What You ll Learn</h2>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex gap-3">
                <FaCheckCircle className="text-primary mt-1" />
                <span>Build real-world projects from scratch.</span>
              </div>

              <div className="flex gap-3">
                <FaCheckCircle className="text-primary mt-1" />
                <span>Understand industry-standard workflows.</span>
              </div>

              <div className="flex gap-3">
                <FaCheckCircle className="text-primary mt-1" />
                <span>Master advanced development concepts.</span>
              </div>

              <div className="flex gap-3">
                <FaCheckCircle className="text-primary mt-1" />
                <span>Create portfolio-ready applications.</span>
              </div>

              <div className="flex gap-3">
                <FaCheckCircle className="text-primary mt-1" />
                <span>Learn deployment and optimization.</span>
              </div>

              <div className="flex gap-3">
                <FaCheckCircle className="text-primary mt-1" />
                <span>Earn a completion certificate.</span>
              </div>
            </div>
          </div>

          {/* fixed Curriculum */}
          <div className="bg-card border border-border rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">Course Curriculum</h2>

            <div className="space-y-4">
              <div className="border border-border rounded-2xl p-5">
                <h3 className="font-bold text-lg">
                  Module 1: Introduction & Setup
                </h3>
                <p className="text-foreground/60 mt-2">
                  Course overview, development environment setup and tools.
                </p>
              </div>

              <div className="border border-border rounded-2xl p-5">
                <h3 className="font-bold text-lg">
                  Module 2: Core Fundamentals
                </h3>
                <p className="text-foreground/60 mt-2">
                  Learn essential concepts and build a strong foundation.
                </p>
              </div>

              <div className="border border-border rounded-2xl p-5">
                <h3 className="font-bold text-lg">
                  Module 3: Practical Projects
                </h3>
                <p className="text-foreground/60 mt-2">
                  Apply your knowledge through hands-on projects.
                </p>
              </div>

              <div className="border border-border rounded-2xl p-5">
                <h3 className="font-bold text-lg">
                  Module 4: Advanced Techniques
                </h3>
                <p className="text-foreground/60 mt-2">
                  Performance, optimization and best practices.
                </p>
              </div>

              <div className="border border-border rounded-2xl p-5">
                <h3 className="font-bold text-lg">Module 5: Final Project</h3>
                <p className="text-foreground/60 mt-2">
                  Build and deploy a complete real-world application.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side enroll section  */}
        <div>
          <div className="sticky top-24 bg-card border border-border rounded-3xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Course Details</h2>

            <div className="space-y-5">
              <div className="flex justify-between">
                <span className="text-foreground/70">Instructor</span>
                <span className="font-semibold">{instructor}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-foreground/70">Duration</span>
                <span className="font-semibold">{duration}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-foreground/70">Level</span>
                <span className="font-semibold">{level}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-foreground/70">Rating</span>
                <span className="font-semibold">⭐ {rating}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-foreground/70">Category</span>
                <span className="font-semibold">{category}</span>
              </div>
            </div>

           
              <button className="w-full mt-8 h-12 rounded-xl bg-primary text-white font-bold transition hover:opacity-90">
                Enroll Now
              </button>

            <p className="text-center text-xs text-foreground/50 mt-4">
              Lifetime access • Certificate • Project Files
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsCard;
