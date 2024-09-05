import styled, { keyframes } from 'styled-components';

const Search = ({ searchOpen, setSearchOpen }) => {
  return (
    <Container searchOpen={searchOpen}>
      <Content>
        <SearchBox>
          <CloseButton onClick={() => setSearchOpen(false)}>
            <i class="bx bx-x"></i>
          </CloseButton>
          <InputField>
            <input type="text" placeholder="Search for products" />
          </InputField>
        </SearchBox>
      </Content>
    </Container>
  );
};

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  animation: ${({ searchOpen }) => (searchOpen ? slideUp : slideDown)} 0.8s
    ease-in-out forwards;
`;

const Content = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.3);
`;

const SearchBox = styled.div`
  width: 100%;
  max-height: 100px;
  height: 100%;
  border-bottom: 1px solid #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 50px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: #aaa;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    font-size: 35px;
    right: 20px;
  }
`;

const InputField = styled.div`
  width: 100%;
  height: 100%;

  input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 35px;
    color: #000;
    font-weight: 900;
  }

  @media screen and (max-width: 600px) {
    input{
      font-size: 20px;
    }
  }
`;

export default Search;
