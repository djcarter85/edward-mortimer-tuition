import { GraduationCap } from "lucide-react";

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

const ServiceListItem = ({ text }: { text: string }) => {
  return (
    <li className="flex flex-row gap-2 items-center my-1">
      <GraduationCap className="size-5" /> <span>{text}</span>
    </li>
  );
};

const Services = () => {
  return (
    <section className="flex flex-col gap-2 mx-auto max-w-lg">
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

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-4">
      <Hero />
      <Services />
    </main>
  );
}
