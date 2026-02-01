import { AtSign, GraduationCap, Phone } from "lucide-react";
import { ReactNode } from "react";
import edwardMortimer from "./edward-mortimer.jpg";

const Header = () => {
  return (
    <header className="w-full bg-linear-to-r/oklch from-emerald-700 to-teal-700 text-gray-100">
      <h1 className="mx-auto flex w-full max-w-lg items-center justify-center gap-2 px-5 py-3 text-center text-2xl leading-7 font-bold tracking-wider uppercase sm:text-3xl">
        Edward Mortimer Tuition
      </h1>
    </header>
  );
};

const ListItem = ({ icon, text }: { icon: ReactNode; text: ReactNode }) => {
  return (
    <li className="flex items-start gap-x-3">
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

const Hero = () => {
  return (
    <section className="w-full">
      <div className="mx-auto my-8 w-full max-w-lg space-y-6 px-5">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Would your child benefit from high-quality English tuition?
        </h2>
        <ul className="space-y-1 text-lg/7 text-gray-700">
          <ServiceListItem text="Exam preparation" />
          <ServiceListItem text="Spelling, punctuation and grammar" />
          <ServiceListItem text="Reading comprehension" />
          <ServiceListItem text="Homework assignments" />
        </ul>
        <a
          className="mx-auto block w-fit rounded-lg bg-emerald-700 px-5 py-2 text-center text-lg text-white hover:bg-emerald-800"
          href="#contact"
        >
          Get in touch
        </a>
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
        <a id="contact" />
        <p className="mb-3">
          If you would like to discuss English tutoring for your child, please
          contact me via one of the following channels.
        </p>
        <ul className="mb-3 space-y-1 text-base/6">
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
    <main className="min-h-screen border-b-8 border-emerald-800 text-gray-900">
      <Header />
      <Hero />
      <WhoAmI />
      <Prices />
      <Contact />
    </main>
  );
}
