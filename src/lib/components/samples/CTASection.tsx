/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Flex } from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const repoLink = "https://github.com/lucky-chap/seraph";

const CTASection = () => {
  const { data: session, status } = useSession();
  return (
    <Box textAlign={{ base: "center", md: "left" }} marginTop={8}>
      <Flex
        marginY={4}
        justifyContent={{ base: "center", md: "left" }}
        gridGap={2}
        flexDirection={{ base: "column", sm: "row" }}
      >
        {!session?.user ? (
          <>
            <Button
              onClick={() => signIn("google", { callbackUrl: "/snippets" })}
              leftIcon={<FcGoogle />}
              isLoading={status === "loading"}
              disabled={status === "loading"}
              size="sm"
              px={3}
            >
              Continue with Google
            </Button>
            <Button
              onClick={() => signIn("github", { callbackUrl: "/snippets" })}
              leftIcon={<AiFillGithub />}
              isLoading={status === "loading"}
              disabled={status === "loading"}
              size="sm"
              px={3}
            >
              Sign in with GitHub
            </Button>
          </>
        ) : (
          <>
            <Link href="/snippets" passHref>
              <Button size="sm" px={3}>
                My Snippets
              </Button>
            </Link>
            <Link href="/create-snippet" passHref>
              <Button size="sm" px={3}>
                Create Snippet
              </Button>
            </Link>
          </>
        )}
      </Flex>

      <Flex
        justifyContent={{ base: "center", md: "left" }}
        alignItems="center"
        gridGap={2}
      >
        <Button
          as="a"
          href={repoLink}
          target="_blank"
          leftIcon={<AiFillGithub />}
          size="sm"
          mt={3}
        >
          Source Code
        </Button>
        {/* <Link href={repoLink} isExternal rel="noopener noreferrer">
          <Image
            align="center"
            src="https://img.shields.io/github/stars/sozonome/seraph?style=social"
            alt="github stars"
          />
        </Link> */}
      </Flex>
    </Box>
  );
};

export default CTASection;
