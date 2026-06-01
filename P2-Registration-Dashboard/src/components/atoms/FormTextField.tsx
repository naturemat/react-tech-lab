import { TextField } from "@mui/material";
import { useField } from "formik";

type FormTextFieldProps = {
  name: string;
  label: string;
  required?: boolean;
  type?: string;
};

export default function FormTextField({
  name,
  label,
  required = false,
  type = "text",
}: FormTextFieldProps) {
  const [field, meta] = useField(name);
  return (
    <TextField
      {...field}
      fullWidth
      variant="filled"
      label={label}
      required={required}
      type={type}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
}
