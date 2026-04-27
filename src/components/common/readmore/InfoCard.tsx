"use client";

import { Check, MapPin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  university: {
    title: string;
    description: string;
    image: string;
    list: string[];
  };
};

const InfoCard = ({ university }: Props) => {
  const { title, description, image, list } = university;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-sm bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden"
    >
      {/* TOP SECTION: Logo & Title */}
      <div className="p-6 bg-slate-50/50">
        <div className="flex items-center gap-4">
          <div className="relative shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 border-white shadow-md bg-white">
            <Image
              src={image || "/logo.png"}
              alt={title || "University Logo"}
              fill
              className="object-contain p-1"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg text-slate-800 truncate">
              {title}
            </h3>
            <div className="flex items-center gap-1 text-slate-500 mt-0.5">
              <MapPin size={14} className="text-blue-500" />
              <p className="text-xs font-medium truncate">{description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* LIST SECTION: Locations/Details */}
      <div className="p-6">
        <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
          <span className="w-8 h-[1px] bg-slate-200"></span>
          Quick Details
        </h4>

        <ul className="space-y-3">
          {list?.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 group"
            >
              <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center transition-colors duration-300">
                <Check className="w-3 h-3 text-[#1e4e96] group-hover:text-white" />
              </div>
              <span className="text-[14px] font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* Action Button (Optional but adds value) */}
        <button className="w-full mt-6 py-3 bg-[#1e4e96] text-white rounded-full font-bold text-sm transition-all active:scale-[0.98] shadow-lg shadow-blue-200">
          Enquire Now
        </button>
      </div>
    </motion.div>
  );
};

export default InfoCard;
