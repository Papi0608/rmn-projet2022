import React from "react";
import Details from "../../components/common/Details";
import { GetStaticProps, GetStaticPaths, GetServerSideProps, GetServerSidePropsContext } from 'next'
// Components
import Layout from "../../components/Header/layout"
import NavSection from  "../../components/Header/Nav"
import SidebarSection from  "../../components/Header/Sidebar"
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
        <SidebarSection/>
        <Details etages={props.etages}/>
        </Layout>
    );
  };
  
  export default DashboardTableSection;
  