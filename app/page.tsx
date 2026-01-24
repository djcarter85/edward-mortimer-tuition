import { GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex w-full flex-col gap-4 p-10">
      <div className="text-center text-5xl font-bold">
        Edward Mortimer Tuition
      </div>
      <div className="text-center text-xl">
        Expert English tuition in your home
      </div>
    </section>
  );
};

const ServiceListItem = ({ text }: { text: string }) => {
  return (
    <li className="my-1 flex flex-row items-center gap-2">
      <GraduationCap className="size-5" /> <span>{text}</span>
    </li>
  );
};

const Services = () => {
  return (
    <section className="mx-auto flex w-full max-w-lg flex-col gap-2">
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

const Contact = () => {
  return (
    <section className="mx-auto flex w-full max-w-lg flex-col gap-2">
      <div className="text-lg font-bold">Message me for more information</div>
      <div>
        <div>SMS: 07775 213822</div>
        <div>Email: edwardmortimer@live.com</div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-4 px-4">
      <Hero />
      <Services />
      <Contact />
    </main>
  );
}
