import React from "react";
import { Client } from "types";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./ClientSelect.css";
import "../ComponentsStyles.css";

interface Props {
  selectClient: (clientId: string) => void;
  clientsList: Client[];
  clientId: string;
}

export const ClientSelect = (props: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    props.selectClient(event.target.value);
  };

  return (
    <FormControl
      className="select-client-box"
      variant="filled"
      sx={{
        div: {
          border: 0,
          borderRadius: "15px",
          backgroundColor: "#333333",
          color: "#FFFFFF",
          "&:after": { border: 0, borderRadius: "15px", color: "#333333" },
          "&:before": { border: 0, borderRadius: "15px", color: "#333333" },
        },
        label: { color: "#696868", fontWeight: "bold" },
        svg: { color: "#FFFFFF" },
      }}
    >
      <InputLabel id="demo-simple-select-filled-label">
        Wybierz kontrahenta z listy
      </InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={props.clientId}
        onChange={handleChange}
        className="select-client-option"
      >
        {props.clientsList.map((client) => (
          <MenuItem value={client.id} key={client.id}>
            {client.companyName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
