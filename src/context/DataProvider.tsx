import React from "react";

type GatsbyPageContext = {
  pageContext: {
    databaseId: number
    id: string
  }
}

const DataContext = React.createContext<GatsbyPageContext>({
  pageContext: {
    databaseId: 0,
    id: '',
  }
});

const DataProvider = ({ children, value }: { children: any, value: any}) => {
  const { pageContext } = value;

  return (
    <DataContext.Provider value={{
      pageContext
    }}>
      {children}
    </DataContext.Provider>
  )
};

export default DataContext;
export { DataProvider };