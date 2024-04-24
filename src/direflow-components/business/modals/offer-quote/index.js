import { DireflowComponent } from "direflow-component";
import OfferQuote from "./offerQuote";

export default DireflowComponent.create({
  component: OfferQuote,
  configuration: {
    tagname: "Offer-quote",
  },
  plugins: [
    {
      name: "font-loader",
      options: {
        google: {
          families: ["Advent Pro", "Noto Sans JP"],
        },
      },
    },
  ],
});
