import { DireflowComponent } from 'direflow-component';
import ModalPopup from './modal';

export default DireflowComponent.create({
  component: ModalPopup,
  configuration: {
    tagname: 'modal-popup',
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
