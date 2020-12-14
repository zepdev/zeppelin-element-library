import React from 'react';

function NotificationPage() {
  const variants = ['default', 'alert', 'success', 'info', 'warning'];
  return (
    <>
      {variants.map((variant) => (
        <div style={{ marginBottom: 15 }} key={`notification${variant}`}>
          <div className={`zep-notification zep-notification--${variant}`}>
            Notification {variant}
          </div>
        </div>
      ))}
    </>
  );
}

export default NotificationPage;
