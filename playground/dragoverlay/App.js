import 'react-app-polyfill/ie11';
import * as React from 'react';
import {useState} from 'react';

import {
  DndContext,
  DragOverlay,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';
import {useSortable} from '@dnd-kit/sortable';

const containersInit = [
  {id: 'A', childId: null},
  {id: 'B', childId: null},
  {id: 'C', childId: null},
];
const draggersArr = ['e', 'f', 'g'];
export const App = () => {
  const [containers, setContainers] = useState(containersInit);
  const [active, setActive] = useState(null);
  const [draggers, setDraggers] = useState(draggersArr);
  const item = <Draggable />;

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      {/* {parent === null ? item : null} */}
      {draggers.map((id) => (
        <Draggable key={id} id={id} />
      ))}

      <div style={{display: 'flex'}}>
        {containers.map(({id, childId}) => (
          <Droppable key={id} id={id}>
            {childId ? <Draggable id={childId} /> : 'Drop here'}
          </Droppable>
        ))}
      </div>
      <DragOverlay dropAnimation={{duration: 10000}}>
        {active ? <Draggable id={active} /> : null}
      </DragOverlay>
    </DndContext>
  );

  function handleDragEnd(event) {
    const {over} = event;
    if (over) {
      //   setParent(over.id);
      let newDraggers = draggers.filter((id) => id !== active);
      setDraggers(newDraggers);
      setContainers((containers) => {
        return containers.map((item) => {
          return item.id === over.id ? {...item, childId: active} : item;
        });
      });
    }
    setActive(null);
  }
  function handleDragStart(e) {
    const {over, active} = e;
    console.log(active.id);
    setActive(active.id);
  }
};

function Draggable({id}) {
  const {
    attributes,
    isDragging,
    transform,
    setNodeRef,
    listeners,
  } = useDraggable({
    id,
  });
  //   let trans = isDragging ? null : CSS.Translate.toString(transform);
  //   console.log(trans, id);
  return (
    <button
      ref={setNodeRef}
      style={{
        // transform: trans,
        boxShadow: isDragging
          ? '-1px 0 15px 0 rgba(34, 33, 81, 0.01), 0px 15px 15px 0 rgba(34, 33, 81, 0.25)'
          : undefined,
      }}
      {...attributes}
      {...listeners}
    >
      Drag me-{id}
    </button>
  );
}

function Droppable({id, children}) {
  const {isOver, setNodeRef} = useDroppable({id});

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        border: '1px solid',
        margin: 20,
        borderColor: isOver ? '#4c9ffe' : '#EEE',
      }}
      ref={setNodeRef}
    >
      {children}
    </div>
  );
}

// ReactDOM.render(<Playground />, document.getElementById('root'));
