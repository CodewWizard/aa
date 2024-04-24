import { DireflowComponent } from 'direflow-component';
import GoogleMapLoader from './loader';

export default DireflowComponent.create({
  component: GoogleMapLoader,
  configuration: {
    tagname: 'googlemaps-loader',
  },
  plugins: [
    {
      name: 'font-loader',
      options: {
        google: {
          families: ['Advent Pro', 'Noto Sans JP'],
        },
      },
    },
  ],
});
