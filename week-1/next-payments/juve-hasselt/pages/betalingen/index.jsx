import axios from "axios";
import React, {useState} from "react";
import { useRouter } from 'next/router'
import { handleChangePersonal } from "../../utils/changeHandler";
import Alert from "../../components/alert";
import { betalingenProducten } from "../../public/producten/betalingen-producten";

const personalData = [{type:"betalingen"}]

const Subscriptions = ()=>{

    const router = useRouter();
    const [checked, setchecked] = useState("")
    const [total,setTotal] = useState(0)
    const [error,setError] = useState(true)

    const handlePersonalChange = (event)=>{
        handleChangePersonal(personalData,event);
    }

    const handleChangeRadio = (event)=>{
        const product = event.target;
        if(product.checked)
            setchecked(product.value);
        
        const foundProduct = betalingenProducten.find(element => element.id === product.value);
        setTotal(foundProduct.price);
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();

        const products = [{
            price:checked,
            quantity:1
        }]

        const data = {
            personalInformation: [...personalData],
            products:products
        }
   
        if(total > 0){
            let response = await (await axios.post("/api/checkout_sessions", data)).data;
            router.push(response);
          }else{
            setError(false)
        }
    }
        
    
    return(
        <> 
        {/*
            Dit is een gedeelte om je eigen html te schrijven
            <h4 className="tussentitel-form">Info</h4>
            <p className="basic-text">Dit is enkele info die je kan meegeven</p> 
        */}
        <form  onSubmit={handleSubmit}>
            <h4 className="tussentitel-form">Gegevens</h4>
            {/* Persoonlijke info */}
            <div className="mb-3">
                <label className="form-label">Email adres</label>
                <input id="1" type="email" name="email" className="form-control" placeholder="name@example.com" onChange={handlePersonalChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Voornaam</label>
                <input id="2" type="text" name="firstName" className="form-control" placeholder="Jan" onChange={handlePersonalChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Achternaam</label>
                <input id="3" type="text" name="lastName" className="form-control" placeholder="Goossens" onChange={handlePersonalChange} />
            </div>


            <div className="producten-container">
              {
                /* Soort betalingen */
                betalingenProducten.map((product,index) =>{
                  return (
                    <div className="form-check" key={index}>
                        <input value={product.id} className="form-check-input checkBox" type="radio" name="flexRadioDefault" onChange={handleChangeRadio} />
                        <label className="form-check-label d-flex flex-row justify-content-between">{product.name}  <span>€{product.price}</span></label>
                    </div>
                  )
                })
              }
            </div>

            <div className="m-3 total-price">
                <span className="total">Totaal: € {total}</span>
            </div>

            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Checkout</button>
            </div>

          <Alert hidden={error}/>
            
        </form>
       </>
    )
}

export default Subscriptions;

// <div className="form-check">
// <input className="form-check-input" type="radio" name="price_1Ji2wuEUST8uQA4rubDfTJYD" onChange={handleChangeRadio} />
// <label className="form-check-label">Jongeren</label>
// </div>

// <div className="form-check">
// <input className="form-check-input" type="radio" name="price_1Ji3GcEUST8uQA4reeosloMz" onChange={handleChangeRadio} />
// <label className="form-check-label">Volwassenen</label>
// </div>