'use client';
import { FormEvent, useState } from 'react';

function PersonelEkle() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [cv, setCv] = useState('');
    const [personeller, setPersoneller] = useState([]);

    const onsubmit = (e: FormEvent) => {
        e.preventDefault();
        const newPersonel = { name, surname, cv };
        setPersoneller([...personeller, newPersonel]);
        setName('');
        setSurname('');
        setCv('');
        alert('Personel başarıyla eklendi!');
    };

    return (
        <div>
            <form onSubmit={onsubmit} className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-3xl font-bold underline mb-4">Personel Ekle</h1>
                <input
                    type="text"
                    placeholder="İsim"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="mb-2 p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Soyisim"
                    value={surname}
                    onChange={e => setSurname(e.target.value)}
                    className="mb-2 p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="CV"
                    value={cv}
                    onChange={e => setCv(e.target.value)}
                    className="mb-2 p-2 border border-gray-300 rounded"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Ekle
                </button>
            </form>
            <ul>
                {personeller.map((p, i) => (
                    <li key={i}>{p.name} {p.surname} - {p.cv}</li>
                ))}
            </ul>
        </div>
    );
}

export default PersonelEkle;