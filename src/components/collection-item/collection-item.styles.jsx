import styled from 'styled-components';

export const CollectionItemImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CustomButtonContainer = styled.div`
  margin-top: 1rem;
  padding: 0;
  width: 100%;  
  opacity: 0.9;  
  display: block;

  ${({ theme }) => theme.md`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  `}
`;

export const CollectionItem = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${CollectionItemImage} {
      opacity: unset;
    }

    ${CustomButtonContainer} {
      opacity: unset;
    }
  }

  ${({ theme }) => theme.md`
    width: 22vw;
    
    &:hover {
      ${CollectionItemImage} {
        opacity: 0.8;
      }

      ${CustomButtonContainer} {
        opacity: 0.85;
        display: flex;
      }
    }
  `}
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
