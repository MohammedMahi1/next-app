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
    <Container variant="Right">
      <h1>Hello Next</h1>
      <Button onClick={() => setIsOpen(!isOpen)}
        ref={inputRef}
        >
        Dark
      </Button>
          <motion.div>
      </motion.div>
    </Container >
  );
}
