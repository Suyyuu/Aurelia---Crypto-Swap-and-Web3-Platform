import Link from "next/link";
import React from "react";

interface AnimatedButtonProps {
  href: string;
  label: string;
  hoverLabel: string;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  href,
  label,
  hoverLabel,
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`group relative w-fit inline-block cursor-pointer ${className}`}
    >
      <div className="relative w-full overflow-hidden bg-[#e46767] px-[2.5rem] py-[1.5rem] rounded-md shadow-md">
        {/* Current Text */}
        <span className="absolute inset-0 flex items-center justify-center text-[#ffffff] font-WorkSans text-[16px] transition-transform duration-300 ease-in-out group-hover:-translate-y-full z-10">
          {label}
        </span>

        {/* Hover Text */}
        <span className="absolute inset-0 flex items-center justify-center text-[#000000] font-WorkSans text-[16px] translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 z-10">
          {hoverLabel}
        </span>

        {/* Background Gradient Slide */}
        <span className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-100 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0 z-0 rounded-md" />
      </div>
    </Link>
  );
};

export default AnimatedButton;
