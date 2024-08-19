// Components
import HeroImage from "@/components/ui/heroImage";
import CardWithText from "@/components/ui/cardWithText";
import CardSportCourt from "@/components/ui/cardSportCourt";

// Utils
import { sportsSlugData } from "@/utils/properties";
import { availableSports } from "@/utils/properties";

function SportPage({ params }) {
  // Recupero i dati dello sport corrente, in base al parametro passato nell'URL e confrontato con i dati presenti in sportsSlugData
  const currentSport = sportsSlugData?.find(
    (sport) => sport?.label === params?.sport,
  );

  // Se non esiste uno sport con il nome passato nell'URL, ritorno null
  if (!currentSport) {
    return null;
  }

  return (
    <section>
      <HeroImage
        title={`Campi da ${currentSport?.label}`}
        description={currentSport?.description}
        image={currentSport?.image}
        imageCredit={currentSport?.imageCredit}
        minHeight="250px"
        maxHeight="400px"
      />
      <section className="my-8 md:my-14">
        <h1 className="mb-8 text-center text-xl font-bold text-myPrimary md:mb-20 md:text-5xl">
          Scegli il campo, verifica la disponibilità e prenota
        </h1>
        <div className="flex flex-wrap justify-evenly gap-6">
          {availableSports.map((sport) => (
            <CardSportCourt
              key={sport.name}
              title={sport.name}
              description={sport.description}
              image={sport.image}
              path={sport.href}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

export default SportPage;
