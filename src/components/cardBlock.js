import React, { useState } from 'react';
import { Flex, Box, Button, H2, H1, P, Icon } from './styledComponents';
import Icon1 from '../assests/icon-fully-customizable.svg';
import Icon2 from '../assests/icon-detailed-records.svg';
import Icon3 from '../assests/icon-brand-recognition.svg';

const cardData = [
  {
    title: 'Brand Recognition',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: Icon1,
  },
  {
    title: 'Detailed Records',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: Icon2,
  },
  {
    title: 'Fully Customizable',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: Icon3,
  },
];
const Card = ({ icon, title, body, ...props }) => {
  return (
    <Flex
      flexDirection="column"
      bg="white"
      p="4"
      mx={[0, 4]}
      my={[4, 0]}
      justifyContent={['center', 'flex-start']}
      alignItems={['center', 'flex-start']}
      {...props}
    >
      <Flex
        bg="primary.darkViolet"
        justifyContent="center"
        alignItems="center"
        width="100px"
        height="100px"
        borderRadius="50%"
        style={{ transform: 'translateY(-80%)' }}
      >
        <Icon src={`${icon}`} alt="icons" mx="4" />
      </Flex>
      <H2
        my="0"
        fontSize="2rem"
        color="neutral.veryDarkBlue"
        textAlign={['center', 'left']}
      >
        {title}
      </H2>
      <P
        color="neutral.greyishViolet"
        fontWeight="400"
        textAlign={['center', 'left']}
      >
        {body}
      </P>
    </Flex>
  );
};

function CardBlock() {
  return (
    <Flex flexDirection="column" py="20vh" bg="#f6f6f6">
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <H1
          fontWeight="700"
          color="neutral.veryDarkViolet"
          fontSize={['2rem', '3rem']}
          lineHeight="1.25"
          textAlign="center"
          my="0"
        >
          Advanced Statistics
        </H1>
        <H2
          fontWeight="400"
          width={['50vw', '30vw']}
          fontSize="18px"
          lineHeight="1.25"
          textAlign="center"
          color="neutral.greyishViolet"
          my={[4, 0]}
        >
          Track how your links are performing accross the web with our advanced
          Statistics dashboard
        </H2>
      </Flex>
      <Flex
        justifyContent="center"
        mx="10vw"
        py="4"
        flexDirection={['column', 'row']}
      >
        {cardData.map((el, i) => (
          <Card
            style={{ transform: `translateY(${i * 50}px)` }}
            title={el.title}
            body={el.body}
            icon={el.icon}
            key={i}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default CardBlock;
