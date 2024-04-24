import { DireflowComponent } from 'direflow-component';
import RadioButton from './radiobutton';

export default DireflowComponent.create({
    component: RadioButton,
    configuration: {
      tagname: 'RadioButtonComponent',
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
