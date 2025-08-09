import { ButtonProps } from "@/models/buttonProps";

const Button = ({ text, long }: ButtonProps) => {
  return (
    <button
      className={`cursor-pointer py-4 text-lg font-medium text-[oklch(0.95_0_0)] ring-1 ring-white/60 transition-all duration-300 ease-in-out hover:bg-indigo-700/40 hover:ring-indigo-500 ${long ? "w-full rounded-full" : "rounded-full px-8"} `}
    >
      {text}
    </button>
  );
};

export default Button;
