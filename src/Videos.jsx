import { Stack, VStack, Heading, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
  const videosArr = [
    {
      src: 'https://assets.mixkit.co/videos/preview/mixkit-waterfall-in-forest-2213-large.mp4',
      heading: 'Sample video 1',
    },
    {
      src: 'https://assets.mixkit.co/videos/preview/mixkit-curvy-road-on-a-tree-covered-hill-41537-large.mp4',
      heading: 'Sample video 2',
    },
    {
      src: 'https://assets.mixkit.co/videos/preview/mixkit-white-sand-beach-background-1564-large.mp4',
      heading: 'Sample video 3',
    },
    {
      src: 'https://assets.mixkit.co/videos/preview/mixkit-dog-catches-a-ball-in-a-river-1494-large.mp4',
      heading: 'Sample video 4',
    },
    {
      src: 'https://assets.mixkit.co/videos/preview/mixkit-little-dog-running-in-snow-in-slow-motion-25225-large.mp4',
      heading: 'Sample video 5',
    },
  ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'} overflowY={'auto'}>
      <VStack w={'full'}>
        <video
        autoPlay
          controls
          controlsList="nodownload"
          src={videoSrc.src}
          style={{ width: '100%' }}
        ></video>

        <VStack alignItems={'flex-start'} p={'8'} w={'full'}>
          <Heading>{videoSrc.heading}</Heading>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
            omnis?
          </Text>
        </VStack>
      </VStack>

      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        spacing={'8'}
        overflowY={'auto'}
      >
        {videosArr.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme="purple"
            onClick={() => setVideoSrc(item)}
          >
            Video {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
