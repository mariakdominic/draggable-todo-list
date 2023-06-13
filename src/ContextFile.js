import React, { useState } from "react";

export const DataListContext = React.createContext([]);

export function DataList(props) {
  const [data, setData] = useState([]);
  return (
    <DataListContext.Provider value={[data, setData]}>
      {props.children}
    </DataListContext.Provider>
  );
}
