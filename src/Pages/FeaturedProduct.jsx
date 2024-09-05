import styled from 'styled-components';

const FeaturedProduct = () => {
  return (
    <Container>
      <Content>
        <h1>Featured Product</h1>
        <ProductBox>
          <Box>
            <ImgBox>
              <img src="./images/kichen.webp" alt="Product Image" />
            </ImgBox>
            <Text>
              <a href="#">1 KG All Type Mix Knife For Home & Kitchen Use</a>
              <span>Rs. 1,999.00</span>
            </Text>
          </Box>
          <Box>
            <ImgBox>
              <img
                src="./images/08_a500eea5-5e61-4087-a857-8664d90143e5.webp"
                alt="Product Image"
              />
            </ImgBox>
            <Text>
              <a href="#">
                100PC DOMINO BLOCKS SET MULTICOLOR WOODEN TOY BULDING INDOOR GAME TOY
              </a>
              <span>Rs. 999.00</span>
            </Text>
          </Box>
          <Box>
            <ImgBox>
              <img
                src="./images/bowl.webp"
                alt="Product Image"
              />
            </ImgBox>
            <Text>
              <a href="#">
               10 pair Chopsticks Set Lightweight Easy to Use Chop Sticks With Cse for Sushi, Noodles and Other Asian Food
              </a>
              <span>Rs. 499.00</span>
            </Text>
          </Box>
          <Box>
            <ImgBox>
              <img
                src="./images/clothes.webp"
                alt="Product Image"
              />
            </ImgBox>
            <Text>
              <a href="#">
               10 tier Multipurpose Storage Rack, Foldable, Collapible Fabric Wardrobe Organiser for Clothes
              </a>
              <span>Rs. 1,199.00</span>
            </Text>
          </Box>
          <Box>
            <ImgBox>
              <img
                src="./images/4_3743e02d-7be5-4659-8dee-670db63e7600.webp"
                alt="Product Image"
              />
            </ImgBox>
            <Text>
              <a href="#">
               10 tier Multipurpose Storage Rack, Foldable, Collapible Fabric Wardrobe Organiser for Clothes
              </a>
              <span>Rs. 1,199.00</span>
            </Text>
          </Box>
          <Box>
            <ImgBox>
              <img
                src="./images/be7050aa-8c1f-4ba2-b402-b58f326c4021.webp"
                alt="Product Image"
              />
            </ImgBox>
            <Text>
              <a href="#">
               10 tier Multipurpose Storage Rack, Foldable, Collapible Fabric Wardrobe Organiser for Clothes
              </a>
              <span>Rs. 1,199.00</span>
            </Text>
          </Box>
          <Box>
            <ImgBox>
              <img
                src="./images/02_50902f5c-3859-4bd2-b16e-463b1fc4b01f.webp"
                alt="Product Image"
              />
            </ImgBox>
            <Text>
              <a href="#">
               10 tier Multipurpose Storage Rack, Foldable, Collapible Fabric Wardrobe Organiser for Clothes
              </a>
              <span>Rs. 1,199.00</span>
            </Text>
          </Box>
          <Box>
            <ImgBox>
              <img
                src="./images/03_9c7e3a6f-e301-44ad-bc01-cb24dba163a0.webp"
                alt="Product Image"
              />
            </ImgBox>
            <Text>
              <a href="#">
               10 tier Multipurpose Storage Rack, Foldable, Collapible Fabric Wardrobe Organiser for Clothes
              </a>
              <span>Rs. 1,199.00</span>
            </Text>
          </Box>
        </ProductBox>
        <Btn>
            <a href="/catlog">View All</a>
        </Btn>
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
  gap: 50px;

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

const ImgBox = styled.div`
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
  padding: 10px;
  width: 100%;
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

const Btn = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    a{
        text-decoration: none;
        padding: 16px 40px;
        background: #000;
        color: #fff;
        border-radius: 10px;
        cursor: pointer;
    }
`;

export default FeaturedProduct;
