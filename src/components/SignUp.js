import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from '@chakra-ui/react';
import { FaLock, FaMobileAlt, FaUserAlt } from 'react-icons/fa';
import { AiOutlineQq, AiOutlineWechat } from 'react-icons/ai';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from './ErrorMessage';
import axios from 'axios';

function SignUp() {
  const formik = useFormik({
    initialValues: { username: '', email: '', password: '' },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(10, '昵称不能多于10个字符')
        .min(2, '昵称不能少于2个字符')
        .required('请填写用户名'),
      email: Yup.string().email('邮箱格式不对').required('请填写邮箱'),
      password: Yup.string()
        .max(20, '密码的长度不能多于20个字符')
        .min(6, '密码的长度不能少于6个字符')
        .required('请填写密码'),
    }),
    onSubmit: values => {
      axios({
        url: 'https://conduit.productionready.io/api/users',
        method: 'POST',
        data: {
          user: {
            username: values.username,
            email: values.email,
            password: values.password,
          },
        },
      }).then(() => {
        window.alert('注册成功！');
      });
    },
  });
  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Box
          border="1px solid #c8c8c8"
          borderRadius="md"
          bgColor="rgba(181,181,181,.1)"
        >
          <InputGroup>
            <InputLeftAddon
              borderRadius="none"
              border="none"
              bgColor="transparent"
            >
              <FaUserAlt />
            </InputLeftAddon>
            <Input
              name="username"
              {...formik.getFieldProps('username')}
              borderRadius="none"
              border="none"
              shadow="none"
              placeholder="你的用户名"
              _focus={{
                border: 'none',
              }}
              _placeholder={{
                color: '#999',
              }}
            ></Input>
            {formik.touched.username && formik.errors.username ? (
              <ErrorMessage message={formik.errors.username}></ErrorMessage>
            ) : null}
          </InputGroup>
          <Divider opacity="1"></Divider>
          <InputGroup>
            <InputLeftAddon
              borderRadius="none"
              border="none"
              bgColor="transparent"
            >
              <FaMobileAlt />
            </InputLeftAddon>
            <Input
              name="email"
              {...formik.getFieldProps('email')}
              borderRadius="none"
              border="none"
              shadow="none"
              focusBorderColor="tranparent"
              placeholder="邮箱"
              _placeholder={{
                color: '#999',
              }}
            ></Input>
            {formik.touched.email && formik.errors.email ? (
              <ErrorMessage message={formik.errors.email}></ErrorMessage>
            ) : null}
          </InputGroup>
          <Divider opacity="1"></Divider>
          <InputGroup>
            <InputLeftAddon
              borderRadius="none"
              border="none"
              bgColor="transparent"
            >
              <FaLock />
            </InputLeftAddon>
            <Input
              type="password"
              name="password"
              {...formik.getFieldProps('password')}
              borderRadius="none"
              border="none"
              shadow="none"
              focusBorderColor="tranparent"
              placeholder="设置密码"
              _placeholder={{
                color: '#999',
              }}
            ></Input>
            {formik.touched.password && formik.errors.password ? (
              <ErrorMessage message={formik.errors.password}></ErrorMessage>
            ) : null}
          </InputGroup>
        </Box>

        <Button
          type="submit"
          w="100%"
          mt="20px"
          colorScheme="green"
          borderRadius="full"
          _focus={{ boxShadow: 'none' }}
        >
          注册
        </Button>

        <Text m="10px 0" fontSize="12px" lineHeight="20px" color="#969696">
          点击 “注册” 即表示您同意并愿意遵守简书
          <br />
          <Text
            as="a"
            target="_blank"
            color="#3194d0"
            href="#"
            rel="noreferrer"
          >
            用户协议
          </Text>{' '}
          和
          <Text
            as="a"
            target="_blank"
            color="#3194d0"
            href="#"
            rel="noreferrer"
          >
            隐私政策
          </Text>{' '}
          。
        </Text>
      </form>
      <Box mt="50px">
        <Flex alignItems="center" px="6" mb="10px">
          <Divider borderColor="#b5b5b5" opacity="1"></Divider>
          <Text whiteSpace="nowrap" px="2" color="#b5b5b5" fontSize="12px">
            社交帐号登录
          </Text>
          <Divider borderColor="#b5b5b5" opacity="1"></Divider>
        </Flex>
        <Flex justifyContent="center">
          <Box as="a" href="#" m="15px">
            <AiOutlineWechat size="36" color="#00bb29" />
          </Box>
          <Box as="a" href="#" m="15px">
            <AiOutlineQq size="36" color="#498ad5" />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default SignUp;
