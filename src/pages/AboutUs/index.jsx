import React from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Text } from "../../components";

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>About Tru Buddy - Your Trusted Companion for Mental Wellness</title>
        <meta
          name="description"
          content="Discover Tru Buddy's mission to provide compassionate support and a safe space for mental health. Join our community for connection and growth."
        />
      </Helmet>

      {/* about section */}
      <div className="relative h-[1024px] w-full bg-white-A700 py-[52px] md:py-5">
        {/* navigation row section */}
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full bg-teal-800 p-[39px] sm:p-5">
          <Text
            size="2xl"
            as="p"
            className="text-shadow-ts1 mb-[582px] ml-[45px] !font-delagothicone !text-gray-50 md:ml-0"
          >
            ABOUT US
          </Text>
        </div>

        {/* introduction column section */}
        <div className="absolute bottom-[5%] left-[5%] m-auto flex w-[53%] flex-col items-start gap-8 bg-gray-50 p-[43px] shadow-md md:p-5">
          <div className="mt-4 flex w-full max-w-[634px] flex-col gap-[53px] self-center pb-[5px] sm:gap-[26px]">
            <Text as="p" className="text-justify">
              Welcome to Tru Buddy, your trusted companion for mental wellness. At Tru Buddy, we believe in the power of
              compassionate support and understanding when it comes to mental health. Our journey began with a simple
              yet profound goal: to create a safe and supportive space where individuals can freely express their
              emotions, seek guidance, and find solace.
            </Text>
            <Text as="p" className="text-justify">
              Join us at Tru Buddy and discover the power of connection, understanding, and growth. Together, we can
              foster a community where everyone feels valued, supported, and empowered to prioritize their mental
              well-being.
            </Text>
          </div>
          <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
            <Button size="xl" className="ml-5 min-w-[300px] rounded-[37px] font-bold md:ml-0 sm:px-5">
              Know More
            </Button>
          </a>
        </div>

        {/* hero image section */}
        <Img
          src="images/img_rectangle_63.png"
          alt="image"
          className="absolute bottom-0 right-[4%] top-0 my-auto h-[860px] w-[39%] object-cover"
        />
      </div>
    </>
  );
}
