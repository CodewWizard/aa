import { DireflowComponent } from 'direflow-component';
import GoogleMaps from './googlemaps';

export default DireflowComponent.create({
  component: GoogleMaps,
  configuration: {
    tagname: 'googlemaps',
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
