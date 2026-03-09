import React, { useRef, useEffect } from 'react';
import { motion, useTransform, animate, useInView, useMotionValue } from 'framer-motion';

const Counter = ({ from = 0, to, duration = 2.5, suffix = "" }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest).toLocaleString() + suffix;
  });

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration, ease: "easeOut" });
    }
  }, [count, isInView, to, duration]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
};

export default Counter;
