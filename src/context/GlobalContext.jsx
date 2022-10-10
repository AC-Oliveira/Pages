import { useMemo } from 'react';
import { createContext, useState } from 'react';
import { isMobile } from 'react-device-detect';

const defaultValue = {
  active: isMobile,
  setActive: () => {},
};

export const GlobalContext = createContext(defaultValue);

export default function GlobalProvider({ children }) {
  const [active, setActive] = useState(isMobile);

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 767 && !active) {
      // const contentItems = document.getElementsByClassName('content');
      // console.log(contentItems);
      // contentItems[0].style.minHeight = '';
      setActive(true);
    } else if (window.innerWidth > 767 && active) {
      setActive(false);
    }
  });

  const value = {
    active,
    setActive,
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoValue = useMemo(() => value, [value, active]);

  // @ts-ignore
  return <GlobalContext.Provider value={memoValue}>{children}</GlobalContext.Provider>;
}
