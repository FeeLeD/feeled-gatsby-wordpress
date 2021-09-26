import React, { FC } from "react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Link,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

type Props = {
  title: string;
  items: Array<{
    label: string;
    url: string;
  }>;
};

const HeaderMenuItem: FC<Props> = ({ title, items = [] }) => {
  return (
    <Box>
      <Menu >
        {({ isOpen }) => (
          <>
            <MenuButton
              w="150px"
              as={Button}
              rightIcon={
                <ChevronDownIcon
                  boxSize="18px"
                  transition="ease-in-out 0.2s"
                  transform={`rotate(${isOpen ? 180 : 0}deg)`}
                />
              }
              children={title}
            />

            <MenuList bg="winter.85" py="24px" borderColor="winter.90">
              {items.map((item, i) => (
                <Link
                  key={i}
                  href={item.url}
                  color="white"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  <MenuItem
                    px="24px"
                    _active={{ bg: "winter.85" }}
                    _focus={{ bg: "winter.90" }}
                    _hover={{ bg: "winter.90" }}
                  >
                    {item.label}
                  </MenuItem>
                </Link>
              ))}
            </MenuList>
          </>
        )}
      </Menu>
    </Box>
  );
};

export default HeaderMenuItem;
