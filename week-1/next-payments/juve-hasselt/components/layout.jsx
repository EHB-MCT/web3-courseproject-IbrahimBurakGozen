const Layout = ({children})=>{
    return(
        <>
            <nav className="navigation">
                 <h1 className="logo">Juve Hasselt</h1>
            </nav>

            <main>
                <section className="row">
                    <div className="col-md-2"/>
                    <div className="col-md-8">
                        {children}
                    </div>
                    <div className="col-md-2"/>
                </section>
            </main>
        </>
    )
}

export default Layout;