import React from "react";
import { LoaderIcon } from "./icons";
import Image from "next/image";

export const PreviewAttachment = ({ attachment, isUploading = false }) => {
  const { name, url, contentType } = attachment;

  return (
    <div className="flex flex-col gap-2">
      <div className="relative flex aspect-video w-20 flex-col items-center justify-center rounded-md bg-muted">
        {contentType ? (
          contentType.startsWith("image") ? (
            <Image
              key={url}
              src={url}
              alt={name ?? "An image attachment"}
              className="size-full rounded-md object-cover"
            />
          ) : (
            <div className="" />
          )
        ) : (
          <div className="" />
        )}

        {isUploading && (
          <div className="absolute animate-spin text-zinc-500">
            <LoaderIcon />
          </div>
        )}
      </div>
      <div className="max-w-16 truncate text-xs text-zinc-500">{name}</div>
    </div>
  );
};
