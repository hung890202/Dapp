import Item from "./Item";
import "./List.css";

const List = ({ listData, deleteData }) => {
  return (
    <div className="list-index">
      {listData.map((item) => {
        const { price, quantity, date, id } = item;
        return (
          <Item
            key={id}
            itemId={id}
            itemPrice={price}
            itemQuantity={quantity}
            itemDate={date}
            deleteItemData={deleteData}
          />
        );
      })}
    </div>
  );
};

export default List;
