const Hero = () => {
  return (
    <section className="flex flex-col gap-4 p-10">
      <div className="text-center text-5xl font-bold">
        Edward Mortimer Tuition
      </div>
      <div className="text-center text-xl">
        Expert English tuition in your home
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl">
      <Hero />
    </main>
  );
}
