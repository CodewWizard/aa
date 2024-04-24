import { DireflowComponent } from 'direflow-component';
import ProgressBar from './progressbar';

export default DireflowComponent.create({
  component: ProgressBar,
  configuration: {
    tagname: 'ProgressBar',
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
