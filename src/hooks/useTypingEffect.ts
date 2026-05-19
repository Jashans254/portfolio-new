"use client";

// ============================================================
// useTypingEffect — Cycles through strings with type/delete
// ============================================================

import { useState, useEffect, useRef } from "react";

export function useTypingEffect(
  strings: readonly string[],
  typeSpeed = 70,
  deleteSpeed = 40,
  pauseMs = 1800
) {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [stringIndex, setStringIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const current = strings[stringIndex];

    const tick = () => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseMs);
          return;
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setStringIndex((i) => (i + 1) % strings.length);
          return;
        }
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, stringIndex, strings, typeSpeed, deleteSpeed, pauseMs]);

  return { displayed, isDeleting };
}
