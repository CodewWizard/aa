// import React from "react";
// import Navigation from "./navbar";

// const application = {
//   "MilestoneIndex": [],
//   "NavigationIndex": 1,
//   "ShowLoader": false,
//   "IsAnalyticsDataLoaded": false,
//   "AnalyticsData": [],
//   "multipleRate": {}
// };

// const sharedSetNavigation = (navigationIndex) => {
//  console.log(navigationIndex)
// };

// const onMenuSelected = async (indx, e, key, url) => {
//   e.preventDefault();
//   sharedSetNavigation(indx);
//   switch (key) {
//     case "AccountHub":
//       resetPolicy();
//       setStoreInternalState(storeKeys.ApplicationReducer, storeKeys.MultipleRatingResponse, {});
//       Router.push(url.toLowerCase());
//       break;

//     case "GenerateQuote":
//       if (schemaTest()) {
//         alert('Unable to fetch schema. Kindly re-login');
//         return false;
//       }
//       sharedSetProgress(-1);
//       resetPolicy();
//       setUserRole();
//       Router.push(url.toLowerCase());
//       break;

//     case "Analytics":
//       triggerAnalyticsData();
//       break;

//     default:
//       break;
//   }
// };

// const Menus = [
//   {
//       Key: "AccountHub",
//       Label: "Account Hub",
//       Src: "images/sidebar-uiElement.svg",
//       Href: "/dashboard/accounthub",
//       Childs: []
//   },
//   {
//       Key: "GenerateQuote",
//       Label: "Generate Quote",
//       Src: "images/sidebar-form.svg",
//       Href: "/commercial/auto/quote/riskqualifiers",
//       Childs: []
//   },
// ];

// const CommonArgs = {
//   application:application,
//   sharedSetNavigation:sharedSetNavigation,
//   onMenuSelected:onMenuSelected,
//   Menus:Menus
// }

// export default {
//     title:'Design System/Layout/Navigation',
//     component:Navigation,
//     argTypes: {
//       application: {
//             description: "application Emits Running Application of Website",
//              table: {
//                 category: 'Element'
//              }
//             },
//             sharedSetNavigation : {
//               description: " individual accessing a sharedSetNavigation through a web browser",
//                 table: {
//                   category: 'Element'
//                }
//             },
//             onMenuSelected : {
//               description: " individual accessing a object onMenuSelected through a web browser",
//               table: {
//                 category: 'Element'
//              }
//           },
//            Menus : {
//             description : "Emits about Menus in Navigation",
//             table: {
//               category: 'Element'
//            }
//         },
//     },
//        parameters: {
//       docs: {
//         description: {
//           component: 'Navigation component will generate Url Path given to perticular Pages.',
//         },
//       },
//     }
// };

//   const Template = (args) => <Navigation {...args} />;

// export const Navbar = Template.bind({});
// Navbar.args = CommonArgs;
