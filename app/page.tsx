import { AtSign, GraduationCap, Phone } from "lucide-react";
import { ReactNode } from "react";
import edwardMortimer from "./edward-mortimer.jpg";

const Hero = () => {
  return (
    <section className="hero w-full py-16">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-5">
        <div className="text-center text-6xl tracking-wide text-emerald-50">
          Edward Mortimer Tuition
        </div>
        <div className="text-center text-xl text-gray-100">
          Expert English tuition in your home
        </div>
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
    <section className="w-full">
      <div className="mx-auto my-8 w-full max-w-lg px-5">
        <p className="mb-3 text-lg font-bold">
          Would your child benefit from high-quality English tuition?
        </p>
        <ul className="mb-3 space-y-1">
          <ServiceListItem text="Exam preparation" />
          <ServiceListItem text="Spelling, punctuation and grammar" />
          <ServiceListItem text="Reading comprehension" />
          <ServiceListItem text="Homework assignments" />
        </ul>
      </div>
    </section>
  );
};

const WhoAmI = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-lg px-5">
        <div className="flex flex-col gap-x-4 sm:flex-row">
          <img
            src={edwardMortimer.src}
            alt="Edward Mortimer"
            className="mx-auto mb-4 max-w-48 rounded-xl shadow-xl"
          />
          <p className="mb-3 sm:text-lg">
            Hello! My name is <strong>Edward Mortimer</strong>, and I am an
            experienced English teacher based in Alconbury Weald,
            Cambridgeshire. I live with my wife and two young children.
          </p>
        </div>
        <p className="mb-3">
          Having qualified through the prestigious Teach First programme in
          2015, I gained experience in a wide range of schools, from grammar
          schools and sixth form colleges, to boarding schools and the primary
          sector. Teaching English is my passion, and I take pride in helping
          young people succeed in their studies.
        </p>
        <p className="mb-3">
          I have taught extensively at Key Stages 4 (GCSE) and 5 (A Level) but
          am also comfortable coaching students who are of primary school age or
          Key Stage 3. When I tutor, I ensure that the lessons are
          student-focused; in short, I go at a pace that suits your child,
          guaranteeing they make rapid progress.
        </p>
        <p className="mb-3">
          As part of my service, I travel to you in your home. I am currently
          taking on students from the <strong>Alconburys</strong>,{" "}
          <strong>Sawtry</strong> and <strong>Huntingdon</strong>, as well as
          the wider area as far as <strong>Cambridge</strong>.
        </p>
      </div>
    </section>
  );
};

const Price = ({ level, price }: { level: string; price: number }) => {
  return (
    <tr>
      <td className="py-1 text-lg text-pretty">{level}</td>
      <td className="py-1">
        <span className="mr-0.5 text-3xl font-bold text-emerald-700">
          £{price}
        </span>
        <span>/hour</span>
      </td>
    </tr>
  );
};

const Prices = () => {
  return (
    <section className="w-full border-t-2 border-gray-300 py-5">
      <div className="mx-auto w-full max-w-md px-5">
        <table className="w-full text-center">
          <tbody>
            <Price level="Key Stage 2" price={30} />
            <Price level="Key Stage 3" price={35} />
            <Price level="GCSE" price={35} />
            <Price level="A Level" price={45} />
          </tbody>
        </table>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="w-full border-t-2 border-gray-300 py-5">
      <div className="mx-auto w-full max-w-lg px-5">
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
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen border-b-8 border-emerald-800">
      <Hero />
      <Services />
      <WhoAmI />
      <Prices />
      <Contact />
    </main>
  );
}
