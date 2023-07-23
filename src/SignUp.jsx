import React from 'react';
import { Container,Heading,VStack,Input,Text,Button ,Avatar} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

const SignUp = () => {
  return (
    <Container maxW={'conainer.xl'} h={'100vh'} p={'10'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full','96']}
          m={'auto'}
          my={'16'}
        >
          <Heading textAlign={'center'}>Gaming Funda</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'}></Avatar>
          <Input
            placeholder="Name"
            type="text"
            required
            focusBorderColor="purple.500"
          />
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

        

          <Button colorScheme="purple" type="submit">
            SignUp
          </Button>

          <Text textAlign={'right'}>
            Already a user?{" "}
            <Button variant={'link'} colorScheme="purple">
              <Link to="/login"> Login</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  )
}

export default SignUp;