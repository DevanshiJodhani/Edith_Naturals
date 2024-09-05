import styled from 'styled-components';

const Cart = () => {
  return (
    <Container>
      <Content>
        <ImgBox>
          <img src="./images/empty-cart.svg" alt="" />
        </ImgBox>
        <Text>
          <h1>Your Cart Is Empty 😔</h1>
          <a href='/catlog'>Return To Shop</a>
        </Text>
        <Account>
          <h2>Have an account?</h2>
          <span>
            <a href="/login">Login In</a> to check you shopping!!!
          </span>
        </Account>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: 140px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const ImgBox = styled.div`
  width: 400px;
  height: 400px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }


  @media screen and (max-width: 500px) {
    width: 300px;
    height: 300px;

    img{
      width: 100%;
      height: 100%;
    }
  }
`;

const Text = styled.div`
  margin-top: 50px;
  h1 {
    font-size: 50px;
    color: #1a2b4c;
    margin-bottom: 40px;
  }
  
  a {
    padding: 16px 30px;
    border: 1px solid #1a2b4c;
    color: #1a2b4c;
    background: none;
    outline: none;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 12px;
    cursor: pointer;
    letter-spacing: 1px;
    transition: 0.5s ease-in-out;
    text-decoration: none;

    &:hover {
      background: #1a2b4c;
      color: #fff;
    }
  }

  @media screen and (max-width: 600px) {
    h1{
      font-size: 40px;
    }
  }


  @media screen and (max-width: 500px) {
    h1{
      font-size: 30px;
    }
  }
  @media screen and (max-width: 400px) {
    h1{
      font-size: 20px;
    }
  }

`;

const Account = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  box-shadow: rgba(149, 157, 165, 0.8) 0px 8px 24px;
  border-radius: 10px;
  margin-top: 50px;
  h2 {
    margin-bottom: 20px;
    color: #1a2b4c;
  }
  span {
    color: #aaa;
    font-size: 18px;
    font-weight: 800;

    a {
      color: #1a2b4c;
    }
  }


  @media screen and (max-width: 500px) {
    span{
      font-size: 16px;
    }
  }
  @media screen and (max-width: 400px) {
    span{
      font-size: 14px;
    }
  }
`;

export default Cart;
