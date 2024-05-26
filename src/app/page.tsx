import Link from "next/link";
import CommonFrame from "@/components/CommonFrame";

export default function Home() {
  return (
    <CommonFrame
      title="トップページ"
      slotComponents={
        <div className="z-0 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mt-20">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            100回目の嘘&nbsp;
            <code className="font-mono font-bold">src/app/page.tsx</code>
          </p>
          <div>
            <Link href="/about/">あぼうとぺじへ</Link>
          </div>
        </div>
      }
    />
  );
}
