import { h } from 'preact';
import { memo } from 'preact/compat';
import { classes } from './helpers';
import { FaRegFolderOpen, FaRegFolder, FaAngleUp, FaAngleDown } from 'react-icons/fa';

function FolderDetails({ title, editMode, open, onOpen, handleChanges, changes }) {
  // console.log('folderDetails', title);
  const folderName = () => {
    if (editMode) {
      return (
        <input
          className={classes([
            'caret-black',
            'p-[.5em]',
            'bg-slate-100',
            'rounded-md',
            'outline-none',
            'w-[100%]',
            'text-black',
            'text-xs',
            'ml-[.5em]',
          ])}
          onInput={handleChanges}
          defaultValue={title}
          value={changes.title}
          required="required"
          type="text"
          name="title"
        />
      );
    } else {
      return (
        <p
          class={classes([
            'whitespace-nowrap ',
            'text-ellipsis',
            'overflow-hidden',
            '[font-size:1.4em]',
            editMode ? 'text-black' : null,
            'w-[90%]',
            'ml-[.5em]',
          ])}
        >
          {title}
        </p>
      );
    }
  };

  return (
    <div
      className={classes([
        'flex',
        'items-center',
        // 'gap-2 ',
        'cursor-pointer',
        'hover:bg-slate-800',
        'py-[.5em]',
        'rounded-sm',
        'group',
        'w-[80%]',
      ])}
      onClick={e => {
        // e.stopPropagation();
        onOpen(e);
        console.log(document.fonts.check('16px Roboto'));
      }}
      title={title}
    >
      {open ? (
        <div>
          <FaRegFolderOpen className={classes(['w-[2em]', 'h-[2em]', 'text-cyan-300'])} />
        </div>
      ) : (
        <div>
          <FaRegFolder className={classes(['w-[2em]', 'h-[2em]', 'text-cyan-300'])} />
        </div>
      )}
      {folderName()}

      {open ? (
        <div className={classes(['ml-auto'])}>
          <FaAngleUp className={classes(['w-[1.5em]', 'h-[1.5em]', 'text-cyan-300'])} />
        </div>
      ) : (
        <div className={classes(['ml-auto'])}>
          <FaAngleDown
            className={classes(['w-[1.5em]', 'h-[1.5em]', 'text-cyan-300', 'ml-auto'])}
          />
        </div>
      )}
    </div>
  );
}
export default memo(FolderDetails);
