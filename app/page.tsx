import { AtSign, GraduationCap, Phone } from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-4 p-10">
      <div className="text-center text-5xl font-bold">
        Edward Mortimer Tuition
      </div>
      <div className="text-center text-xl">
        Expert English tuition in your home
      </div>
    </section>
  );
};

const ListItem = ({ icon, text }: { icon: ReactNode; text: ReactNode }) => {
  return (
    <li className="my-1 flex flex-row items-center gap-3">
      {icon}
      {text}
    </li>
  );
};

const ServiceListItem = ({ text }: { text: string }) => {
  return (
    <ListItem
      icon={<GraduationCap className="size-5 text-emerald-700" />}
      text={<span>{text}</span>}
    />
  );
};

const Services = () => {
  return (
    <section className="mx-auto w-full max-w-lg">
      <div className="text-lg font-bold">
        Would your child benefit from high-quality English tuition?
      </div>
      <ul>
        <ServiceListItem text="Exam preparation" />
        <ServiceListItem text="Spelling, punctuation and grammar" />
        <ServiceListItem text="Reading comprehension" />
        <ServiceListItem text="Homework assignments" />
      </ul>
    </section>
  );
};

const WhoAmI = () => {
  return (
    <section className="mx-auto my-4 flex w-full max-w-lg flex-col items-center gap-4 sm:flex-row">
      <Image
        src="https://placehold.co/400x400?text=Headshot"
        alt="Headshot of Edward Mortimer"
        width={400}
        height={400}
        className="size-36 rounded-full ring-2 ring-emerald-700 ring-offset-4 sm:size-28"
      />
      <p className="text-center text-lg sm:text-left">
        I'm Edward Mortimer, a local English teacher with more than 11 years of
        experience.
      </p>
    </section>
  );
};

const Price = ({ level, price }: { level: string; price: number }) => {
  return (
    <div>
      {level} <span className="text-2xl text-emerald-700 font-bold">£{price}</span>/hour
    </div>
  );
};

const Prices = () => {
  return (
    <section className="mx-auto my-4 w-full max-w-lg">
      <Price level="Key Stage 2" price={30} />
      <Price level="Key Stage 3 and GCSE" price={35} />
      <Price level="A Level" price={45} />
    </section>
  );
};

const Contact = () => {
  return (
    <section className="mx-auto w-full max-w-lg">
      <div className="text-lg font-bold">Message me for more information</div>
      <ul>
        <ListItem
          icon={<Phone className="size-5" />}
          text={<span>07775 213822</span>}
        />
        <ListItem
          icon={<AtSign className="size-5" />}
          text={
            <a
              href="mailto:edwardmortimer@live.com"
              className="underline hover:no-underline"
            >
              edwardmortimer@live.com
            </a>
          }
        />
      </ul>
    </section>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen px-5 border-y-8 border-emerald-700">
      <Hero />
      <Services />
      <WhoAmI />
      <Prices />
      <Contact />
    </main>
  );
}
