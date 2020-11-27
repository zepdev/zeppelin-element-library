import React from 'react';
import guidelines from '../themes/guidelines.json';

function TypographyPage() {
  const getTypo = (type, amount, suffix = '') => {
    let content = [];
    if (!amount) {
      content.push(
        <h1
          key={`typo-${type}`}
          className={`zep-typo--${type}`}
          style={{ marginBottom: 15 }}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h1>
      );
      return content;
    }
    for (let i = 1; i <= amount; i++) {
      content.push(
        <h1
          key={`typo-${type}-${i}${suffix}`}
          className={`zep-typo--${type}-${i}${suffix}`}
          style={{ marginBottom: 15 }}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}-{i}
          {suffix}
        </h1>
      );
    }
    return content;
  };

  return (
    <>
      <div style={{ color: guidelines.color.black['84'] }}>
        <div style={{ marginBottom: 30 }}>{getTypo('display', 6)}</div>
        <div style={{ marginBottom: 30 }}>{getTypo('headline', 6)}</div>
        <div style={{ marginBottom: 30 }}>{getTypo('headline', 6, '_alt')}</div>
        <div style={{ marginBottom: 30 }}>{getTypo('section-header')}</div>
        <div style={{ marginBottom: 30 }}>{getTypo('body-large')}</div>
        <div style={{ marginBottom: 30 }}>{getTypo('body-default')}</div>
        <div style={{ marginBottom: 30 }}>{getTypo('body-small')}</div>
        <div style={{ marginBottom: 30 }}>{getTypo('body-extra-small')}</div>
        <div style={{ marginBottom: 30 }}>{getTypo('menu-item')}</div>
      </div>
    </>
  );
}

export default TypographyPage;
