import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import "./StyledTextField.css";

export const StyledTextField = styled(TextField, {
  name: "StyledTextField",
})({
  input: {
    color: "#FFFFFF",
    border: 0,
    borderRadius: "15px",
    backgroundColor: "#333333",
    "&:hover": {
      border: 0,
      transform: "scale(1)",
    },
    cursor: "pointer",
    autoComplete: "off",
  },
  label: {
    color: "#696868",
    fontWeight: "bold",
  },
  div: {
    border: 0,
    borderRadius: "15px",
    backgroundColor: "#1a1a1a",
    "&:hover": {
      border: 0,
    },
    "&:before": {
      border: 0,
    },
  },
});
