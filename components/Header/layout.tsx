import React from "react";


const Layout = ({children}:any) =>{
    return (
    <div className="flex flex-col">
        {children}
    </div>
    )
}

export default Layout;