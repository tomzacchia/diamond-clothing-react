import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

export const HeaderContainer = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.md`
    padding: 0; 
    margin-bottom: 25px;
    height: 70px;    
  `};
`;

export const LogoContainer = styled(Link)`
  width: 50px;
  padding: 0;

  ${({ theme }) => theme.md`
    height: 100%;
    width: 70px;
    padding: 25px; 
  `};
`;

export const OptionsContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;

  ${({ theme }) => theme.md`
    width: 50%;
  `};
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const SvgLogo = styled(Logo)`
  width: 35px;
  height: 35px;

  ${({ theme }) => theme.md`
    width: 50px;
    height: 50px;
  `};
`;
