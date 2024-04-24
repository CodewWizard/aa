import React from 'react';
import FooterComponent from './footer';

const dummyFunction = () => { }

const FooterArgs = {
  onSuccessSaveForLater: dummyFunction,
  onFailureSaveForLater: dummyFunction,
  onCloseSaveForLater: dummyFunction,
  onSuccessCancelApplication: dummyFunction,
  onCloseCancelApplication: dummyFunction,
  onBack: dummyFunction,
  onNext: dummyFunction,
  needBack: true,
  needCancel: true,
  needSaveForLater: true,
  needNext: true,
  backBtnText:"Back",
  cancelBtnText:"Cancel & Exit",
  saveBtnText:"Save & Exit",
  nextBtnText:"Next",
  needCustomBtn: false,
  customBtnText: "Decline Submission"
}

export default {
  title: 'Design System/Layouts/FooterComponent',
  component: FooterComponent,
  argTypes: {
    needSaveForLater: {
      description: "",
      table: {
        category: 'Key Params'
      }
    },
    needBack: {
      description: "",
      table: {
        category: 'Key Params'
      }
    },
    needCancel: {
      description: "",
      table: {
        category: 'Key Params'
      }
    },
    needNext: {
      description: "",
      table: {
        category: 'Key Params'
      }
    },
    onSuccessSaveForLater: {
      description: "",
      table: {
        category: 'event'
      }
    },
    onFailureSaveForLater: {
      description: "",
      table: {
        category: 'event'
      }
    },
    onCloseSaveForLater: {
      description: "",
      table: {
        category: 'event'
      }
    },
    onSuccessCancelApplication: {
      description: "",
      table: {
        category: 'event'
      }
    },
    onCloseCancelApplication: {
      description: "",
      table: {
        category: 'event'
      }
    },
    onBack: {
      description: "",
      table: {
        category: 'event'
      }
    },
    onNext: {
      description: "",
      table: {
        category: 'event'
      }
    }
  }
};

const Template = (args) => <FooterComponent {...args} />;

export const Footer = Template.bind({});
Footer.args = FooterArgs;
