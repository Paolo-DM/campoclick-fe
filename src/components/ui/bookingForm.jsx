import { useState } from "react";
import { Input } from "@nextui-org/input";
import { bookCourt } from "@/actions/bookingAction";

function BookingForm() {
  return (
    <form
      className="grid grid-cols-1 gap-4 rounded-lg md:grid-cols-2"
      //   action={bookCourt}
      onSubmit={handleSubmit}
    >
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
    </form>
  );
}

export default BookingForm;
