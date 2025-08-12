import AddForm from "../components/AddForm";
import { PersonelProvider } from "../personelContext";
function EklemeSayfası() {
    return (<>
    <h1 className="baslik">Personel Ekleme</h1>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <PersonelProvider>
    <AddForm />
    </PersonelProvider>
    </div>
    </>  );
}

export default EklemeSayfası;
