import ProductCategory from "./ProductCategory";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";
import ShoppingButton from "./ShoppingButton";

export default function Product({ name, cat, price }) {
  return (
    <article className="product-card">
      <ProductTitle name="Dragon Zane" />
      <ProductCategory cat="Ninjago" />
      <ProductPrice price="89 kr" />
      <ShoppingButton />
    </article>
  );
}
