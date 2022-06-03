import React from 'react';
import {useState} from 'react';
import {
  DndContext,
  DragOverlay,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core';
import {useReducer} from 'react';
// let foldersArr = new Array(5).fill({children: [], title: null});
let foldersArr = [
  {
    children: [
      {
        dateAdded: 1650040554000,
        id: '8',
        index: 0,
        parentId: '7',
        title: 'Get Help',
        url: 'https://support.mozilla.org/en-US/products/firefox',
      },
      {
        dateAdded: 1650040554000,
        id: '10',
        index: 1,
        parentId: '7',
        title: 'Get Involved',
        url: 'https://www.mozilla.org/en-US/contribute/',
      },
      {
        dateAdded: 1650040554000,
        id: '9',
        index: 2,
        parentId: '7',
        title: 'Customize Firefox',
        url:
          'https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars?utm_source=firefox-browser&utm_medium=default-bookmarks&utm_campaign=customize',
      },
    ],
    dateAdded: 1650391114029,
    dateGroupModified: 1652444508404,
    id: '7',
    index: 0,
    parentId: '6',
    title: 'Mozilla Firefox',
  },
  {
    children: [
      {
        dateAdded: 1650040554000,
        id: '13',
        index: 0,
        parentId: '12',
        title: 'Ubuntu',
        url: 'http://www.ubuntu.com/',
      },
      {
        dateAdded: 1650040554000,
        id: '14',
        index: 1,
        parentId: '12',
        title: 'Ubuntu Wiki (community-edited website)',
        url: 'http://wiki.ubuntu.com/',
      },
      {
        dateAdded: 1650040554000,
        id: '15',
        index: 2,
        parentId: '12',
        title: 'Make a Support Request to the Ubuntu Community',
        url: 'https://answers.launchpad.net/ubuntu/+addquestion',
      },
      {
        dateAdded: 1650040554000,
        id: '16',
        index: 3,
        parentId: '12',
        title: 'Debian (Ubuntu is based on Debian)',
        url: 'http://www.debian.org/',
      },
      {
        dateAdded: 1650040554000,
        id: '11',
        index: 4,
        parentId: '12',
        title: 'About Us',
        url: 'https://www.mozilla.org/en-US/about/',
      },
    ],
    dateAdded: 1650391114030,
    dateGroupModified: 1652444504684,
    id: '12',
    index: 1,
    parentId: '6',
    title: 'Ubuntu and Free Software links',
  },
  {
    children: [
      {
        dateAdded: 1650056080000,
        id: '18',
        index: 0,
        parentId: '17',
        title: 'The Beginner’s Guide to iptables, the Linux Firewall',
        url:
          'https://www.howtogeek.com/177621/the-beginners-guide-to-iptables-the-linux-firewall/',
      },
      {
        dateAdded: 1650096251000,
        id: '19',
        index: 1,
        parentId: '17',
        title:
          'Linux: Case-insensitive file searching with locate and find | alvinalexander.com',
        url:
          'https://alvinalexander.com/blog/post/linux-unix/case-insensitive-file-searching-unix-linux-mac-osx/',
      },
      {
        dateAdded: 1650098794000,
        id: '20',
        index: 2,
        parentId: '17',
        title: 'nouveau',
        url: 'https://nouveau.freedesktop.org/',
      },
      {
        dateAdded: 1650101362000,
        id: '21',
        index: 3,
        parentId: '17',
        title:
          'Install NVIDIA [510.60.02 / 495.46 / 470.103.01 / 390.147 / 340.108] Drivers on Debian / Ubuntu / Linux Mint / LMDE – If Not True Then False',
        url:
          'https://www.if-not-true-then-false.com/2021/debian-ubuntu-linux-mint-nvidia-guide/',
      },
      {
        dateAdded: 1650102548000,
        id: '22',
        index: 4,
        parentId: '17',
        title:
          'Nvidia driver 390 broken dependencies install preventing uninstall or new install - Ask Ubuntu',
        url:
          'https://askubuntu.com/questions/1270341/nvidia-driver-390-broken-dependencies-install-preventing-uninstall-or-new-instal',
      },
      {
        dateAdded: 1650102553000,
        id: '23',
        index: 5,
        parentId: '17',
        title: 'NVIDIA GT 540M Linux Driver',
        url: 'https://ubuntuforums.org/showthread.php?t=2113259',
      },
      {
        dateAdded: 1650102557000,
        id: '24',
        index: 6,
        parentId: '17',
        title: 'Pop OS 21.04 Nvidia Error driver 390 : pop_os',
        url:
          'https://www.reddit.com/r/pop_os/comments/r78zxw/pop_os_2104_nvidia_error_driver_390/',
      },
      {
        dateAdded: 1650119743000,
        id: '25',
        index: 7,
        parentId: '17',
        title: "How to Change Ubuntu's Login Screen Background - OMG! Ubuntu!",
        url:
          'https://www.omgubuntu.co.uk/2022/01/change-ubuntu-login-screen-background',
      },
      {
        dateAdded: 1650136739000,
        id: '26',
        index: 8,
        parentId: '17',
        title: 'apt - How to list all installed packages - Ask Ubuntu',
        url:
          'https://askubuntu.com/questions/17823/how-to-list-all-installed-packages',
      },
      {
        dateAdded: 1650139161000,
        id: '27',
        index: 9,
        parentId: '17',
        title: 'Ubuntu Manpage: apt-clone - manual page for apt-clone 0.2',
        url:
          'http://manpages.ubuntu.com/manpages/trusty/en/man8/apt-clone.8.html',
      },
      {
        dateAdded: 1650205789000,
        id: '28',
        index: 10,
        parentId: '17',
        title:
          'wireless - Is it possible to setup a shortcut for enable/disable wifi? - Ask Ubuntu',
        url:
          'https://askubuntu.com/questions/17734/is-it-possible-to-setup-a-shortcut-for-enable-disable-wifi',
      },
      {
        dateAdded: 1650263832000,
        id: '29',
        index: 11,
        parentId: '17',
        title:
          'How to share and transfer files between Linux and Windows | FOSS Linux',
        url:
          'https://www.fosslinux.com/19265/how-to-share-and-transfer-files-between-linux-and-windows.htm',
      },
      {
        dateAdded: 1650265333000,
        id: '30',
        index: 12,
        parentId: '17',
        title: 'How to use Syncplay for videos on Linux | FOSS Linux',
        url: 'https://www.fosslinux.com/58008/syncplay-for-videos-on-linux.htm',
      },
      {
        dateAdded: 1650265705000,
        id: '31',
        index: 13,
        parentId: '17',
        title: 'Open Source Home Theater Software | Kodi',
        url: 'https://kodi.tv/',
      },
      {
        dateAdded: 1650265891000,
        id: '32',
        index: 14,
        parentId: '17',
        title: 'How to list and attach Tmux sessions | FOSS Linux',
        url:
          'https://www.fosslinux.com/58718/list-and-attach-tmux-sessions.htm',
      },
      {
        dateAdded: 1650990524364,
        id: '116',
        index: 15,
        parentId: '17',
        title: 'NixOS - NixOS Linux',
        url: 'https://nixos.org/',
      },
      {
        dateAdded: 1651331988437,
        id: '148',
        index: 16,
        parentId: '17',
        title:
          'shell script - Move files that have the same case-insensitive filename - Unix & Linux Stack Exchange',
        url:
          'https://unix.stackexchange.com/questions/436548/move-files-that-have-the-same-case-insensitive-filename',
      },
      {
        dateAdded: 1651332621936,
        id: '149',
        index: 17,
        parentId: '17',
        title:
          'file management - Is there a linux command like mv but with regex? - Super User',
        url:
          'https://superuser.com/questions/70217/is-there-a-linux-command-like-mv-but-with-regex',
      },
      {
        dateAdded: 1651732022499,
        id: '189',
        index: 18,
        parentId: '17',
        title: 'How to automatically run program on Linux startup',
        url:
          'https://www.simplified.guide/linux/automatically-run-program-on-startup',
      },
      {
        dateAdded: 1651733072411,
        id: '190',
        index: 19,
        parentId: '17',
        title: 'The Linux Directory Structure, Explained',
        url:
          "https://www.howtogeek.com/117435/htg-explains-the-linux-directory-structure-explained/#:~:text=The%20%2Fetc%20directory%20contains%20configuration,in%20each%20user's%20home%20directory.",
      },
      {
        dateAdded: 1651836423110,
        id: '208',
        index: 20,
        parentId: '17',
        title:
          'Function Keys Do Not work (Brightness & Sound) Ubuntu 16.04 - Ask Ubuntu',
        url:
          'https://askubuntu.com/questions/866437/function-keys-do-not-work-brightness-sound-ubuntu-16-04',
      },
      {
        dateAdded: 1651836571012,
        id: '209',
        index: 21,
        parentId: '17',
        title:
          '[SOLVED] Volume function keys (from laptop, external keyboard works) get stuck in X11/Wayland (but seem to work with kernel)',
        url:
          'https://www.linuxquestions.org/questions/linux-laptop-and-netbook-25/volume-function-keys-from-laptop-external-keyboard-works-get-stuck-in-x11-wayland-but-seem-to-work-with-kernel-4175650371/',
      },
      {
        dateAdded: 1652429556097,
        id: '248',
        index: 22,
        parentId: '17',
        title:
          'How to use grep command in Linux/ Unix with examples - nixCraft',
        url:
          'https://www.cyberciti.biz/faq/howto-use-grep-command-in-linux-unix/',
      },
    ],
    dateAdded: 1650391114030,
    dateGroupModified: 1652429612415,
    id: '17',
    index: 2,
    parentId: '6',
    title: 'linux',
  },
  {
    children: [
      {
        dateAdded: 1650232237000,
        id: '34',
        index: 0,
        parentId: '33',
        title:
          'Course - How to Write an Open Source JavaScript Library from @kentcdodds on @eggheadio',
        url:
          'https://app.egghead.io/playlists/how-to-write-an-open-source-javascript-library',
      },
      {
        dateAdded: 1650233740000,
        id: '35',
        index: 1,
        parentId: '33',
        title:
          'How to customize Node.js .env files for different environment stages',
        url:
          'https://www.freecodecamp.org/news/nodejs-custom-env-files-in-your-apps-fa7b3e67abe1/',
      },
      {
        dateAdded: 1650444014192,
        id: '45',
        index: 2,
        parentId: '33',
        title: 'Overview - Qwik',
        url: 'https://qwik.builder.io/guide/overview',
      },
      {
        dateAdded: 1650444605935,
        id: '46',
        index: 3,
        parentId: '33',
        title: 'Tropical — static site generator',
        url: 'https://tropical.js.org/',
      },
      {
        dateAdded: 1650444708040,
        id: '47',
        index: 4,
        parentId: '33',
        title: 'Middleman: Hand-crafted frontend development',
        url: 'https://middlemanapp.com/',
      },
      {
        dateAdded: 1650444760026,
        id: '48',
        index: 5,
        parentId: '33',
        title: 'Metalsmith | Home',
        url: 'https://www.metalsmith.io/',
      },
      {
        dateAdded: 1650444847213,
        id: '49',
        index: 6,
        parentId: '33',
        title: 'Astro',
        url: 'https://astro.build/',
      },
      {
        dateAdded: 1650444872106,
        id: '50',
        index: 7,
        parentId: '33',
        title: 'RedwoodJS: The App Framework for Startups | RedwoodJS.com',
        url: 'https://redwoodjs.com/',
      },
      {
        dateAdded: 1650445423640,
        id: '51',
        index: 8,
        parentId: '33',
        title: 'Immutable.js',
        url: 'https://immutable-js.com/',
      },
      {
        dateAdded: 1650445905810,
        id: '54',
        index: 9,
        parentId: '33',
        title: 'Collection: Front-end JavaScript frameworks',
        url: 'https://github.com/collections/front-end-javascript-frameworks',
      },
      {
        dateAdded: 1650445893875,
        id: '53',
        index: 10,
        parentId: '33',
        title: 'Home | Aurelia',
        url: 'http://aurelia.io/',
      },
      {
        dateAdded: 1650487940704,
        id: '64',
        index: 11,
        parentId: '33',
        title:
          "Allow External Styling of a Web Component's Shadow DOM | egghead.io",
        url:
          'https://egghead.io/lessons/html-5-allow-external-styling-of-a-web-component-s-shadow-dom',
      },
      {
        dateAdded: 1650488180045,
        id: '65',
        index: 12,
        parentId: '33',
        title:
          'Encapsulating Style and Structure with Shadow DOM | CSS-Tricks - CSS-Tricks',
        url:
          'https://css-tricks.com/encapsulating-style-and-structure-with-shadow-dom/',
      },
      {
        dateAdded: 1650495006428,
        id: '67',
        index: 13,
        parentId: '33',
        title:
          'super_css_inject/popup.js at 1446404f9fbf59754b4f4a1738ffa1e5cb705c9e · nelsonr/super_css_inject',
        url:
          'https://github.com/nelsonr/super_css_inject/blob/1446404f9fbf59754b4f4a1738ffa1e5cb705c9e/src/popup.js#L123',
      },
      {
        dateAdded: 1650634372886,
        id: '74',
        index: 14,
        parentId: '33',
        title: 'howler.js - JavaScript audio library for the modern web',
        url: 'https://howlerjs.com/',
      },
      {
        dateAdded: 1650660842857,
        id: '79',
        index: 15,
        parentId: '33',
        title: 'Stitches — CSS-in-JS with near-zero runtime',
        url: 'https://stitches.dev/',
      },
      {
        dateAdded: 1650662103320,
        id: '80',
        index: 16,
        parentId: '33',
        title: 'Riot.js — Simple and elegant component-based UI library',
        url: 'https://riot.js.org/',
      },
      {
        dateAdded: 1650662109257,
        id: '81',
        index: 17,
        parentId: '33',
        title:
          'Hooks | Preact: Fast 3kb React alternative with the same ES6 API. Components & Virtual DOM.',
        url: 'https://preactjs.com/guide/v10/hooks',
      },
      {
        dateAdded: 1650662235969,
        id: '82',
        index: 18,
        parentId: '33',
        title: 'UI Framework | Best of JS',
        url: 'https://bestofjs.org/projects?tags=framework',
      },
      {
        dateAdded: 1650662355890,
        id: '83',
        index: 19,
        parentId: '33',
        title: 'Start Here — Alpine.js',
        url: 'https://alpinejs.dev/start-here',
      },
      {
        dateAdded: 1650663230797,
        id: '84',
        index: 20,
        parentId: '33',
        title:
          'grommet/grommet-starter-new-app: A tutorial to show how to use Grommet with create-react-app.',
        url: 'https://github.com/grommet/grommet-starter-new-app',
      },
      {
        dateAdded: 1650663456807,
        id: '85',
        index: 21,
        parentId: '33',
        title: 'Tutorial – Lit',
        url: 'https://lit.dev/tutorial/',
      },
      {
        dateAdded: 1650664271849,
        id: '86',
        index: 22,
        parentId: '33',
        title: 'RE:DOM',
        url: 'https://redom.js.org/#elements',
      },
      {
        dateAdded: 1650664844640,
        id: '87',
        index: 23,
        parentId: '33',
        title: 'Building a Color Picker Component | Marko',
        url: 'https://markojs.com/docs/color-picker/',
      },
      {
        dateAdded: 1650665008012,
        id: '88',
        index: 24,
        parentId: '33',
        title: 'Component API - Stencil',
        url: 'https://stenciljs.com/docs/api',
      },
      {
        dateAdded: 1650884651069,
        id: '104',
        index: 25,
        parentId: '33',
        title: 'CSSStyleDeclaration JavaScript API',
        url: 'https://www.javascripture.com/CSSStyleDeclaration#size',
      },
      {
        dateAdded: 1650891819743,
        id: '106',
        index: 26,
        parentId: '33',
        title: 'Demo for React Collapse component - CodeSandbox',
        url: 'https://codesandbox.io/s/k1439yw2v5?file=/src/App.js:3741-3745',
      },
      {
        dateAdded: 1651048568355,
        id: '118',
        index: 27,
        parentId: '33',
        title: 'Use JSDoc: Getting Started with JSDoc 3',
        url: 'https://jsdoc.app/about-getting-started.html',
      },
      {
        dateAdded: 1651504363254,
        id: '161',
        index: 28,
        parentId: '33',
        title: 'Make a resizable element - HTML DOM',
        url: 'https://htmldom.dev/make-a-resizable-element/',
      },
      {
        dateAdded: 1651527141002,
        id: '163',
        index: 29,
        parentId: '33',
        title: 'JASON Format',
        url: 'https://jasonformat.com/',
      },
      {
        dateAdded: 1651848770730,
        id: '214',
        index: 30,
        parentId: '33',
        title: 'MooTools Core',
        url: 'https://mootools.net/core',
      },
      {
        dateAdded: 1652340583148,
        id: '239',
        index: 31,
        parentId: '33',
        title:
          'Corset - Declarative reactive UI without the complexity of SPAs',
        url: 'https://corset.dev/',
      },
      {
        dateAdded: 1652463622571,
        id: '250',
        index: 32,
        parentId: '33',
        title: 'Styled System',
        url: 'https://styled-system.com/',
      },
      {
        dateAdded: 1652463694512,
        id: '251',
        index: 33,
        parentId: '33',
        title: 'Theme UI',
        url: 'https://theme-ui.com/',
      },
      {
        dateAdded: 1652464477907,
        id: '252',
        index: 34,
        parentId: '33',
        title:
          'utilitycss/atomic: Framework to build atomic design CSS libraries in a functional manner.',
        url: 'https://github.com/utilitycss/atomic',
      },
    ],
    dateAdded: 1650391114030,
    dateGroupModified: 1652469538848,
    id: '33',
    index: 3,
    parentId: '6',
    title: 'js',
  },
  {
    children: [
      {
        dateAdded: 1650231566000,
        id: '37',
        index: 0,
        parentId: '36',
        title: '24 Pull Requests',
        url: 'https://24pullrequests.com/contributing',
      },
      {
        dateAdded: 1650443805746,
        id: '44',
        index: 1,
        parentId: '36',
        title: 'HTTPie – API testing client that flows with you',
        url: 'https://httpie.io/',
      },
      {
        dateAdded: 1650632700855,
        id: '71',
        index: 2,
        parentId: '36',
        title: 'Grafana - Google Search',
        url: 'https://www.google.com/search?q=Grafana&sourceid=chrome&ie=UTF-8',
      },
    ],
    dateAdded: 1650391114030,
    dateGroupModified: 1650634338615,
    id: '36',
    index: 4,
    parentId: '6',
    title: 'open source',
  },
  {
    children: [
      {
        dateAdded: 1650233377000,
        id: '39',
        index: 0,
        parentId: '38',
        title:
          'Setting up different environment files (prod, dev, qa etc.)in react app | by राहुल मिश्रा | Medium',
        url:
          'https://rahuulmiishra.medium.com/setting-up-different-environment-files-in-react-app-9204d9373584',
      },
      {
        dateAdded: 1651056458856,
        id: '119',
        index: 1,
        parentId: '38',
        title:
          'reactjs - What is the correct proptype for a ref in React? - Stack Overflow',
        url:
          'https://stackoverflow.com/questions/48007326/what-is-the-correct-proptype-for-a-ref-in-react/51127130#51127130',
      },
      {
        dateAdded: 1651056513831,
        id: '120',
        index: 2,
        parentId: '38',
        title:
          'Create collapsible React components with react-collapsed - LogRocket Blog',
        url:
          'https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/',
      },
      {
        dateAdded: 1651056524704,
        id: '121',
        index: 3,
        parentId: '38',
        title: 'Animated Collapse react component',
        url: 'https://codepen.io/aluis92/pen/gKYdmb',
      },
      {
        dateAdded: 1651086797047,
        id: '130',
        index: 4,
        parentId: '38',
        title: 'Reakit – Toolkit for building accessible UIs',
        url: 'https://reakit.io/',
      },
      {
        dateAdded: 1651087050978,
        id: '131',
        index: 5,
        parentId: '38',
        title: 'FAST',
        url: 'https://www.fast.design/',
      },
      {
        dateAdded: 1651088368886,
        id: '132',
        index: 6,
        parentId: '38',
        title: 'Create interactive videos in React | Liqvid',
        url: 'https://liqvidjs.org/',
      },
      {
        dateAdded: 1651173129674,
        id: '143',
        index: 7,
        parentId: '38',
        title: 'Tailwind CSS Alerts - Flowbite',
        url: 'https://flowbite.com/docs/components/alerts/',
      },
      {
        dateAdded: 1651427200859,
        id: '158',
        index: 8,
        parentId: '38',
        title: "React Query and Forms | TkDodo's blog",
        url: 'https://tkdodo.eu/blog/react-query-and-forms',
      },
      {
        dateAdded: 1651782277497,
        id: '198',
        index: 9,
        parentId: '38',
        title:
          'Design decision: why do we need the stale closure problem in the first place? · Issue #16956 · facebook/react',
        url: 'https://github.com/facebook/react/issues/16956#issue-500206671',
      },
      {
        dateAdded: 1651782291816,
        id: '199',
        index: 10,
        parentId: '38',
        title:
          'react-use-event-hook/useEvent.ts at main · scottrippey/react-use-event-hook',
        url:
          'https://github.com/scottrippey/react-use-event-hook/blob/main/src/useEvent.ts',
      },
      {
        dateAdded: 1651821504697,
        id: '204',
        index: 11,
        parentId: '38',
        title:
          'How to use React Suspense for Data Fetching Now | Level Up Coding',
        url:
          'https://levelup.gitconnected.com/how-you-can-use-react-suspense-for-data-fetching-in-real-world-applications-now-9fda8138f687',
      },
      {
        dateAdded: 1651822606643,
        id: '206',
        index: 12,
        parentId: '38',
        title: 'Mocking React Context in Storybook | by John Clarke | Medium',
        url:
          'https://medium.com/@johnclarke73/mocking-react-context-in-storybook-bb57304f2f6c',
      },
      {
        children: [],
        dateAdded: 1651912095885,
        dateGroupModified: 1651912095885,
        id: '217',
        index: 13,
        parentId: '38',
        title: 'New folder',
      },
      {
        dateAdded: 1652200623809,
        id: '227',
        index: 14,
        parentId: '38',
        title: 'Building The Facebook News Feed With Relay – React Blog',
        url:
          'https://reactjs.org/blog/2015/03/19/building-the-facebook-news-feed-with-relay.html',
      },
      {
        dateAdded: 1652200630615,
        id: '228',
        index: 15,
        parentId: '38',
        title: 'JSX, a year in',
        url: 'https://gist.github.com/chantastic/fc9e3853464dffdb1e3c',
      },
      {
        dateAdded: 1652200633647,
        id: '229',
        index: 16,
        parentId: '38',
        title:
          'Presentational and Container Components | by Dan Abramov | Medium',
        url:
          'https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0',
      },
      {
        dateAdded: 1652200639024,
        id: '230',
        index: 17,
        parentId: '38',
        title: 'React Patterns',
        url: 'https://reactpatterns.com/',
      },
    ],
    dateAdded: 1650391114030,
    dateGroupModified: 1652258569189,
    id: '38',
    index: 5,
    parentId: '6',
    title: 'react',
  },
];

// let foldersInit=foldersArr.map(({children,title})=>({children:[]}))
function reducer(state, action) {
  console.log(action);
  //   return state;
  let test = changeFolders(action, state);
  console.log(test);
  return test;
}
const changeFolders = (e, folders) => {
  const {over, active} = e;
  const activeParentId = active.data.current.parentId;
  const overId = over.id;
  return folders.map((item) => {
    if (item.id === overId) {
      let clone = item.children.slice();
      clone.push(active.data.current);
      return {...item, children: clone};
    }
    if (item.id === activeParentId) {
      let clone = item.children.slice();
      clone.splice(active.data.current.index, 1);
      return {...item, children: clone};
    }
    return item;
  });
};
export function App3() {
  const [folders, dispatch] = useReducer(reducer, foldersArr);
  const [active, setActive] = useState({isUrl: false, node: null});

  const handleDragStart = (e) => {
    // console.log(e);
    const {active, over} = e;
    setActive({
      isUrl: Boolean(active.data.current.url),
      node: active.data.current,
    });
  };
  const handleDragEnd = (e) => {
    const {over, active} = e;
    console.log(e);
    if (over.id === active.data.current.parentId) return;
    // let test = changeFolders(e);
    // setFolders(test);
    dispatch(e);
    // console.log(test);
  };

  //   console.log(folders);
  return (
    <div>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        {folders.map((item) => (
          <Folders key={item.title} items={item} />
        ))}

        <DragOverlay dropAnimation={{duration: 500}}>
          {active.isUrl ? (
            <Link title={active.node.title} url={active.node.url} />
          ) : (
            <Folders items={active.node} />
          )}
        </DragOverlay>
      </DndContext>
    </div>
  );
}

function Folders({items}) {
  //   console.log(items);
  return (
    <div
      style={{
        paddingLeft: '1rem',
        border: '1px',
        borderColor: 'black',
        borderStyle: 'solid',
      }}
    >
      <Droppable id={items.id}>
        <Draggable id={items.id} node={items}>
          <FolderDetail items={items} />
          {items.children.map((item) =>
            item.children ? (
              <Folders key={item.title} items={item} />
            ) : (
              <Draggable key={item.id} id={item.id} node={item}>
                <Link key={item.title} title={item.title} url={item.url} />
              </Draggable>
            )
          )}
        </Draggable>
      </Droppable>
    </div>
  );
}

function FolderDetail({items}) {
  return <div style={{marginBottom: '1rem'}}>{items.title}</div>;
}

function Link({title, url}) {
  return (
    <a
      style={{
        marginBottom: '1rem',
        display: 'block',
      }}
      href={url}
    >
      {title}
    </a>
  );
}

function Draggable({id, children, node}) {
  const {attributes, listeners, setNodeRef} = useDraggable({id, data: node});
  return (
    <div {...listeners} {...attributes} ref={setNodeRef}>
      {children}
    </div>
  );
}

function Droppable({id, children}) {
  const {setNodeRef, over} = useDroppable({id});
  return (
    <div
      ref={setNodeRef}
      style={{backgroundColor: over?.id === id ? 'red' : null}}
    >
      {children}
    </div>
  );
}
