import { DireflowComponent } from 'direflow-component';
import ReinstatementFunctional from './reinstatementfunctional';

export default DireflowComponent.create({
  component: ReinstatementFunctional,
  configuration: {
    tagname: 'ReinstatementFunctional',
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