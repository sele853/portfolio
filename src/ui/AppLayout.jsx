import {  Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

function AppLayout() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="bg-gray-800 flex-1 p-6 text-white">
               <Outlet />
            </main> 
        </div>
    )
}

export default AppLayout
