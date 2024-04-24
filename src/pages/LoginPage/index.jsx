import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Input } from "../../components";

export default function LoginPagePage() {
  return (
    <>
      <Helmet>
        <title>Login - Connect with Your Inner Strength | Tru Buddy</title>
        <meta
          name="description"
          content="Welcome back to Tru Buddy! Continue your journey towards self-care. Log in to reconnect with your inner strength and serenity. New here? Register now."
        />
      </Helmet>

      {/* login page layout section */}
      <div className="w-full bg-white-A700">
        {/* main content section */}
        <div className="flex items-start md:flex-col">
          {/* image and greeting section */}
          <div className="flex-1 bg-teal-400 p-14 md:self-stretch md:p-5">
            <div className="mb-[5px] mt-[143px] flex flex-col items-center">
              <Img
                src="images/img_rectangle_34.png"
                alt="image"
                className="relative z-[1] h-[569px] w-full object-cover md:h-auto"
              />
              <Heading size="lg" as="h1" className="relative mt-[-18px] text-center !font-montserrat !text-white-A700">
                Reconnect with you inner strength and serenity :)
              </Heading>
            </div>
          </div>

          {/* login form section */}
          <div className="ml-[143px] mt-[148px] flex w-[35%] flex-col gap-[30px] md:ml-0 md:w-full md:p-5">
            <div className="flex flex-col gap-[45px]">
              <div className="relative h-[222px]">
                <div className="absolute bottom-[15.48px] left-0 right-0 m-auto flex flex-col items-center">
                  <Heading size="3xl" as="h2">
                    Welcome Back!
                  </Heading>
                  <Heading size="s" as="h3" className="relative mt-[-8px] text-center !text-gray-600">
                    Let&#39;s continue our journey towards self-care{" "}
                  </Heading>
                </div>
                <Img
                  src="images/img_ellipse_7.png"
                  alt="circleimage"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[222px] w-[58%] rounded-[50%]"
                />
              </div>
              <div className="flex flex-col items-center">
                <Input
                  shape="round"
                  type="number"
                  name="mobile"
                  placeholder={`Mobile`}
                  prefix={<Img src="images/img_rectangle_39.png" alt="Rectangle 39" className="h-[20px] w-[20px]" />}
                  className="gap-4 self-stretch sm:px-5"
                />
                <Input
                  shape="round"
                  type="password"
                  name="password"
                  placeholder={`Password`}
                  prefix={<Img src="images/img_rectangle_38.png" alt="Rectangle 38" className="h-[20px] w-[20px]" />}
                  className="mt-[19px] gap-4 self-stretch sm:px-5"
                />
                <div className="flex w-[90%] justify-between gap-5 md:w-full">
                  <div className="flex w-[31%] items-center justify-center gap-2 self-start">
                    <Img
                      src="images/img_ellipse_8.png"
                      alt="circleimage_one"
                      className="h-[18px] w-[18px] self-end rounded-[50%]"
                    />
                    <Heading size="xs" as="h4" className="text-center !text-gray-900">
                      Remember
                    </Heading>
                  </div>
                  <Heading size="xs" as="h5" className="self-end text-center">
                    Forget Password?
                  </Heading>
                </div>
              </div>
            </div>

            {/* login actions section */}
            <div className="flex flex-col items-center gap-2">
              <Button color="teal_400" size="sm" className="w-full rounded-[16px] font-bold sm:px-5">
                Login
              </Button>
              <Heading size="s" as="h6" className="text-center">
                <span className="text-black-900">New to Tru Buddy</span>
                <span className="text-black-900">?&nbsp;</span>
                <span className="text-light_blue_700">Register</span>
              </Heading>
            </div>
          </div>
          <Img
            src="images/img_ellipse_9.png"
            alt="circleimage_two"
            className="ml-28 mt-[19px] h-[35px] w-[35px] rounded-[50%] md:ml-0"
          />
        </div>
      </div>
    </>
  );
}
