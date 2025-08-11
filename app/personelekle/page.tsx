'use client';
import { FormEvent, useState } from 'react';
import {personelList} from "../components";

function PersonelEkle() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [cv, setCv] = useState('');
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!name || !surname) {
            alert("İsim ve soyisim alanları boş bırakılamaz!");
            return;
        }
        setName('');
        setSurname('');
        setCv('');
        const newPersonel = {
            isim: name,
            soyisim: surname,
            yas: '21', 
            emekli: false, 
            cv: cv || 'CV bilgisi yok', 
        };
        alert("Personel başarıyla eklendi!");
        console.log("Yeni personel eklendi:", newPersonel);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-3xl font-bold underline mb-4">Personel Ekle</h1>
                <input
                    type="text"
                    placeholder="İsim"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mb-2 p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Soyisim"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    className="mb-2 p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="CV"
                    value={cv}
                    onChange={(e) => setCv(e.target.value)}
                    className="mb-2 p-2 border border-gray-300 rounded"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Ekle
                </button>
            </form>
        </div>
    );
}

export default PersonelEkle;