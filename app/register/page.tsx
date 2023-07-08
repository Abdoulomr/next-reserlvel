"use client";
import ButtonInput from "@/components/inputs/ButtonInput";
import Inputs from "@/components/inputs/Inputs";
import Link from "next/link";
import React from "react";
import { useForm, Resolver } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

export default function page() {
  const resolver: Resolver<FormValues> = async (values) => {
    return {
      values: values.email ? values : {},
      errors: !values.password
        ? {
            email: {
              type: "required",
              message: "Veillez saisir votre adresse email",
            },
          }
        : {},
    };
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <>
      <h1 className="text-4xl mt-10 font-extrabold text-slate-300">
        Bienvennue
      </h1>

      <form
        className="flex flex-col justify-center shadow-md items-center gap-5 w-[95vw] mx-auto max-w-md py-5 px-5 mt-4 bg-slate-50 rounded-sm"
        onSubmit={onSubmit}
      >
        <h3 className="w-fit text-md font-bold text-indigo-950 mx-auto mt-2">
          S&apos;inscrire
        </h3>
        <Inputs
          register={register}
          type="text"
          label="Prénom et Nom"
          value="fullName"
        />
        <Inputs
          register={register}
          type="email"
          label="Adresse Email"
          value="email"
        />
        <Inputs
          register={register}
          type="password"
          label="Mot de passe"
          value="password"
        />
        <ButtonInput
          bgColor="bg-indigo-950"
          title="S'inscrire"
          btnType="Primary"
        />

        <div className="w-full mt-2 flex justify-center gap-2 items-center">
          <small>Déjà inscrit ?</small>
          <Link
            className="text-sm text-indigo-600 hover:text-indigo-700"
            href="/login"
          >
            Se connecter
          </Link>
        </div>
      </form>
    </>
  );
}
