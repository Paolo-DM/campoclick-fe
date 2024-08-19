import Image from "next/image";

function HeroImage({
  title,
  subtitle,
  description,
  image,
  imageCredit,
  maxHeight,
  minHeight,
}) {
  return (
    // Restituisce un'immagine con testi sovrapposti (passati come props)
    <div className="relative flex flex-col items-center justify-center text-center">
      <Image
        src={image}
        alt={"Hero image"}
        width={1920}
        height={1080}
        className={`w-full object-cover brightness-50`}
        placeholder="blur" // Effetto di sfocatura durante il caricamento
        style={{ minHeight: minHeight, maxHeight: maxHeight }} // Altezza massima personalizzabile tramite props
      />
      {/* Titolo, sotto-titolo e descrizione posizionati al centro dell'immagine */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
        <h1 className="text-3xl font-bold md:text-5xl">{title}</h1>
        <h2 className="mt-2 text-xl md:text-3xl">{subtitle}</h2>
        <p className="mt-2 md:text-xl">{description}</p>
      </div>
      {/* Credit dell'immagine posizionato in basso a sinistra */}
      <p className="absolute bottom-2 left-2 text-xs text-white text-opacity-60 md:text-sm">
        {imageCredit}
      </p>
    </div>
  );
}

export default HeroImage;
