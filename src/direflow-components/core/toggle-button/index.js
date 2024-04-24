import { DireflowComponent } from 'direflow-component';
import ToggleButtonComponent from './togglebutton';

export default DireflowComponent.create({
    component: ToggleButtonComponent,
    configuration: {
      tagname: 'ToggleButtonComponent',
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
