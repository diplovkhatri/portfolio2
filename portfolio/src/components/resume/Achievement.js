import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      {/* <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2010 - Present
          </p>
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="............"
            subTitle="..............................."
            result="????"
            des=".................................................."
          />
        </div>
      </div> */}
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2010 - Present
          </p>
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Best Project Awards"
            subTitle="Student Result Prediction System(2018)"
            result="Winner"
            des="Certificate awarded for Best Project Award performance in the annual Project Presentation."
          />
          <ResumeCard
            title="Exhibition 2018"
            subTitle="Student Exam Performance Prediction System(2018)"
            result="Participation"
            des="Certificate of participation in EEC Project Exhibition 2018 Organized by Everest Engineering College on 11th Augest."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
