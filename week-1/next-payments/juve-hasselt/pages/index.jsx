import Link from 'next/link'

const Home = ()=>{
    return(
        <div className="row">
            <div className="col-sm-12 mb-3 mt-3">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Activiteiten Formulier</h5>
                    <p className="card-text">Op deze pagina kan je je inschrijven op de actieve activiteiten.</p>

                    <Link href="/activiteiten">
                        <a className="btn btn-primary">Schrijf je in</a>
                    </Link>
                </div>
                </div>
            </div>
        

            <div className="col-sm-12 mb-3 mt-3">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Betaling Formulier</h5>
                    <p className="card-text">Op deze pagina kan je periodieke betalingen africhten.</p>
                    
                    <Link href="/betalingen">
                        <a className="btn btn-primary">Schrijf je in</a>
                    </Link>
                </div>
                </div>
            </div>

            <div className="col-sm-12 mb-3 mt-3">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Eetdagen Formulier</h5>
                    <p className="card-text">Op deze pagina kan je je inschrijven op de actieve eetdagen.</p>
                    
                    <Link href="/eetdagen">
                        <a className="btn btn-primary">Schrijf je in</a>
                    </Link>
                </div>
                </div>
            </div>
        
            <div className="col-sm-12 mb-3 mt-3">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Fuif Formulier</h5>
                    <p className="card-text">Op deze pagina kan je je inschrijven op de actieve fuiven.</p>
                    
                    <Link href="/fuif">
                        <a className="btn btn-primary">Schrijf je in</a>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home;