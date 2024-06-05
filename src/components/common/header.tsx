import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="h-[72px] w-full fixed py-auto flex px-4 justify-between items-center border-b-2">
      <span className="text-2xl font-bold">
        <span className="text-2xl p-2 font-black select-none">.-</span>
        Morse Code Translator
      </span>
      <div className="flex gap-5 justify-items-center text-lg">
        <Link href="/">Home</Link>
        <Link href="/translate">Translate</Link>
      </div>
    </header>
  );
};
