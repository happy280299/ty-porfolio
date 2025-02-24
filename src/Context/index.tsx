import { createContext, useState, ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

interface StoreContextValue {
  isDesktop: any;
  isTablet: any;
  isMobile: any;
  setValueProvider: any;
  valueProvider: any;
  setValueLetter: any;
  valueLetter: any;
  netWorkMember: any;
  setNetWorkMember: any;
}
interface Props {
  children: ReactNode;
}
export const ContextProviderWrapper = createContext<StoreContextValue | null>(
  null
);
export const ContextProvider: React.FC<Props> = ({ children }: Props) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ maxWidth: 1023, minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [valueProvider, setValueProvider] = useState(false);
  const [valueLetter, setValueLetter] = useState(false);
  const [netWorkMember, setNetWorkMember] = useState(false);

  return (
    <ContextProviderWrapper.Provider
      value={{
        isDesktop,
        isTablet,
        isMobile,
        setValueProvider,
        valueProvider,
        setValueLetter,
        valueLetter,
        netWorkMember,
        setNetWorkMember,
      }}
    >
      {children}
    </ContextProviderWrapper.Provider>
  );
};
