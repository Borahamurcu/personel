'use client';
import { useState } from "react";



function AddForm() {
    const [yeniPersonel, setYeniPersonel] = useState({
        isim: "",
        soyisim: "",
        yas: 0,
        emekli: false,
        cv: ""
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const mevcutpersonellist = JSON.parse(localStorage.getItem('personelListesi')|| "[]") ;
        const yeniListe = [...mevcutpersonellist, yeniPersonel];
        localStorage.setItem('personelListesi', JSON.stringify(yeniListe));
        setYeniPersonel({
            isim: "",
            soyisim: "",
            yas: 0,
            emekli: false,
            cv: ""
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded shadow-md text-black">
            <input 
                type="text" 
                value={yeniPersonel.isim} 
                placeholder="İsim"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={(e) => setYeniPersonel({ ...yeniPersonel, isim: e.target.value })} 
            />
            <input
                type="text" 
                value={yeniPersonel.soyisim} 
                placeholder="Soyisim"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={(e) => setYeniPersonel({ ...yeniPersonel, soyisim: e.target.value })}
            />
            <input
                type="number"
                value={yeniPersonel.yas}
                placeholder="Yaş"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={(e) => setYeniPersonel({ ...yeniPersonel, yas: Number(e.target.value) })}
            />
            <label>Emekli mi?</label>
            <input
                type="checkbox"
                checked={yeniPersonel.emekli}
                className="mr-2"
                onChange={(e) => setYeniPersonel({ ...yeniPersonel, emekli: e.target.checked })}
            />
            <input
                type="text"
                value={yeniPersonel.cv}
                placeholder="CV Linki"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={(e) => setYeniPersonel({ ...yeniPersonel, cv: e.target.value })}
            />
            <button type="submit" className="buttton">Ekle</button>
        </form>
       
    
    
        
    );
}

export default AddForm;