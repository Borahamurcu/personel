'use client';
import Link from "next/link";
import { useParams } from "next/navigation";
import { liste } from "../../../personel";

function cvId() {
    const params = useParams();
    const personalIndex = Number(params.personalid);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold underline mb-4">Personel Kartı</h1>
            <p>{personalIndex + 1}. Personel</p>
            <p>İsim: {liste[personalIndex].isim}</p>
            <p>Soyisim: {liste[personalIndex].soyisim}</p>
            <p>Cv:{liste[personalIndex].cv}</p>
        </div>
    );
}

export default cvId;