import { DireflowComponent } from 'direflow-component';
import AutoComplete from './autocomplete';

export default DireflowComponent.create({
  component: AutoComplete,
  configuration: {
    tagname: 'autocomplete',
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
