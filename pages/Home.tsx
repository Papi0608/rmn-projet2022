// Components
import Layout from "../components/Header/layout"
import DashboardTable from "../components/Dashboard/DashboardTable";
import NavSection from  "../components/Header/Nav"
import SidebarSection from  "../components/Header/Sidebar"
import ShowFacture from "../components/Facture/ShowFacture";

function Home() {

  return  (
    <>
    
  <Layout>
  <NavSection/>
  {/* <SidebarSection name={"Acceuil"}/> */}
  <ShowFacture/>
  {/* <DashboardTable/> */}
  </Layout>
    </>


  )
}

export default Home;
