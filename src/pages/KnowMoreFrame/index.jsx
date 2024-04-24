import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img } from "../../components";

export default function KnowMoreFramePage() {
  return (
    <>
      <Helmet>
        <title>Know More About Tru Buddy - Empathy Meets Innovation</title>
        <meta
          name="description"
          content="Learn how Tru Buddy combines AI technology with human empathy to support mental well-being. Be part of a community that values support and empowerment."
        />
      </Helmet>

      {/* about section */}
      <div className="flex w-full justify-center bg-white-A700 p-[26px] sm:p-5">
        {/* about content column section */}
        <div className="mb-[46px] flex w-[95%] flex-col gap-[29px] md:w-full">
          {/* about header row section */}
          <div className="flex items-start justify-between gap-5">
            {/* about us heading section */}
            <Text size="xl" as="p" className="text-shadow-ts1 mt-5 !font-delagothicone !text-teal-800">
              ABOUT US
            </Text>

            {/* about us icon button section */}
            <Button size="xs" shape="square" className="w-[40px]">
              <Img src="images/img_ellipse_21.png" />
            </Button>
          </div>

          {/* about us description section */}
          <Text as="p" className="w-[96%] text-justify md:w-full">
            <>
              Welcome to Tru Buddy, your trusted companion for mental wellness. 🌟 At Tru Buddy, we believe in the power
              of compassionate support and understanding when it comes to mental health. Our journey began with a simple
              yet profound goal: to create a safe and supportive space where individuals can freely express their
              emotions, seek guidance, and find solace. 🌱
              <br />
              <br />
              Driven by a passion for promoting mental well-being, our team of dedicated professionals has worked
              tirelessly to develop an innovative platform that combines advanced AI technology with human empathy. We
              understand that navigating life&#39;s challenges can be overwhelming at times, which is why we&#39;ve
              designed Tru Buddy to be your virtual confidante and ally. 🤝
              <br />
              <br />
              Join us at Tru Buddy and discover the power of connection, understanding, and growth. Together, we can
              foster a community where everyone feels valued, supported, and empowered to prioritize their mental
              well-being. 🌈
            </>
          </Text>
        </div>
      </div>
    </>
  );
}
