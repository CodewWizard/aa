import React from "react";
import { Helmet } from "react-helmet";
import { Input, Img, Heading, Text, Button } from "../../components";

export default function ChatbotPagePage() {
  return (
    <>
      <Helmet>
        <title>Chatbot - Get Instant Support | Tru Buddy</title>
        <meta
          name="description"
          content="Need assistance? Our Buddy chatbot is here to help. Engage in a conversation and get instant support for all your queries with Tru Buddy's intelligent chat service."
        />
      </Helmet>

      {/* chatbot page section */}
      <div className="flex w-full items-start gap-[305px] bg-cyan-50 p-[39px] md:flex-col md:gap-5 sm:p-5">
        {/* navigation icon section */}
        <Button size="lg" shape="square" className="w-[70px]">
          <Img src="images/img_ellipse_15.png" />
        </Button>

        {/* main content section */}
        <div className="my-[7px] w-[58%] rounded-[60px] bg-white-A700 pb-[34px] shadow-sm md:my-0 md:w-full md:p-5 sm:pb-5">
          {/* chat interface section */}
          <div className="flex flex-col items-end">
            {/* chat header section */}
            <div className="flex items-end justify-between gap-5 self-stretch rounded-tl-[56px] rounded-tr-[56px] bg-teal-400 p-[19px]">
              {/* user info section */}
              <div className="ml-[18px] mt-2.5 flex w-[36%] items-center justify-center gap-[27px] md:ml-0">
                {/* user avatar section */}
                <Img src="images/img_ellipse_13.png" alt="circleimage" className="h-[65px] w-[65px] rounded-[50%]" />

                {/* user name section */}
                <Heading size="2xl" as="h1" className="!text-white-A700">
                  Buddy
                </Heading>
              </div>

              {/* header image section */}
              <Img
                src="images/img_rectangle_50.png"
                alt="image"
                className="mb-[19px] mr-6 h-[25px] w-[25px] object-cover md:mr-0"
              />
            </div>

            {/* greeting section */}
            <div className="mr-[30px] mt-[79px] flex w-[36%] items-center gap-3 md:mr-0 md:w-full">
              {/* greeting text wrapper section */}
              <div className="flex h-[50px] flex-1 items-center justify-end rounded-[10px] bg-[url(/public/images/img_component_24.svg)] bg-cover bg-no-repeat p-2.5 md:h-auto">
                {/* greeting text section */}
                <Heading size="md" as="h2" className="mr-[19px] self-start !text-white-A700 md:mr-0">
                  Hello
                </Heading>
              </div>

              {/* greeting avatar section */}
              <Img
                src="images/img_ellipse_20.png"
                alt="circleimage_one"
                className="h-[45px] w-[45px] self-start rounded-[50%]"
              />
            </div>

            {/* support section */}
            <div className="ml-[25px] mt-[45px] flex w-[65%] flex-col gap-[17px] self-start md:ml-0 md:w-full">
              {/* support message wrapper section */}
              <div className="flex items-center gap-3.5">
                {/* support avatar section */}
                <Img
                  src="images/img_ellipse_16_45x45.png"
                  alt="circleimage_two"
                  className="h-[45px] w-[45px] self-start rounded-[50%]"
                />

                {/* support text wrapper section */}
                <div className="flex h-[50px] items-center rounded-[10px] bg-[url(/public/images/img_component_21.svg)] bg-cover bg-no-repeat p-2.5 md:h-auto">
                  {/* support text section */}
                  <Heading size="md" as="h3" className="self-end">
                    Hello, How can I help you?
                  </Heading>
                </div>
              </div>

              {/* typing indicator wrapper section */}
              <div className="flex w-[58%] items-center gap-4 md:w-full">
                {/* typing indicator avatar section */}
                <Img
                  src="images/img_ellipse_16_45x45.png"
                  alt="circleimage"
                  className="h-[45px] w-[45px] self-start rounded-[50%]"
                />

                {/* typing dots section */}
                <Text
                  size="md"
                  as="p"
                  className="flex h-[50px] items-center justify-center rounded-[10px] bg-blue_gray-100 pb-px pl-[25px] pr-[35px] pt-3.5 sm:px-5"
                >
                  . . . . . .
                </Text>
              </div>
            </div>

            {/* additional info section */}
            <div className="mr-[33px] mt-[46px] flex w-[73%] items-start gap-[9px] md:mr-0 md:w-full sm:flex-col">
              {/* info text wrapper section */}
              <div className="flex h-[148px] flex-1 items-end rounded-[10px] bg-[url(/public/images/img_component_24.svg)] bg-cover bg-no-repeat px-3 pt-3 md:h-auto sm:self-stretch">
                {/* info text section */}
                <Heading size="md" as="h4" className="mt-2.5 w-[98%] !text-white-A700">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                  classical Latin literature from 45 BC,{" "}
                </Heading>
              </div>

              {/* info avatar section */}
              <Img src="images/img_ellipse_20.png" alt="circleimage" className="h-[45px] w-[45px] rounded-[50%]" />
            </div>

            {/* input field section */}
            <Input
              size="sm"
              name="message"
              placeholder={`Enter Message ....`}
              prefix={<Img src="images/img_ellipse_14.png" alt="Ellipse 14" className="h-[35px] w-[35px]" />}
              suffix={<Img src="images/img_rectangle_55.png" alt="Rectangle 55" className="h-[25px] w-[25px]" />}
              className="mt-[231px] w-[89%] gap-7 self-center rounded-[34px] !text-gray-600 sm:px-5"
            />
          </div>
        </div>
      </div>
    </>
  );
}
