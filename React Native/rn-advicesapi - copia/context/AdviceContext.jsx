import { createContext, useState, useContext } from 'react';

const AdviceContext = createContext();

export const AdviceProvider = ({ children }) => {
  const [savedAdvices, setSavedAdvices] = useState([]);

  const saveAdvice = (adviceObj) => {
    if (
      adviceObj &&
      !savedAdvices.find(a => a.id === adviceObj.id)
    ) {
      setSavedAdvices(prev => [...prev, adviceObj]);
    }
  };

  return (
    <AdviceContext.Provider value={{ savedAdvices, saveAdvice }}>
      {children}
    </AdviceContext.Provider>
  );
};


export const useAdvice = () => useContext(AdviceContext);
