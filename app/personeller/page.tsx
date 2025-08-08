"use client";
import Link from "next/link";
import { liste } from "../personel";

function Personel() { 
    return (
      <div>
        <h1 className="text-3xl font-bold underline">Personel Listesi</h1>
        <ul className="list-disc pl-5">
          {liste.map((personel, index) => (
            <li key={index}>
              {personel.isim} {personel.soyisim} - Yaş: {personel.yas} - Emekli: {personel.emekli ? "Evet" : "Hayır"}
              <Link href={`/personeller/${index}`} className="text-blue-500 hover:underline ml-2">
                Detaylar...
              </Link>
              
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Personel;