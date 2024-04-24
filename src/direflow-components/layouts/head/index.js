import { DireflowComponent } from 'direflow-component';
import PageHead from './head';

export default DireflowComponent.create({
  component: PageHead,
  configuration: {
    tagname: 'pagehead',
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
