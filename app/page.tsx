import { AtSign, GraduationCap, Phone } from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-5 py-10">
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
    <section className="mx-auto my-8 w-full max-w-lg px-5">
      <p className="mb-3 text-lg font-bold">
        Would your child benefit from high-quality English tuition?
      </p>
      <ul className="mb-3 space-y-1">
        <ServiceListItem text="Exam preparation" />
        <ServiceListItem text="Spelling, punctuation and grammar" />
        <ServiceListItem text="Reading comprehension" />
        <ServiceListItem text="Homework assignments" />
      </ul>
      <p className="mb-3">
        As part of my service, I travel to you in your home. I am currently
        taking on students from the Alconburys, Sawtry and Huntingdon, as well
        as the wider area as far as Cambridge.
      </p>
    </section>
  );
};

const WhoAmI = () => {
  return (
    <section className="px-5">
      <div className="mx-auto my-10 w-full max-w-xs overflow-hidden rounded-2xl border border-gray-300 text-center shadow-xl">
        <div className="relative">
          <p className="px-6 pt-6 pb-24 text-pretty italic">
            I'm Edward Mortimer, a local English teacher with more than 11 years
            of experience.
          </p>
          <div className="absolute inset-x-0 -bottom-18 text-center">
            <img
              src="https://placehold.co/400x400?text=Headshot"
              className="mx-auto size-36 rounded-full border-4 border-white"
            />
          </div>
        </div>
        <div className="space-y-1 bg-emerald-700 px-6 pt-24 pb-6">
          <h1 className="text-lg font-bold tracking-wider text-white uppercase">
            Edward Mortimer
          </h1>
        </div>
      </div>
      <p className="mb-3">
        Hello! My name is Edward Mortimer, and I am an experienced English
        teacher based in Alconbury Weald, Cambridgeshire. I live with my wife
        and two young children.
      </p>
      <p className="mb-3">
        Having qualified through the prestigious Teach First programme in 2015,
        I gained experience in a wide range of schools, from grammar schools and
        sixth form colleges, to boarding schools and the primary sector.
        Teaching English is my passion, and I take pride in helping young people
        succeed in their studies.
      </p>
      <p className="mb-3">
        I have taught extensively at Key Stages 4 (GCSE) and 5 (A Level) but am
        also comfortable coaching students who are of primary school age or Key
        Stage 3. When I tutor, I ensure that the lessons are student-focused; in
        short, I go at a pace that suits your child, guaranteeing they make
        rapid progress.
      </p>
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
    <section className="mx-auto my-8 grid w-full max-w-lg grid-cols-2 space-y-2 px-5 sm:grid-cols-3">
      <Price level="Key Stage 2" price={30} />
      <Price level="Key Stage 3 & GCSE" price={35} />
      <Price level="A Level" price={45} />
    </section>
  );
};

const Contact = () => {
  return (
    <section className="mx-auto my-8 w-full max-w-lg px-5">
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
    <main className="min-h-screen border-y-8 border-emerald-700">
      <Hero />
      <Services />
      <WhoAmI />
      <Prices />
      <Contact />
    </main>
  );
}
