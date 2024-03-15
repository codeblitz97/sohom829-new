import Link from 'next/link';
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaStackOverflow,
  FaXTwitter,
} from 'react-icons/fa6';

export default function About() {
  return (
    <div className="flex items-center h-screen">
      <div>
        <h1 className="text-7xl font-bold">
          About <span className="text-green-300">me</span>
        </h1>
        <p className="text-xl max-w-[70%]">
          I am 15 years old full-stack website developer from Bangladesh. I
          don&apos;t know I just love coding, anime, sleeping, gaming. And just
          like all the other teenagers of my age, I don&apos;t like to study
          academic stuffs.
        </p>
        <div className="mt-10">
          <Link
            href={'https://www.instagram.com/_.clonedeep_/'}
            target={'_blank'}
          >
            <button className="btn btn-ghost h-[70px] w-[70px] group">
              <span className="tooltip tooltip-top" data-tooltip="_.clonedeep_">
                <FaInstagram className="h-[50px] w-[50px] group-hover:fill-green-400 duration-300" />
              </span>
            </button>
          </Link>
          <Link
            href={'https://discord.com/users/1201153624718454845'}
            target={'_blank'}
          >
            <button className="btn btn-ghost h-[70px] w-[70px] group">
              <span className="tooltip tooltip-top" data-tooltip="sohom829">
                <FaDiscord className="h-[50px] w-[50px] group-hover:fill-green-400 duration-300" />
              </span>
            </button>
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61557399060194"
            target={'_blank'}
          >
            <button className="btn btn-ghost h-[70px] w-[70px] group">
              <span
                className="tooltip tooltip-top"
                data-tooltip="Mohtasim Alam Sohom"
              >
                <FaFacebook className="h-[50px] w-[50px] group-hover:fill-green-400 duration-300" />
              </span>
            </button>
          </Link>
          <Link href="https://github.com/codeblitz97/" target={'_blank'}>
            <button className="btn btn-ghost h-[70px] w-[70px] group">
              <span className="tooltip tooltip-top" data-tooltip="codeblitz97">
                <FaGithub className="h-[50px] w-[50px] group-hover:fill-green-400 duration-300" />
              </span>
            </button>
          </Link>
          <Link
            href="https://stackoverflow.com/users/19870582/mohtasim-alam-sohom"
            target={'_blank'}
          >
            <button className="btn btn-ghost h-[70px] w-[70px] group">
              <span
                className="tooltip tooltip-top"
                data-tooltip="Mohtasim Alam Sohom"
              >
                <FaStackOverflow className="h-[50px] w-[50px] group-hover:fill-green-400 duration-300" />
              </span>
            </button>
          </Link>
          <Link href="https://twitter.com/sohom_829" target={'_blank'}>
            <button className="btn btn-ghost h-[70px] w-[70px] group">
              <span className="tooltip tooltip-top" data-tooltip="sohom_829">
                <FaXTwitter className="h-[50px] w-[50px] group-hover:fill-green-400 duration-300" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
