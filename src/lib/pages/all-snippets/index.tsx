/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import {
  Box,
  Heading,
  Text,
  Badge,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineDelete } from "react-icons/ai";

import type { SnippetProps } from "pages/snippets";

const AllSnippets = ({ snippets }: { snippets: SnippetProps[] }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { colorMode } = useColorMode();
  if (status === "unauthenticated") {
    router.push("/");
  }

  if (status === "loading") {
    return (
      <Box display="grid" placeContent="center" height="80vh">
        <Text>Loading...</Text>
      </Box>
    );
  }
  return (
    <Box minHeight="80vh" gap={8} my={8}>
      <Box
        display={{ base: "flex" }}
        flexDirection={{ base: "row" }}
        justifyContent={{ base: "space-between" }}
        alignItems="center"
        alignContent="center"
        w="full"
      >
        <Box>
          <Heading as="h1" size="md" w="100%" mt={4}>
            Your snippets
          </Heading>
        </Box>

        <Box>
          <Badge colorScheme="green" mt={6} py={1} px={2} borderRadius={5}>
            {snippets.length} in total
          </Badge>
        </Box>
      </Box>

      <Box w="full" mt={8} display={{ base: "flex" }} flexDirection="column">
        {snippets.length !== 0 ? (
          snippets.map((snippet: SnippetProps) => (
            <Box
              key={snippet.id}
              display={{ base: "flex" }}
              flexDirection="row"
              justifyContent="space-around"
              alignItems="center"
              w="full"
              borderRadius={10}
              p={4}
              mt={4}
              bg={colorMode === "light" ? "gray.100" : "gray.900"}
              transition="all 0.2s"
              _hover={{
                transform: "scale(1.035)",
                boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Link href={`/snippets/${snippet.id}`} passHref>
                <Box width="70%" cursor="pointer">
                  <Heading size="sm">{snippet.title}</Heading>
                </Box>
              </Link>

              <Box
                zIndex={10}
                alignSelf="end"
                alignItems="flex-end"
                cursor="pointer"
              >
                {/* <Button
                  borderRadius={5}
                  bg={colorMode === "light" ? "gray.300" : "gray.800"}
                >
                  <AiOutlineDelete />
                </Button> */}
              </Box>
            </Box>
          ))
        ) : (
          <Box display="grid" placeContent="center" height="45vh">
            <Text>You don&apos;t have any snippets yet.</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AllSnippets;
