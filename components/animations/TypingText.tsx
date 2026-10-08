"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import type React from "react";

interface TypingTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  as?: React.ElementType;
}

export function TypingText({
  text,
  className,
  delay = 0,
  speed = 40,
  as: Tag = "span",
}: TypingTextProps) {
  const reduce = useReducedMotion();
  const [displayed, setDisplayed] = useState(reduce ? text : "");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const timer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay, reduce]);

  useEffect(() => {
    if (reduce || !started) return;
    if (displayed.length >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, text, speed, started, reduce]);

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className}>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        className="inline-block w-[2px] h-[0.9em] bg-current ml-[2px] align-middle"
      />
    </Tag>
  );
}

interface ScrollTypingTextProps extends TypingTextProps {
  triggerOnce?: boolean;
}

export function ScrollTypingText({
  text,
  className,
  delay = 0,
  speed = 30,
  as: Tag = "span",
  triggerOnce = true,
}: ScrollTypingTextProps) {
  const reduce = useReducedMotion();
  const [displayed, setDisplayed] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (reduce) {
      setDisplayed(text);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    const el = document.getElementById(`typing-${text.slice(0, 20).replace(/\s/g, "-")}`);
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [reduce, text, hasAnimated]);

  useEffect(() => {
    if (reduce || !isVisible || displayed.length >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed + delay * 1000);

    return () => clearTimeout(timer);
  }, [displayed, text, speed, isVisible, delay, reduce]);

  const id = `typing-${text.slice(0, 20).replace(/\s/g, "-")}`;

  return (
    <Tag id={id} className={className}>
      {reduce ? text : displayed}
      {!reduce && isVisible && displayed.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
          className="inline-block w-[2px] h-[0.9em] bg-current ml-[2px] align-middle"
        />
      )}
    </Tag>
  );
}
