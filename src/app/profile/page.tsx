import BackButton from "@/components/Button/BackButton";
import Header from "@/components/Header";
import CommonFrame from "@/components/CommonFrame";

export default function Register() {
  return (
    <CommonFrame
      title="プロフィール"
      slotComponents={<div>プロフィールページだよ</div>}
    />
    // <main className="flex min-h-screen flex-col items-center justify-between">
    //   <Header />
    //   <section></section>
    //   <BackButton />
    // </main>
  );
}
