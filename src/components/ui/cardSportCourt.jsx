"use client";

// React
import React, { useState } from "react";

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

// Server actions
import { bookCourt } from "@/actions/bookingAction";

function CardSportCourt({ title, description, imageSrc, path, surface }) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure(); // Hook da NextUI per gestire lo stato della modale
  const [activeTab, setActiveTab] = useState("availability"); // Stato per gestire la tab attiva
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd"),
  ); // Stato per gestire la data selezionata, inizialmente impostata a oggi
  const [selectedTime, setSelectedTime] = useState(""); // Stato per gestire l'orario selezionato

  // Funzione per resettare la modale
  const resetModal = () => {
    setActiveTab("availability");
    setSelectedDate(format(new Date(), "yyyy-MM-dd"));
    setSelectedTime("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await bookCourt(formData);
    // formData.reset();
    // resetModal();
  };

  // Funzione per gestire il cambio di data nel calendario
  const handleDateChange = (calendarDate) => {
    // Estraggo anno, mese e giorno dalla data selezionata restituita dal componente Calendar
    const { year, month, day } = calendarDate;
    // Formatto la data in formato "yyyy-MM-dd" utilizzando la libreria date-fns
    const formattedDate = format(new Date(year, month - 1, day), "yyyy-MM-dd");
    setSelectedDate(formattedDate); // Aggiorna lo stato con la nuova data selezionata
  };

  const timeSlots = [
    { time: "09:00 - 10:00", price: "€15" },
    { time: "10:00 - 11:00", price: "€20" },
    { time: "11:00 - 12:00", price: "€20" },
    { time: "12:00 - 13:00", price: "€18" },
    { time: "13:00 - 14:00", price: "€12" },
    { time: "14:00 - 15:00", price: "€12" },
    { time: "15:00 - 16:00", price: "€15" },
    { time: "16:00 - 17:00", price: "€20" },
    { time: "17:00 - 18:00", price: "€25" },
    { time: "18:00 - 19:00", price: "€25" },
  ];

  return (
    <>
      <Card className="py-4" aria-labelledby="court-name">
        <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
          <h4 className="text-large font-bold" id="court-name">
            Campo {title}
          </h4>
          {/* <p className="text-tiny font-bold uppercase">{description}</p> */}
          <small className="text-default-500">
            Superficie: {surface}
          </small>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          {console.log("image ", imageSrc)}
          <Image
            alt="Card background"
            className="h-[200px] w-[400px] rounded-xl object-cover object-center"
            // src="/assets/imgs/sports/tennis.webp"
            src={imageSrc}
            width={300}
            height={150}
          />
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
        title="Custom Modal Title"
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
                    {timeSlots.map((slot) => (
                      <Button
                        key={slot.time}
                        className="m-2 rounded-lg p-2 text-xs shadow-md"
                        onPress={() => setSelectedTime(slot.time)}
                        // color "primary" if slot.time === selectedTime}
                        color={
                          slot.time === selectedTime ? "primary" : "default"
                        }
                      >
                        {slot.time}
                        <br />
                        {slot.price}
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
