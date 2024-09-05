import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Content>
        <h3>Subscribe to our emails</h3>
        <Email>
          <input type="email" placeholder="Email" />
          <i class="bx bx-right-arrow-alt"></i>
        </Email>
      </Content>
      <Center>
        <a href="">
          <i class="bx bxl-instagram"></i>
        </a>
        <a href="">
          <i class="bx bxl-facebook-square"></i>
        </a>
        <a href="">
        <i class='bx bxl-twitter' ></i>
        </a>
        <a href="">
          <i class="bx bxl-linkedin-square"></i>
        </a>
        <a href="">
          <i class="bx bxl-youtube"></i>
        </a>
      </Center>
      <Bottom>
        <p> Cpoyright &copy; 2024, by Edith Naturals | All Rights Reserved.</p>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #1a2b4c;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: auto;
  margin: auto;
  h3 {
    text-align: center;
    color: #fff;
    font-weight: 500;
    margin-bottom: 15px;
  }
`;

const Email = styled.div`
  max-width: 500px;
  width: 100%;
  height: 50px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #aaa;

  input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 16px;
    color: #fff;

    &::placeholder {
      color: #f5f5f5;
    }
  }

  i {
    margin-right: 20px;
    font-size: 20px;
    color: #f5f5f5;
  }

  &:hover {
    border: 2px solid #aaa;
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;

  a {
    width: 50px;
    height: 50px;
    border: 1px solid #fff;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    transition: 0.5s ease-in-out;

    &:hover {
      transform: translateY(-10px);
    }
  }

  @media screen and (max-width: 400px) {
    a{
      width: 40px;
      height: 40px;
      font-size: 20px;
    }
  }
`;

const Bottom = styled.div`
  margin-top: 15px;
  padding: 30px;
  border-top: 1px solid #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;

  p {
    color: #fff;
    margin-right: 20px;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      list-style-type: disc;
      margin-left: 25px;
      color: #aaa;
    }
  }
  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 650px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 15px;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      li {
        margin-bottom: 10px;
        margin-left: 0;
      }
    }
    p {
      margin-top: 15px;
    }
  }
`;

export default Footer;
