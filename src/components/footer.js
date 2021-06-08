import React, { useState } from 'react';
import { Flex, Button, H1, FooterLink, Icon } from './styledComponents';
import Logo from '../assests/logo.svg';
import IconInstagram from '../assests/icon-instagram.svg';
import IconPinterest from '../assests/icon-pinterest.svg';
import IconFacebook from '../assests/icon-facebook.svg';
import IconTwitter from '../assests/icon-twitter.svg';

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

  const icons = [IconFacebook, IconTwitter, IconPinterest, IconInstagram];

  return (
    <Flex
      bg="neutral.veryDarkViolet"
      px={[4, '10vw']}
      py="4"
      justifyContent="space-between"
      flexDirection={['column', 'row']}
    >
      <Flex
        flexDirection="column"
        my={[0, 4]}
        justifyContent={['center', 'flex-start']}
        alignItems={['center', 'flex-start']}
      >
        <img src={`${Logo}`} alt="Shortly logo" />
      </Flex>
      <Flex
        width={['100%', '50%']}
        justifyContent="space-around"
        flexDirection={['column', 'row']}
        alignItems={['center', 'flex-start']}
      >
        <Flex
          flexDirection="column"
          alignItems={['center', 'flex-start']}
          my={[4, 0]}
        >
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
        <Flex
          flexDirection="column"
          alignItems={['center', 'flex-start']}
          my={[4, 0]}
        >
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
        <Flex
          flexDirection="column"
          alignItems={['center', 'flex-start']}
          my={[4, 0]}
        >
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
      <Flex alignItems="flex-start" my="4">
        {icons.map((el, i) => (
          <Icon src={`${el}`} alt="icons" mx="4" />
        ))}
      </Flex>
    </Flex>
  );
}

export default Footer;
