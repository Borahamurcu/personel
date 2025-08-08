'use client';
import Link from "next/link";
import { useParams } from "next/navigation";
import { liste } from "../../personel";

function PersonalCard() {
    const params = useParams();
    const personalIndex = Number(params.personelKart);

    if (isNaN(personalIndex) || personalIndex < 0 || personalIndex >= liste.length) {
        return <div>Kişi bulunamadı.</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold underline mb-4">Personel Kartı</h1>
            <p>{personalIndex + 1}. Personel</p>
            <p>İsim: {liste[personalIndex].isim}</p>
            <p>Soyisim: {liste[personalIndex].soyisim}</p>
            <p>Yaş: {liste[personalIndex].yas}</p>
            <p>Emekli: {liste[personalIndex].emekli ? "Evet" : "Hayır"}</p>
            <Link
                href={`/personeller/cv/${personalIndex}`}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded inline-block text-center"
            >
                CV Görüntüle
            </Link>
        </div>
    );
}

export default PersonalCard;