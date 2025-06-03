import { createContext, useContext, useState, type ReactNode } from "react";

interface CounterContextI{
  count?:number;
  onIncrementCount?: () => void;
  onDecrementCount?: () => void;
}

export const CounterContext = createContext<CounterContextI>(null!);

export function CounterProvider({children}: {children: ReactNode}){
  const [count, setCount] = useState(0);

  const onIncrementCount = () => {
    setCount(prev => prev + 1);
  }

  const onDecrementCount = () => {
    setCount(prev => prev > 0 ? (prev - 1) : 0);
  }

  return(
    <CounterContext.Provider value={{count, onIncrementCount, onDecrementCount}}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter(){
  const context = useContext(CounterContext);
  if(!context) throw new Error("CounterContext doit être utilisé à l'intérieur du ContextProvider.");
  return context;
}