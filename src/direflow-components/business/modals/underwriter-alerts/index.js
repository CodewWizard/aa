import { DireflowComponent } from 'direflow-component';
import UnderwriterAlerts from './underwriterAlerts';

export default DireflowComponent.create({
  component: UnderwriterAlerts,
  configuration: {
    tagname: 'underwriter-alerts',
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
