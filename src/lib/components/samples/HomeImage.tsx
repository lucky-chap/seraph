import { Box, Flex, useColorMode } from "@chakra-ui/react";
// import Image from "next/image";

// import MotionBox from "lib/components/motion/Box";

import HelperImage from "./HelperImage";

const HomeImage = () => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      {/* <MotionBox
        animate={{ y: 20, scale: 0.97 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        marginY={8}
        maxWidth={[240, 320]}
        marginX="auto"
      >
        <Image
          src="/coding-coffee.jpg"
          width={400}
          height={400}
          priority
          alt="Launching Illustration"
        />
      </MotionBox> */}
      {/* <Text textAlign="center" fontSize="xs">
        <Link
          href="https://www.freepik.com/stories
          isExternal
          rel="noopener noreferrer"
        >
          Illustration by Freepik Stories
        </Link>
      </Text> */}

      <Flex marginY={4} justifyContent="start">
        <HelperImage src={`/nextjs-icon-${colorMode}.svg`} label="NextJS" />
        <HelperImage src="/chakra-ui-logomark-colored.svg" label="Chakra UI" />
        <HelperImage src="/ts-logo-512.svg" label="TypeScript" />
      </Flex>
    </Box>
  );
};

export default HomeImage;
