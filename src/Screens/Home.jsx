import { Button } from "flowbite-react";
import React, { useRef } from "react";
import phone from "../images/phone.png";
import bubble from "../images/bubble.png";
import bubble2 from "../images/bubble-2.png";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { IMAGE } from "../images/Image";

function Home() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_btzyr0v", "template_j73mvol", form.current, {
        publicKey: "mKccigPOPJxM9w7Ys",
      })
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          toast.error(`Failed to send message: ${error.text}`);
        }
      );
  };

  const x = useMotionValue(10);
  const y = useMotionValue(10);

  // Configure spring properties for smooth animation
  const springConfig = { stiffness: 500, damping: 15 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Function to reset the button to its original position
  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Add ToastContainer to display toast notifications */}
      <ToastContainer />
      <div
        id="home"
        className="bg-blue-800 h-screen flex flex-col lg:flex-row text-white"
      >
        <div className="h-full w-full flex flex-col align-middle justify-center">
          <div className="flex flex-col justify-center px-8 lg:px-20 gap-10">
            <p className="text-5xl lg:text-7xl font-semibold">
              Unlock the Power of QR Codes
            </p>
            <p className="text-lg lg:text-xl">
              Discover the cutting-edge phone-based solutions that elevate your
              brand and streamline your operations
            </p>
            <div className="gap-4 lg:gap-10 flex flex-row">
              <button className="p-2 px-4 bg-blue-500 rounded-lg">
                Get Started
              </button>
              <button className="text-gray-300">Learn More</button>
            </div>
            <p className="text-gray-300">
              Unlock the Full Potential of phone Technology for Your Business
            </p>
          </div>
        </div>
        <div className="h-full w-full flex flex-col align-middle justify-center mt-10 lg:mt-0">
          <div className="flex justify-center lg:justify-end">
            <div className="h-[50vh] lg:h-[70vh] w-full rounded-l-lg bg-white flex justify-end align-middle items-center ">
              <div
                className="h-5/6 rounded-l-lg w-full lg:w-6/6"
                style={{
                  backgroundImage: `url(${IMAGE.bg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <motion.div
                  className="z-30 w-11/12"
                  transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  initial={{
                    transform: "translateZ(4px) translateY(-2px)",
                  }}
                  animate={{
                    transform: "translateZ(32px) translateY(-20px)",
                  }}
                >
                  <motion.img
                    initial={{
                      x: "50%",
                    }}
                    animate={{
                      x: "calc(50px - 1%)",
                    }}
                    src={phone}
                    className="h-[320px] w-[360px] lg:h-[620px] lg:w-[700px] -mt-16 z-30"
                  />
                </motion.div>
                <motion.img
                  transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  initial={{
                    transform: "translateZ(4px) translateY(-35px)",
                  }}
                  animate={{
                    transform: "translateZ(32px) translateY(-20px)",
                  }}
                  style={{ x: springX, y: springY }}
                  drag
                  dragElastic={0.7}
                  dragConstraints={{ top: 44, bottom: 0, left: 0, right: 0 }}
                  whileTap={{ scale: 1.2 }}
                  onDragEnd={() => resetPosition()}
                  src={bubble}
                  className="absolute w-14 top-44 "
                />
                <motion.img
                  transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  initial={{
                    transform: "translateZ(-40px) translateY(10px)",
                  }}
                  animate={{
                    transform: "translateZ(40px) translateY(-20px)",
                  }}
                  src={bubble2}
                  className="absolute w-14 bottom-14 right-10"
                />
                <motion.img
                  transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  initial={{
                    transform: " translateY(0px)",
                  }}
                  animate={{
                    transform: " translateY(-10px)",
                  }}
                  src={bubble2}
                  className="absolute w-20 bottom-24  lg:right-90"
                />
                <div className="z-32">
                  <motion.img
                    transition={{
                      repeat: Infinity,
                      repeatType: "mirror",
                      duration: 1,
                      ease: "easeInOut",
                    }}
                    initial={{
                      transform: "translateZ(-40px) translateY(10px)",
                    }}
                    animate={{
                      transform: "translateZ(40px) translateY(-20px)",
                    }}
                    src={bubble}
                    className="absolute w-20 top-40 z-0 right-28"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="h-screen w-full">
        <div className="w-full h-full flex flex-col lg:flex-row">
          <div className="h-full w-full flex flex-col align-middle justify-center">
            <div className="flex flex-col w-full justify-center px-8 lg:px-20 gap-10 text-center">
              <p className="text-5xl lg:text-7xl text-center font-semibold">
                Innovative QR-Powered
              </p>
              <div className="w-full text-center px-4 lg:px-36">
                <p className="text-lg lg:text-xl text-center">
                  Elevate your business with our cutting-edge QR-based
                  solutions. From seamless customer experiences to streamlined
                  operations, our platform empowers you to harness the power of
                  QR technology in innovative ways
                </p>
              </div>
              <div className="gap-4 lg:gap-10 flex flex-col lg:flex-row w-full h-full items-center justify-center m-auto">
                <div className="w-full h-full gap-4 lg:gap-10 items-center">
                  <div className="flex flex-col gap-4 lg:gap-10 justify-center h-full">
                    <p className="text-5xl lg:text-7xl font-medium text-start">
                      Revolutionize Your Customer
                    </p>
                    <p className="text-start w-full lg:w-5/6 text-lg lg:text-xl font-light">
                      Captivate your customers with our visually stunning and
                      interactive QR-powered
                    </p>
                  </div>
                </div>
                <motion.div
                  whileHover={{
                    y: -10,
                    initial: {
                      transform: "translateZ(4px) translateY(-2px)",
                    },
                    animate: {
                      transform: "translateZ(32px) translateY(-40px)",
                    },
                    transition: {
                      repeat: Infinity,
                      repeatType: "mirror",
                      duration: 0.75,
                      ease: "easeInOut",
                    },
                  }}
                  className="w-full h-full"
                >
                  <img src={IMAGE.qr} className="rounded-2xl scale-90" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row h-screen w-full">
        <div className="w-full lg:w-[80%] h-full">
          <div className="w-full h-full gap-10 items-center px-4 lg:px-10 bg-blue-500">
            <div className="flex flex-col gap-4 lg:gap-10 justify-center text-white h-full">
              <p className="text-5xl lg:text-7xl font-medium text-start">
                Transforming Businesses
              </p>
              <p className="text-start w-full lg:w-5/6 text-lg lg:text-xl font-light">
                Unlock the full potential of QR technology with our
                comprehensive suite of solutions. From captivating customer
                experiences to streamlined operational efficiency, our platform
                is designed to propel your business into the
              </p>
              <p className="text-start w-full lg:w-5/6 text-lg lg:text-xl text-white font-light">
                Elevate Your Business with QR
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <img src={IMAGE.ss} className="h-full w-full lg:w-[150%]" />
        </div>
      </div>
      <div className="h-screen w-full">
        <div className="flex flex-col lg:flex-row h-full w-full">
          <div className="w-full h-full">
            <img src={IMAGE.phone2} className="w-full h-full py-10" />
          </div>
          <div className="w-full h-full bg-red-500">
            <div className="w-full h-full gap-10 items-center px-4 lg:px-10 bg-blue-500">
              <div className="flex flex-col gap-4 lg:gap-10 justify-center text-white h-full">
                <p className="text-5xl lg:text-7xl font-medium text-start">
                  Navigate
                </p>
                <p className="text-start w-full lg:w-5/6 text-lg lg:text-xl font-light">
                  Seamlessly integrate our QR-powered solutions into your
                  business and unlock a world of endless possibilities. From
                  captivating customer experiences to streamlined operations
                </p>
                <p className="text-start w-full lg:w-5/6 text-lg lg:text-xl font-light">
                  Embrace the future of customer engagement and operational
                  efficiency with our cutting-edge QR-based solutions. Elevate
                  your brand, drive sustainable growth, and revolutionize the
                  way you connect with your audience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50vh] w-full">
        <div className="w-full h-full gap-10 items-center px-4 lg:px-10 bg-white">
          <div className="flex flex-col gap-4 lg:gap-10 justify-center text-white h-full">
            <p className="text-5xl lg:text-7xl font-medium text-center px-10 text-blue-500">
              Revolutionize Your <p>Business</p>
            </p>
            <p className="text-center w-full text-lg lg:text-xl font-light px-4 lg:px-56 text-blue-500">
              Discover how our innovative QR-powered solutions can transform
              your business. From captivating customer experiences to
              streamlined operations
            </p>
            <div className="flex align-middle justify-center">
              <button className="px-4 p-2 text-lg lg:text-xl font-light rounded-md bg-blue-800 w-fit h-fit justify-center">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="h-screen w-full flex flex-col items-center justify-center"
      >
        <p className="text-3xl lg:text-5xl">Contact us</p>
        <div className="flex w-[90%] lg:w-[78%] flex-col justify-center items-center my-16">
          <div className="w-full lg:w-[88%] flex flex-col lg:flex-row h-auto shadow-lg">
            <div className="w-full lg:w-full bg-blue-500 rounded-lg h-auto flex flex-col justify-around items-center p-4">
              <hr className="w-full my-4" />
              <form
                ref={form}
                onSubmit={sendEmail}
                className="w-full flex flex-wrap justify-between items-start"
              >
                <input
                  className="w-full lg:w-[45%] rounded-lg bg-white h-[50px] px-2 text-blue-gray-900 font-Poppins mb-4"
                  placeholder="Your Name"
                  name="name"
                  type="text"
                />
                <input
                  className="w-full lg:w-[45%] rounded-lg bg-white h-[50px] px-2 text-blue-gray-900 font-Poppins mb-4"
                  placeholder="Your Mobile Number"
                  name="phone"
                  type="number"
                />
                <textarea
                  className="w-full bg-white rounded-lg h-[150px] px-2 text-blue-gray-900 font-Poppins mb-4"
                  placeholder="Write Message"
                  name="message"
                />
                <Button
                  type="submit"
                  value="send"
                  className="bg-blue-800 outline-none hover:bg-red-500 ring-0 focus:outline-none focus:ring-0 w-full lg:w-auto"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
