"use client";

import useSWR from "swr";
import {
  CheckedSquare,
  InfoIcon,
  LoaderIcon,
  TrashIcon,
  UncheckedSquare,
  UploadIcon,
} from "./icons";
import { useRef, useState } from "react";
import { fetcher } from "@/utils/functions";
import cx from "classnames";
import { motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import { toast } from "sonner";

export const Files = ({
  selectedFilePathnames,
  setSelectedFilePathnames,
  setIsFilesVisible,
}) => {
  const inputFileRef = useRef(null);
  const [uploadQueue, setUploadQueue] = useState([]);
  const [deleteQueue, setDeleteQueue] = useState([]);
  const {
    data: files,
    mutate,
    isLoading,
  } = useSWR("api/files/list", fetcher, {
    refreshInterval: 3000,
    fallbackData: [],
  });

  const drawerRef = useRef(null);
  useOnClickOutside([drawerRef], () => {
    setIsFilesVisible(false);
  });

  const handleUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const { key } = await response.json();
      return key;
    } catch (error) {
      toast.error(`Upload failed: ${error.message}`);
      throw error;
    }
  };

  const handleDelete = async (file) => {
    try {
      const response = await fetch(
        `/api/delete?key=${encodeURIComponent(file.pathname)}`,
        { method: "DELETE" },
      );

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      return true;
    } catch (error) {
      toast.error(`Delete failed: ${error.message}`);
      throw error;
    }
  };

  return (
    <motion.div className="fixed left-0 top-0 z-40 flex h-dvh w-dvw flex-row items-center justify-center bg-zinc-900/50">
      <motion.div
        className={cx(
          "fixed z-30 flex flex-col gap-4 bg-white p-4 dark:bg-zinc-800",
          "md:h-96 md:w-[600px] md:rounded-lg", // Desktop styles
          "bottom-0 right-0 h-96 w-dvw md:static", // Mobile styles with desktop override
        )}
        initial={{
          y: "100%",
          scale: 0.9,
          opacity: 0,
        }}
        animate={{
          y: "0%",
          scale: 1,
          opacity: 1,
        }}
        exit={{
          y: "100%",
          scale: 0.9,
          opacity: 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        ref={drawerRef}
      >
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-3 text-sm">
            <div className="text-zinc-900 dark:text-zinc-300">
              Manage Knowledge Base
            </div>
          </div>

          <input
            name="file"
            ref={inputFileRef}
            type="file"
            required
            className="pointer-events-none w-1 opacity-0"
            accept=".pdf,.txt,.docx,.md"
            multiple={false}
            onChange={async (event) => {
              const file = event.target.files[0];
              if (!file) return;

              try {
                setUploadQueue((q) => [...q, file.name]);
                const key = await handleUpload(file);
                mutate([...(files || []), { pathname: key }]);
                toast.success(`${file.name} uploaded successfully`);
              } catch (error) {
                console.error("Upload error:", error);
              } finally {
                setUploadQueue((q) => q.filter((n) => n !== file.name));
              }
            }}
          />

          <div
            className="flex cursor-pointer flex-row items-center gap-2 rounded-md bg-zinc-900 p-1 px-2 text-sm text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-800 dark:hover:bg-zinc-200"
            onClick={() => inputFileRef.current?.click()}
          >
            <UploadIcon />
            <div>Upload a file</div>
          </div>
        </div>

        <div className="flex h-full flex-col overflow-y-scroll">
          {files?.map((file) => (
            <div
              key={file.pathname}
              className={`flex flex-row border-b p-2 dark:border-zinc-700 ${
                selectedFilePathnames.includes(file.pathname)
                  ? "bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-700"
                  : ""
              }`}
            >
              <div className="flex w-full flex-row items-center justify-between gap-4">
                {/* Selection logic here */}
              </div>

              <div
                className="cursor-pointer rounded-md p-1 px-2 text-zinc-500 hover:bg-red-100 hover:text-red-500 dark:text-zinc-500 hover:dark:bg-zinc-700"
                onClick={async () => {
                  try {
                    setDeleteQueue((q) => [...q, file.pathname]);
                    await handleDelete(file);
                    mutate(files.filter((f) => f.pathname !== file.pathname));
                    setSelectedFilePathnames((s) =>
                      s.filter((p) => p !== file.pathname),
                    );
                    toast.success(`${file.pathname} deleted successfully`);
                  } catch (error) {
                    console.error("Delete error:", error);
                  } finally {
                    setDeleteQueue((q) => q.filter((p) => p !== file.pathname));
                  }
                }}
              >
                <TrashIcon />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row justify-end">
          <div className="text-sm text-zinc-500 dark:text-zinc-400">
            {`${selectedFilePathnames.length} selected`}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
