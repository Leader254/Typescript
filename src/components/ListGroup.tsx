import { useState } from "react";

interface Props{
  listGroupItems: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
const ListGroup = ({listGroupItems, heading, onSelectItem}: Props) => {
  

  const [selectedItem, setSelectedItem] = useState(0);

  // listGroupItems = []
  return (
    <>
      <h1>{heading}</h1>
      <p>
        Use the Bootstrap List Group component to display a series of content.
      </p>
      {listGroupItems.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {listGroupItems.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedItem(index);
              onSelectItem(item);
            }}
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
