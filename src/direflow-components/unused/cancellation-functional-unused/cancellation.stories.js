import React from "react";
import CancellationFunctional from "./cancellation";
import { config, cancellationCardConfig, cancellationUISchema, cancellationLandingData, buttonStatus, overrideReturnPremiumSchema, overrideFeesSchema, submitInsuredSignatureSchema, mutationQuery } from './utilities/config';
// import { save } from "@cogitate/ui-utils-core-test";



const onSchemaChange = (model, key) => {
  return model;
}

const onFormSubmit = async (model) => {
  return model;
}

const CancellationArgs = {
  config: config,
  toggleStatus: buttonStatus,
  cancellationLandingData: cancellationLandingData,
  cancellationSchema: cancellationUISchema,
  cancellationCardConfig: cancellationCardConfig,
  overrideReturnPremiumSchema: overrideReturnPremiumSchema,
  overrideFeesSchema: overrideFeesSchema,
  submitInsuredSignatureSchema: submitInsuredSignatureSchema,
  mutationQuery: mutationQuery,
  requestedPage: { CancelLandingRate: '/Commercial/Auto/Cancel/Landing-Rate' },
  onSchemaChange: onSchemaChange,
  onFormSubmit: onFormSubmit,
  save: () => {}
};

export default {
  title: "Design System/Functional/Cancellation",
  component: CancellationFunctional,
  argTypes: {
    cancellationLandingData: {
      description: "Cancellation Details",
      table: {
        category: "Key Params",
      },
    },
    cancellationSchema: {
      description: "The Cancellation Schema",
      table: {
        category: "Key Params",
      },
    },
    cancellationcard: {
      description:
        "Card to show after the calculate button is clicked, this card has premium details, applicant's statement and action buttons",
      table: {
        category: "Toggle",
      },
    },
    showRejectButton: {
      description: "The Reject Cancellation button",
      table: {
        category: "Toggle",
      },
    },
    showOnHoldButton: {
      description: "The On Hold Cancellation Button",
      table: {
        category: "Toggle",
      },
    },
    showViewFormButton: {
      description: "The View Forms buttons",
      table: {
        category: "Toggle",
      },
    },
    requestCancellation: {
      description: "The Request to Cancellation Button",
      table: {
        category: "Toggle",
      },
    },
    showAdjustPremiumButton: {
      description: "The Adjust Premium Button",
      table: {
        category: "Toggle",
      },
    },
    showSignButton: {
      description: "The Send Signature Button",
      table: {
        category: "Toggle",
      },
    },
    downloadSignButton: {
      description: "The Download Signature Button",
      table: {
        category: "Toggle",
      },
    },
    showDocumentsCard: {
      description:
        "The Card which allows to upload documents and shows a table with uploaded documents and its details",
      table: {
        category: "Toggle",
      },
    },
    showExitButton: {
      description: "The Exit button",
      table: {
        category: "Toggle",
      },
    },
    showApprovaCancelButton: {
      description: "The Approve Cancellation button",
      table: {
        category: "Toggle",
      },
    },
    showSignature: {
      description:
        "The card for showing the applicant's statement along with insured signature button",
      table: {
        category: "Toggle",
      },
    },

    onSchemaChange: {
      description: "The event fired when the schema changes",
      table: {
        category: "Event",
      },
    },
    downloadForm: {
      description: "The event fired when viewform button is clicked",
      table: {
        category: "Event",
      },
    },
    RequestToCancelPolicy: {
      description: "event fired when request to cancellation button is clicked",
      table: {
        category: "Event",
      },
    },
    onFormSubmit: {
      description: "the event fired when calculate button is clicked",
      table: {
        category: "Event",
      },
    },
    onRejectCancellation: {
      description: "the event fired when reject button is clicked",
      table: {
        category: "Event",
      },
    },
    ButtonStatus: {
      description:
        "The object contains the flags for all buttons in cancellation and reinstatement components",
      table: {
        category: "key Params",
      },
    },
    config: {
      description: "Object containing general information",
      table: {
        category: "Key Params",
      },
    },
  },
};

const Template = (args) => <CancellationFunctional {...args} />;

// export const CancellationFunComp = Template.bind({});
// CancellationFunComp.args = CancellationArgs;
