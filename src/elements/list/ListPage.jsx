import React from 'react';

function List() {
  return (
    <>
      <ul className="zep-list-bullet" style={{ marginBottom: 30 }}>
        <li className="zep-list-bullet__item">Bullet List Item</li>
      </ul>
      <ul>
        <li className="zep-list-attribute__item">
          <span className="zep-list-attribute__label">label</span>Attribute List
          Item
        </li>
      </ul>
    </>
  );
}

export default List;
