import { DireflowComponent } from 'direflow-component';
import Navigation from './navbar'


export default DireflowComponent.create({
    component: Navigation,
    configuration: {
      tagname: 'navigation',
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