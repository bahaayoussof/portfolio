import React from "react";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    const date = new Date();
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">
              Copyright &copy; {date.getFullYear()} Bahaa
            </p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
      </div>
    );
  };

export default AppWrap;
