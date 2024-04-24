import { DireflowComponent } from 'direflow-component';
import HeaderNavigationContent from './hnc'


export default DireflowComponent.create({
    component: HeaderNavigationContent,
    configuration: {
      tagname: 'headernavigationcontent',
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