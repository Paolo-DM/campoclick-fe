// Components
import HeroImage from "@/components/ui/heroImage";

// Utils
import { sportsSlugData } from "@/utils/properties";

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
    <section className=" ">
      <HeroImage
        title={`Campi da ${currentSport?.label}`}
        description={currentSport?.description}
        image={currentSport?.image}
        imageCredit={currentSport?.imageCredit}
        minHeight="250px"
        maxHeight="400px"
      />
    </section>
  );
}

export default SportPage;
