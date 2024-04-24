import React from 'react';
import ProgressBar from './progressbar'

let schema = {
    "key": "Application",
    "submitForm": "pageChangeForm",
    "milestones": [
        {
            "Key": "riskqualifiers",
            "Label": "Risk Qualifiers",
            "Href": "/commercial/auto/application/riskqualifiers",
            "Childs": [],
            "Hidden": true
        },
        {
            "Key": "BusinessInformation",
            "Label": "Business Information",
            "Href": "/commercial/auto/application/businessinfo",
            "Childs": []
        },
        {
            "Key": "VehicleInformation",
            "Label": "Vehicle & Coverages",
            "Href": "/commercial/auto/application/vehicleinfo",
            "Childs": []
        },
        {
            "Key": "TruckTrailerMapping",
            "Label": "Trailer Mapping",
            "Href": "/commercial/auto/application/trucktrailer",
            "Childs": []
        },
        {
            "Key": "DriverInformation",
            "Label": "Driver Information",
            "Href": "/commercial/auto/application/driverinfo",
            "Childs": [],
            "Hidden": true
        }
    ]
}

const currentPageCheck = (indx, hurl) => {
    return window.location.href.includes(hurl);
};

const onHandleProgressClick = (e, formName, redirectPage) => {
    e.preventDefault();
    let pageinfo = document.getElementById(formName).checkValidity();
    if (!pageinfo) {
        alert('Please fill/select all mandatory fields');
        return pageinfo;
    }
};

const CommonArgs = {
    schema: schema,
    MilestoneIndex: [],
    disableIndex: [1],
    currentPage: '',
    currentPageCheck: currentPageCheck,
    onHandleProgressClick: onHandleProgressClick,
    needContinueBtn: true,
//     userInfo:  `<div class="container mt-5">
//     <div class="row">
//         <div class="col-md-12 d-flex align-items-center">
//             <p>Name: </p>
//             <p> John Doe</p>
//         </div>
//         <div class="col-md-12 d-flex align-items-center">
//             <p>Company: </p>
//             <p> Cogitate</p>
//         </div>
//     </div>
// </div>`
}

export default {
    title: 'Design System/Layouts/ProgressBar',
    component: ProgressBar,
    argTypes: {
        schema: {
            description: "An array of objects which holds selected value.",
            table: {
                category: 'Element'
            }
        },
        currentPage: {
            description: "An array of objects which gets passes to render list of options on screen.",
            table: {
                category: 'Element'
            }
        },
        lastMilestoneIndex: {
            description: "Emits this lastMilestoneIndex element key",
            table: {
                category: 'Element'
            },
        },
        disableIndex: {
            description: "An array of index which need to be disabled",
            table: {
                category: 'Element'
            },
        },
        currentPageCheck: {
            action: url => console.log(url),
            description: "Emits this currentPageCheck element key",
            table: {
                category: 'Events'
            },
        },
        onHandleProgressClick: {
            action: url => console.log(url),
            description: "Emits this onHandleProgressClick element key",
            table: {
                category: 'Events'
            },
        }
    },

};

const Template = (args) => <ProgressBar {...args} />;

export const Basic = Template.bind({});
Basic.args = CommonArgs;