import Annoucement from "../../components/Annoucment/Annoucement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import {
  Bottom,
  Container,
  Details,
  Image,
  Info,
  Product,
  ProductColor,
  ProductDetails,
  ProductId,
  ProductName,
  ProductPrice,
  ProductSize,
  Summary,
  Title,
  Top,
  TopButton,
  TopText,
  TopTexts,
  Wrapper,
  Hr,
  ProductAmountContainer,
  ProductAmount,
  ProductQuantity,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button,
} from "./Cart.styles";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector } from "react-redux";

const Cart: React.FC = () => {
  const cart = useSelector((state: any) => state.cart);
  console.log(cart.products);

  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton theme="normal">CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag ({cart.quantity})</TopText>
            <TopText>Our Whislist</TopText>
          </TopTexts>
          <TopButton theme="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((p: any) => (
              <Product key={p._id}>
                <ProductDetails>
                  <Image src={p.image} />
                  <Details>
                    <ProductName>
                      <b>Prodcut</b> {p.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {p._id}
                    </ProductId>
                    <ProductColor color={p.color} />
                    <ProductSize>
                      <b>Size:</b> {p.size}
                    </ProductSize>
                  </Details>
                </ProductDetails>
                <ProductPrice>
                  <ProductAmountContainer>
                    <AddIcon />
                    <ProductQuantity>{p.quantity}</ProductQuantity>
                    <RemoveIcon />
                  </ProductAmountContainer>
                  <ProductAmount>$ {p.price * p.quantity}</ProductAmount>
                </ProductPrice>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem type="normal">
              <SummaryItemText>sddsa</SummaryItemText>
              <SummaryItemPrice>80$</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="normal">
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>8.90$</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="normal">
              <SummaryItemText>Discount Shipping</SummaryItemText>
              <SummaryItemPrice>-8.90$</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>128.90$</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
