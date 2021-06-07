import React, { useState } from 'react';
import { Flex, Link, Button, H1 } from './styledComponents';
import bgBoostDesktop from '../assests/bg-boost-desktop.svg';

function CtaBlock() {
  console.log(bgBoostDesktop);
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg="primary.darkViolet"
      backgroundImage={`url(${bgBoostDesktop})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      py="4"
    >
      <H1 fontWeight="700" fontSize="4rem" my="0" color="white" my="4">
        Boost your links today
      </H1>
      <Button
        fontWeight="700"
        bg="primary.cyan"
        color="white"
        borderRadius="30px"
        border="none"
        fontSize="24px"
        py="15px"
        mb="4"
      >
        Get Started
      </Button>
    </Flex>
  );
}

export default CtaBlock;
