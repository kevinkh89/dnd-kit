import React, {useState, forwardRef} from 'react';
import classNames from 'classnames';
import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import styles from './App.module.css';
import {CSS} from '@dnd-kit/utilities';
export default function App() {
  const [activeId, setActiveId] = useState(null);
  let items = [...new Array(10)].map((_, index) => index + 1);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const handleDragStart = (e) => {
    // console.log(e);
    const {active} = e;
    setActiveId(active.id);
  };
  const handleDragEnd = (e) => {
    console.log(e);
    const {active, over} = e;
    if (active.id !== over.id) {
      console.log('inside');
    }
    setActiveId(null);
  };
  return (
    <DndContext
      onDragStart={handleDragStart}
      collisionDetection={closestCenter}
      sensors={sensors}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((item, index) => (
          <SortableBox key={item} id={item} activeId={activeId} />
        ))}
      </SortableContext>
      <DragOverlay>
        {activeId ? <BoxOverlay id={activeId} /> : null}
      </DragOverlay>
    </DndContext>
  );
}

const Box = forwardRef(function Box(
  {id, style, children, activeId, ...props},
  ref
) {
  return (
    <div
      {...props}
      ref={ref}
      data-id={id}
      style={style}
      className={classNames(
        styles.Box,
        activeId && id === activeId && styles.active
      )}
    >
      {children}
    </div>
  );
});

function BoxOverlay({activeId}) {
  return <Box id={activeId}>{activeId}</Box>;
}

function SortableBox({id, activeId}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isSorting,
  } = useSortable({id});
  const style = {
    transform: isSorting ? undefined : CSS.Transform.toString(transform),
    transition,
  };
  return (
    <Box
      ref={setNodeRef}
      id={id}
      style={style}
      {...listeners}
      {...attributes}
      activeId={activeId}
    >
      {id}
    </Box>
  );
}
// export const Item = forwardRef(({id, ...props}, ref) => {
//   return (
//     <div {...props} ref={ref}>
//       {id}
//     </div>
//   );
// });
