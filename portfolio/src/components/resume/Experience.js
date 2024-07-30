import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lecturer"
            subTitle="Shree Birethanti Secondary School"
            result="Nepal"
            des="Provide the knowledge of Engineering Course such as C-Programming and Objecxt Oriented Programming in C++"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022</p>
          <h2 className="text-4xl font-bold">Tranning Experience</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="FullStack Developer Using MERN"
            subTitle="Duresikshya (2022)"
            result="Excellent"
            des="During the 90Hrs duration under the supervision of Dursikshya Transforming Education,i learned the FUll Stack Development Using MERN with the proficiency of Excellent."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
