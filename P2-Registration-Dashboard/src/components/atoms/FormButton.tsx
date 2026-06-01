import Button from "@mui/material/Button";

type FormButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function FormButton({
  children,
  type = "button",
  disabled = false,
}: FormButtonProps) {
  return (
    <Button variant="contained" type={type} disabled={disabled}>
      {children}
    </Button>
  );
}
