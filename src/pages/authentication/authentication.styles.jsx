import styled from "styled-components";

const AuthenticationContainer = styled.div`
  margin: 30px auto;
  width: unset;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.md`
    width: 850px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  `}
`;

export default AuthenticationContainer;