import Image from "next/image";

function HeroImage({
  title,
  subtitle,
  description,
  image,
  imageCredit,
  maxHeight,
}) {
  return (
    // Restituisce un'immagine con testi sovrapposti (passati come props)
    <div className="relative flex flex-col items-center justify-center text-center">
      <Image
        src={image}
        alt={title}
        width={1920}
        height={1080}
        className={`brightness-50 object-cover w-full max-h-[${maxHeight}]`}
      />
      {/* Titolo, sotto-titolo e descrizione posizionati al centro dell'immagine */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white">{title}</h1>
        <h2 className="text-lg md:text-3xl text-white mt-2">{subtitle}</h2>
        <p className="md:text-xl text-white mt-2">{description}</p>
      </div>
      {/* Credit dell'immagine posizionato in basso a sinistra */}
      <p className="text-xs md:text-sm text-white text-opacity-60 absolute bottom-2 left-2">
        {imageCredit}
      </p>
    </div>
  );
}

export default HeroImage;
