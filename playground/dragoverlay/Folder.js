// import { h, Fragment } from 'preact';
import {useCallback, useState, memo} from 'react';
import Collapse from './Collapse';
import {classes} from './helpers';
// import { memo } from 'preact/compat';
import FolderDetails from './FolderDetails';
import ActionIcons from './ActionIcons';
import {useFolder} from './hooks';
function Folder({
  children,
  editId,
  dispatch,
  disabled,
  id,
  title,
  parentId,
  optionsMode,
}) {
  const {
    open,
    changes,
    handleOpen,
    handleChanges,
    handleCreateCallback,
  } = useFolder(disabled);

  console.log('folder', title);
  return (
    <ul class={classes([parentId !== '0' ? 'pl-[1em]' : null])} id={`${id}`}>
      <div
        class={classes([
          'group',
          'flex',
          'items-center ',
          'mr-[1em]',
          // 'mb-[1em]',
          'w-[100%]',
        ])}
      >
        <FolderDetails
          title={title}
          open={open}
          editMode={editId === id}
          onOpen={handleOpen}
          id={id}
          handleChanges={handleChanges}
          changes={changes}
        />
        {/*bookmarks and otherbookmark is read only and no need for any actions*/}
        <ActionIcons
          editId={editId}
          id={id}
          dispatch={dispatch}
          changes={changes}
          title={title}
          parentId={parentId}
          // onOpen={handleOpen}
          // open={open}
          createCallback={handleCreateCallback}
          optionsMode={optionsMode}
        />
      </div>
      <Collapse open={open}>{children}</Collapse>
    </ul>
  );
}

// export default memo(Folder, (prev, next) => {
//   // if(prev.children.lenght===next.)
//   if (prev.editId !== next.editId) {
//     return false;
//   }
//   return prev.id === next.id;
// });
export default memo(Folder);
