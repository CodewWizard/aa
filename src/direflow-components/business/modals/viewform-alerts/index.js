import { DireflowComponent } from 'direflow-component';
import ViewFormAlerts from './viewformAlerts';

export default DireflowComponent.create({
  component: ViewFormAlerts,
  configuration: {
    tagname: 'viewform-alerts',
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
