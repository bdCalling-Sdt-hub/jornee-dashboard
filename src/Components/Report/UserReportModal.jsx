import { Modal } from "antd";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UserReportModal = ({ isModalOpen, setIsModalOpen,  selected_data }) => {
  const colors = ['#EBAB04',"#e96e34","#873058"]
  const emotions = selected_data?.emotions?.map((value, i) => (
    {
      name : value,
      color : colors[i]

    }
  ))
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <div>
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
      >
        {/* <Slider {...settings}> */}
         
          <div className=" px-3 py-4">
            <h3 className=" text-lg font-medium pb-2 ">Emotions</h3>
            <div className=" flex items-center gap-3 ">
              {
                emotions?.map((emotion,i )=> <p key={i} style={{backgroundColor : emotion?.color}} className={ ` flex px-4 py-2  rounded-lg items-center gap-1 `}>
                {" "}
                <span className=" text-white text-sm font-medium"> {emotion?.name}</span>
              </p>
)
              }
             
              {/* <p className=" bg-[#e96e34] flex px-4 py-2  rounded-lg items-center  gap-1">
                {" "}
                <span> 😀 </span>{" "}
                <span className=" text-white text-sm font-medium"> trust</span>
              </p>

              <p className=" bg-[#873058] flex px-4 py-2  rounded-lg items-center gap-1 ">
                {" "}
                <span>😀 </span>{" "}
                <span className=" text-white text-sm font-medium">
                  {" "}
                  anticipation
                </span>
              </p> */}
            </div>

            <h3 className=" text-lg font-medium pt-5 ">Feelings</h3>
            <p className="text-[#666666] py-1">
              {selected_data?.feelings}
              </p>

            <h3 className=" text-lg font-medium pt-5 ">Needs</h3>
            <p className="text-[#666666] py-1">
            {selected_data?.needs}
            </p>
          </div>

          {/* <div className=" px-3 py-4">
            <h3 className=" text-lg font-medium pb-2 ">Emotions 2</h3>
            <div className=" flex items-center gap-3 ">
              <p className=" bg-[#EBAB04] flex px-4 py-2  rounded-lg items-center gap-1 ">
                {" "}
                <span>😀 </span>{" "}
                <span className=" text-white text-sm font-medium"> Joy</span>
              </p>

              <p className=" bg-[#e96e34] flex px-4 py-2  rounded-lg items-center  gap-1">
                {" "}
                <span> 😀 </span>{" "}
                <span className=" text-white text-sm font-medium"> trust</span>
              </p>

              <p className=" bg-[#873058] flex px-4 py-2  rounded-lg items-center gap-1 ">
                {" "}
                <span>😀 </span>{" "}
                <span className=" text-white text-sm font-medium">
                  {" "}
                  anticipation
                </span>
              </p>
            </div>

            <h3 className=" text-lg font-medium pt-5 ">Feelings</h3>
            <p className="text-[#666666] py-1">Frustrated & Confused</p>

            <h3 className=" text-lg font-medium pt-5 ">Needs</h3>
            <p className="text-[#666666] py-1">
              I need to tell my boss that I need more time to complete the
              project.
            </p>
          </div> */}
        {/* </Slider> */}
      </Modal>
    </div>
  );
};

export default UserReportModal;
