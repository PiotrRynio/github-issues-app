import React, { createContext, useState } from 'react';

type AppContextType = {
  playerName: string;
  setPlayerName: (newPlayerName: string) => void;
};

const appContextDefaultValue = {
  playerName: '',
  setPlayerName: () => {},
};

const AppContext = createContext<AppContextType>(appContextDefaultValue);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [playerName, setPlayerName] = useState<string>(appContextDefaultValue.playerName);

  return (
    <AppContext.Provider
      value={{
        playerName,
        setPlayerName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
