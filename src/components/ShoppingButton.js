export default function ShoppingButton() {
  const handleShopping = () => {
    console.log("Du har handlet");
  };
  return (
    <button className="shopping-btn" onClick={handleShopping}>
      Legg i handlekurv
    </button>
  );
}
