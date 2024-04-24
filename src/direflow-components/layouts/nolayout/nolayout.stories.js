import React from 'react';
import NoLayout from "./nolayout"

const CommonArgs = {
  
};

export default {
    title: 'Design System/Layouts/NoLayout',
    component: NoLayout,

    parameters: {
        docs: {
          description: {
            component: ' NoLayout of your website defines its Non Layout structure.',
          },
        },
      }
};

const Template = (args) => <NoLayout {...args} />;

export const Basic = Template.bind({});
Basic.args = CommonArgs;