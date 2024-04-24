import { DireflowComponent } from 'direflow-component';
import HeaderNavigationContentSidebar from './hnc'


export default DireflowComponent.create({
    component: HeaderNavigationContentSidebar,
    configuration: {
      tagname: 'headernavigationcontentsidebar',
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