import React from 'react';
import styled from 'styled-components';

import Member from 'components/Member';

export default ({ members }) => (
  <MemberList>
    {members.map(member => (
      <Member member={member} key={member.id} />
    ))}
  </MemberList>
);

const MemberList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: ${({ theme }) => theme.spacing.small + ' ' + theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: ${({ theme }) => theme.spacing.large + ' ' + theme.spacing.large};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
