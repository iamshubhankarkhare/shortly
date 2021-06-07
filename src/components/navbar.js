import React, { useState } from 'react';
import { Flex, Link, Button } from './styledComponents';
import Logo from '../assests/logo.svg';

function Navbar() {
  const links = [
    { text: 'Features', link: '#' },
    { text: 'Pricing', link: '#' },
    { text: 'Resources', link: '#' },
  ];
  const cta = ['Login', 'Sign Up'];
  return (
    <Flex
      mx="10vw"
      my="5vh"
      justifyContent="space-between"
      alignItems="center"
      display={['none', 'flex']}
    >
      <Flex alignItems="center">
        <img src={`${Logo}`} alt="Shortly logo" />
        {links.map((link, i) => (
          <Link
            mx="4"
            fontWeight="700"
            color="neutral.gray"
            href={link.link}
            key={i}
          >
            {link.text}
          </Link>
        ))}
      </Flex>
      <Flex alignItems="center">
        {cta.map((el, i) => (
          <Button
            bg="transparent"
            borderRadius="20px"
            border="none"
            fontSize="18px"
            key={i}
          >
            {el}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
}

export default Navbar;
