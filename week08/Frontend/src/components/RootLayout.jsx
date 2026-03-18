import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "./Footer"

function RootLayout() {
  return (
    <>
      <Header />
      <div className="p-6 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default RootLayout