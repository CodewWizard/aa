import { DireflowComponent } from 'direflow-component';
import AdjustPremium from './adjustPremium';

export default DireflowComponent.create({
  component: AdjustPremium,
  configuration: {
    tagname: 'adjust-premium',
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
