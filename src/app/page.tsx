import Image from "next/image";
import HomeImage from "/assets/home.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="relative min-h-10">
        <div className="absolute z-10 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-white">
            Welcome to Morse Code Translator
          </h1>
          <span className="text-zinc-200 text-center">
            Morse Code is a system of communication that uses dots and dashes to
            represent letters and numbers. It's a simple way to send messages
            using sound or light. Morse Code has been used for over 150 years
            and is still used today.
          </span>
          <Link
            className="bg-slate-400 py-2 px-2 rounded-xl text-white mt-8"
            href="/translate"
          >
            {" "}
            Translate Now{" "}
          </Link>
        </div>
        <Image src={HomeImage} alt="Morse Code" width={1000} />
      </div>
    </main>
  );
}
