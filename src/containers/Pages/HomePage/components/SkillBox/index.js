import React from 'react';
import PropTypes from 'prop-types';
import { H3 } from '../../../../../components/htmlTags/H3';
import {
  SkillsWrapper,
  BorderLinearProgress,
  SkillsBlockWrapper,
  SkillsBlock,
  SkillName,
} from './styles';
const Skills = ({ skills }) => (
  <SkillsWrapper>
    <SkillsBlock>
      {skills.map(block => (
        <SkillsBlockWrapper key={block.title}>
          <SkillName>
            <H3 className="skills">{block.title}</H3>
            <H3 className="noWrap">{block.value}%</H3>
          </SkillName>
          <BorderLinearProgress color="secondary" variant="determinate" value={block.value} />
        </SkillsBlockWrapper>
      ))}
    </SkillsBlock>
  </SkillsWrapper>
);

Skills.propTypes = {
  skills: PropTypes.array,
};

export { Skills };
