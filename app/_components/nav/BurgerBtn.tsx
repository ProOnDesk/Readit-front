"use client";

import { motion } from "framer-motion"; //animacje, no oczywiscie judi pomieszany na animacjach
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import MobileNav from "./MobileNav";

interface BurgerButtonProps {}

export default function BurgerBtn({}: BurgerButtonProps) {
  const [app, setApp] = useState<Element | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
    setApp(document.querySelector("#app"));
  }, []);

  const variantsBar1 = {
    closed: {
      rotate: "45deg",
      translateX: 4,
      translateY: -2,
      opacity: 0,
    },
    open: {
      rotate: "0deg",
      opacity: 1,
    },
  };

  const variantsBar2 = {
    closed: {
      rotate: "-45deg",
    },
    open: {
      rotate: "0deg",
    },
  };

  const variantsBar3 = {
    closed: {
      rotate: "45deg",
      translateX: -4.5,
      translateY: 3,
      width: "2rem",
    },
    open: {
      rotate: "0deg",
      width: "1.5rem",
    },
  };

  function closeNav() {
    setOpen(false);
  }

  return (
    <div className="lg1100:hidden ml-2">
      <button
        onClick={() => setOpen((s) => !s)}
        className="flex justify-center items-center w-10 h-10 rounded-full text-xl transition-colors duration-500 m-1 group"
      >
        <div className="flex flex-col h-full justify-evenly items-center py-1">
          <motion.div
            variants={variantsBar1}
            animate={open ? "closed" : "open"}
            transition={{ ease: "easeInOut" }}
            className="bg-black w-4 h-[3px] rounded-2xl self-start origin-left group-hover:bg-mainGreen transition-colors duration-300"
          ></motion.div>

          <motion.div
            variants={variantsBar2}
            animate={open ? "closed" : "open"}
            transition={{ ease: "easeInOut" }}
            className="bg-black w-8 h-[3px] rounded-2xl group-hover:bg-mainGreen transition-colors duration-300"
          ></motion.div>

          <motion.div
            variants={variantsBar3}
            animate={open ? "closed" : "open"}
            transition={{ ease: "easeInOut" }}
            className="bg-black w-6 h-[3px] rounded-2xl self-start origin-right group-hover:bg-mainGreen transition-colors duration-300"
          ></motion.div>
        </div>
      </button>
      {domReady &&
        app &&
        createPortal(
          <>
            <motion.div
              onClick={() => setOpen(false)}
              animate={open ? { translateX: "0%" } : { translateX: "100%" }}
              initial={{ translateX: "100%" }}
              transition={{ ease: "easeInOut" }}
              className={`fixed w-full h-full z-[50] top-0 left-0  flex justify-center items-center overflow-hidden lg1100:hidden`}
            ></motion.div>
            <motion.div
              animate={open ? { translateX: "0%" } : { translateX: "100%" }}
              initial={{ translateX: "100%" }}
              transition={{ ease: "easeInOut" }}
              className={`fixed right-0 top-0 z-[50] -translate-x-full h-[calc(100%-64px)] md:h-[calc(100%-80px)] w-[280px] bg-white border-l border-solid p-6 mt-16 md:mt-20 flex flex-col lg1100:hidden`}
            >
              <MobileNav closeNav={closeNav} />
            </motion.div>
          </>,
          app
        )}
    </div>
  );
}
