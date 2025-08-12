'use client';
import {  PersonelProvider } from "../personelContext";
import ListelemeSayfasi from "../components/Listelemesayfasi";


export  function Liste() {
   
   return( <>
    <PersonelProvider>
    <ListelemeSayfasi/>
    </PersonelProvider>
    </>  );
}


export default Liste;