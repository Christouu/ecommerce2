import { Container } from "./Products.styles";

import { popularProducts } from "../../data";
import Product from "../Product/Product";

const Products: React.FC = () => {
  return (
    <Container>
      {popularProducts.map((product) => (
        <Product key={product.id} img={product.img} />
      ))}
    </Container>
  );
};

export default Products;
