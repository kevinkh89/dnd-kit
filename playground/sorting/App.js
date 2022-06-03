import React, {useState, forwardRef} from 'react';
import classNames from 'classnames';
import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MeasuringStrategy,
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
import {Page, Position} from '../pages/Page';

const measuring = {
  droppable: {
    strategy: MeasuringStrategy.Always,
  },
};

let itemsInitial = [...new Array(10)].map((_, index) => index + 1);
export default function App() {
  const [activeId, setActiveId] = useState(null);
  const [items, setItems] = useState(itemsInitial);
  const activeIndex = activeId ? items.indexOf(activeId) : -1;
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {coordinateGetter: sortableKeyboardCoordinates})
  );
  const handleDragStart = (e) => {
    // console.log(e);
    const {active} = e;
    setActiveId(active.id);
  };
  const handleDragEnd = ({over}) => {
    if (over) {
      const overIndex = items.indexOf(over.id);

      if (activeIndex !== overIndex) {
        const newIndex = overIndex;

        setItems((items) => arrayMove(items, activeIndex, newIndex));
      }
    }
  };
  const handleDragCancel = () => {
    setActiveId(null);
  };
  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
      sensors={sensors}
      collisionDetection={closestCenter}
      measuring={measuring}
    >
      <SortableContext items={items}>
        <ul //there is a wierd stuff going on. when there is no parent the page wont scroll
        >
          {items.map((id, index) => (
            <SortableBox
              id={id}
              index={index + 1}
              key={id}
              activeIndex={activeIndex}
            />
          ))}
        </ul>
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

function BoxOverlay({id}) {
  return <Box id={id} />;
}

function SortableBox({id, activeId, activeIndex}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isSorting,
    isDragging,
    over,
    index,
  } = useSortable({id, animateLayoutChanges: () => true});
  const style = {
    transform: isSorting ? undefined : CSS.Transform.toString(transform),
    transition,
  };
  return (
    <Box
      // active={isDragging}
      ref={setNodeRef}
      id={id}
      style={style}
      {...listeners}
      {...attributes}
      // activeId={activeId}
    >
      {id}
    </Box>
  );
}
export const Item = forwardRef(({id, ...props}, ref) => {
  return (
    <div {...props} ref={ref}>
      {id}
    </div>
  );
});

////=======================
