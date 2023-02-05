import { Link, useNavigate } from "react-router-dom";
import { CartItem, CheckoutButton } from "../../components";
import { Message, Top } from "../../components/shared";
import { useUserData } from "../../hooks";
import { useCart } from "../../hooks/useCart";
import { priceFormater } from "../../utils";
import { CartContent, CheckoutContent, ItemsBox, MsgContent, StyledButton } from "./CartElements";

export function Cart() {
  const navigate = useNavigate();
  const cart = useCart();
  const {
    cart: { items },
  } = cart.state;

  const itemsQty = items.reduce((acc, curr) => acc + curr.quantity, 0);
  const subtotal = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  const {
    state: { userData },
  } = useUserData();

  return (
    <>
      <Top>Carrinho</Top>
      {items?.length === 0 && (
        <Message>
          <MsgContent>
            Seu carrinho está vazinho, <Link to="/">continue comprando</Link>
          </MsgContent>
        </Message>
      )}
      {items?.length > 0 && (
        <ItemsBox>
          <CartContent>
            {items?.map((item) => (
              <CartItem key={item.id} item={item} cart={cart} />
            ))}
          </CartContent>
          <CheckoutContent>
            <h1>{`Subtotal (${itemsQty} itens):`}</h1>
            <h2>{`${priceFormater(subtotal)}`}</h2>

            {!userData && <StyledButton onClick={() => navigate("/signin?redirect=/cart")}>Faça login!</StyledButton>}
            {userData && <CheckoutButton cartItems={items} />}
          </CheckoutContent>
        </ItemsBox>
      )}
    </>
  );
}
