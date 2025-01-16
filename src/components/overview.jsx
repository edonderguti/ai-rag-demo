import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { MessageIcon, AIRobotIcon } from "./icons";

const Overview = () => {
  return (
    <motion.div
      key="overview"
      style={{
        maxWidth: "48rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      className="md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div
        style={{
          maxWidth: "36rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: "1.5rem",
          lineHeight: "1.75",
          textAlign: "center",
          borderRadius: "0.75rem",
        }}
      >
        <p
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <AIRobotIcon size={32} />
          <span>+</span>
          <MessageIcon size={32} />
        </p>

        <p>
          This is a demo chatbot that is used only as a proof of concept and
          doesn&apos;t have all the capabilities of a greatly built chatbot.
          Feel free to explore and test its basic functionalities.
        </p>

        <p>
          Note: This is a simplified version intended for demonstration purposes
          only.
        </p>
      </div>
    </motion.div>
  );
};

export default Overview;
