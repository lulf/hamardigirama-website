import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image
        src="/Hamar_digirama_logo-01.svg"
        height={200}
        width={1024}
        alt=""
        className="m-auto max-w-[500px]"
      />
    </div>
  );
}
