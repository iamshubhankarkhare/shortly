import React, { useState } from 'react';
import bgShortenDesktop from '../assests/bg-shorten-desktop.svg';
import { Flex, Link, Button, H1, Input } from './styledComponents';

function InputBlock() {
  return (
    <Flex bg="#EFF1F7">
      <Flex
        flexDirection={['column', 'row']}
        justifyContent="space-around"
        alignItems="center"
        bg="primary.darkViolet"
        backgroundImage={`url(${bgShortenDesktop})`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        mx={[4, '10vw']}
        p="5vh"
        width="100%"
        borderRadius="10px"
        style={{ transform: 'translateY(-50%)' }}
      >
        <Input
          border="none"
          borderRadius="10px"
          fontSize="24px"
          px={[0, '20px']}
          py="15px"
          mx="4"
          width="100%"
          color="secondary.red"
          placeholder="Shorten a link here..."
        />

        <Button
          fontWeight="700"
          bg="primary.cyan"
          color="white"
          borderRadius="10px"
          border="none"
          fontSize="24px"
          mt={[4, 0]}
          mx="4"
          py="15px"
          width={['100%', '20vw']}
        >
          Shorten it!
        </Button>
      </Flex>
    </Flex>
  );
}

export default InputBlock;
