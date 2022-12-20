import styled from '@emotion/styled';
import { FcContacts } from 'react-icons/fc';

export const Icon = styled(FcContacts)`
  width: ${p => p.theme.space[5]};
  height: ${p => p.theme.space[5]};
`;

export const ListItem = styled.li`
  display: grid;
  grid-template-columns:
    ${p => p.theme.space[5]}
    1fr
    ${p => p.theme.space[6]};
  grid-template-rows: ${p => p.theme.space[5]};
  grid-column-gap: ${p => p.theme.space[5]};
  /* justify-content: space-between; */
  align-items: center;
  gap: ${p => p.theme.space[4]};
  font-size: ${p => p.theme.fontsSizes.m}px;

  &:nth-child(2n) {
    background-color: ${p => p.theme.colors.bgGrey};
    border-radius: ${p => p.theme.radii.generic};
  }
`;

export const ContactText = styled.p`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  text-align: start;
`;
