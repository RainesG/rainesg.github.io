'use client';

const RequestPermission = () => {
  Notification.requestPermission();
};

export function PageTest() {
  return (
    <>
      <div onClick={RequestPermission}>Request Permission</div>
    </>
  );
}
