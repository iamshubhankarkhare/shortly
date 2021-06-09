import React, { useState } from 'react';
import { Flex, P, Button, H2, Input } from './styledComponents';

function LinkBanner({ originalLink, fullLink }) {
  return (
    <Flex
      my="20px"
      alignItems="center"
      justifyContent="space-between"
      py="15px"
      bg="white"
      flexDirection={['column', 'row']}
    >
      <H2
        color="neutral.veryDarkViolet"
        mx={[0, 4]}
        fontSize="24px"
        textAlign={['center', 'left']}
        maxWidth={['70vw', '30vw']}
        style={{ overflowWrap: 'break-word' }}
      >
        {originalLink}
      </H2>
      <Flex
        flexDirection={['column', 'row']}
        alignItems="center"
        justifyContent="space-between"
        width={['80%', '50%']}
        px="4"
        borderColor="neutral.gray"
        border={['thin', 'none']}
        borderStyle={['solid none none none', 'none']}
      >
        <H2
          mx={[0, 4]}
          fontSize="24px"
          color="primary.cyan"
          textAlign={['center', 'left']}
          maxWidth={['70vw', '30vw']}
          style={{ overflowWrap: 'break-word' }}
        >
          {fullLink}
        </H2>
        <Button
          bg="primary.cyan"
          color="white"
          borderRadius="10px"
          border="none"
          fontSize="18px"
          fontWeight="700"
          py="15px"
          mx="4"
          width={['80%', '10vw']}
        >
          Copy
        </Button>
      </Flex>
    </Flex>
  );
}

export default LinkBanner;
