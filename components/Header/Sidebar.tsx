

        const SidebarSection = () => {
            return (
                <div className="min-screen flex flex-col">
                <header
                  className="bg-gray-400 text-white sticky top-0 h-10 flex justify-center items-center font-semibold uppercase"
                >
                  Accueil
                </header>
                <div className="flex flex-col md:flex-row flex-1">
                  <aside className="bg-gray-100 w-full md:w-60"></aside>
                  <main className="flex-1"></main>
                </div>
              </div>
    );
  }
  export default SidebarSection;