import styled from 'styled-components';

const Contact = () => {
  return (
    <Container>
      <Content>
        <h1>Contact</h1>
        <Form>
          <InputField>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email*" />
          </InputField>
          <Number>
            <input type="text" placeholder="Phone Number" />
          </Number>
          <Comment>
            <textarea name="Comment" placeholder="Comment"></textarea>
          </Comment>
          <Btn>
            <button type='submit'>Send</button>
          </Btn>
        </Form>
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
  max-width: 1000px;
  width: 100%;
  height: auto;
  margin: auto;
  padding: 50px;
  h1 {
    font-size: 60px;
  }
`;

const Form = styled.form`
  margin-top: 80px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputField = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  input {
    width: 100%;
    height: 50px;
    padding: 10px;
    font-size: 18px;
    outline: none;
  }

  @media screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
  }
`;

const Number = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  input {
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 18px;
    outline: none;
  }
`;

const Comment = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 150px;
  margin-top: 20px;
  textarea {
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 18px;
    outline: none;
    resize: none;
  }
`;

const Btn = styled.div`
  margin-top: 30px;
 button{
  padding: 15px 50px;
  border: none;
  outline: none;
  font-size: 16px;
  background: #000;
  color: #fff;
  cursor: pointer;

 }
`;

export default Contact;
