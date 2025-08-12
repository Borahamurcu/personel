'use client';
import {  PersonelProvider } from "../personelContext";
import ListelemeSayfasi from "../components/Listelemesayfasi";


export function Liste() {
   
   return( <div>
    <PersonelProvider>
    <ListelemeSayfasi/>
    </PersonelProvider>
    </div>  );
}


export default Liste;