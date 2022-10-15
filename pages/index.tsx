import { NextPage } from 'next'

// Components
import Layout from "../components/Header/layout"
import DashboardTable from "../components/Dashboard/DashboardTable";
import NavSection from  "../components/Header/Nav"
import SidebarSection from  "../components/Header/Sidebar"
export default function Home () {
  
  return (
    <Layout>
      <NavSection/>
      <SidebarSection/>
      <DashboardTable/>
    </Layout>
  )
}

