import { DireflowComponent } from 'direflow-component';
import UploadDocument from './uploaddocument';

export default DireflowComponent.create({
    component: UploadDocument,
    configuration: {
      tagname: 'UploadDocumentComponent',
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
