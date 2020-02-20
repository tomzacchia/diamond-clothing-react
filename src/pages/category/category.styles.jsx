import styled from "styled-components";

export const CategoryPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;

  & > div {
    margin-bottom: 30px;
  }

  ${({ theme }) => theme.md`
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `}
`;