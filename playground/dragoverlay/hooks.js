import { useState, useCallback, useEffect, useRef } from 'preact/hooks';

function useFolder(disabled) {
  const [open, setOpen] = useState(false);
  const [changes, setChanges] = useState({ title: null });
  const handleOpen = useCallback(
    e => {
      if (!disabled) {
        setOpen(open => !open);
      }
    },
    [disabled]
  );
  const handleChanges = useCallback(e => {
    setChanges({ title: e.target.value });
  }, []);
  const handleCreateCallback = useCallback(() => {
    if (!open) {
      handleOpen();
      console.log('after create');
    }
  }, [open]);
  return { open, changes, handleChanges, handleOpen, handleCreateCallback };
}

function useDebounced(func, timer) {
  const test = useRef();
  return args => {
    clearTimeout(test.current);
    test.current = setTimeout(() => {
      func(args);
    }, timer);
  };
}
// }
export { useFolder, useDebounced };
