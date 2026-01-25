import { AtSign, GraduationCap, Phone } from "lucide-react";
import { ReactNode } from "react";

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
      icon={<GraduationCap className="size-5" />}
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
          text={<span>edwardmortimer@live.com</span>}
        />
      </ul>
    </section>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen px-4">
      <Hero />
      <Services />
      <Contact />
    </main>
  );
}
