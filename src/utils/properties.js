// Images
import tennis from "/public/assets/imgs/sports/tennis.webp";
import tennisBg from "/public/assets/imgs/heroImgs/tennis_bg.webp";
import padel from "/public/assets/imgs/sports/padel.webp";
import padelBg from "/public/assets/imgs/heroImgs/padel_bg.webp";
import basket from "/public/assets/imgs/sports/basket.webp";
import basketBg from "/public/assets/imgs/heroImgs/basket_bg.webp";
import soccer from "/public/assets/imgs/sports/soccer.webp";
import soccerBg from "/public/assets/imgs/heroImgs/soccer_bg.webp";

// Array contenente i dati dei vari sport disponibili
export const availableSports = [
  {
    id: 1,
    name: "Tennis",
    image: tennis,
    description: "Tennis, eleganza e precisione in campo",
    href: "/campi/tennis",
  },
  {
    id: 2,
    name: "Padel",
    image: padel,
    description: "Padel, lo sport che conquista tutti",
    href: "/campi/padel",
  },
  {
    id: 3,
    name: "Basket",
    image: basket,
    description: "Basket, adrenalina e gioco di squadra",
    href: "/campi/basket",
  },
  {
    id: 4,
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
    description:
      "Prenota il tuo campo e perfeziona il tuo gioco. Sfida i tuoi amici a tennis oggi stesso.",
    imageCredit: "Foto di Frankie Lopez su Unsplash",
  },
  {
    label: "padel",
    image: padelBg,
    description:
      "Scopri il padel, lo sport in rapida crescita che combina velocità, strategia e divertimento.",
    imageCredit: "Foto di Vincenzo Morelli su Unsplash",
  },
  {
    label: "basket",
    image: basketBg,
    description:
      "Entra in campo e senti l’adrenalina del basket. Dribbla, passa e schiaccia per vivere l’intensità del gioco.",
    imageCredit: "Foto di Nick Jio su Unsplash",
  },
  {
    label: "calcio",
    image: soccerBg,
    description:
      "Forma la tua squadra e preparati al divertimento in uno dei nostri campi.",
    imageCredit: "Image by nuraghies on Freepik",
  },
];
