import styled from 'styled-components';

const FeaturedCollection = () => {
  return (
    <Container>
      <Content>
        <h1>Featured Collections</h1>
        <ProductBox>
          <Box>
            <ImgBx>
              <img
                src="./images/GreenModernOrganicHealthFoodLogo.jpg"
                alt="Green Modern Organic Health Food Logo"
              />
            </ImgBx>
            <Text>
              <a href="#">
                Radiance Rejuvenation Day & Night Cream Set Combo ( Pake of 2)
              </a>
              <span>Rs. 650.00</span>
            </Text>
          </Box>
          <Box>
            <ImgBx>
              <img
                src="./images/GreenModernOrganicHealthFoodLogo.jpg"
                alt="Green Modern Organic Health Food Logo"
              />
            </ImgBx>
            <Text>
              <a href="#">
                Radiance Rejuvenation Day & Night Cream Set Combo ( Pake of 2)
              </a>
              <span>Rs. 650.00</span>
            </Text>
          </Box>
        </ProductBox>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 30px;

  @media screen and (max-width: 450px) {
    padding: 5px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
  padding: 20px;

  h1 {
    font-style: italic;
    color: #1a2b4c;
  }

  @media screen and (max-width: 450px) {
    padding: 10px;

    h1 {
      font-size: 25px;
      margin-top: 20px;
    }
  }
`;

const ProductBox = styled.div`
  padding: 20px;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;

  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Box = styled.div`
  margin-top: 15px;
  max-width: 370px;
  width: 100%;
  border-radius: 10px;
  height: auto;
  overflow: hidden;
  box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
  cursor: pointer;
`;

const ImgBx = styled.div`
  padding: 15px;
  width: 100%;
  height: 300px;
  transition: 0.5s ease;
  overflow: hidden;

  img {
    width: 100%;
    border-radius: 10px;
    height: 100%;
    object-position: center;
    transition: 0.5s ease;
    object-fit: cover;
  }
  &:hover {
    img {
      scale: 0.95;
    }
  }
`;

const Text = styled.div`
  width: 100%;
  padding: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #000;
  a {
    margin-bottom: 16px;
    font-size: 15px;
    text-decoration: none;
    color: #333;
    &:hover {
      text-decoration: underline;
    }
  }
  span {
    margin-bottom: 10px;
  }
`;

export default FeaturedCollection;
