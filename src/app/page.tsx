import Image from 'next/image';
import logo from '../../public/Hamar_digirama_logo_anim_once_600x306.gif';

export default function Home() {
  return (
    <div className="bg-slate-800 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <h1>Hamar Digirama</h1> */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="w-60 sm:w-80"
          src={logo}
          alt="Hamar Digirama"
        />
      </main>
    </div>
  );
}
