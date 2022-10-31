import React from "react";
import Details from "../../components/common/Details";
import { GetStaticProps, GetStaticPaths, GetServerSideProps, GetServerSidePropsContext } from 'next'
// Components
import Layout from "../../components/Header/layout"
import NavSection from  "../../components/Header/Nav"
import SidebarSection from  "../../components/Header/Sidebar"

export const getStaticPaths: GetStaticPaths = async () => {
  const body = [
      { id: "4", A: "4A", B: "4B", C: "4C", D: "4D", E: "4E" },
      { id: "3", A: "3A", B: "3B", C: "3C", D: "3D", E: "3E" },
      { id: "2", A: "2A", B: "2B", C: "2C", D: "2D", E: "2E" },
      { id: "1", A: "1A", B: "1B", C: "1C", D: "1D", E: "1E" },
      { id: "R", A: "RA", B: "RB", C: "RC", D: "RD", E: "RE" },
  ];
  const paths = body.map((etage) => ({
      params: { id: "4A"},
    }))
  
  return { paths, fallback: 'blocking' }
}

export const getStaticProps:GetStaticProps = async () => {
    const res = await fetch("https://32zx701gtd.execute-api.af-south-1.amazonaws.com/prod");
    const data = await res.json()
  
    return {
      props: {
        etages: data.body,
      },
    };
};

const DashboardTableSection = (props: { etages: any; }) => {
    
    return (
        <Layout>
        <NavSection/>
        <SidebarSection name={"4A"}/>
        <Details etages={props.etages}/>
        </Layout>
    );
  };
  
  export default DashboardTableSection;
  