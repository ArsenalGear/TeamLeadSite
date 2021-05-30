import React from 'react';
import { H3 } from '../../../../../components/htmlTags/H3';
import { HR } from '../../../../../components/htmlTags/HR';
import { P } from '../../../../../components/htmlTags/P';
import { AboutMeWrapper } from './styles';
const AboutMe = () => (
  <AboutMeWrapper>
    <H3>О Себе</H3>
    <HR />
    <P>
      &nbsp;&nbsp; Всегда активен по части предложения новых нестандартных
      решений как по проекту (выход за рамки своей ответственности), так и за
      его пределами.
    </P>
    <P>
      &nbsp;&nbsp; Обожаю работать в хорошо сформированной Scrum команде, с
      позитивным настроем и чувством юмора. Есть положительный опыт работы в
      качестве Фронтэнд Тимлида в Финтех проекте с составом в 6 человек и опытом
      работы в командах более 20 человек одновременно.
    </P>
    <P>
      &nbsp;&nbsp; Очень ответственно отношусь к своей и чужой работе и стараюсь
      всегда довести ее до конечного результата. Читаю на английском без
      словаря. Всячески стараюсь развивать себя самостоятельно как по процессу
      написания кода, так и как личность. В свободное время люблю кататься на
      велосипеде.
    </P>
    <P>&nbsp;&nbsp; Владею английским на уровне B1.</P>
  </AboutMeWrapper>
);

export { AboutMe };
