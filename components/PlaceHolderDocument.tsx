"use client";

import { PlusCircleIcon, PlusIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function PlaceHolderDocument() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard/upload");
  };
  return (
    <Button
      onClick={handleClick}
      className="flex flex-col items-center justify-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400 hover:bg-indigo-100/40 hover:text-blue-500"
    >
      <PlusCircleIcon className="h-16 w-16" />
      <p>Ajouter un document</p>
    </Button>
  );
}

export default PlaceHolderDocument;
