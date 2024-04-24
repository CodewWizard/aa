import { DireflowComponent } from 'direflow-component';
import DataTable from './datatable';

export default DireflowComponent.create({
  component: DataTable,
  configuration: {
    tagname: 'datatable',
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