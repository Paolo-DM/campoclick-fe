// Components
import CardWithText from "@/components/ui/cardWithText";
import HeroImage from "@/components/ui/heroImage";

// Imgs
import homeHeroImg from "/public/assets/imgs/heroImgs/courts.webp";

// Utils
import { availableSports } from "@/utils/properties";

// Homepage del sito
export default function Home() {
  return (
    <main>
      {/* Componente HeroImage, customizzabile nei testi, immagine ed altezza */}
      <HeroImage
        title="Campo Click"
        subtitle="Prenota il tuo campo da tennis, padel, basket o calcio in pochi click"
        // image="/assets/imgs/heroImgs/courts.webp"
        image={homeHeroImg}
        imageCredit={"Foto di Deva Darshan su Unsplash"}
        minHeight="350px"
        maxHeight="400px"
      />
      {/* Sezione con card raffiguranti gli sport per i quali è possibile prenotare un campo */}
      <section className="my-4 md:my-14">
        <h1 className="mb-2 text-center text-xl font-bold md:text-5xl text-myPrimary">
          Trova il campo perfetto per te
        </h1>
        <p className="mb-4 text-center text-sm md:mb-6 md:text-2xl">
          Scegli il tuo sport preferito e prenota ora
        </p>
        <div className="flex flex-wrap justify-evenly gap-6">
          {availableSports.map((sport) => (
            <CardWithText
              key={sport.name}
              title={sport.name}
              description={sport.description}
              image={sport.image}
              imageCredit={sport.imageCredit}
              path={sport.href}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
