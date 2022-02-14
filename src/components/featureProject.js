import * as React from 'react';
import { StyledUl, StyledDiv, FlexDiv } from '../theme/styled-elements';

const FeaturedProjectTemplate = ({ jobDesc }) => {
  const { role, company, jobType, dateTime } = jobDesc;

  return (
    <section>
      <h2>{company}</h2>
      <h3>{role}</h3>
      <h4>{jobType}</h4>
      <time dateTime={dateTime.start.dateTime}>{dateTime.start.semantic}</time>
      &ndash;
      <time dateTime={dateTime.end.dateTime}>{dateTime.end.semantic}</time>
    </section>
  );
};

export default FeaturedProjectTemplate;
