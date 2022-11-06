import React from "react";
import { Autocomplete, TextField, TextFieldProps } from "@mui/material";
import { PEOPLE } from "../../pages/dashboard/constants/People";

export const PeopleCombo = (props: TextFieldProps) => {
  return (
    <Autocomplete
      options={PEOPLE}
      multiple
      renderInput={(params) => (
        <TextField {...params} label="People" {...props} />
      )}
      getOptionLabel={(option) => option.name}
    />
  );
};
