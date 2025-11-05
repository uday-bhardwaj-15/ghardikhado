export function HeroSection() {
  return (
    <section className="relative w-full h-screen pt-16 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=luxury%20modern%20house%20exterior)",
        }}
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 max-w-3xl text-balance">
          Build Your Future, One Property at a Time.
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
          Find your dream property with verified listings from trusted developers
        </p>
      </div>
    </section>
  )
}
