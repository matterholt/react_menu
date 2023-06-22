import * as React from 'react';
import './style.css';
import { PresentaionIndoor, PresentaionOutdoor } from './presentation';

export default function App() {
  return (
    <div>
      <h1>Higher Order Menu</h1>
      <div></div>
      <div className="menu_section">
        <PresentaionIndoor />
      </div>
      <div className="menu_section">
        <PresentaionOutdoor />
      </div>
    </div>
  );
}
