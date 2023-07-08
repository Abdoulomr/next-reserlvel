import React from "react";

type ButtonType = "Primary" | "Danger";

interface ButtonInputProps {
  title: string;
  btnType: ButtonType;
  bgColor: string | undefined;
}

export default function ButtonInput({
  title,
  btnType,
  bgColor,
}: ButtonInputProps) {
  return (
    <input
      className={`border-none cursor-pointer shadow-md outline-none px-4 py-4  w-full rounded-sm hover:opacity-80 mt-2 text-white ${
        btnType === "Primary" ? bgColor : "bg-pink-900"
      } `}
      type="submit"
      value={title}
    />
  );
}
