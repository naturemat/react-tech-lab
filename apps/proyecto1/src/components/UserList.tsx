import {
  Badge,
  Box,
  Heading,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { userStore } from "../stores/userStore";

export const UserList = observer(function UserList() {
  return (
    <Box p={6} borderWidth={1} borderRadius="md" shadow="sm">
      <Heading as="h3" size="md" mb={4}>
        Usuarios registrados{" "}
        <Badge colorScheme="blue" ml={2}>
          {userStore.userCount}
        </Badge>
      </Heading>

      {userStore.users.length === 0 ? (
        <Text color="gray.500">Aún no hay usuarios registrados.</Text>
      ) : (
        <List spacing={3}>
          {userStore.users.map((user) => (
            <ListItem
              key={user.id}
              p={3}
              borderWidth={1}
              borderRadius="md"
              bg="gray.50"
            >
              <VStack align="start" spacing={0}>
                <Text fontWeight="semibold">{user.nombre}</Text>
                <Text fontSize="sm" color="gray.600">
                  {user.email}
                </Text>
              </VStack>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
});
