export default {
  baseStyle: {
    borderRadius: "8px",
  },
  variants: {
    winter: {
      bg: "winter.85",
      color: "white",
      fontWeight: "normal",
      _hover: { opacity: 0.9 },
      _focus: { boxShadow: "none" },
      _focusVisible: { boxShadow: "0 0 0 3px #0B51B3" },
      _active: { bg: "winter.95" },
      _disabled: { bg: "rgba(248, 148, 6, 0.25)" },
    },
  },
  defaultProps: {
    variant: "winter",
  },
};
