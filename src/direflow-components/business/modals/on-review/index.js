import { DireflowComponent } from 'direflow-component';
import OnReview from './onReview';

export default DireflowComponent.create({
  component: OnReview,
  configuration: {
    tagname: 'on-review',
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
