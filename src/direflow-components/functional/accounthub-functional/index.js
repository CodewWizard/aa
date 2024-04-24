import { DireflowComponent } from 'direflow-component';
import AccountHub from './accounthub';

export default DireflowComponent.create({
  component: AccountHub,
  configuration: {
    tagname: 'accountHub',
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
