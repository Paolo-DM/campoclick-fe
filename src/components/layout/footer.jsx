// Next.js
import Image from "next/image";
import Link from "next/link";

// Assets
import logo from "../../../public/assets/imgs/logo/logo.png";
import facebookLogo from "../../../public/assets/imgs/icons/socials/facebook_logo.svg";
import instagramLogo from "../../../public/assets/imgs/icons/socials/instagram_logo.svg";
import linkedinLogo from "../../../public/assets/imgs/icons/socials/linkedin_logo.svg";
import twitterLogo from "../../../public/assets/imgs/icons/socials/twitter_logo.svg";

function Footer() {
  return (
    <footer className="w-full bg-myPrimary py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-8">
          {/* Logo e descrizione */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="mb-4 flex items-center">
              <Image
                src={logo}
                alt="Logo del sito"
                width={80}
                height={80}
                className="mr-4"
              />
              <h2 className="text-2xl font-bold">Campo Click</h2>
            </div>
            <p className="text-sm">
              Campo Click ti permette di prenotare un campo da tennis, padel,
              basket o calcio in maniera semplice e veloce.
            </p>
          </div>

          {/* Link alle pagine principali */}
          <div className="w-full md:w-1/4">
            <h3 className="mb-4 text-lg font-semibold">Link Utili</h3>
            <ul className="flex justify-between space-y-1 md:flex-col">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-gray-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/campi/tennis"
                  className="transition-colors hover:text-gray-300"
                >
                  Tennis
                </Link>
              </li>
              <li>
                <Link
                  href="/campi/padel"
                  className="transition-colors hover:text-gray-300"
                >
                  Padel
                </Link>
              </li>
              <li>
                <Link
                  href="/campi/basket"
                  className="transition-colors hover:text-gray-300"
                >
                  Basket
                </Link>
              </li>
              <li>
                <Link
                  href="/campi/calcio"
                  className="transition-colors hover:text-gray-300"
                >
                  Calcio
                </Link>
              </li>
            </ul>
          </div>

          {/* Icone dei social network */}
          <div className="w-full md:w-1/4">
            <h3 className="mb-4 text-lg font-semibold">Seguici</h3>
            <div className="flex space-x-6">
              <Link
                href="/"
                className="text-2xl transition-colors hover:text-gray-300"
              >
                <Image
                  src={facebookLogo}
                  alt="Facebook"
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href="/"
                className="text-2xl transition-colors hover:text-gray-300"
              >
                <Image
                  src={instagramLogo}
                  alt="Instagram"
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href="/"
                className="text-2xl transition-colors hover:text-gray-300"
              >
                <Image
                  src={linkedinLogo}
                  alt="LinkedIn"
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href="/"
                className="text-2xl transition-colors hover:text-gray-300"
              >
                <Image src={twitterLogo} alt="Twitter" width={32} height={32} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Campo Click. Tutti i diritti
            riservati. Progetto realizzato da{" "}
            <Link
              href="https://www.linkedin.com/in/paolo-di-martino1/"
              className="font-bold"
            >
              Paolo Di Martino.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
