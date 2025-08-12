"use client";
import React from "react";
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

const PersonelContext = createContext<PersonelContextType | undefined>(
  undefined
);

export const PersonelProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [personel, setPersonel] = useState<Personel[]>([]);

  React.useEffect(() => {
    const savedPersonels = JSON.parse(
      localStorage?.getItem("personelListesi") ?? "[]"
    );

    if (savedPersonels) setPersonel([...savedPersonels]);
  }, []);

  const addPersonel = (newPersonel: Personel) => {
    setPersonel((p) => {
      const updated = [...p, newPersonel];
      localStorage.setItem("personelListesi", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <PersonelContext value={{ personel, addPersonel }}>
      {children}
    </PersonelContext>
  );
};

export const usePersonelContext = () => {
  const context = useContext(PersonelContext);
  if (!context) {
    throw new Error(
      "usePersonelContext must be used within a PersonelProvider"
    );
  }
  return context;
};
