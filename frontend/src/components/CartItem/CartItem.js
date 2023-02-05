import { CiTrash, CiCircleMinus, CiCirclePlus } from "react-icons/ci"; //TODO change
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { productsApi } from "../../services/productsApi";
import { priceFormater } from "../../utils";
import { Message } from "../shared";
import { CountBox, Icon, Image, ImageBox, InfoBox, Item, Total } from "./CartItemElements";

export function CartItem({ item, cart }) {
  const { dispatch, TYPES } = cart;
  const { data: product, error } = useQuery("product-cart", async () => productsApi.getProductDetail(item.id));

  const updateCartHandler = (quantity) => {
    if (product.inStock < quantity) return;

    dispatch({ type: TYPES.addToCart, payload: { ...item, quantity } });
  };

  const removeCartHandler = () => {
    dispatch({ type: TYPES.removeFromCart, payload: { ...item } });
  };

  return (
    <>
      {error && <Message formError>Ocorreu um erro ao carregar os produtos, por favor tente em instantes</Message>}
      <Item>
        <ImageBox>
          <Image src={item.mainImage} alt={item.name} />
        </ImageBox>

        <InfoBox>
          <Link to={`/product/${item?.id}`}>
            {item.name}
            <Total>{priceFormater(item.price)}</Total>
          </Link>
        </InfoBox>

        <CountBox>
          <button onClick={() => updateCartHandler(item?.quantity - 1)} disabled={item.quantity === 1}>
            <CiCircleMinus />
          </button>
          <p>{item.quantity}</p>
          <button onClick={() => updateCartHandler(item?.quantity + 1)} disabled={item.quantity === item.inStock}>
            <CiCirclePlus />
          </button>
        </CountBox>
        <Icon>
          <CiTrash onClick={removeCartHandler} className="icon" />
        </Icon>
      </Item>
    </>
  );
}
