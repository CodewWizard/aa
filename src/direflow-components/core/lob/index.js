import { DireflowComponent } from 'direflow-component';
import LineOfBusiness from './lob';

export default DireflowComponent.create({
    component: LineOfBusiness,
    configuration: {
      tagname: 'LineOfBusinessComponent',
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
