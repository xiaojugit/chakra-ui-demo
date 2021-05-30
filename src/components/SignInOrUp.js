import { Route, Link, useLocation } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/layout';
import { Tab, TabList, /* TabPanel, TabPanels, */ Tabs } from '@chakra-ui/tabs';
import SignIn from './SignIn';
import SignUp from './SignUp';

function SignInOrUp() {
  let location = useLocation();
  return (
    <Flex h="100vh" bgColor="#f1f1f1">
      <Box h="580px" m="auto">
        <Box
          w="400px"
          p="50px 50px 30px"
          shadow="lg"
          bgColor="white"
          borderRadius="base"
        >
          <Tabs
            align="center"
            defaultIndex={location.pathname === '/sign-up' ? 1 : 0}
            colorScheme="orange"
            color="#969696"
          >
            <TabList alignItems="center" mb="50px" borderBottom="none">
              <Link to="/sign-in">
                <Tab
                  fontSize="18px"
                  fontWeight="600"
                  _focus={{ boxShadow: 'none' }}
                  _active={{ bgColor: 'none' }}
                >
                  登录
                </Tab>
              </Link>
              <b p="10px">·</b>
              <Link to="/sign-up">
                <Tab
                  fontSize="18px"
                  fontWeight="600"
                  _focus={{ boxShadow: 'none' }}
                  _active={{ bgColor: 'none' }}
                >
                  注册
                </Tab>
              </Link>
            </TabList>
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            {/* <TabPanels>
              <TabPanel p="0">
                <Route path="/sign-in" component={SignIn} />
              </TabPanel>
              <TabPanel p="0">
                <Route path="/sign-up" component={SignUp} />
              </TabPanel>
            </TabPanels> */}
          </Tabs>
        </Box>
      </Box>
    </Flex>
  );
}

export default SignInOrUp;
