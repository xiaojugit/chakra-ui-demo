import { Box } from '@chakra-ui/layout';

function ErrorMessage(props) {
  return (
    <Box
      pos="absolute"
      top="2px"
      left="calc(100% + 5px)"
      p="5px 10px"
      whiteSpace="nowrap"
      border="1px solid #ea6f5a"
      bgColor="white"
      color="#ea6f5a"
      borderRadius="base"
    >
      <Box
        pos="absolute"
        top="40%"
        left="-10px"
        border="5px solid transparent"
        borderRightColor="#ea6f5a"
      ></Box>
      {props.message}
    </Box>
  );
}

export default ErrorMessage;
