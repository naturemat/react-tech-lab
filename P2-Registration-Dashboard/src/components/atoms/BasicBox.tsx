import Box from "@mui/material/Box";

type FormBoxProps = {
  children: React.ReactNode;
};

export default function BasicBox({ children }: FormBoxProps) {
  return (
    <Box component="section" sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      {children}
    </Box>
  );
}
