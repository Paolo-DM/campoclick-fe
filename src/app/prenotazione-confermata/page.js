// Next.js
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import Link from "next/link";

// Date
import { format } from "date-fns";
import Image from "next/image";

// Framer

async function BookingConfirmationPage({ searchParams }) {
  // Recupero il parametro booking_id dall'URL
  const bookingId = searchParams?.booking_id;

  // Recupero i dati della prenotazione dal database, filtrando per l'id della prenotazione
  const booking = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/bookings/${bookingId}`,
  );
  const bookingData = await booking.json();

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start gap-6 pt-16">
      <h1 className="text-center text-3xl font-bold text-myPrimary">
        Prenotazione Confermata!
      </h1>
      <p className="text-center text-xl text-mySecondary">
        Per qualsiasi informazione puoi contattarci al nostro numero
        dell’assistenza clienti &nbsp;
        <strong>+39 333 3333333</strong>.
      </p>
      <Card className="mt-6 w-11/12 bg-myTertiary/60 text-mySecondary shadow-lg md:max-w-[800px]">
        <CardBody className="md:flex-rows flex flex-col justify-center gap-4 space-y-4 p-6 md:flex-row md:items-center">
          <div className="">
            <p>
              <strong>Nome:</strong> {bookingData?.name} {bookingData?.surname}
            </p>
            <p>
              <strong>Email:</strong> {bookingData?.email}
            </p>
            <p>
              <strong>Telefono:</strong> {bookingData?.phone}
            </p>
            <p>
              <strong>Campo:</strong> {bookingData?.court_name} -{" "}
              {bookingData?.court_type}
            </p>
            <p>
              <strong>Data:</strong>{" "}
              {format(new Date(bookingData?.booking_date), "dd/MM/yyyy")},{" "}
              {bookingData?.booking_time}:00
            </p>
          </div>
          <Image
            src={bookingData?.court_image_url}
            alt={"Immagine del campo"}
            width={300}
            height={300}
            className="h-full w-full rounded-md md:w-1/2"
          />
        </CardBody>
        <CardFooter className="justify-center bg-myPrimary/30 py-4">
          <Link
            href="/"
            className="rounded-md bg-myPrimary px-6 py-3 text-white transition duration-300 ease-in-out hover:bg-myPrimary/80"
          >
            Torna alla Home
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default BookingConfirmationPage;
