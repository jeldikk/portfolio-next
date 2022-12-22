import React from "react";
import Footer from "../footer/footer.component";
import Header from "../header/header.component";

interface LayoutProps{
    children: JSX.Element | JSX.Element[]
}

function Layout({ children }: LayoutProps){
    return <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
}

export default Layout;