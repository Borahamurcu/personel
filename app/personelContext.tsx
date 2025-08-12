'use client';
import { createContext, useContext, useState } from "react";

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
    const [personel, setPersonel] = useState<Personel[]>(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('personelListesi');
            return stored ? JSON.parse(stored) : [];
        }
        return [];
    });

    const addPersonel = (newPersonel: Personel) => {
        setPersonel((p) => {
            const updated = [...p, newPersonel];
            localStorage.setItem('personelListesi', JSON.stringify(updated));
            return updated;
        });
    };

    return (
        <PersonelContext.Provider value={{ personel, addPersonel }}>
            {children}
        </PersonelContext.Provider>
    );
};

export const usePersonelContext = () => {
    const context = useContext(PersonelContext);
    if (!context) {
        throw new Error('usePersonelContext must be used within a PersonelProvider');
    }
    return context;
};