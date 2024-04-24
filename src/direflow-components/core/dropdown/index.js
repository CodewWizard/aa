import { DireflowComponent } from 'direflow-component';
import Dropdown from './dropdown';

export default DireflowComponent.create({
  component: Dropdown,
  configuration: {
    tagname: 'Dropdown',
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