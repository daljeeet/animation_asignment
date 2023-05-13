import CardOne from "./cards/CardOne";
import CardThree from "./cards/CardThree";
import CardTwo from "./cards/CardTwo";

// eslint-disable-next-line react/prop-types
const Cards = ({count}) => {
  switch (count) {
    case 1:
        return <CardOne/>
    case 2:
        return <CardTwo/>
    case 3:
        return <CardThree/>
    default:
        break;
  }
}

export default Cards