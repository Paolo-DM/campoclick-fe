"use client";

// React
import React, { useState, useEffect } from "react";

// Components
import CustomModal from "./customModal";
import BookingForm from "./bookingForm";
import TimeSlotSelector from "./timeSlotSelector";

// Date-fns
import { format } from "date-fns";

// NextUI
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Calendar } from "@nextui-org/calendar";
import { today, getLocalTimeZone } from "@internationalized/date";

// Next.js
import Image from "next/image";
import { useRouter } from "next/navigation";

// Server actions
import { bookCourt } from "@/actions/bookingAction";

function CardSportCourt({ title, imageSrc, imageCredit, surface, courtId }) {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure(); // Hook da NextUI per gestire lo stato della modale
  const [activeTab, setActiveTab] = useState("availability"); // Stato per gestire la tab attiva
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd"),
  ); // Stato per gestire la data selezionata, inizialmente impostata a oggi
  const [selectedTime, setSelectedTime] = useState(""); // Stato per gestire l'orario selezionato
  const [scheduleId, setScheduleId] = useState(""); // Stato per gestire l'id dello schedule selezionato
  const [schedules, setSchedules] = useState([]); // Stato per gestire gli orari disponibili
  const [isLoading, setIsLoading] = useState(false); // Stato per gestire il caricamento
  const [isSubmitting, setIsSubmitting] = useState(false); // Stato per gestire il caricamento durante la prenotazione

  useEffect(() => {
    // Recupero dal database i dati sugli orari disponibili per il campo selezionato quando il componente viene montato e quando cambia la data selezionata/ id del campo
    fetchSchedules();
  }, [selectedDate, courtId]);

  // Funzione per recuperare i dati degli orari disponibili per il campo selezionato
  const fetchSchedules = async () => {
    setIsLoading(true); // Inizia il caricamento
    try {
      const response = await fetch(
        // `${process.env.NEXT_PUBLIC_API_HOST}/schedules/?court_id=${courtId}`,
        // http://127.0.0.1:8000/api/schedules/?date=2023-08-30&court_id=1
        `${process.env.NEXT_PUBLIC_API_HOST}/schedules/?date=${selectedDate}&court_id=${courtId}`,
      );
      const data = await response.json();
      setSchedules(data);
    } catch (error) {
      console.error("Error fetching schedules:", error);
    } finally {
      setIsLoading(false); // Termina il caricamento
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);
    try {
      const bookingResponse = await bookCourt(formData);
      const bookingId = bookingResponse?.booking_id;
      // In caso di prenotazione andata a buon fine, utente viene reindirizzato alla pagina di prenotazione confermata, dove viene passato l'id della prenotazione per poter visualizzare i dettagli della prenotazione con una successiva chiamata all'API
      router.push(`/prenotazione-confermata?booking_id=${bookingId}`);
    } catch (error) {
      alert(error.message);
      setIsSubmitting(false);
    }
  };

  // Funzione per gestire il cambio di data nel calendario
  const handleDateChange = (calendarDate) => {
    // Estraggo anno, mese e giorno dalla data selezionata restituita dal componente Calendar
    const { year, month, day } = calendarDate;
    // Formatto la data in formato "yyyy-MM-dd" utilizzando la libreria date-fns
    const formattedDate = format(new Date(year, month - 1, day), "yyyy-MM-dd");
    setSelectedDate(formattedDate); // Aggiorna lo stato con la nuova data selezionata
  };

  return (
    <>
      <Card
        className="w-11/12 py-4 md:w-fit"
        aria-labelledby="court-name"
        isHoverable
      >
        <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
          <h4 className="text-large font-bold" id="court-name">
            Campo {title}
          </h4>
          <small className="text-default-500">Superficie: {surface}</small>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div className="relative">
            <Image
              alt="Card background"
              className="h-[200px] w-full rounded-xl object-cover object-center md:w-[400px]"
              src={imageSrc}
              width={300}
              height={150}
            />
            <p className="absolute bottom-0.5 left-1.5 text-xs text-white/70">
              {imageCredit}
            </p>
          </div>
        </CardBody>
        <CardFooter className="">
          <Button className="w-full bg-myPrimary text-white" onPress={onOpen}>
            Verifica disponibilità
          </Button>
        </CardFooter>
      </Card>
      <CustomModal
        isOpen={isOpen}
        onClose={onOpenChange}
        title={`Prenotazione campo`}
        size="4xl"
        buttonText={activeTab === "availability" ? "Avanti" : "Prenota"}
        footerActions={
          activeTab === "availability" ? (
            <>
              <Button color="danger" variant="bordered" onPress={onClose}>
                Chiudi
              </Button>
              {/* Deve essere attivo solo se è stata selezionata una data e un orario */}
              <Button
                color="primary"
                onPress={() => setActiveTab("book")}
                isDisabled={!selectedDate || !selectedTime}
              >
                Avanti
              </Button>
            </>
          ) : (
            <>
              <Button
                color="danger"
                variant="light"
                onPress={onClose}
                isDisabled={isSubmitting}
              >
                Chiudi
              </Button>
              <Button
                color="primary"
                type="submit"
                form="bookingForm"
                isLoading={isSubmitting} // Mostra il caricamento mentre viene effettuata la prenotazione
                isDisabled={isSubmitting} // Disabilita il pulsante se la prenotazione è in corso
              >
                {isSubmitting ? "Prenotazione in corso..." : "Prenota"}
              </Button>
            </>
          )
        }
      >
        <div className="flex w-full flex-col">
          <Tabs
            aria-label="Options"
            className="md:mb-6"
            selectedKey={activeTab} // Tab attiva in base allo stato "activeTab"
            onSelectionChange={setActiveTab} // Funzione per cambiare la tab attiva
          >
            <Tab key="availability" title="Verifica disponibilità">
              <div className="flex w-full flex-col gap-4 md:flex-row md:gap-0">
                {/* Calendario */}
                <div className="flex w-full justify-center border-b-2 pb-4 md:w-1/2 md:border-b-0 md:border-r-2 md:pb-0">
                  <Calendar
                    aria-label="Date"
                    defaultValue={today(getLocalTimeZone())}
                    minValue={today(getLocalTimeZone())}
                    onChange={handleDateChange}
                  />
                </div>
                {/* Fasce orari disponibili */}
                <TimeSlotSelector
                  isLoading={isLoading}
                  schedules={schedules}
                  selectedTime={selectedTime}
                  setSelectedTime={setSelectedTime}
                  setScheduleId={setScheduleId}
                />
              </div>
            </Tab>
            {/* TAB "PRENOTA" */}
            <Tab key="book" title="Prenota" isDisabled={activeTab !== "book"}>
              <form id="bookingForm" onSubmit={handleSubmit}>
                <BookingForm
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  scheduleId={scheduleId}
                />
              </form>
            </Tab>
          </Tabs>
        </div>
      </CustomModal>
    </>
  );
}

export default CardSportCourt;
