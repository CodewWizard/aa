import { DireflowComponent } from 'direflow-component';
import TransactionHistory from './transaction-history';

export default DireflowComponent.create({
    component: TransactionHistory,
    configuration: {
      tagname: 'TransactionHistory',
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
