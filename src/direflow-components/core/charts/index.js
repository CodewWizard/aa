import { DireflowComponent } from 'direflow-component';
import AnalyticsCharts from './charts';


export default DireflowComponent.create({
  component: AnalyticsCharts,
  configuration: {
    tagname: 'charts',
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