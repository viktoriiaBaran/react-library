import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SidebarMenu } from "./SidebarMenu";

const meta: Meta<typeof SidebarMenu> = {
  title: "Components/SidebarMenu",
  tags: ["autodocs"],
  component: SidebarMenu,
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;
type MenuItem = {
  label: string;
  children?: MenuItem[];
};

const items2Level = [
  {
    label: "Dashboard",
    children: [
      { label: "Overview" },
      { label: "Analytics" },
    ],
  },
  {
    label: "Settings",
    children: [
      { label: "Profile" },
      { label: "Security" },
    ],
  },
  { label: "Help" },
];

const Wrapper = ({ items }: { items: MenuItem[] }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        style={{
          padding: "8px 12px",
          background: "#0ea5e9",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
        onClick={() => setOpen(true)}
      >
        Open Sidebar
      </button>
      <SidebarMenu isOpen={open} onClose={() => setOpen(false)} items={items} />
    </>
  );
};

export const Default: Story = {
  render: () => <Wrapper items={items2Level} />,
};
