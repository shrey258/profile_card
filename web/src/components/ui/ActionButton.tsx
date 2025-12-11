import { motion } from "motion/react";

export type ActionButtonVariant = "primary" | "secondary";

interface ActionButtonProps {
  label: string;
  variant?: ActionButtonVariant;
  layoutId?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const base: React.CSSProperties = {
  padding: "16px",
  fontSize: "16px",
  fontWeight: 600,
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  transition: "background-color 0.2s ease",
};

const variants: Record<ActionButtonVariant, React.CSSProperties> = {
  primary: {
    color: "#ffffff",
    backgroundColor: "#111111",
  },
  secondary: {
    color: "#111111",
    backgroundColor: "#f5f5f5",
  },
};

export default function ActionButton({
  label,
  variant = "primary",
  layoutId,
  onClick,
  style,
}: ActionButtonProps) {
  return (
    <motion.button
      layoutId={layoutId}
      onClick={onClick}
      style={{ ...base, ...variants[variant], ...style }}
    >
      {label}
    </motion.button>
  );
}
