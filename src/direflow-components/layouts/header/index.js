import { DireflowComponent } from 'direflow-component';
import Header from './header';

export default DireflowComponent.create({
  component: Header,
  configuration: {
    tagname: 'Header',
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
