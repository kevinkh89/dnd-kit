import { h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import { createPortal, memo } from 'preact/compat';
import { classes } from './helpers';
import {
  FaPenSquare,
  FaTrash,
  FaCheck,
  FaTimes,
  FaFolderPlus,
  FaEllipsisV,
} from 'react-icons/fa';
import Modal from './Modal';
import {
  createAction,
  checkAction,
  editAction,
  optionsAction,
  removeAction,
  cancelAction,
} from './actions';
//============
let shadow = document.getElementById('savior').shadowRoot;
//============
function ActionIcons({
  editId,
  id,
  dispatch,
  changes,
  title,
  optionsMode,
  createCallback,
}) {
  console.log('actionIcons');
  const [modal, setModal] = useState(false);
  // const [optionsMode, setOptions] = useState(false);
  const handleCancel = useCallback(() => {
    setModal(false);
    let modal = shadow.getElementById('modal');
    modal.style.position = 'relative';
    modal.style.height = '0';
  }, []);
  const handleDelete = useCallback(() => {
    removeAction(dispatch, id);
    handleCancel();
  }, []);
  const clickAwayListener = useCallback(e => {
    dispatch({ type: 'optionsMode', payload: null });
    document.removeEventListener('click', clickAwayListener);
  }, []);
  // const createCallback = useCallback(() => {
  //   if (!open) {
  //     onOpen();
  //   }
  // }, [open]);
  return editId === id ? (
    <div className={classes(['flex', 'gap-[.8em]', 'ml-[1em]'])}>
      <button
        form="myForm"
        type="submit"
        onClick={() => {
          // checkAction(dispatch, { changes, id });
        }}
      >
        <FaCheck
          className={classes([
            'w-[1.5em] ',
            'h-[1.5em] ',
            'cursor-pointer',
            'hover:text-cyan-300 ',
          ])}
          onClick={e => {
            e.stopPropagation();
            checkAction(dispatch, { changes, id });
          }}
        />
      </button>
      <FaTimes
        className={classes([
          'w-[1.5em] ',
          'h-[1.5em] ',
          'cursor-pointer',
          'hover:text-cyan-300 ',
        ])}
        onClick={e => {
          e.stopPropagation();
          // onCancel(false);
          cancelAction(dispatch);
        }}
      />
    </div>
  ) : (
    <div
      className={classes([
        'flex',
        // 'opacity-0 ',
        // !editId ? 'group-hover:opacity-100' : 'hidden [visibility:hidden]',
        'ml-[1em]',
        'relative',
        'chil',
      ])}
      // onClick={e => {}}
      onClick={e => {
        e.stopPropagation();
        optionsAction(dispatch, id);
        document.addEventListener('click', clickAwayListener);
      }}
    >
      <FaEllipsisV
        className={classes([
          'w-[1.5em]',
          'h-[1.5em]',
          'text-gray-500',
          'hover:text-cyan-300',
        ])}
        id={id}
      />
      {optionsMode && !modal ? (
        <div
          className={classes([
            'absolute',
            'right-0',
            'top-0',
            'bg-gray-700',
            'p-[.5em]',
            'z-50',
            'rounded-sm',
            // 'text-[1.5em]',
          ])}
          onClick={e => {
            // e.stopPropagation();
            // setOptions(optionsMode=>!optionsMode)
          }}
        >
          {id === '1' || id === '2' ? null : (
            <div
              className={classes([
                'flex',
                'items-center',
                'hover:text-cyan-300 ',
                'w-max',
              ])}
              onClick={e => {
                e.stopPropagation();
                // onEdit(id);
                // dispatch({ type: 'edit', payload: id });
                editAction(dispatch, id);
              }}
            >
              <FaPenSquare
                className={classes([
                  // 'w-[1.5em] ',
                  // 'h-[1.5em] ',
                  // 'text-gray-700 ',
                  !editId ? 'cursor-pointer' : null,
                  // 'hover:text-cyan-300 ',
                  'text-[1.6em]',
                ])}
              />
              <span className={classes(['ml-[.4em]', 'text-[1.3em]'])}>edit</span>
            </div>
          )}
          <div
            className={classes([
              'flex',
              'items-center',
              'hover:text-cyan-300',
              'mt-[.4em]',
              'w-max',
            ])}
            onClick={e => {
              // onOpen();

              // bookmarkActions(
              //   { type: 'createAction', payload: { parentId: id, title: 'New Folder' } },
              //   newBookmark => {
              //     console.log(newBookmark);
              //     dispatch({ type: 'createAction', payload: newBookmark[0] });
              //   }
              // );
              e.stopPropagation();
              createAction(
                dispatch,
                { parentId: id, title: 'New Folder' },
                createCallback
              );
            }}
          >
            <FaFolderPlus
              className={classes([
                // 'w-[1.5em] ',
                // 'h-[1.5em] ',
                // 'ml-[.5em]',
                // 'text-gray-700',
                // !editId ? 'cursor-pointer' : null,
                // 'hover:text-cyan-300',
                // 'w-max',
                'text-[1.6em]',
              ])}
            />
            <span className={classes(['ml-[.4em]', 'text-[1.3em]'])}>add folder</span>
          </div>
          {id === '1' || id === '2' ? null : (
            <div
              className={classes([
                'flex',
                'items-center',
                'hover:text-cyan-300',
                'mt-[.4em]',
                'w-max',
              ])}
              onClick={e => {
                e.stopPropagation();
                let modal = shadow.getElementById('modal');
                modal.style.position = 'absolute';
                modal.style.height = '100vh';
                setModal(true);
              }}
            >
              <FaTrash
                className={classes([
                  // 'w-[1.5em] ',
                  // 'h-[1.5em] ',
                  // 'ml-[.5em]',
                  // 'text-gray-700',
                  !editId ? 'cursor-pointer' : null,
                  // 'hover:text-cyan-300',
                  'text-[1.6em]',
                ])}
              />
              <span className={classes(['ml-[.4em]', 'text-[1.3em]'])}>delete</span>
            </div>
          )}
        </div>
      ) : null}
      {modal
        ? createPortal(
            <Modal
              title={title}
              onDelete={handleDelete}
              onCancel={handleCancel}
              id={id}
            />,
            shadow.getElementById('modal')
          )
        : null}
    </div>
  );
}

export default memo(ActionIcons);
