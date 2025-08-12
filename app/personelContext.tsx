'use client';
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

type Personel = {
    id: number;
    isim: string;
    soyisim: string;
    yas: number;
    emekli: boolean;
    cv: string;
};
type PersonelContextType = {
    personel: Personel[];
    addPersonel: (newPersonel: Personel) => void;
};

const PersonelContext = createContext<PersonelContextType | undefined>(undefined);

export const PersonelProvider = ({ children }: { children: React.ReactNode }) => {
    const [personel, setPersonel] = useState<Personel[]>([]);
const addPersonel = (newPersonel: Personel) => {
    setPersonel((p) => [...p, newPersonel]);
};
return (
    <PersonelContext.Provider value={{ personel, addPersonel }}>
        {children}
    </PersonelContext.Provider>
);
}
export const usePersonelContext = () => {
  const context = useContext(PersonelContext);
  if (!context) {
    throw new Error('usePersonelContext must be used within a PersonelProvider');
  }
  return context;
};
