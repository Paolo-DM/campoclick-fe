"use client";

// React
import React, { useState, useEffect } from "react";

// Components
import CustomModal from "./customModal";
import BookingForm from "./bookingForm";

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

function CardSportCourt({
  title,
  imageSrc,
  imageCredit,
  surface,
  courtId,
}) {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure(); // Hook da NextUI per gestire lo stato della modale
  const [activeTab, setActiveTab] = useState("availability"); // Stato per gestire la tab attiva
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd"),
  ); // Stato per gestire la data selezionata, inizialmente impostata a oggi
  const [selectedTime, setSelectedTime] = useState(""); // Stato per gestire l'orario selezionato
  const [scheduleId, setScheduleId] = useState(""); // Stato per gestire l'id dello schedule selezionato
  const [schedules, setSchedules] = useState([]); // Stato per gestire gli orari disponibili

  useEffect(() => {
    // Recupero dal database i dati sugli orari disponibili per il campo selezionato quando il componente viene montato
    fetchSchedules();
  }, [selectedDate, courtId]);

  // Funzione per recuperare i dati degli orari disponibili per il campo selezionato
  const fetchSchedules = async () => {
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
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const bookingResponse = await bookCourt(formData);
      const bookingId = bookingResponse?.booking_id;
      // In caso di prenotazione andata a buon fine, utente viene reindirizzato alla pagina di prenotazione confermata, dove viene passato l'id della prenotazione per poter visualizzare i dettagli della prenotazione con una successiva chiamata all'API
      router.push(`/prenotazione-confermata?booking_id=${bookingId}`);
    } catch (error) {
      alert(error.message);
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
      <Card className="py-4 w-11/12 md:w-fit" aria-labelledby="court-name" isHoverable>
        <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
          <h4 className="text-large font-bold" id="court-name">
            Campo {title}
          </h4>
          {/* <p className="text-tiny font-bold uppercase">{description}</p> */}
          <small className="text-default-500">Superficie: {surface}</small>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div className="relative">
            <Image
              alt="Card background"
              className="h-[200px] w-full md:w-[400px] rounded-xl object-cover object-center"
              src={imageSrc}
              width={300}
              height={150}
            />
            <p className="absolute  text-xs bottom-0.5 left-1.5 text-white/70">
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
              <Button color="danger" variant="light" onPress={onClose}>
                Chiudi
              </Button>
              <Button color="primary" type="submit" form="bookingForm">
                Prenota
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
                <div className="flex w-full flex-col text-center md:w-1/2">
                  <p className="text-lg font-semibold">Orari disponibili</p>
                  <p className="text-sm">
                    Scegli una fascia oraria tra quelle disponibili
                  </p>
                  <div className="flex flex-row flex-wrap justify-center">
                    {schedules.map((slot) => (
                      <Button
                        // isDisabled={!slot.is_available}
                        key={slot.time_slot}
                        className="m-2 rounded-lg p-2 text-xs shadow-md"
                        onPress={() => {
                          setSelectedTime(slot.time_slot);
                          setScheduleId(slot.schedule_id);
                        }}
                        color={
                          slot.time_slot === selectedTime
                            ? "primary"
                            : "default"
                        }
                      >
                        {slot.time_slot}:00 - {slot.time_slot + 1}:00
                        <br />
                        {slot.price} €
                      </Button>
                    ))}
                  </div>
                </div>
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
