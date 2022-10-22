import React from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps, GetServerSidePropsContext } from 'next'
// Components
import Layout from "../../components/Header/layout"
import NavSection from  "../../components/Header/Nav"
import SidebarSection from  "../../components/Header/Sidebar"
import CreateFacture from "../../components/Facture/CreateFacture"
// export const getStaticProps:GetStaticProps = async () => {
//     const res = await fetch("https://32zx701gtd.execute-api.af-south-1.amazonaws.com/prod");
//     const data = await res.json()
  
//     return {
//       props: {
//         etages: data.body,
//       },
//     };
// };

const Facture = (props: { etages: any; }) => {
    
    return (
        <Layout>
        <NavSection/>
        <SidebarSection name={"Facture"}/>
        <CreateFacture/>
        </Layout>
    );
  };
  
  export default Facture;
  