export function getChromeUrl(asset) {
  return chrome.runtime.getURL(asset);
}
export function classes(cls) {
  let res = cls.filter(Boolean).join(' ');
  return res;
}

export function bookmarkActions(action, cb) {
  let port = chrome.runtime.connect({ name: 'savior' });
  if (action.type === 'edit') {
    console.log(action);
    port.postMessage({ type: action.type, payload: action.payload });
  }
  if (action.type === 'move') {
    port.postMessage({ type: 'move', payload: action.payload });
  }
  if (action.type === 'remove') {
    port.postMessage({ type: 'remove', payload: action.payload });
  }
  if (action.type === 'create') {
    port.postMessage({ type: 'create', payload: action.payload });
  }
  if (action.type === 'search') {
    port.postMessage({ type: 'search', payload: action.payload });
  }
  // port.postMessage(action);
  port.onMessage.addListener(msg => {
    console.log(msg);
    cb(msg);
    port.disconnect();
  });
}
