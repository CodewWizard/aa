import { DireflowComponent } from 'direflow-component';
import OnRejectOnHold from './onrejectonhold';

export default DireflowComponent.create({
  component: OnRejectOnHold,
  configuration: {
    tagname: 'onreject-onhold',
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
