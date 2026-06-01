import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  userRegistrationSchema,
  type UserRegistrationFormData,
} from "../schemas/userSchema";
import { userStore } from "../stores/userStore";

export function UserRegistrationForm() {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UserRegistrationFormData>({
    resolver: zodResolver(userRegistrationSchema),
    defaultValues: {
      nombre: "",
      email: "",
    },
  });

  const onSubmit = (data: UserRegistrationFormData) => {
    userStore.addUser(data.nombre, data.email);
    reset();
    toast({
      title: "Usuario registrado",
      description: `${data.nombre} se agregó correctamente.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} p={6} borderWidth={1} borderRadius="md" shadow="sm">
      <Stack spacing={4}>
        <FormControl isInvalid={Boolean(errors.nombre)}>
          <FormLabel htmlFor="nombre">Nombre</FormLabel>
          <Input id="nombre" placeholder="Ej: Ana García" {...register("nombre")} />
          <FormErrorMessage>{errors.nombre?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={Boolean(errors.email)}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="Ej: ana@correo.com"
            {...register("email")}
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <Button type="submit" colorScheme="blue" isLoading={isSubmitting}>
          Registrar usuario
        </Button>
      </Stack>
    </Box>
  );
}
