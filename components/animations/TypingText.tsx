"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  speed = 30,
  as: Tag = "span",
}: TypingTextProps) {
  const reduce = useReducedMotion();
  const [displayed, setDisplayed] = useState(text);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (reduce) {
      setDisplayed(text);
      return;
    }
    setDisplayed("");
    const timer = setTimeout(() => setStarted(true), Math.max(0, delay * 1000));
    return () => clearTimeout(timer);
  }, [delay, reduce, text]);

  useEffect(() => {
    if (reduce || !started) return;
    if (displayed.length >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, text, speed, started, reduce]);

  return (
    <Tag className={className}>
      {reduce ? text : displayed}
      {!reduce && started && displayed.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-[2px] h-[0.9em] bg-current ml-[2px] align-middle"
        />
      )}
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
  speed = 20,
  as: Tag = "span",
}: ScrollTypingTextProps) {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayed, setDisplayed] = useState(text);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (reduce) {
      setDisplayed(text);
      setIsVisible(true);
      return;
    }

    // Initialize typing state
    setDisplayed("");
    
    const node = containerRef.current;
    if (!node) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    // Fallback safety timeout so text is never stuck empty
    const safetyTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => {
      observer.disconnect();
      clearTimeout(safetyTimer);
    };
  }, [reduce, text]);

  useEffect(() => {
    if (!isVisible || reduce) return;
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, Math.max(0, delay * 1000));
    return () => clearTimeout(startTimer);
  }, [isVisible, delay, reduce]);

  useEffect(() => {
    if (reduce || !started) return;
    if (displayed.length >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, text, speed, started, reduce]);

  return (
    <Tag ref={containerRef} className={className}>
      {reduce ? text : (started ? displayed : (isVisible ? "" : text))}
      {!reduce && started && displayed.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-[2px] h-[0.9em] bg-current ml-[2px] align-middle"
        />
      )}
    </Tag>
  );
}

