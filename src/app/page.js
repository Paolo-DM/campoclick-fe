import HeroImage from "@/components/ui/heroImage";

export default function Home() {
  return (
    <main>
      {/* Componente HeroImage, customizzabile nei testi, immagine ed altezza */}
      <HeroImage
        title="Campo Click"
        subtitle="Prenota il tuo campo da tennis, padel o basket in pochi click"
        image="/assets/imgs/heroImgs/courts.webp"
        imageCredit={"Foto di Emediong Umoh su Unsplash"}
        maxHeight="590px"
      />
    </main>
  );
}
