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
    <li className="flex items-start gap-x-3 text-base/6">
      <span className="flex h-lh items-center">{icon}</span>
      {text}
    </li>
  );
};

const ServiceListItem = ({ text }: { text: string }) => {
  return (
    <ListItem
      icon={<GraduationCap className="size-5 flex-none text-emerald-700" />}
      text={<span>{text}</span>}
    />
  );
};

const Services = () => {
  return (
    <section className="mx-auto my-8 w-full max-w-lg space-y-2">
      <div className="text-lg font-bold">
        Would your child benefit from high-quality English tuition?
      </div>
      <ul className="space-y-1">
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
    <section className="mx-auto my-10 w-full max-w-xs overflow-hidden rounded-2xl border border-gray-300 text-center shadow-xl">
      <div className="relative">
        <div className="px-6 pt-6 pb-24 text-pretty italic">
          I'm Edward Mortimer, a local English teacher with more than 11 years
          of experience.
        </div>
        <div className="absolute inset-x-0 -bottom-18 text-center">
          <img
            src="https://placehold.co/400x400?text=Headshot"
            className="mx-auto size-36 rounded-full border-4 border-white"
          />
        </div>
      </div>
      <div className="space-y-1 bg-emerald-700 px-6 pt-24 pb-6">
        <div className="text-lg font-bold tracking-wider text-white uppercase">
          Edward Mortimer
        </div>
      </div>
    </section>
  );
};

const Price = ({ level, price }: { level: string; price: number }) => {
  return (
    <div className="-space-y-1 text-center">
      <h3 className="text-pretty">{level}</h3>
      <div>
        <span className="mr-0.5 text-2xl font-bold text-emerald-700">
          £{price}
        </span>
        /hour
      </div>
    </div>
  );
};

const Prices = () => {
  return (
    <section className="mx-auto my-8 grid w-full max-w-lg grid-cols-2 space-y-2 sm:grid-cols-3">
      <Price level="Key Stage 2" price={30} />
      <Price level="Key Stage 3 & GCSE" price={35} />
      <Price level="A Level" price={45} />
    </section>
  );
};

const Contact = () => {
  return (
    <section className="mx-auto my-8 w-full max-w-lg">
      <p className="mb-3">
        If you would like to discuss English tutoring for your child, please
        contact me via one of the following channels.
      </p>
      <ul className="mb-3 space-y-1">
        <ListItem
          icon={<AtSign className="size-5 flex-none text-emerald-700" />}
          text={
            <a
              href="mailto:edwardmortimer@live.com"
              className="underline hover:no-underline"
            >
              edwardmortimer@live.com
            </a>
          }
        />
        <ListItem
          icon={<Phone className="size-5 flex-none text-emerald-700" />}
          text={<span>07775 213822</span>}
        />
      </ul>
      <p className="mb-3">I look forward to hearing from you!</p>
    </section>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen border-y-8 border-emerald-700 px-5">
      <Hero />
      <Services />
      <WhoAmI />
      <Prices />
      <Contact />
    </main>
  );
}
