import { fadeInUp } from "@/lib/motionVariants";
import { motion } from "framer-motion";
import { useState } from "react";
import { TbPlus } from "react-icons/tb";

import whiteLogo from "../../assets/images/whiteLogo.png";
import CommonButton from "./CommonButton";
export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
    }
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-kicks-blue rounded-t-3xl p-7 md:p-12"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex-1">
          <h2 className="font-display font-black text-2xl md:text-4xl text-white uppercase leading-tight mb-1">
            Join our KicksPlus
            <br />
            Club &amp; get 15% off
          </h2>
          <p className="text-blue-100 text-sm mb-5">
            Sign up for free! Join the community.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-1 min-w-0 px-4 py-3 rounded-xl text-sm bg-white/20 text-white placeholder-blue-200 border border-white/30 focus:outline-none focus:border-white/70 transition-colors"
            />
            <CommonButton className="bg-kicks-dark text-white">
              SUBMIT
            </CommonButton>
          </form>
        </div>

        <div className="hidden md:flex items-center gap-1 relative">
          <img src={whiteLogo} alt="Kicks logo" className="hidden md:block" />

          <span className="bg-kicks-orange  h-8 w-8 flex items-center justify-center  rounded-full absolute  right-0 -top-9">
            <TbPlus className="text-kicks-blue" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
