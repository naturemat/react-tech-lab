import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import { PageTitle } from "@repo/ui";
import { UserRegistrationForm } from "./components/UserRegistrationForm";
import { UserList } from "./components/UserList";

export default function App() {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box>
          <PageTitle>Gestión de Usuarios</PageTitle>
          <Heading as="h2" size="md" color="gray.600">
            Registro y listado con MobX
          </Heading>
        </Box>
        <UserRegistrationForm />
        <UserList />
      </VStack>
    </Container>
  );
}
