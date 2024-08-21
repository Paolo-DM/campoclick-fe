// NextUi
import { Card, CardFooter, CardHeader } from "@nextui-org/card";

// Next.js
import Image from "next/image";
import Link from "next/link";

function CardWithText({ title, description, image, path }) {
  return (
    <Card
      isFooterBlurred
      className="col-span-12 h-[250px] w-11/12 sm:col-span-7 md:h-[350px] md:w-2/5"
    >
      <CardHeader className="absolute top-0 z-10 flex-col items-start bg-black/70">
        <p className="font-bold uppercase text-white/60 md:text-xl">{title}</p>
        <h4 className="text-sm font-medium text-white/90 md:text-lg">
          {description}
        </h4>
      </CardHeader>
      <Image
        src={image}
        alt="Sport"
        width={660}
        height={350}
        className="h-[350px] w-full rounded-t-lg object-cover"
        placeholder="blur"
      />
      <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 bg-black/40 dark:border-default-100">
        <div className="flex flex-grow items-center gap-2">
          <Image
            alt="Sport"
            className="h-11 w-11"
            src="/assets/imgs/logo/logo_white.png"
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            <p className="text-left font-extrabold text-white/60">
              Campo Click
            </p>
            <p className="text-tiny text-white/60">Scopri i campi da {title}</p>
          </div>
        </div>
        <Link href={path} className="bg-white/80 p-1.5 rounded-md">
          PRENOTA
        </Link>
      </CardFooter>
    </Card>
  );
}

export default CardWithText;
