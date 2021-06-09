import React, { useState } from 'react';
import bgShortenDesktop from '../assests/bg-shorten-desktop.svg';
import bgShortenMobile from '../assests/bg-shorten-mobile.svg';
import { Flex, P, Button, H2, Input } from './styledComponents';
import axios from 'axios';
import LinkBanner from './linkBanner';

function InputBlock() {
  const [value, setValue] = useState('');
  const [infoText, setInfotext] = useState('');
  const [links, setLinks] = useState([]);

  const errText = 'Please add a link';
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value === '') setInfotext(errText);
    else {
      setInfotext('Relax while we shorten the link for you...');
      const url = `https://api.shrtco.de/v2/shorten?url=${value}`;
      const getData = async () => {
        const res = await axios.get(url);
        const {
          data: {
            result: { full_short_link, original_link },
          },
        } = res;

        setLinks([...links, { full_short_link, original_link }]);
        setInfotext('');
      };
      getData();
    }
  };
  return (
    <Flex bg="#EFF1F7" flexDirection="column">
      <Flex
        flexDirection={['column', 'row']}
        justifyContent="space-around"
        alignItems="flex-start"
        bg="primary.darkViolet"
        backgroundImage={[
          `url(${bgShortenMobile})`,
          `url(${bgShortenDesktop})`,
        ]}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        mx={[4, '10vw']}
        p="5vh"
        borderRadius="10px"
        style={{ transform: 'translateY(-50%)' }}
      >
        <Flex flexDirection="column" width="100%">
          <Input
            borderColor={infoText === errText ? 'secondary.red' : 'transparent'}
            borderRadius="10px"
            fontSize="24px"
            py="15px"
            width="100%"
            placeholder="Shorten a link here..."
            onChange={(e) => handleOnChange(e)}
            value={value}
          />
          {infoText !== '' && (
            <P
              mb="0"
              color={infoText === errText ? 'secondary.red' : 'neutral.gray'}
              fontStyle="italic"
            >
              {infoText}
            </P>
          )}
        </Flex>
        <Button
          fontWeight="700"
          bg="primary.cyan"
          color="white"
          borderRadius="10px"
          border="none"
          fontSize="24px"
          mt={[4, 0]}
          mx={[0, 4]}
          py="15px"
          width={['100%', '20vw']}
          onClick={() => handleClick()}
        >
          Shorten it!
        </Button>
      </Flex>
      <Flex flexDirection="column" mx={[4, '10vw']} borderRadius="10px">
        {links.map((link, i) => (
          <LinkBanner
            key={i}
            originalLink={link.original_link}
            fullLink={link.full_short_link}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default InputBlock;
