import React, { FC } from "react";
import { Button, HStack, Link } from "@chakra-ui/react";
import HeaderMenuItem from "./HeaderMenuItem";
import { graphql, useStaticQuery } from "gatsby";

const HeaderMenu: FC = () => {
  const {
    allWpMenu: { menus },
  } = useStaticQuery<{
    allWpMenu: {
      menus: Array<{
        menu: {
          id: string;
          name: string;
          menuItems: {
            nodes: Array<{
              label: string;
              url: string;
            }>;
          };
        };
      }>;
    };
  }>(graphql`
    query allMenyQuery {
      allWpMenu(sort: { fields: locations }) {
        menus: edges {
          menu: node {
            id
            name
            menuItems {
              nodes {
                label
                url
              }
            }
          }
        }
      }
    }
  `);

  return (
    <HStack p="18px" borderRadius="8px" bg="white" justify="space-around">
      <Link tabIndex={-1} href="/" _hover={{ textDecor: "none" }}>
        <Button w="150px" children="Новости" />
      </Link>

      {menus.map(menu => (
        <HeaderMenuItem
          key={menu.menu.id}
          title={menu.menu.name}
          items={menu.menu.menuItems.nodes}
        />
      ))}
    </HStack>
  );
};

export default HeaderMenu;
