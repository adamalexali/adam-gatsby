import * as React from 'react';
import { StyledUl, StyledDiv, FlexDiv } from '../theme/styled-elements';

const FeaturedProjectTemplate = ({ jobDetails }) => {
  const { role, company, jobType, dateTime, tools } = jobDetails;

  return (
    <section>
      <h2>{company}</h2>
      <div>
        <h3>
          <time dateTime={dateTime.start.dateTime}>
            {dateTime.start.semantic}
          </time>
          &ndash;
          <time dateTime={dateTime.end.dateTime}>{dateTime.end.semantic}</time>
        </h3>
      </div>
      <h4>{role}</h4>
      <h5>{jobType}</h5>
      <ul className='skillsList'>
        {tools.map((tool) => (
          <li>{tool}</li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturedProjectTemplate;
