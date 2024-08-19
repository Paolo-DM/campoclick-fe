import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

function CardSportCourt() {
  return (
    <Card className="py-4">
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <h4 className="text-large font-bold">Campo Mergellina</h4>
        <p className="text-tiny font-bold uppercase">Terra rossa</p>
        <small className="text-default-500">Coperto</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="rounded-xl object-cover"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
      <CardFooter className="">
        <Button className="w-full bg-myPrimary text-white">
          Verifica disponibilità
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardSportCourt;
