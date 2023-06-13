import React, { useContext } from "react";
import { DataListContext } from "./ContextFile";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export function TodoList() {
  const [data, setData] = useContext(DataListContext);

  const deleteItem = (id) => {
    setData(data.filter((x) => x.id !== id));
  };

  const handleEnd = (result) => {
    console.log(result);
    if (!result.destination) return;
    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setData(items);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="to-dos">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              <div className="list">
                {data?.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={`draggable${item.id}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <li
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        key={item.id}
                        className={
                          snapshot.isDragging ? "selected" : "not-selected"
                        }
                      >
                        {index + 1}.{item.name}
                        <button onClick={() => deleteItem(item.id)}>
                          Delete
                        </button>
                      </li>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </div>
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
