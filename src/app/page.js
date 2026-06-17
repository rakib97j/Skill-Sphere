import Hero from "./Components/Home/Hero/Hero";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans">
      {/* Hero is full-width — outside the constrained wrapper */}
      <Hero />

      {/* Rest of page content */}
      <main className="flex flex-1 w-full max-w-3xl mx-auto flex-col items-center py-20 px-6 sm:items-start">
        <h1 className="text-5xl font-bold text-foreground">Welcome to Skill-Sphere</h1>
      </main>
    </div>
  );
}
