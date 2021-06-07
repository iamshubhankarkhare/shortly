import React, { useState } from 'react';
import { Flex, Button, H1, H2 } from './styledComponents';
import Image from '../assests/illustration-working.svg';

function HeroBlock() {
  return (
    <Flex
      ml="10vw"
      my="10vh"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="column" justifyContent="center" width="50%">
        <H1 fontWeight="700" fontSize="4rem" my="0">
          More than just shorter links
        </H1>
        <H2 fontWeight="400" fontSize="2rem" my="0" color="neutral.gray">
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </H2>
        <Flex>
          <Button
            bg="primary.cyan"
            color="white"
            borderRadius="30px"
            border="none"
            fontSize="24px"
            my="4"
            fontWeight="700"
            py="15px"
          >
            Get Started
          </Button>
        </Flex>
      </Flex>
      <img src={`${Image}`} alt="svg" />
    </Flex>
  );
}

export default HeroBlock;
