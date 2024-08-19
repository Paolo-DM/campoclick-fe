// Images
import tennis from "/public/assets/imgs/sports/tennis.webp";
import tennisBg from "/public/assets/imgs/heroImgs/tennis_bg.webp";
import padel from "/public/assets/imgs/sports/padel.webp";
import basket from "/public/assets/imgs/sports/basket.webp";
import soccer from "/public/assets/imgs/sports/soccer.webp";

// Array contenente i dati dei vari sport disponibili
export const availableSports = [
  {
    name: "Tennis",
    image: tennis,
    description: "Tennis, eleganza e precisione in campo",
    href: "/campi/tennis",
  },
  {
    name: "Padel",
    image: padel,
    description: "Padel, lo sport che conquista tutti",
    href: "/campi/padel",
  },
  {
    name: "Basket",
    image: basket,
    description: "Basket, adrenalina e gioco di squadra",
    href: "/campi/basket",
  },
  {
    name: "Calcio",
    image: soccer,
    description: "Il calcio, lo sport più amato al mondo",
    href: "/campi/calcio",
  },
];

export const sportsSlugData = [
  {
    label: "tennis",
    image: tennisBg,
    description: "Prenota il tuo campo e perfeziona il tuo gioco. Sfida i tuoi amici a tennis oggi stesso.",
    imageCredit: "Foto di Frankie Lopez su Unsplash",
  },
]