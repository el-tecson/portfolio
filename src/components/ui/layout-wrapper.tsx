"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
        key={pathname}
        initial={{ opacity: 1, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 4 }}
        transition={{
            duration: 0.55,
            ease: "easeInOut",
        }}
    >
        {children}
    </motion.div>
  );
}