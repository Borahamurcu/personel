import { PersonelProvider } from "../personelContext";
import ListelemeSayfasi from "../components/ListelemeSayfasi";

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
