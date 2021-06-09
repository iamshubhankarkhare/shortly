import React, { useState } from 'react';
import {
  color,
  background,
  flexbox,
  space,
  border,
  typography,
  layout,
} from 'styled-system';
import styled from 'styled-components';

const Box = styled.div`
  ${color}
  ${background}
  ${typography}
  ${layout}
  ${space}
`;

const Link = styled.a`
  ${color}
  ${background}
  ${typography}
  ${layout}
  ${space}
  text-decoration:none;
  &:hover {
    color: black;
    filter: brightness(110%);
    opacity: 0.5;
    cursor: pointer;
  }
`;

const H1 = styled.h1`
  ${color}
  ${background}
  ${typography}
  ${layout}
  ${space}
`;

const H2 = styled.h2`
  font-size: 18px;
  ${color}
  ${background}
  ${typography}
  ${layout}
  ${space}
  ${border}
`;
const P = styled.p`
  font-size: 18px;
  ${color}
  ${background}
  ${typography}
  ${layout}
  ${space}
`;
const FooterLink = styled.a`
  font-size: 18px;
  margin: 5px 0px;
  text-decoration: none;
  ${color}
  ${background}
  ${typography}
  ${layout}
  ${space}
  &:hover {
    color: #2acfcf;
  }
`;

const Input = styled.input`
  ${typography}
  ${layout}
  ${color}
  ${flexbox}
  ${space}
  ${border}
`;

const Flex = styled.div`
  display: flex;
  ${typography}
  ${background}
  ${layout}
  ${color}
  ${flexbox}
  ${space}
  ${border}
`;

const Icon = styled.img`
  ${background}
  ${layout}
  ${color}
  ${space}
  cursor: pointer;
  &:hover {
    color: #2acfcf;
    filter: brightness(110%);
    opacity: 0.5;
  }
`;

const Button = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  ${color}
  ${space}
  ${typography}
  ${border}
  ${layout}
  &:hover {
    color: white;
    background-color: #2acfcf;
    filter: brightness(110%);
  }
`;

export { Box, Flex, Button, Link, H1, H2, FooterLink, Icon, P, Input };
