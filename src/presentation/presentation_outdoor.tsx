import * as React from 'react';
import Container from '../container/Container';
import { ProductTypes } from '../types';

function PresentaionOutdoor(props: { sides: ProductTypes[] }) {
  const { sides } = props;
  return (
    <div>
      <h2>OUTDOOR MENU</h2>
      <ul>
        {sides.map((x) => (
          <li>{x.productName}</li>
        ))}
      </ul>
    </div>
  );
}
export default Container(PresentaionOutdoor);
