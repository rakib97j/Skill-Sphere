"use client";

import { Skeleton } from "@heroui/react";

export default function ProfileLoading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 animate-pulse">
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
  );
}
