import React from 'react';
import layouts from './export'
 
const CommonArgs = {

}
 
export default {
    title: 'Design System/Layouts/layouts',
    component: layouts,
    args: {

    }
}

const Template = (args) => <layouts {...args} />;

export const Basic = Template.bind({});
Basic.args = CommonArgs;