'use client'

import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react"
import { twMerge } from "tailwind-merge";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const [xb, setXb] = useState()
  const [yb, setYb] = useState()
  const inputRef: any = useRef(null);

  useEffect(() => {
    setXb(inputRef.current.offsetLeft)
    setXb(inputRef.current.offsetLeft)
  }, []);
  console.log(xb);

  return (
    <Container>
      <h1>Hello Next</h1>
      <Button className="" onClick={() => setIsOpen(!isOpen)}
        ref={inputRef}
      >
        Dark
      </Button>
      <div className={`absolute top-${yb} left-${xb} overflow-hidden w-[100vw] h-[100vh] z-[-1] flex items-center justify-center `}>
        <motion.div
          className={twMerge(` bg-black rounded-[9999999px] flex items-center justify-center`)}
          initial={{
            width: 10,
            height: 10,
            top: yb,
            left: xb
          }}
          animate={
            isOpen ? {
              width: "3000px",
              height: "3000px",
            } : {
              width: 10,
              height: 10,
            }
          }
          transition={{ duration: .3 }}
        >
        </motion.div>
      </div>
    </Container>
  );
}
