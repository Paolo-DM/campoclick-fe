// Components
import HeroImage from "@/components/ui/heroImage";
import CardSportCourt from "@/components/ui/cardSportCourt";

// Utils
import { sportsSlugData } from "@/utils/properties";

async function SportPage({ params }) {
  // Recupero i dati dei campi dal backend usando il parametro sport passato nell'URL
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/courts?sport=${params.sport}`,
    { cache: "force-cache" },
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
          {/* Crea un componente CardSportCourt per ciascun campo sportivo presente nel database */}
          {data?.length > 0 ? (
            data.map((court) => (
              <CardSportCourt
                key={court.court_id}
                title={court.court_name}
                surface={court.court_surface}
                description={court.court_type}
                imageSrc={court.image_url}
                imageCredit={court.image_credit}
                path={court.href}
                courtId={court.court_id}
              />
            ))
          ) : (
            <p className="text-center text-xl font-bold text-black">
              Non ci sono campi disponibili
            </p>
          )}
        </div>
      </section>
    </section>
  );
}

export default SportPage;
