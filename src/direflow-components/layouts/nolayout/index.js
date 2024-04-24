import { DireflowComponent } from 'direflow-component';
import NoLayout from './nolayout'

export default DireflowComponent.create({
  component: NoLayout,
  configuration: {
    tagname: 'nolayout',
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