'use client';
import {  PersonelProvider , usePersonelContext} from "../personelContext";
import AddForm from "../components/AddForm";
import ListelemeSayfasi from "../components/Listelemesayfasi";


export  function Liste() {
   
   return( <>
    <PersonelProvider>
    <ListelemeSayfasi/>
    </PersonelProvider>
    </>  );
}


export default Liste;