import { Carousel, Image } from "react-bootstrap";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { ProductCard, CarouselContainer } from "../../components";
import { Message, Loading } from "../../components/shared";
import { Title } from "../../components/shared/Top";
import { useCategories } from "../../hooks";
import { productsApi } from "../../services/productsApi";

export function Home() {
  const { data: products, isLoading, error } = useQuery("home-products", productsApi.getProducts);
  const { categories } = useCategories();

  return (
    <>
      {isLoading && <Loading />}
      {error && <Message formError>Ocorreu um erro, por favor tente em instantes.</Message>}
      {products && (
        <>
          <CarouselContainer>
            <Carousel pause="hover">
              {categories?.map((category, index) => (
                <Carousel.Item key={index}>
                  <Link to={`/categories/${category.name}`}>
                    <Image src={category.image} alt={index} fluid />
                  </Link>
                </Carousel.Item>
              ))}
            </Carousel>
          </CarouselContainer>
          <Title>Últimos lançamentos</Title>
          <ProductCard products={products} />
        </>
      )}
    </>
  );
}
