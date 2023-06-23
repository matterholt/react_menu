import * as React from 'react';

interface MenuHeader {
  children: React.ReactNode;
}

function MenuHeader(props: MenuHeader) {
  const { children } = props;
  return <h2>{children}</h2>;
}

export default MenuHeader;
