"use client";
import React from "react";
import { Loading } from "@nextui-org/react";

export default function Loadingui() {
  return (
    <div className="w-fit h-fit absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
      <Loading size="xl" color="primary" />
    </div>
  );
}
