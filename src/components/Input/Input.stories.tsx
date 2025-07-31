import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#1a1a1a" },
        {
          name: "gradient",
          value: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
        },
      ],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "number", "email"],
    },
    clearable: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
    success: { control: { type: "boolean" } },
    placeholder: { control: { type: "text" } },
    label: { control: { type: "text" } },
    error: { control: { type: "text" } },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "User Name",
    placeholder: "Enter your name",
  },
};

export const InteractivePassword: Story = {
  args: {
    type: "password",
    label: "Password",
    placeholder: "Minimum 8 characters",
    clearable: true,
  },
};

export const WithSuccess: Story = {
  args: {
    label: "Email Address",
    placeholder: "example@domain.com",
    success: true,
    clearable: true,
  },
};

export const WithError: Story = {
  args: {
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
    error: "Password is too short",
    clearable: true,
  },
};
export const LoginForm: Story = {
  render: () => (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "32px",
        background: "white",
        borderRadius: "16px",
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "32px",
          background: "linear-gradient(45deg, #8b5cf6, #ec4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Sign in to your account
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <Input
          type="email"
          label="Email"
          placeholder="your@email.com"
          clearable
        />
        <Input
          type="password"
          label="Password"
          placeholder="Your password"
          clearable
        />
        <button
          style={{
            width: "100%",
            padding: "12px",
            background: "linear-gradient(45deg, #8b5cf6, #ec4899)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  ),
};

export const FullDemo: Story = {
  render: () => (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "24px" }}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "16px",
            background: "linear-gradient(45deg, #3b82f6, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          🚀 CSS Input Components
        </h1>
        <p style={{ color: "#6b7280", fontSize: "18px" }}>
          A collection of stylish and interactive input components with
          animations, floating labels, and more.
        </p>
      </div>

      <div style={{ display: "grid", gap: "32px" }}>
        <div>
          <h3
            style={{
              marginBottom: "16px",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            💫 Floating Labels & Animations
          </h3>
          <Input
            label="Floating Label"
            placeholder="Click and see the animation"
            clearable
          />
        </div>

        <div>
          <h3
            style={{
              marginBottom: "16px",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            🔐 Password with Strength Indicator
          </h3>
          <Input
            type="password"
            label="Password with Strength Indicator"
            placeholder="Enter your password and see the progress"
            clearable
          />
        </div>

        <div>
          <h3
            style={{
              marginBottom: "16px",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            ❌ Error with Shake Animation
          </h3>
          <Input
            label="Input with Error"
            placeholder="Shake animation"
            error="This is an error message with animation"
            clearable
          />
        </div>
      </div>
    </div>
  ),
};
