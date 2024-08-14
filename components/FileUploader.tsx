/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import {
  CheckCircleIcon,
  CircleArrowDown,
  HammerIcon,
  CirclePlusIcon,
  SaveIcon,
  RocketIcon,
} from "lucide-react";
import useUpload, { StatusText } from "@/app/hooks/useUpload";
import { useRouter } from "next/navigation";

function FileUploader() {
  const { progress, status, fileId, handleUpload } = useUpload();
  const router = useRouter();

  useEffect(() => {
    if (fileId) {
      router.push(`/dashboard/files/${fileId}`);
    }
  }, [fileId, router]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    // Do something with the files
    const file = acceptedFiles[0];
    if (file) {
      //await handleUpload(file);
      await handleUpload(file);
    } else {
      // nothing
      // toast.....
    }
  }, []);

  const statusIcons: {
    [key in StatusText]: JSX.Element;
  } = {
    [StatusText.UPLOADING]: <RocketIcon className="h-20 w-20 text-blue-600" />,
    [StatusText.UPlOADED]: (
      <CheckCircleIcon className="h-20 w-20 text-blue-600" />
    ),
    [StatusText.SAVING]: <SaveIcon className="h-20 w-20 text-blue-600" />,
    [StatusText.GENERATING]: (
      <HammerIcon className="h-20 w-20 text-blue-600 animate-bounce" />
    ),
  };

  const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      accept: {
        "application/pdf": [".pdf"],
      },
    });

  const uploadInProgress = progress != null && progress >= 0 && progress <= 100;
  const progressbar = "progressbar";
  return (
    <div className="flex flex-col gap-4 items-center justify-center max-w-7xl mx-auto">
      {uploadInProgress && (
        <div className="mt-32 flex flex-col justify-center items-center  gap-5">
          <div
            className={`radial-progress bg-blue-300 text-white border-blue-600 border-4 ${progress} ===100 && hidden`}
            role={progressbar}
            style={{
              //@ts-ignore
              "--value": progress,
              "--size": "12rem",
              "--tickness": "1.3rem",
            }}
          >
            {progress} %
          </div>

          {
            //@ts-ignore
            statusIcons[status!]
          }
          {/* @ts-ignore */}
          <p className="text-blue-600 animate-pulse">{status}</p>
        </div>
      )}
      {!uploadInProgress && (
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
      )}
    </div>
  );
}
export default FileUploader;
