import { NextPage } from 'next'

// Components
import Layout from "../components/Header/layout"
import DashboardTable from "../components/Dashboard/DashboardTable";
import NavSection from  "../components/Header/Nav"
export default function Home () {
  
  return (
    <Layout>
      <NavSection/>
      <DashboardTable/>
    </Layout>
  )
}


