import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${ ({ theme }) => theme.md`
    align-items: initial;
  `}
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;

  ${ ({ theme }) => theme.md`
    display: flex;
    justify-content: space-between;
  `}
`;
