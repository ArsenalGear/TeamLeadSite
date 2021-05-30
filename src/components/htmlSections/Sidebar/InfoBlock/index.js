import React from 'react';
import PropTypes from 'prop-types';
import { InfoBlockWrapper, InfoCardBlock, InfoDataBlock, InfoIconBlock } from './styles';
import { H3 } from '../../../htmlTags/H3';
import { HR } from '../../../htmlTags/HR';
import { P } from '../../../htmlTags/P';
import { H4 } from '../../../htmlTags/H4';

const InfoBlock = ({ title, data }) => (
  <InfoBlockWrapper>
    <H3>{title}</H3>
    <HR />
    {data.map(block => (
      <InfoCardBlock key={Math.random()}>
        <InfoIconBlock>{block.icon}</InfoIconBlock>
        <InfoDataBlock>
          <H4>{block.subTitle}</H4>
          <P variant="body2">{block.subTitleData}</P>
        </InfoDataBlock>
      </InfoCardBlock>
    ))}
  </InfoBlockWrapper>
);

InfoBlock.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export { InfoBlock };
