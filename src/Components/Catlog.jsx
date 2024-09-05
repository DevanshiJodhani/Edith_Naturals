import { useState } from 'react';
import styled from 'styled-components';

const Catlog = () => {
  const [visible, setVisible] = useState(8); // Initial number of visible items

  const products = [
    {
      imageSrc: "./images/kichen.webp",
      title: "1 KG All Type Mix Knife For Home & Kitchen Use",
      price: "Rs. 1,999.00"
    },
    {
      imageSrc: "./images/kichen.webp",
      title: "1 KG All Type Mix Knife For Home & Kitchen Use",
      price: "Rs. 1,999.00"
    },
    {
      imageSrc: "./images/kichen.webp",
      title: "1 KG All Type Mix Knife For Home & Kitchen Use",
      price: "Rs. 1,999.00"
    },
    {
      imageSrc: "./images/kichen.webp",
      title: "1 KG All Type Mix Knife For Home & Kitchen Use",
      price: "Rs. 1,999.00"
    },
    {
      imageSrc: "./images/kichen.webp",
      title: "1 KG All Type Mix Knife For Home & Kitchen Use",
      price: "Rs. 1,999.00"
    },
    {
      imageSrc: "./images/kichen.webp",
      title: "1 KG All Type Mix Knife For Home & Kitchen Use",
      price: "Rs. 1,999.00"
    },
    {
      imageSrc: "./images/kichen.webp",
      title: "1 KG All Type Mix Knife For Home & Kitchen Use",
      price: "Rs. 1,999.00"
    },
    {
      imageSrc: "./images/kichen.webp",
      title: "1 KG All Type Mix Knife For Home & Kitchen Use",
      price: "Rs. 1,999.00"
    },
    {
      imageSrc: "./images/kichen.webp",
      title: "1 KG All Type Mix Knife For Home & Kitchen Use",
      price: "Rs. 1,999.00"
    },
    {
      imageSrc: "./images/kichen.webp",
      title: "1 KG All Type Mix Knife For Home & Kitchen Use",
      price: "Rs. 1,999.00"
    },
    {
      imageSrc: "./images/kichen.webp",
      title: "1 KG All Type Mix Knife For Home & Kitchen Use",
      price: "Rs. 1,999.00"
    },
    {
      imageSrc: "./images/kichen.webp",
      title: "1 KG All Type Mix Knife For Home & Kitchen Use",
      price: "Rs. 1,999.00"
    },
    {
      imageSrc: "./images/kichen.webp",
      title: "1 KG All Type Mix Knife For Home & Kitchen Use",
      price: "Rs. 1,999.00"
    },
    {
      imageSrc: "./images/kichen.webp",
      title: "1 KG All Type Mix Knife For Home & Kitchen Use",
      price: "Rs. 1,999.00"
    },
    {
      imageSrc: "./images/kichen.webp",
      title: "1 KG All Type Mix Knife For Home & Kitchen Use",
      price: "Rs. 1,999.00"
    },

  ]

  const loadMore = () => {
    setVisible(prev => prev + 8); 
  };

  return (
    <Container>
      <Title>Products</Title>
      <MainBox>
        {products.slice(0, visible).map((product, index) => (
          <ReviewBox key={index}>
            <ReviewImg>
              <img src={product.imageSrc} alt={product.title} />
            </ReviewImg>
            <Text>
              <a href="#">{product.title}</a>
              <span>{product.price}</span>
            </Text>
          </ReviewBox>
        ))}
      </MainBox>

      {visible < products.length && ( // Display "Load More" button only if there are more items to show
        <Btn>
          <button onClick={loadMore}>Load More</button>
        </Btn>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: 140px;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  padding: 20px;
  font-style: italic;
  color: #1a2b4c;
`;

const MainBox = styled.div`
  padding: 20px;
  max-width: 1500px;
  margin: auto;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const ReviewBox = styled.div`
  margin-top: 15px;
  max-width: 300px;
  width: 100%;
  border-radius: 10px;
  height: auto;
  overflow: hidden;
  box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    max-width: 450px
  }
`;

const ReviewImg = styled.div`
  padding: 15px;
  width: 100%;
  height: 250px;
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

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  button {
    padding: 16px 30px;
    border-radius: 12px;
    border: 1px solid #000;
    outline: none;
    background: none;
    color: #000;
    font-size: 16px;
    font-weight: 900;
    letter-spacing: 1px;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    &:hover {
      background: #1a2b4c;
      border: 1px solid #1a2b4c;
      color: #fff;
    }
  }
`;

export default Catlog;
