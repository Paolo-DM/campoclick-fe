import { Input } from "@nextui-org/input";

function BookingForm({ selectedDate, selectedTime }) {
  return (
    <div className="grid grid-cols-1 gap-4 rounded-lg md:grid-cols-2">
      <Input
        label="Nome"
        placeholder="Inserisci il tuo nome"
        required
        color="primary"
        variant="bordered"
        name="name"
      />
      <Input
        label="Cognome"
        placeholder="Inserisci il tuo cognome"
        required
        variant="bordered"
        color="primary"
        name="surname"
      />
      <Input
        label="Numero di telefono"
        placeholder="Inserisci il tuo numero di telefono"
        required
        variant="bordered"
        color="primary"
        name="phone"
      />
      <Input
        label="Email"
        placeholder="Inserisci la tua email"
        required
        variant="bordered"
        color="primary"
        name="email"
      />
      <Input
        type="hidden"
        name="selectedDate"
        value={selectedDate}
      />
      <Input
        type="hidden"
        name="selectedTime"
        value={selectedTime}
      />
    </div>
  );
}

export default BookingForm;