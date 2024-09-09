import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";
const LandingPage = () => {
//   const navigate = useNavigate();

//   const handleRedirect = () => {
//     navigate("/chat");
//   };

  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center ">
        <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Seamless Communication,
          <span className="flex items-center gap-2 sm:gap-6 text-purple-400 ">
            Anytime,Anywhere,
          </span>
        </h1>
        <p className="text-black-500 sm:mt-4 text-xs sm:text-xl">
          Experience real-time messaging and join conversations instantly in
          dedicated rooms with our powerful chat platform.
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        <Link to="/chat">
          <Button>
            Start Chatting{" "}
            <span>
              <GoArrowUpRight size={25} />
            </span>
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default LandingPage;
