import React from 'react';
import Header from './header'

 let user = {
    "encodedJWT": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6ImFnZW50LmNvZ2l0YXRlIiwiVXNlcklkIjoiMTM1MzEiLCJGaXJzdE5hbWUiOiJDb2dpdGF0ZSIsIkxhc3ROYW1lIjoiQWdlbnQiLCJlbWFpbCI6ImFwYXRpbDJAY29naXRhdGUudXMiLCJyb2xlIjoiQWdlbnQiLCJGZWF0dXJlcyI6IlF1b3RlIiwibmJmIjoxNjcxMTAxNjY1LCJleHAiOjE2NzExMTI0NjUsImlhdCI6MTY3MTEwMTY2NX0.DwpGJdibmt_GlhTQNX-yhGUBmq5Hlh3mYHS309Gs9lU",
    "JWTValidTill": 1671112461057,
    "decodedJWT": {
        "Username": "agent.cogitate",
        "UserId": "13531",
        "FirstName": "Cogitate",
        "LastName": "Agent",
        "email": "apatil2@cogitate.us",
        "role": "Agent",
        "Features": "Quote",
        "nbf": 1671101665,
        "exp": 1671112465,
        "iat": 1671101665
    }
};

const userLogout = () => {
    // logoutUser();
    window.location.href = process.env.NEXT_PUBLIC_BASE_PATH;
};

const checkValidUser = () => {
    let validUser = checkTokenValidity();
    if (validUser) {
    //   alert(alertMsgs.Shared.TimeOut);
    //   setTimeout(() => { userLogout() }, 2000);
    }
  };

  const checkTokenValidity = () => {
   console.log()
  }

const CommonArgs = {
    user:user,
    userLogout:userLogout,
    checkValidUser:checkValidUser
};

export default {
    title: 'Design System/Layouts/Header',
    component: Header,
    argTypes: {
        user: {
            description: " individual accessing a website through a web browser",
            table: {
                category: 'Key Params'
            }
        },
        userLogout: {
            description: " Provides controllers for logout",
            table: {
                category: 'Key Params'
            }
        },
        checkValidUser: {
            description: "Returns true if an input element contains valid data",
            table: {
                category: 'Key Params'
            }
        },
    }
};

const Template = (args) => <Header {...args} />;

export const headerfile = Template.bind({});
headerfile.args = CommonArgs;