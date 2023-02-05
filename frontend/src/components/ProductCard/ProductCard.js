import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { addToCartHandler, priceFormater } from "../../utils";
import { Content, Image, StyledButton, Text, Title, ProductsWrapper } from "./ProductCardElements";

export function ProductCard({ products }) {
  const cart = useCart();

  return (
    <ProductsWrapper>
      {products?.map((product) => (
        <Content key={product.id}>
          <Link to={`/product/${product.id}`}>
            <Image src={product.mainImage} alt={product.name} />
            <Title>{product.name}</Title>
            <Text>{priceFormater(product.price)}</Text>
          </Link>
          <StyledButton onClick={() => addToCartHandler({ product, cart })}>Adicionar ao carrinho</StyledButton>
        </Content>
      ))}
    </ProductsWrapper>
  );
}
