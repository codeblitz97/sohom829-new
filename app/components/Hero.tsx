import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex flex-col justify-center md:flex-row md:justify-start lg:justify-start lg:flex-row items-center gap-6 md:gap-60 lg:gap-44 h-screen">
      <div className="">
        <h1 className="lg:text-7xl md:text-5xl text-3xl max-w-[70%] md:max-w-[90%] font-bold">
          Hello, I&apos;m{' '}
          <span className="text-green-300">Mohtasim Alam Sohom</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-semibold">
          Just an ordinary kid from{' '}
          <span className="text-green-300">Bangladesh</span>
        </p>
      </div>
      <div className="w-full lg:w-auto flex justify-center">
        <div className="w-full max-w-xs md:max-w-sm lg:max-w-none">
          <Image
            src={'/illustrator_hero.png'}
            alt="Hero Image"
            width={2024}
            height={2024}
            className="object-cover w-[248px] h-[248px] md:w-[70%] md:h-auto lg:w-full lg:h-auto"
          />
        </div>
      </div>
    </div>
  );
}
