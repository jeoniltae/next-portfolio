import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <section className="flex min-h-full flex-col items-center justify-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <Hero />;
      </div>
    </section>
  );
}
