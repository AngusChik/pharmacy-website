"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "secondary";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  onClick,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-full transition-colors cursor-pointer";

  const variants = {
    primary:
      "bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700 shadow-lg shadow-brand-500/25",
    outline:
      "border-2 border-gray-200 text-gray-700 hover:border-brand-500 hover:text-brand-500",
    secondary:
      "bg-gray-100 text-gray-700 hover:bg-gray-200",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = clsx(baseClasses, variants[variant], sizes[size], className);

  const Component = href ? "a" : "button";

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Component href={href} className={classes} onClick={onClick}>
        {children}
      </Component>
    </motion.div>
  );
}
