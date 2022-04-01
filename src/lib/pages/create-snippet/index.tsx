import { Box, Heading, Input } from "@chakra-ui/react";
// import { useRouter } from "next/router";
// import { useCallback, useState } from "react";

import UploadBox from "../../components/upload-box/Upload";
// import { Prism } from "@mantine/prism";

const CreateSnippet = () => {
  // const toast = useToast();
  // const router = useRouter();

  return (
    <Box minHeight="70vh" gap={8} my={8}>
      <Box
        display={{ base: "flex" }}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ base: "normal", md: "space-between" }}
        w="full"
      >
        <Heading as="h1" size="md" w="100%" mt={4}>
          Create Snippet
        </Heading>

        <Input
          w="100%"
          variant="filled"
          placeholder="Name the snippet"
          mt={4}
        />
      </Box>

      <Box w="full" mt={8}>
        <UploadBox />
      </Box>

      <Box w="full" mt={12}>
        {/* <Prism>

        </Prism> */}
      </Box>
    </Box>
  );
};

export default CreateSnippet;
