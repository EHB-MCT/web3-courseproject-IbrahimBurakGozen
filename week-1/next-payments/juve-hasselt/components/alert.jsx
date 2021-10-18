const Alert = ({hidden})=>{
return (
    <div className={hidden? "hidden":""}>
        <div className="alert alert-danger" role="alert">
            Je moet iets bestellen voor je naar de betalingspagina kan gaan!
        </div>
    </div>
)
}

export default Alert;