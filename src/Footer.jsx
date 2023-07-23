import {
  Box,
  Stack,
  VStack,
  Heading,
  HStack,
  Button,
  Input,
  Text
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
            Subscribe to get update
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter your email..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />

            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
          mt={['10','0']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            Gaming Funda
          </Heading>
          <Text>
            All rights reserved
          </Text>
        </VStack>

        <VStack w={'full'} mt={['10','0']}>
          <Heading size={'md'} textTransform={"uppercase"}>Social Handle</Heading>
          <Button variant={'link'} colorScheme='blue'>
            <a href="https://twitter.com/Anand_FitDev">Twitter</a>
          </Button>

          <Button variant={'link'} colorScheme='blue'>
            <a href="https://www.instagram.com/anand_fitdev/">Instagram</a>
          </Button>
          
          <Button variant={'link'} colorScheme='blue'>
            <a href="https://anandfitdev.netlify.app/">MyWebsite</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
