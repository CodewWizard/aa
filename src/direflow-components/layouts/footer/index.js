import { DireflowComponent } from 'direflow-component';
import FooterComponent from './footer';

export default DireflowComponent.create({
  component: FooterComponent,
  configuration: {
    tagname: 'FooterComponent',
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
