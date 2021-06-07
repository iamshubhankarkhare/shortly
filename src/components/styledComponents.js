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

const Flex = styled.div`
  display: flex;
  ${typography}
  ${background}
  ${layout}
  ${color}
  ${flexbox}
  ${space}
`;

const Button = styled.button`
  ${color}
  ${space}
  ${typography}
  ${border}
  ${layout}
  &:hover {
    filter: brightness(110%);
  }
`;

export { Box, Flex, Button };
