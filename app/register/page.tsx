"use client";
import ButtonInput from "@/components/inputs/ButtonInput";
import Inputs from "@/components/inputs/Inputs";
import Link from "next/link";
import React from "react";
import { useForm as UseForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    fullName: yup
      .string()
      .required("Veillez saisir votre nom complet")
      .min(2, "Trop court!")
      .max(25, "Trop Long!"),
    email: yup
      .string()
      .required("Veillez saisir votre adresse e-mail")
      .email("adresse e-mail invalide"),
    password: yup
      .string()
      .required("Veillez saisir votre mot de passe")
      .min(8, "Votre mot de passe doit faire au moins 8 carractères")
      .max(60, "Votre mot de passe doit faire au plus 60 carractères"),
    createdOn: yup.date().default(() => new Date()),
  })
  .required();

export default function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = UseForm({ resolver: yupResolver(schema) });
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <>
      <h1 className="text-4xl mt-10 font-extrabold text-slate-300">
        Bienvennue
      </h1>

      <form
        className="flex flex-col justify-center shadow-md items-center gap-6 w-[95vw] mx-auto max-w-md py-5 px-5 mt-4 bg-slate-50 rounded-sm"
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
          errors={errors}
        />
        <Inputs
          register={register}
          type="email"
          label="Adresse Email"
          value="email"
          errors={errors}
        />
        <Inputs
          register={register}
          type="password"
          label="Mot de passe"
          value="password"
          errors={errors}
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
