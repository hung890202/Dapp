import "./Item.css";

const Item = ({
  itemId,
  itemPrice,
  itemQuantity,
  itemDate,
  deleteItemData,
}) => {
  function deleteItem() {
    deleteItemData(function (prev) {
      return prev.filter((item) => item.id !== itemId);
    });
  }

  return (
    <div className="item-index">
      <div className="item-item">
        {itemPrice} x {itemQuantity} {`${itemDate}`}
      </div>
      <button onClick={deleteItem} className="item-delete-btn">
        <i class="fas fa-times item-delete-icon"></i>
      </button>
    </div>
  );
};
export default Item;
