import React from 'react';
import PageHead from './head';



const CommonArgs ={
    title:"Commercial Auto - AccountHub",
    description:"Page displays list of policies"
};

export default {
    title: 'Design System/Layouts/PageHead',
    component: PageHead,
    argTypes: {
        title:{
            description: "A title is typically the official part of your Page.",
             table: {
              category:'Element'
            }
        },
        description:{
            description: "discourse intended to give a mental image of something experienced.",
             table: {
              category:'Element'
            },
        }
    },
    parameters: {
        docs: {
          description: {
            component: 'Head Component Will Generate Title and Description of Every Pages.',
          },
        },
      }
}



const Template = (args) => <PageHead {...args} />;

export const Basic = Template.bind({});
Basic.args = CommonArgs;