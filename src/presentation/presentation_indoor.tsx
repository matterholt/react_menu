import * as React from 'react';
import Container from '../container/Container';
import { MenuHeader } from '../component';

import { ProductTypes } from '../types';

function PresentaionIndoor(props: { sides: ProductTypes[] }) {
  const { sides } = props;
  return (
    <div>
      <MenuHeader>INDOOR MENU</MenuHeader>
      <ul>
        {sides.map((x) => (
          <li>{x.productName}</li>
        ))}
      </ul>
    </div>
  );
}
export default Container(PresentaionIndoor);
