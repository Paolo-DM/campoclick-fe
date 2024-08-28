// NextUI
import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";

const TimeSlotSelector = ({
  isLoading,
  schedules,
  selectedTime,
  setSelectedTime,
  setScheduleId,
}) => {
  const renderContent = () => {
    // Se l'API è ancora in caricamento, mostra lo spinner
    if (isLoading) { 
      return (
        <div className="flex h-40 items-center justify-center">
          <Spinner label="Caricamento orari..." color="primary" size="md" />
        </div>
      );
    }
    // Se non ci sono orari disponibili, mostra un messaggio
    if (schedules.length === 0) {
      return (
        <p className="mt-4 text-gray-500">
          Non sono presenti orari disponibili per la data selezionata.
        </p>
      );
    }
    // Altrimenti, mostra i pulsanti per selezionare l'orario
    return schedules.map((slot) => (
      <Button
        key={slot.time_slot}
        className="m-2 rounded-lg p-2 text-xs shadow-md"
        onPress={() => {
          setSelectedTime(slot.time_slot);
          setScheduleId(slot.schedule_id);
        }}
        color={slot.time_slot === selectedTime ? "primary" : "default"}
      >
        {slot.time_slot}:00 - {slot.time_slot + 1}:00
        <br />
        {slot.price} €
      </Button>
    ));
  };

  return (
    <div className="flex w-full flex-col text-center md:w-1/2">
      <p className="text-lg font-semibold">Orari disponibili</p>
      <p className="text-sm">Scegli una fascia oraria tra quelle disponibili</p>
      <div className="flex flex-row flex-wrap justify-center">
        {renderContent()}
      </div>
    </div>
  );
};

export default TimeSlotSelector;
