import { useEffect } from 'react';
import styled from 'styled-components';

const Login = () => {
  useEffect(() => {
    const signInBtn = document.querySelector('#sign-in-btn');
    const signUpBtn = document.querySelector('#sign-up-btn');
    const container = document.querySelector('.content');

    signUpBtn.addEventListener('click', () => {
      container.classList.add('sign-up-mode');
    });
    signInBtn.addEventListener('click', () => {
      container.classList.remove('sign-up-mode');
    });

    // Cleanup function to remove event listeners
    return () => {
      signUpBtn.removeEventListener('click', () => {
        container.classList.add('sign-up-mode');
      });
      signInBtn.removeEventListener('click', () => {
        container.classList.remove('sign-up-mode');
      });
    };
  }, []);

  return (
    <Container>
      <Content className="content">
        <FormBox>
          <SignInSignUp className="singin-singup">
            <form action="" className="sign-in-form">
              <Title>Sign In</Title>
              <InputField>
                <i className="bx bxs-user"></i>
                <input type="text" placeholder="User Name" />
              </InputField>
              <InputField>
                <i className="bx bxs-lock-alt"></i>
                <input type="password" placeholder="Password" />
              </InputField>
              <InputBtn>
                <input type="submit" value="Login" className="btn solid" />
              </InputBtn>
              <SocialText>or sign in with...</SocialText>
              <SocialMedia>
                <SocialIcon>
                  <i className="bx bxl-facebook"></i>
                </SocialIcon>
                <SocialIcon>
                  <i className="bx bxl-google"></i>
                </SocialIcon>
                <SocialIcon>
                  <i className="bx bxl-linkedin"></i>
                </SocialIcon>
                <SocialIcon>
                  <i className="bx bxl-twitter"></i>
                </SocialIcon>
              </SocialMedia>
            </form>
            <form action="" className="sign-up-form">
              <SocialMedia>
                <SocialIcon>
                  <i className="bx bxl-facebook"></i>
                </SocialIcon>
                <SocialIcon>
                  <i className="bx bxl-google"></i>
                </SocialIcon>
                <SocialIcon>
                  <i className="bx bxl-linkedin"></i>
                </SocialIcon>
                <SocialIcon>
                  <i className="bx bxl-twitter"></i>
                </SocialIcon>
              </SocialMedia>
              <SocialText>or sign in with...</SocialText>
              <Title>Sign Up</Title>
              <InputField>
                <i className="bx bxs-user"></i>
                <input type="text" placeholder="User Name" />
              </InputField>
              <InputField>
                <i className="bx bxs-envelope"></i>
                <input type="email" placeholder="Email Address" />
              </InputField>
              <InputField>
                <i className="bx bxs-lock-alt"></i>
                <input type="password" placeholder="Password" />
              </InputField>
              <InputBtn>
                <input type="submit" value="Sign Up" className="btn solid" />
              </InputBtn>
            </form>
          </SignInSignUp>
        </FormBox>
        <PanelsBox>
          <Panel>
            <LeftPanel className="left-panel">
              <Info className="info">
                <h3>
                  Hello, <br /> Friend!
                </h3>
                <p>Enter Your personal details and start journey with us</p>
                <button className="btn transparent" id="sign-up-btn">
                  Sign Up
                </button>
              </Info>
            </LeftPanel>
          </Panel>
          <Panel>
            <RightPanel className="right-panel">
              <Info className="info">
                <h3>
                  Welcome <br /> Back!
                </h3>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button className="btn transparent" id="sign-in-btn">
                  Sign In
                </button>
              </Info>
            </RightPanel>
          </Panel>
        </PanelsBox>
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
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #fff;
  overflow: hidden;

  &::before {
    position: absolute;
    content: '';
    top: -10%;
    right: 48%;
    width: 1700px;
    height: 1700px;
    border-radius: 50%;
    background: linear-gradient(-45deg, #1e57c9ce, #000e29);
    transform: translateY(-50%);
    z-index: 7;
    transition: 1.8s ease-in-out;
  }

  @media screen and (max-width: 990px) {
    min-height: 800px;
    height: 100vh;

    &::before {
      width: 1500px;
      height: 1500px;
      left: 30%;
      bottom: 70%;
      top: initial;
      right: initial;
      transform: translateX(-50%);
      transition: 2s ease-in-out;
    }
  }

  @media screen and (max-width: 400px){
    &::before {
      width: 1000px;
      height: 1000px;
      left: 30%;
      bottom: 75%;
      top: initial;
      right: initial;
      transform: translateX(-50%);
      transition: 2s ease-in-out;
    }
  }
`;

const SignInSignUp = styled.div`
  position: absolute;
  top: 50%;
  left: 75%;
  width: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 1fr;
  z-index: 12;
  transition: 1s 0.7s ease-in-out;

  form {
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    transition: 0.2s 0.7s ease-in-out;
  }

  @media screen and (max-width: 990px) {
    width: 100%;
    left: 50%;
    top: 98%;
    transform: translate(-50%, -100%);
    transition: 1s 0.8s ease-in-out;
  }

  @media screen and (max-width: 400px){
    width: 100%;
    left: 50%;
    top: 94%;
    transform: translate(-50%, -100%);
    transition: 1s 0.8s ease-in-out;
  }
`;

const FormBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Title = styled.h2`
  font-size: 5rem;
  color: #444;
  margin-bottom: 20px;

  @media screen and (max-width: 400px) {
    font-size: 2.5rem;
  }
`;

const InputField = styled.div`
  max-width: 380px;
  width: 100%;
  height: 55px;
  background: #f0f0f0;
  margin: 10px 0;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;

  i {
    text-align: center;
    line-height: 55px;
    font-size: 25px;
    color: #acacac;
  }

  input {
    background: none;
    outline: none;
    border: none;
    font-size: 16px;
    font-weight: 600;
    color: #333;
    line-height: 1;
    &::placeholder {
      font-weight: 500;
      color: #aaa;
    }
  }
`;

const InputBtn = styled.div`
  input {
    border: none;
    outline: none;
    background: none;
    width: 150px;
    height: 49px;
    border-radius: 49px;
    background: #5995fd;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: 1px;
    margin: 30px 0;
    transition: 0.5s;

    &:hover {
      background: #4d84e2;
    }
  }
`;

const SocialText = styled.p`
  padding: 0.7rem 0;
  font-size: 1.2rem;
  margin: 15px 0;
  color: #5995fd;
  font-weight: 900;
  letter-spacing: 1px;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialIcon = styled.a`
  height: 50px;
  width: 50px;
  border: 1px solid #333;
  margin: 0 0.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 30px;
  color: #333;
  border-radius: 50%;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: #4481eb;
    border-color: #4481eb;
  }
`;

const PanelsBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 990px) {
    z-index: 10;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 7;
  padding: 3rem;

  @media screen and (max-width: 990px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
  }
`;

const LeftPanel = styled.div`
  pointer-events: all;
  padding: 3rem 17% 20rem 12%;
  margin-right: 200px;

  @media screen and (max-width: 990px) {
    grid-row: 1 /2;
    margin-right: 0px;
  padding: 0rem 30% 20rem 0%;
}
`;

const RightPanel = styled.div`
  pointer-events: none;
  padding: 3rem 12% 20rem 17%;
  margin-left: 200px;

  @media screen and (max-width: 990px) {
    grid-row: 3/4;
    margin-left: 0px;
    padding: 0rem 15% 20rem 0%;
  }

  @media screen and (max-width: 550px){
    padding: 3rem 12% 20rem 17%;
  }

  @media screen and (max-width: 400px){
    /* padding: 0rem 12% 20rem 17%; */
    padding: 3rem 15% 20rem 0%;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  transition: 0.9s 0.6s ease-in-out;

  h3 {
    font-size: 5rem;
    line-height: 1.3;
    margin-bottom: 15px;
    font-weight: 600;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 12px;
    padding: 0.7rem 0;
  }

  button {
    margin: 0;
    background: none;
    border: 2px solid #fff;
    width: 130px;
    height: 41px;
    font-weight: 600;
    font-size: 1rem;
    color: #fff;
    border-radius: 55px;
    cursor: pointer;
  }

  @media screen and (max-width: 990px) {
    padding-right: 15%;
    transition: 0.9s 0.8s ease-in-out;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
      line-height: 1.1;
    }

    p {
      font-size: 1rem;
      margin-bottom: 10px;
      padding: 0.5rem 0;
    }

    button {
      width: 110px;
      height: 35px;
      font-size: 0.7rem;
    }
  }
  @media screen and (max-width: 400px){
    h3{
      font-size:1.2rem;
    }
    p{
      font-size: 0.8rem;
    }
  } 
`;

export default Login;
