"use client";
import { UploadButton, UploadDropzone } from "@/lib/uploadthing"; // Assuming UploadDropzone is exported from '@/lib/uploadthing'
import React from "react";

const UploadPage = () => {
  return (
    <div className="flex flex-col items-start justify-start mt-10 ml-10 w-full">
      <h1 className="text-4xl font-bold">QR Scan</h1>
      <div className="pt-10 ">
        <UploadDropzone
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res);
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
          onUploadBegin={(name) => {
            // Do something once upload begins
            console.log("Uploading: ", name);
          }}
          className="flex items-center justify-center "
        />
      </div>
    </div>
  );
};

export default UploadPage;
