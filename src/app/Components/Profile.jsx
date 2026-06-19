"use client";

import { Avatar, Chip, Button } from "@heroui/react";
import { BookOpen, Trophy, Star, Mail, MapPin } from "lucide-react";

export default function Profile() {
  return (
    <section className="container mx-auto px-4 py-10">
      {/* Profile Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-r from-primary/15 via-primary/5 to-transparent p-8 md:p-10">
        <div className="absolute top-0 right-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative flex flex-col md:flex-row items-center gap-6">
          <Avatar
            src="https://i.pravatar.cc/300"
            className="w-32 h-32 text-large ring-4 ring-primary/20"
          />

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-foreground">Rakib Hassan</h1>

            <p className="text-default-500 mt-2">
              Frontend Developer & Lifelong Learner
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
              <Chip color="success" className="bg-primary/20" variant="flat">
                Student
              </Chip>

              <Chip variant="bordered" className="bg-primary/20">
                Web Development
              </Chip>
            </div>

            <div className="flex flex-wrap gap-4 mt-5 text-default-500">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                rakib@example.com
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16} />
                Dhaka, Bangladesh
              </div>
            </div>
          </div>

          <Button color="primary" className="bg-primary/70">Edit Profile</Button>

          
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-5 mt-8">
        <div className="bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 transition-all">
          <BookOpen className="text-black mb-3" />

          <h2 className="text-3xl font-bold text-primary">12</h2>

          <p className="text-default-500">Enrolled Courses</p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 transition-all">
          <Trophy className="text-amber-500 mb-3" />

          <h2 className="text-3xl font-bold text-primary">5</h2>

          <p className="text-default-500">Completed Courses</p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 transition-all">
          <Star className="text-amber-500 mb-3  " />

          <h2 className="text-3xl font-bold text-primary">4.8</h2>

          <p className="text-default-500">Average Rating</p>
        </div>
      </div>

      {/* About */}
      <div className="mt-8 bg-card border border-border rounded-3xl p-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">About Me</h2>

        <p className="text-default-500 leading-8">
          Passionate frontend developer focused on building modern and
          responsive web applications using React, Next.js, Tailwind CSS and
          modern web technologies.
        </p>
      </div>

      {/* Recent Courses */}
      <div className="mt-8 bg-card border border-border rounded-3xl p-8">
        <h2 className="text-2xl font-bold mb-6">Recent Courses</h2>

        <div className="space-y-4">
          <div className="border border-border rounded-xl p-5 hover:border-primary transition-colors">
            Advanced React and Next.js Masterclass
          </div>

          <div className="border border-border rounded-xl p-5 hover:border-primary transition-colors">
            UI/UX Design Fundamentals
          </div>

          <div className="border border-border rounded-xl p-5 hover:border-primary transition-colors">
            Complete web development bootcamp
          </div>
        </div>
      </div>
    </section>
  );
}
