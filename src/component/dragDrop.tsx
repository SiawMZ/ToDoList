import React, { useState } from "react";

type DragDropContainerProps = {
  items: string[];
  onOrderChange: (newOrder: string[]) => void;
};

const DragDropContainer: React.FC<DragDropContainerProps> = ({
  items,
  onOrderChange,
}) => {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const handleDragStart = (
    event: React.DragEvent<HTMLLIElement>,
    item: string
  ) => {
    setDraggedItem(item);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", item);
  };

  const handleDragOver = (event: React.DragEvent<HTMLLIElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLLIElement>, index: number) => {
    event.preventDefault();
    const droppedItem = event.dataTransfer.getData("text/plain");
    const remainingItems = items.filter((item) => item !== droppedItem);
    const updatedItems = [
      ...remainingItems.slice(0, index),
      droppedItem,
      ...remainingItems.slice(index),
    ];
    setDraggedItem(null);
    onOrderChange(updatedItems);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={(event) => handleDragStart(event, item)}
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default DragDropContainer;
