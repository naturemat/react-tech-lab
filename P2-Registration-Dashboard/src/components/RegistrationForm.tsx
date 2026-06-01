import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import FormTextField from "./atoms/FormTextField";
import BasicBox from "./atoms/BasicBox";
import FormButton from "./atoms/FormButton";
import { Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { registerUser } from "../features/user/userSlice";

type FormValues = {
  name: string;
  email: string;
};

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const users = useSelector((state: RootState) => state.user.users);

  return (
    <BasicBox>
      <Typography variant="h5">Registration Dashboard</Typography>

      <BasicBox>
        <Formik<FormValues>
          initialValues={{ name: "", email: "" }}
          onSubmit={(values, { resetForm }) => {
            dispatch(registerUser(values));
            resetForm();
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <FormTextField name="name" label="Name" type="text" />
              <FormTextField name="email" label="Email" type="email" />
              <div style={{ marginTop: "16px" }}>
                <FormButton type="submit">Register</FormButton>
              </div>
            </Form>
          )}
        </Formik>
      </BasicBox>
      <BasicBox>
        <Typography variant="h6">Users</Typography>
        {users.map((user, i) => {
          return (
            <Typography key={i}>
              {user.name} - {user.email}
            </Typography>
          );
        })}
      </BasicBox>
    </BasicBox>
  );
}
