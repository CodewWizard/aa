import { DireflowComponent } from 'direflow-component';
import UploadDocumentFunctional from './uploaddocumentfunctional';

export default DireflowComponent.create({
    component: UploadDocumentFunctional,
    configuration: {
      tagname: 'UploadDocumentFunctional',
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
