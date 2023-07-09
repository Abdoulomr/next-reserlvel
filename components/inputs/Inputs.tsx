import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form/dist/types";

type InputTypes = "text" | "password" | "number" | "email";

interface InputProps {
  register: UseFormRegister<any>;
  type: InputTypes;
  label: string;
  value: string;
  errors: any;
}

export default function Inputs({
  type,
  label,
  register,
  value,
  errors,
}: InputProps) {
  return (
    <div className="flex flex-col justify-start gap-1 w-full relative">
      <span className="text-indigo-950 text-sm">{label}</span>
      <input
        {...register(value)}
        className="border-none outline-none px-4 py-3  w-full bg-slate-100 focus:bg-slate-200 rounded-sm"
        type={type}
      />
      {errors[value] && (
        <small className="text-red-700 absolute -bottom-4 text-[12px]">
          {errors[value].message}
        </small>
      )}
    </div>
  );
}
