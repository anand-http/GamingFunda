import {
  Container,
  VStack,
  Input,
  Heading,
  Button,
  Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';

const Login = () => {
  return (
    <Container maxW={'conainer.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full','96']}
          m={'auto'}
          my={'16'}
        >
          <Heading textAlign={'center'}>Welcome Back</Heading>
          <Input
            placeholder="Email"
            type="email"
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="password"
            type="password"
            required
            focusBorderColor="purple.500"
          />

          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to="/forgetpass">Forget Password?</Link>
          </Button>

          <Button colorScheme="purple" type="submit">
            Login
          </Button>

          <Text textAlign={'right'}>
            New user?{" "}
            <Button variant={'link'} colorScheme="purple">
              <Link to="/signup"> SignUp</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
