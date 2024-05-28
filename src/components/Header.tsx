"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "@/lib/types";

export default function Header() {
  const presentPath = usePathname();
  const menu: Menu[] = [
    { name: "Profile", path: "profile" },
    { name: "Career", path: "career" },
    { name: "SNS", path: "sns" },
    { name: "CONSENT", path: "consent" },
  ];

  const isPresentPath = (path: string) => {
    return `/${path}` !== presentPath;
  };

  const listClasses = (path: string) => {
    return isPresentPath(`${path}`)
      ? "mr-5 last:mr-0 text-lg italic"
      : "mr-5 last:mr-0 text-lg italic text-neutral-500";
  };

  return (
    <header className="z-10 h-20 bg-white w-full px-48 flex items-center font-mono fixed">
      <div>
        <h1 className="text-4xl font-bold">
          <Link href="/">石津勲人の頭おかしい公式ページ</Link>
        </h1>
      </div>
      <ul className="flex items-center ml-8">
        {menu.map((el) => (
          <li key={`list-${el.path}`} className={listClasses(`${el.path}`)}>
            {isPresentPath(`${el.path}`) ? (
              <Link
                href={`/${el.path}`}
                className="text-indigo-600 hover:opacity-75"
              >
                {el.name}
              </Link>
            ) : (
              <>{el.name}</>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
}
