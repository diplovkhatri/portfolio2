import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Educational Qualification
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor in Computer Engineering"
            subTitle="Everest Engineering College (2016 - 2022)"
            result="2.61 GPA"
            des="Studied IT related subjects like Operating Systems, DBMS, OOPS, ML, Web Development, AI, DSA, Compiler Design etc."
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="Chhorepatan Higher Secondary School (2014 - 2016)"
            result="50.90%"
            des="Studied in this school from 11th to 12th std. HSC Subjects: PCM, English, Biology "
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Balodaya HIgher Secondary School (2008 - 2014)"
            result="69.25% "
            des="Studied in this school from fifth grade to 10th std. SSC Subjects: English, Hindi-French, Marathi, Maths, Science, Social Sciences."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="FullStack Developer Using MERN"
            subTitle="Duresikshya (2022)"
            result="Excellent"
            des="During the 90Hrs duration under the supervision of Dursikshya Transforming Education,i learned the FUll Stack Development Using MERN with the proficiency of Excellent."
          />
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

export default Education;
