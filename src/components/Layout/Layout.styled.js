import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLayout = styled.header`
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 18px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: white;
    background-color: #2196f3;
  }
`;
