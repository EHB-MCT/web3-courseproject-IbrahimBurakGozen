import React, { useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/router'
import { eetdagenAfhaalmomenten, eetdagenProducten } from "../../public/producten/eetdagen-producten";
import Alert from '../../components/alert';
import { handleChangePersonal, handleChangeProducts } from "../../utils/changeHandler";
import { calculateTotal } from "../../utils/calculate";
import Head from 'next/head'

const personalData = [{type:"eetdagen"}]
let productData = []

export default function Eetdagen() {

  const [productDataTest,setProducts] = useState([])
  const router = useRouter()
  const [total,setTotal] = useState(0)
  const [error,setError] = useState(true)
  const [selectedAfhaalmoment,setSelectedAfhaalmoment] = useState("");

  const handlePersonalChange = (event)=>{
    handleChangePersonal(personalData,event);
  }

  const handleChangeDropdown = (event)=>{
    event.preventDefault();
    setSelectedAfhaalmoment(event.target.value);
  }

  const handleProductChange = (event)=>{
    productData = handleChangeProducts(productData,event);

    const newPrice = calculateTotal(productData, eetdagenProducten);
    setTotal(newPrice);
  }
  
  const handleSubmit = async (event)=>{
    event.preventDefault();
    console.log(selectedAfhaalmoment);
    const data = {
      personalInformation: [...personalData],
      products: [...productData],
      afhaalmoment: selectedAfhaalmoment
    }

    if(total > 0){
      let response = await (await axios.post("/api/checkout_sessions", data)).data;
      router.push(response);
    }else{
      setError(false)
    }
  }

  return (
    <>
      {/*
        Dit is een gedeelte om je eigen html te schrijven
      <h4 className="tussentitel-form">Info</h4>
      <p className="basic-text">Dit is enkele info die je kan meegeven</p> 
      */}



      <form onSubmit={handleSubmit}>
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

          <h4 className="tussentitel-form">Afhaalmoment</h4>
          <div className="dropdown">
            <select className="form-select" aria-label="Default select example" onChange={handleChangeDropdown} value={selectedAfhaalmoment}>
              {
                eetdagenAfhaalmomenten.map((afhaalmoment,index) =>{
                  return(
                    <option key={index + afhaalmoment} value={afhaalmoment} className="dropdown-item" >{afhaalmoment}</option>
                  )
                })
              }
            </select>
          </div>

          <h4 className="tussentitel-form">Bestelling</h4>
          <div className="producten-container">
            {
              /* De producten */
              eetdagenProducten.map((product,index) =>{
                return (
                  <div key={index}>
                    <label className="form-label d-flex flex-row justify-content-between">{product.name}  <span>€{product.price}</span></label>
                    <input id={index} name={product.id} data-id={product.price} type="number" className="form-control" min="0" defaultValue="0" onChange={handleProductChange} />
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

