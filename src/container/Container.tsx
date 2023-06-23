import * as React from 'react';
import { ProductTypes } from '../types/product.tsx';

// HIGHER ORDER COMPONENT

function Container<Props>(Presentation: React.ComponentType<Props>) {
  function newContianer() {
    const [sides, setSides] = React.useState(() => [
      { productName: 'French Fries', size: 'med', price: '1.11' },
      { productName: 'Onion Rings', size: 'med', price: '1.12' },
      { productName: 'Cheese Curds', size: 'med', price: '1.22' },
    ]);
    return <Presentation sides={sides} />;
  }
  return newContianer;
}

export default Container;
