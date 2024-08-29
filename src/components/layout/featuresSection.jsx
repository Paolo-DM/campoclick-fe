function FeaturesSection() {
  {/* Sezione raffigurante le caratteristiche principali del sito */}
  return (
    <section className="bg-white py-12 md:py-18">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-xl md:text-4xl font-bold text-myPrimary">
          Perché scegliere Campo Click?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-4 text-4xl text-myPrimary">⚡</div>
            <h3 className="mb-2 text-xl font-semibold">Prenotazione Rapida</h3>
            <p className="text-gray-600">
              Prenota il tuo campo in pochi secondi, senza complicazioni.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 text-4xl text-myPrimary">🏆</div>
            <h3 className="mb-2 text-xl font-semibold">Ampia Scelta</h3>
            <p className="text-gray-600">
              Trova il campo perfetto tra una vasta selezione di strutture.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 text-4xl text-myPrimary">📅</div>
            <h3 className="mb-2 text-xl font-semibold">
              Disponibilità in Tempo Reale
            </h3>
            <p className="text-gray-600">
              Verifica istantaneamente la disponibilità dei campi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
