/* eslint-disable react/no-unescaped-entities */
"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  CheckCircleIcon,
  CircleArrowDown,
  HammerIcon,
  CirclePlusIcon,
  SaveIcon,
} from "lucide-react";

function FileUploader() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } =
    useDropzone({
      onDrop,
    });
  return (
    <div className="flex flex-col gap-4 items-center justify-center max-w-7xl mx-auto">
      <div
        {...getRootProps()}
        className={` flex p-10 border border-dashed rounded-lg h-96  mt-10 w-[90%] border-blue-600 text-blue-600 items-center justify-center mx-auto ${
          isFocused || isDragAccept ? "bg-blue-300 " : "bg-blue-100/50"
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center">
          {isDragActive ? (
            <>
              <CirclePlusIcon className="h-20 w-20 animate-pulse" />
              <p>Déposer votre fichier ici ...</p>
            </>
          ) : (
            <>
              <CircleArrowDown className="h-20 w-20 animate-bounce" />
              <p>
                Glisser-déposer des fichiers ici, ou cliquer pour sélectionner
                des fichiers
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FileUploader;
