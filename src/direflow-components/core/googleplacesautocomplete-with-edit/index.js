import { DireflowComponent } from 'direflow-component';
import GooglePlacesAutoCompleteWithEdit from './autocompletewithedit';

export default DireflowComponent.create({
  component: GooglePlacesAutoCompleteWithEdit,
  configuration: {
    tagname: 'googlePlacesAutoCompleteWithEdit',
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
