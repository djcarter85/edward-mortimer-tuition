import Image from "next/image";
import HeroImage from './hero.jpg'

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl bg-amber-100">
      <Image src={HeroImage} alt="" />
      <div>Next.js on GitHub Pages</div>
      <div className="font-bold text-blue-500">
        Template site for Edward Mortimer Tuition
      </div>
    </main>
  );
}
