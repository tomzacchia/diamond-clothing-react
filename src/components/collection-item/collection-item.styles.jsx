import styled from 'styled-components';

export const CollectionItemImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const ModifiedCustomButton = styled.div`
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const CollectionItem = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${CollectionItemImage} {
      opacity: 0.8;
    }

    ${ModifiedCustomButton} {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const CollectionItemFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const CollectionItemName = styled.div`
  width: 90%;
  margin-bottom: 15px;
`;

export const CollectionItemPrice = styled.div`
  width: 10%;
`;
