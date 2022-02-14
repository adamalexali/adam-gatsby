import * as React from 'react';
import { StyledUl, StyledDiv, FlexDiv } from '../theme/styled-elements';

const WorkExperienceTemplate = ({ jobs }) => {
  return jobs.map((job) => (
    <StyledDiv>
      <FlexDiv>
        <div>
          <h3>{job.role}</h3>
          <h4>{job.company}</h4>
        </div>
        <div className='rightAlign'>
          <div>
            <h5>
              <time dateTime={job.dateTime.start.dateTime}>
                {job.dateTime.start.semantic}
              </time>
              &ndash;
              <time dateTime={job.dateTime.end.dateTime}>
                {job.dateTime.end.semantic}
              </time>
            </h5>
          </div>
          <h5>{job.jobType}</h5>
        </div>
      </FlexDiv>
      <StyledUl>
        {job.tasks.map((task) => (
          <li>{task}</li>
        ))}
      </StyledUl>
    </StyledDiv>
  ));
};

export default WorkExperienceTemplate;
