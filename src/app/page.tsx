'use client'

import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react"
import { twMerge } from "tailwind-merge";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const [xb, setXb] = useState(null)
  const [yb, setYb] = useState(null)
  const inputRef: any = useRef(null);

  useEffect(() => {
    setXb(inputRef.current.offsetLeft.toString())
    setYb(inputRef.current.offsetTop.toString())
  }, []);
  console.log(typeof xb);

  return (
    <div>

    <Container>
      <h1>Hello Next</h1>
      <Button onClick={() => setIsOpen(!isOpen)}
        ref={inputRef}
        >
        Dark
      </Button>

    </Container >
          <motion.div
        className={twMerge(`absolute top-[${yb}px] left-[${xb}px] bg-black rounded-[9999999px] flex items-center justify-center`,xb === undefined  || yb === undefined ?  "hidden":"")}
        initial={{
          width: 10,
          height: 10,
          top: yb + "px",
          left: xb + "px"
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
  );
}
