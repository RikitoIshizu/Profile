import BackButton from "@/components/Button/BackButton";
import Header from "@/components/Header";

export default function Register() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <section>100回目の嘘</section>
      <BackButton />
    </main>
  );
}
