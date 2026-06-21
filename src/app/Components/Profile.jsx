"use client";

import { useSession } from "@/lib/auth-client";
import { Avatar, Chip, Button, Skeleton } from "@heroui/react";
import { BookOpen, Trophy, Star, Mail, MapPin } from "lucide-react";


export default function Profile() {


   const { data ,isPending} = useSession()
  
    if(isPending){
      return  <div className="max-w-6xl mx-auto px-4 py-10 animate-pulse">
            {/* Profile Hero */}
            <div className="rounded-3xl border border-white/10 bg-[#0B1120] p-8">
              <div className="flex items-center gap-6">
                <Skeleton className="w-20 h-20 rounded-2xl" />
      
                <div className="flex-1 space-y-3">
                  <Skeleton className="h-8 w-52 rounded-lg" />
                  <Skeleton className="h-4 w-40 rounded-lg" />
      
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-28 rounded-full" />
                  </div>
      
                  <Skeleton className="h-4 w-72 rounded-lg" />
                </div>
      
                <Skeleton className="h-10 w-24 rounded-xl" />
              </div>
            </div>
      
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-5 mt-8">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-[#111827] border border-white/10 rounded-2xl p-6"
                >
                  <Skeleton className="h-5 w-5 rounded mb-4" />
                  <Skeleton className="h-8 w-12 rounded mb-2" />
                  <Skeleton className="h-4 w-28 rounded" />
                </div>
              ))}
            </div>
      
            {/* About */}
            <div className="mt-8 bg-[#111827] border border-white/10 rounded-3xl p-8">
              <Skeleton className="h-7 w-32 rounded mb-6" />
              <Skeleton className="h-4 w-full rounded mb-3" />
              <Skeleton className="h-4 w-11/12 rounded mb-3" />
              <Skeleton className="h-4 w-10/12 rounded" />
            </div>
      
            {/* Recent Courses */}
            <div className="mt-8 bg-[#111827] border border-white/10 rounded-3xl p-8">
              <Skeleton className="h-7 w-40 rounded mb-6" />
      
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <Skeleton key={item} className="h-16 w-full rounded-xl" />
                ))}
              </div>
            </div>
          </div>
    }
  
    const user =data?.user;
  return (
    <section className="container mx-auto px-4 py-10">
      {/* Profile Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-r from-primary/15 via-primary/5 to-transparent p-8 md:p-10">
        <div className="absolute top-0 right-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative flex flex-col md:flex-row items-center gap-6">
          <Avatar className="h-[200px] w-[200px]" >
            <Avatar.Image src={user.image || ""} alt={user.name} />
            <Avatar.Fallback>{user.name} s Picture </Avatar.Fallback>
          </Avatar>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-foreground">{user.name}</h1>

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
                {user.email}
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16} />
                Dhaka, Bangladesh
              </div>
            </div>
          </div>

          <Button color="primary" className="bg-primary/70">
            Edit Profile
          </Button>
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
