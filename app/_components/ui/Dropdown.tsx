"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, {
  cloneElement,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";

interface DropdownProps {
  label: React.ReactNode;
  children: React.ReactNode;
  onClickClose?: boolean;
}

export default function Dropdown({
  children,
  label,
  onClickClose = true,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const clonedChildren = React.Children.map(children, (child, index) => {
    const isLastElement = index === React.Children.count(children) - 1;
    if (isLastElement) {
      return cloneElement(child as ReactElement, {
        onBlur: (event: React.FocusEvent<HTMLElement>) => {
          if (
            !event.relatedTarget ||
            !dropdownRef.current?.contains(event.relatedTarget)
          ) {
            setOpen(false);
          }
        },
      });
    }
    return child;
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      className="relative h-full py-4 lg1100:cursor-pointer"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      ref={dropdownRef}
    >
      <button
        onFocus={() => setOpen(true)}
        onBlur={(event) => {
          if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.relatedTarget as Node)
          ) {
            setOpen(false);
          }
        }}
        className="flex justify-center items-center gap-3  outline-none group cursor-default lg1100:cursor-pointer"
      >
        {label}
      </button>
      {open && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2  bg-white rounded-2xl mt-4 shadow-lg hidden lg1100:block w-fit px-5 py-3"
          onClick={() => {
            onClickClose && setOpen(false);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeIn" }}
        >
          {clonedChildren}
        </motion.div>
      )}
    </div>
  );
}
