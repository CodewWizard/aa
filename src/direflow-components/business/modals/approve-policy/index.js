import { DireflowComponent } from 'direflow-component';
import ApprovePolicy from './approvePolicy';

export default DireflowComponent.create({
  component: ApprovePolicy,
  configuration: {
    tagname: 'approve-policy',
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
