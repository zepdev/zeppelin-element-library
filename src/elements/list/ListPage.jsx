import React from 'react';

function ListPage() {
  return (
    <>
      <ul className="zep-list" style={{ marginBottom: 30 }}>
        <li className="zep-list__item">Bullet List Item</li>
        <li className="zep-list__item">Bullet List Item</li>

        {/*fallback solution*/}
        <li>Bullet List Item</li>
        <li>Bullet List Item</li>
      </ul>
      <ul className="zep-list">
        <li className="zep-list__item zep-list__item--attribute">
          <span className="zep-list__label">label</span>Attribute List Item
        </li>
      </ul>
    </>
  );
}

export default ListPage;
