import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

function InputFormText({
  name,
  control,
  label,
  className,
  error,
  defaultValue,
  type,
}) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue ? defaultValue : ""}
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            className={className}
            error={!!error?.[name]}
            helperText={error[name]?.message}
            type={type ? type : "text"}
          />
        )}
      />
    </>
  );
}

export default InputFormText;
