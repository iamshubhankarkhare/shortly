import React, { useState } from 'react';
import { Flex, Button, H1, H2 } from './styledComponents';
import Image from '../assests/illustration-working.svg';

function HeroBlock() {
  return (
    <Flex
      my="10vh"
      ml={[4, '10vw']}
      mr={[4, '0']}
      justifyContent="space-between"
      alignItems="center"
      flexDirection={['column-reverse', 'row']}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        width={['100%', '50%']}
      >
        <H1
          fontWeight="700"
          fontSize={['3rem', '4rem']}
          my={[4, 0]}
          lineHeight="1.25"
          textAlign={['center', 'left']}
        >
          More than just shorter links
        </H1>
        <H2
          fontWeight="400"
          fontSize={['1.5rem', '2rem']}
          my={[0, 4]}
          lineHeight="1.25"
          textAlign={['center', 'left']}
          color="neutral.gray"
        >
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </H2>
        <Flex justifyContent={['center', 'flex-start']}>
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
      <Flex width={['100%', '50%']} justifyContent="flex-end">
        <img
          src={`${Image}`}
          alt="svg"
          style={{
            maxWidth: `${window.innerWidth > 768 ? '600px' : '350px'}`,
          }}
        />
      </Flex>
    </Flex>
  );
}

export default HeroBlock;
