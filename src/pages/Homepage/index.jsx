import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Heading, Img } from "../../components";

export default function HomepagePage() {
  return (
    <>
      <Helmet>
        <title>Home - Your Personal Oasis | Tru Buddy</title>
        <meta
          name="description"
          content="Discover serenity with Tru Buddy, your emotional companion and personal oasis in a hectic world. Explore our services and join the journey of connection and growth."
        />
      </Helmet>

      {/* main content section */}
      <div className="flex h-[1024px] w-full flex-col items-start gap-5 bg-[url(/public/images/img_homepage.png)] bg-cover bg-no-repeat pb-[45px] md:h-auto md:pb-5">
        {/* header section */}
        <div className="w-[97%] md:w-full md:p-5">
          <div className="flex flex-col items-start">
            <div className="flex w-[98%] items-start justify-between gap-5 md:w-full md:flex-col">
              <Img src="images/img_ellipse_16.png" alt="circleimage" className="h-[264px] w-[20%] rounded-[50%]" />
              <header className="mt-[83px] flex w-[73%] items-start justify-between gap-5 md:w-full md:flex-col">
                <ul className="!mt-[9px] flex flex-wrap gap-[70px] md:gap-5">
                  <li>
                    <a href="#">
                      <Heading as="h4" className="text-center">
                        Home
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading as="h4" className="text-center">
                        About
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading as="h4" className="text-center">
                        Services
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading as="h4" className="text-center">
                        Contact Us
                      </Heading>
                    </a>
                  </li>
                </ul>
                <Button shape="round" className="min-w-[230px] font-bold sm:px-5">
                  Register
                </Button>
              </header>
            </div>
            <div className="relative ml-[123px] h-[184px] w-[62%] md:ml-0">
              <Text
                size="lg"
                as="p"
                className="absolute bottom-[-0.78px] left-[0.00px] m-auto text-center !font-fredokaone !text-orange-800"
              >
                An Emotional Companion
              </Text>
              <Text
                size="3xl"
                as="p"
                className="text-shadow-ts absolute left-0 right-0 top-[0.00px] m-auto w-max text-center !font-coiny !text-teal-800"
              >
                TRU BUDDY
              </Text>
            </div>
          </div>
        </div>

        {/* intro section */}
        <div className="mb-[5px] ml-[126px] flex w-[35%] flex-col items-start gap-8 md:ml-0 md:w-full md:p-5">
          <Text size="xs" as="p" className="!text-gray-900">
            <>
              More than Just a Platform, Your Personal Oasis in a Hectic World. Discover Serenity Today!&quot;. <br />
              Join us at Tru Buddy and discover the power of connection, understanding, and growth.{" "}
            </>
          </Text>
          <Button shape="round" className="min-w-[230px] font-semibold sm:px-5">
            Explore
          </Button>
        </div>
      </div>
    </>
  );
}
