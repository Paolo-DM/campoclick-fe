// Components
import HeroImage from "@/components/ui/heroImage";
import CardWithText from "@/components/ui/cardWithText";
import CardSportCourt from "@/components/ui/cardSportCourt";

// Utils
import { sportsSlugData } from "@/utils/properties";

async function SportPage({ params }) {
  // Recupero i dati dei campi dal backend usando il parametro sport passato nell'URL
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/api/courts?${params.sport}`,
  ).then((response) => response.json());

  // Recupero i dati dello sport corrente dall'array esportato da properties, in base al parametro passato nell'URL
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
        <div className="flex flex-wrap justify-center gap-6">
          {data.map((court) => (
            <CardSportCourt
              key={court.cour_id}
              title={court.court_name}
              surface={court.court_surface}
              description={court.court_type}
              imageSrc={court.image_url}
              path={court.href}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

export default SportPage;
