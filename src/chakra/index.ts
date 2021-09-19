import { extendTheme } from "@chakra-ui/react";
import global from "./global";
import colors from "./colors";
import fontSizes from "./fontSizes";
import Button from "./components/button";

export default extendTheme({
  styles: { global },
  colors,
  fontSizes,
  components: {
    Button,
  },
});
