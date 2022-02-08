import { Container, Info, Image, Title, Button } from "./CategoryItem.styles";

interface Props {
  img: string;
  title: string;
}

const CategoryItem: React.FC<Props> = ({ img, title }) => {
  return (
    <Container>
      <Image src={img} />
      <Info>
        <Title>{title}</Title>
        <Button>SHOP NOW!</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
