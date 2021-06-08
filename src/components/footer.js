import React, { useState } from 'react';
import { Flex, Button, H1, FooterLink } from './styledComponents';
import Logo from '../assests/logo.svg';

function Footer() {
  const col1 = [
    { text: 'Link shortening', link: '#' },
    { text: 'Branded Links', link: '#' },
    { text: 'Analytics', link: '#' },
  ];
  const col2 = [
    { text: 'Blog', link: '#' },
    { text: 'Developer', link: '#' },
    { text: 'Support', link: '#' },
  ];
  const col3 = [
    { text: 'About', link: '#' },
    { text: 'Our team', link: '#' },
    { text: 'Careers', link: '#' },
    { text: 'Contact', link: '#' },
  ];

  return (
    <Flex bg="neutral.veryDarkViolet" p="4" justifyContent="space-around">
      <Flex flexDirection="column" my="4">
        <img src={`${Logo}`} alt="Shortly logo" />
      </Flex>
      <Flex width={['100%', '50%']} justifyContent="space-around">
        <Flex flexDirection="column">
          <FooterLink fontWeight="700" color="white" fontSize="20px">
            Features
          </FooterLink>
          {col1.map((el, i) => (
            <FooterLink
              fontWeight="400"
              color="neutral.gray"
              key={i}
              href={el.link}
            >
              {el.text}
            </FooterLink>
          ))}
        </Flex>
        <Flex flexDirection="column">
          <FooterLink fontWeight="700" color="white" fontSize="20px">
            Resources
          </FooterLink>
          {col2.map((el, i) => (
            <FooterLink
              fontWeight="400"
              color="neutral.gray"
              key={i}
              href={el.link}
            >
              {el.text}
            </FooterLink>
          ))}
        </Flex>
        <Flex flexDirection="column">
          <FooterLink fontWeight="700" color="white" fontSize="20px">
            Company
          </FooterLink>
          {col3.map((el, i) => (
            <FooterLink
              fontWeight="400"
              color="neutral.gray"
              key={i}
              href={el.link}
            >
              {el.text}
            </FooterLink>
          ))}
        </Flex>
      </Flex>
      <Flex flexDirection="column">Icons</Flex>
    </Flex>
  );
}

export default Footer;
