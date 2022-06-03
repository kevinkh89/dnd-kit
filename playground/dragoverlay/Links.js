// import {h} from 'preact';
// import {memo} from 'preact/compat';
import {useRef, useState, memo} from 'react';
// import ActionIcons from './ActionIcons';
// import {classes} from './helpers';

function Links({id, url, title}) {
  const [base, setBase] = useState([null]);
  /* testing if possible to get the favicon.ico  */
  const s2converter = useRef(
    'http://www.google.com/s2/favicons?domain=www.blogger.com'
  );
  // useEffect(() => {
  //   // console.log(url);
  //   // console.log(typeof url);
  //   // console.log(typeof getBaseUrl(url));
  //   // setBase(getBaseUrl(url));
  // }, []);
  // const getBaseUrl = str => {
  //   let reg = /https?:\/\/[a-zA-z1-9\-]+\.[a-zA-z1-9\-]+\.?[a-zA-Z\-]+/;
  //   return reg.exec(str);
  // };

  return (
    <li
      // class={classes([
      //   'flex',
      //   'items-center',
      //   'gap-[2em]',
      //   'pl-[1em]',
      //   // 'mb-[1em]',
      //   '[color:#F3BF3A]',
      //   'mr-[1em]',
      //   'hover:bg-slate-800',
      //   'p-[.5em]',
      //   'rounded-sm',
      // ])}
      // draggable="true"
      // onDragStart={e => {
      //   console.log([...e.dataTransfer.types]);

      //   // e.dataTransfer.setData('text/plain', e.currentTarget.id);
      //   e.dataTransfer.setData(
      //     'text/json',
      //     JSON.stringify({
      //       id: node.id,
      //       title: node.title,
      //       url: node.url,
      //       element_id: e.currentTarget.id,
      //     })
      //   );
      //   // console.log(e.currentTarget);
      //   console.log('start');
      // }}
      id={`${id}`}
    >
      {/*<img className="w-5" src={base && `${base}/favicon.ico`} />*/}
      {/*<Tooltip text={title} />*/}
      <span
        className="underline underline-offset-2 [font-size:1.4em] whitespace-nowrap
        text-ellipsis
        overflow-x-hidden
   "
        // href={url}
        // target="_blank"
        // title={title}
        onClick={() => {
          let link = document.createElement('a');
          link.href = url;
          link.target = '_blank';
          link.click();
        }}
      >
        {title}
      </span>
    </li>
  );
}

export default memo(Links);
