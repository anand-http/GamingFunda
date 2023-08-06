import React from 'react';
import { Box, Image, Heading, Container, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Pic1 from './assets/1.jpg';
import Pic2 from './assets/2.jpg';
import Pic3 from './assets/3.jpg';
import Pic4 from './assets/4.jpg';
import Pic5 from './assets/5.png';

const HeadingOption = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '3xl',
  bgColor: 'blackAlpha.600',
  color: 'white',
};

const img={
  h:"full",
  w:"full",
  objectFit:"cover"
}

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container minH={'100vh'} p={['6','16']} maxW={'container.xl'}>
        <Heading
          textTransform={'uppercase'}
          p={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={Pic5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text letterSpacing={"widest"} lineHeight={"190%"} p={["0","16"]} textAlign={"justify"} >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            quibusdam iure autem nihil eveniet aliquam vel qui commodi non
            tenetur cupiditate ipsum maxime odio, voluptatum, odit
            reprehenderit? Animi fugiat, voluptatibus expedita facilis dolores
            voluptates voluptas distinctio obcaecati in repellat blanditiis quos
            amet ullam.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w={'full'} h={'100vh'}>
        <Image {...img} src={Pic1} />
        <Heading {...HeadingOption}>Watch the Future</Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image {...img} src={Pic2} />
        <Heading {...HeadingOption}>Future is Gaming</Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image {...img} src={Pic3} />
        <Heading {...HeadingOption}>Gaming on Console</Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image {...img} src={Pic4} />
        <Heading {...HeadingOption}>Night Life is Cool</Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
