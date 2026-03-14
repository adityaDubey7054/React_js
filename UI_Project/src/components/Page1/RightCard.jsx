import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const RightCard = (props) => {
  return (
   <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative w-[220px] h-full rounded-3xl shrink-0 overflow-hidden shadow-lg transition hover:-translate-y-3"
    >

      {/* Image */}
      <img
        src= {props.img}
        alt=""
        className="w-full h-full object-cover  transition-transform duration-500 hover:scale-110"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* Number */}
      <div className="absolute top-4 left-4 bg-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
        {props.id}
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-6 left-4 right-4 text-white">

        <p className="text-sm mb-4">
          {props.intro}
        </p>

        <div className="flex items-center justify-between">
          <button  style={{ backgroundColor: props.color }} className="px-4 py-2  rounded-full text-sm transition hover:bg-blue-700 hover:scale-105">
            {props.tag}
          </button>

          <button style={{backgroundColor:props.color}} className="p-2  rounded-full transition hover:bg-blue-700 hover:rotate-45">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </motion.div>
  );
};

export default RightCard;