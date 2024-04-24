import { DireflowComponent } from 'direflow-component';
import AddDetail from './addDetail';

export default DireflowComponent.create({
  component: AddDetail,
  configuration: {
    tagname: 'MultiSelect',
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