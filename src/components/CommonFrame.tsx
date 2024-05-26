import { Slot } from "@radix-ui/react-slot";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
  title: string;
  slotComponents: JSX.Element;
};

export default function CommonFrame(props: Props) {
  const { title, slotComponents } = props;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Header />
      <section className="mt-20 w-full px-48 ">
        <h1 className="mt-4 text-2xl font-bold">{title}</h1>
        <Slot>{slotComponents}</Slot>
      </section>
      <Footer />
    </main>
  );
}
