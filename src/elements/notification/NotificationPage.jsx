import React from 'react';

function NotificationPage() {
  const variants = ['danger', 'success', 'info', 'warning'];
  return (
    <>
      {variants.map((elem) => (
        <div style={{ marginBottom: 15 }} key={`notification${elem}`}>
          <div className={`zep-notification zep-notification--${elem}`}>
            Notification
          </div>
        </div>
      ))}
    </>
  );
}

export default NotificationPage;
