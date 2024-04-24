import { DireflowComponent } from "direflow-component";
import BindRequest from "./bindRequest";

export default DireflowComponent.create({
  component: BindRequest,
  configuration: {
    tagname: "bind-request",
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
