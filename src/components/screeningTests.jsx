import React from "react";

const ScreeningTest = ({ user }) => {
  return (
    <>
      {user && <h1>تست های غربالگری</h1>}
      {!user && <h4>شما برای انجام تست های غربالگری باید به سیستم وارد شوید</h4>}
    </>
  );
};

export default ScreeningTest;
