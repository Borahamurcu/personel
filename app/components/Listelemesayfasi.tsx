'use client';
import { usePersonelContext} from "../personelContext";
function ListelemeSayfasi() {
   
    const { personel } = usePersonelContext();
    return (<>
    <h1 className="baslik">Personel Listesi</h1>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <ul className="list-disc p-6">
                {personel.map((p, index) => (
                    <li key={index} className="mb-2">
                        {p.isim} {p.soyisim} - Yaş: {p.yas} - Emekli: {p.emekli ? "Evet" : "Hayır"} - CV: <a href={p.cv} className="text-blue-500">{p.cv}</a>
                    </li>
                ))}
            </ul>
    </div>
    </>  );
}
export default ListelemeSayfasi;