import React from 'react';
import TimezoneItem from './TimezoneItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TimezoneList = ({ timezones, currentTime, setCurrentTime, removeTimezone, reorderTimezones }) => {
  const handleDragEnd = (result) => {
    console.log(result);
    if (!result.destination) return;
    reorderTimezones(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="timezones">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {timezones.map((timezone, index) => (
              <Draggable key={timezone.id} draggableId={timezone.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="mb-2"
                  >
                    <TimezoneItem
                      timezone={timezone}
                      currentTime={currentTime}
                      setCurrentTime={setCurrentTime}
                      removeTimezone={removeTimezone}
                    />

                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TimezoneList;
