import { DireflowComponent } from 'direflow-component';
import AddRemoveOptionalForm from './addOrRemoveOptionalForm';

export default DireflowComponent.create({
  component: AddRemoveOptionalForm,
  configuration: {
    tagname: 'addOrRemoveOptionalForm',
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
