import ListelemeSayfasi from "../components/ListelemeSayfasi";
import { PersonelProvider } from "../personelContext";

function Page() {
  return (
    <div>
      <PersonelProvider>
        <ListelemeSayfasi />
      </PersonelProvider>
    </div>
  );
}

export default Page;
