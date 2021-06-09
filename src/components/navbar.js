import React, { useState } from 'react';
import { Flex, Link, Button } from './styledComponents';
import Logo from '../assests/logo.svg';

function Navbar() {
  const [isOpen, setIsopen] = useState(false);
  const links = [
    { text: 'Features', link: '#' },
    { text: 'Pricing', link: '#' },
    { text: 'Resources', link: '#' },
  ];
  const cta = ['Login', 'Sign Up'];
  return (
    <>
      <Flex
        mx="10vw"
        mt="5vh"
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
      <Flex
        justifyContent="space-between"
        alignItems="center"
        mx="4"
        display={['flex', 'none']}
      >
        <img src={`${Logo}`} alt="Shortly logo" />
        <Flex flexDirection="column" my="4" onClick={() => setIsopen(!isOpen)}>
          {[1, 2, 3].map((el) => (
            <div
              key={el}
              style={{
                width: '35px',
                height: '5px',
                backgroundColor: 'gray',
                margin: '3px 0',
              }}
            ></div>
          ))}
        </Flex>
      </Flex>
      {isOpen && (
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg="primary.darkViolet"
          borderRadius="10px"
          p="4"
          width="60vw"
          style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translate(-50%, 0)',
          }}
        >
          {links.map((link, i) => (
            <Link
              fontWeight="700"
              color="white"
              href={link.link}
              key={i}
              fontSize="24px"
              my="4"
            >
              {link.text}
            </Link>
          ))}
          <hr
            style={{
              width: '100%',
              opacity: '0.2',
            }}
          />
          {cta.map((el, i) => (
            <Button
              bg="transparent"
              color="white"
              fontWeight="700"
              fontSize="24px"
              borderRadius="20px"
              border="none"
              key={i}
              width="100%"
            >
              {el}
            </Button>
          ))}
        </Flex>
      )}
    </>
  );
}

export default Navbar;
