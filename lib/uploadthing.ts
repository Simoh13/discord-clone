import { generateComponents } from "@uploadthing/react";
 
import type { OurFileRouter } from "@/app/api/upload/core";
 
export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();