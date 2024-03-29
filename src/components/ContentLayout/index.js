import React from "react";

const ContentLayout = () => {
  return (
    <div className="p-5 md:p-8 overflow-y-auto h-full">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">
        <div className="w-full ">
          <div className="flex flex-col w-full h-full p-7 rounded bg-teal-100">
            <div className="w-full flex justify-between mb-auto pb-8">
              <div className="w-full flex flex-col">
                <span className="text-base text-heading font-semibold mb-1">
                  Total Revenue
                </span>
                <span className="text-xs text-body font-semibold">
                  (Last 30 Days)
                </span>
              </div>
              <div
                className="w-12 h-12 rounded-full bg-gray-200 flex flex-shrink-0 items-center justify-center ms-3"
                style={{ backgroundColor: "rgb(167, 243, 208)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12.115 21.773"
                  className="w-7 h-7"
                  color="#047857"
                >
                  <g data-name="Group 31">
                    <g data-name="Group 30">
                      <path
                        data-name="Path 26"
                        d="M6.057.35a.439.439 0 00-.439.439v20.2a.439.439 0 10.878 0V.789A.439.439 0 006.057.35z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth={0.7}
                      ></path>
                    </g>
                  </g>
                  <g data-name="Group 33">
                    <g data-name="Group 32">
                      <path
                        data-name="Path 27"
                        d="M6.057 2.106C2.91 2.106.35 4.076.35 6.496a4.4 4.4 0 003.135 3.922.44.44 0 10.318-.82 3.559 3.559 0 01-2.576-3.1c0-1.937 2.166-3.512 4.829-3.512s4.829 1.575 4.829 3.512a.439.439 0 10.878 0c.002-2.423-2.559-4.392-5.706-4.392z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth={0.7}
                      ></path>
                    </g>
                  </g>
                  <g data-name="Group 35">
                    <g data-name="Group 34">
                      <path
                        data-name="Path 28"
                        d="M8.629 11.355a.44.44 0 10-.317.82 3.558 3.558 0 012.576 3.1c0 1.937-2.166 3.512-4.829 3.512S1.23 17.212 1.23 15.275a.439.439 0 00-.878 0c0 2.421 2.56 4.39 5.707 4.39s5.707-1.97 5.707-4.39a4.4 4.4 0 00-3.137-3.92z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth={0.7}
                      ></path>
                    </g>
                  </g>
                  <g data-name="Group 37">
                    <g data-name="Group 36">
                      <path
                        data-name="Path 29"
                        d="M8.634 11.357c-1.285-.518-1.894-.719-2.538-.932a40.761 40.761 0 01-2.292-.824.44.44 0 00-.318.82c1.152.448 1.756.644 2.336.838.63.208 1.226.405 2.485.912a.446.446 0 00.164.032.438.438 0 00.163-.845z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth={0.7}
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <span className="text-xl font-semibold text-heading mb-2"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentLayout;
