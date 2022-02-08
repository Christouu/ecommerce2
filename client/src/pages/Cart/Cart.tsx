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

const Cart: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton theme="normal">CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Our Whislist</TopText>
          </TopTexts>
          <TopButton theme="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Prodcut</b> KECKITE NA JORO BEKAMA
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 12332132132
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b>11
                  </ProductSize>
                </Details>
              </ProductDetails>
              <ProductPrice>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductQuantity>1</ProductQuantity>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductAmount>30$</ProductAmount>
              </ProductPrice>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Prodcut:</b> KECKITE NA JORO BEKAMA
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 12332132132
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 11
                  </ProductSize>
                </Details>
              </ProductDetails>
              <ProductPrice>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductQuantity>1</ProductQuantity>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductAmount>30$</ProductAmount>
              </ProductPrice>
            </Product>
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
