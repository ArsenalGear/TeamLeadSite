import React from 'react';
import PropTypes from 'prop-types';
import { H3 } from '../../../../../components/htmlTags/H3';
import { HR } from '../../../../../components/htmlTags/HR';
import {
  SkillsWrapper,
  BorderLinearProgress,
  SkillsBlockWrapper,
  SkillsBlock,
  SkillName,
} from './styles';
import { H4 } from '../../../../../components/htmlTags/H4';
const Skills = ({ skills }) => (
  <SkillsWrapper>
    <H3>Скилы и экспертиза</H3>
    <HR />
    <SkillsBlock>
      {skills.map(block => (
        <SkillsBlockWrapper key={block.title}>
          <SkillName>
            <H4 className="skills">{block.title}</H4>
            <H4 className="skills">{block.value}%</H4>
          </SkillName>
          <BorderLinearProgress color={block.color} variant="determinate" value={block.value} />
        </SkillsBlockWrapper>
      ))}
    </SkillsBlock>
  </SkillsWrapper>
);

Skills.propTypes = {
  skills: PropTypes.array,
};

export { Skills };
