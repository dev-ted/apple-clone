import "./App.css";
import React, { createContext, useEffect, useState, useContext } from "react";

import MobileView from "./Views/MobileView";
import DesktopView from "./Views/DesktopView";

const viewportProvider = createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handlewindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handlewindowResize);
    return () => window.removeEventListener("resize", handlewindowResize);
  }, []);

  return (
    <viewportProvider.Provider value={{ width, height }}>
      {children}
    </viewportProvider.Provider>
  );
};

const useViewport = () => {
  const { width, height } = useContext(viewportProvider);
  return { width, height };
};

const MobileComponent = () => {
  return <div className="app">
    <MobileView />
  </div>;
};

const DesktopComponent = () => {
  return <DesktopView />;
};

const Component = () => {
  const { width } = useViewport();
  const breakpoint = 800;
  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};
function App() {
  return (
   
    <ViewportProvider>
    <Component />
  </ViewportProvider>
  );
}

export default App;
