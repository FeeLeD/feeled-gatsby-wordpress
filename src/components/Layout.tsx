import React, { FC } from "react";
import { Box, Flex } from "@chakra-ui/react";
import HeaderMenu from "./HeaderMenu";
import Header from "./Header";
import Footer from "./Footer";

const Layout: FC = ({ children }) => {
  return (
    <Flex minH="100vh" flexDir="column">
      <Box w="1150px" mx="auto">
        <header>
          <Header />

          <HeaderMenu />
        </header>
      </Box>

      <Box flex={1} w="1150px" mx="auto" my="44px">
        <main>{children}</main>
      </Box>

      <footer>
        <Footer />
      </footer>
    </Flex>
  );
};

export default Layout;
