import { DireflowComponent } from 'direflow-component';
import DynamicForm from './dynamic-form';

export default DireflowComponent.create({
  component: DynamicForm,
  configuration: {
    tagname: 'dynamic-form',
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
