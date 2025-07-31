import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React, { useState, useEffect } from "react";
import Toast from "./Toast";
import "./toast.css";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A toast notification component that appears at the bottom right of the screen with auto-dismiss functionality and various types.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["success", "error", "warning", "info"],
    },
    duration: {
      control: { type: "number", min: 0, max: 10000, step: 500 },
    },
    showCloseButton: {
      control: { type: "boolean" },
    },
    message: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      if (!visible) {
        const timer = setTimeout(() => setVisible(true), 1500);
        return () => clearTimeout(timer);
      }
    }, [visible]);

    return (
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          background: "#f3f4f6",
        }}
      >
        {visible && (
          <Toast />
        )}
        <div
          style={{
            position: "absolute",
            top: "180px",
            left: "20px",
            background: "white",
            padding: "12px",
            borderRadius: "6px",
            fontSize: "14px",
            color: "#374151",
          }}
        >
          Toast will auto-dismiss or can be closed manually. It&apos;ll reappear after 1.5s for demo.
        </div>
      </div>
    );
  },
};
