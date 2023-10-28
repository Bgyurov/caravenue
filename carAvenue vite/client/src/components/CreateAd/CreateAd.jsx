import { useState } from "react"

export const CreateAd = ({
    onCreateAdSubmit,
}) =>{
    const [values,setValues] = useState({
        car : '',
        model: '',
        modification : '',
        etype: '',
        transmition: '',
        ecategory: '',  
        hppower: '',
        milleage: '',
        manufacturedate: '',
        imageUrl: '',
        price: '',
        currency: '',
        contactphone: '',
        description: ''
    })

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    }

    const onSubmit =(e)=>{
        e.preventDefault()
        onCreateAdSubmit(values)
    }

    return (
        <section id="create-page" className="auth">
        <form id="create" onSubmit={onSubmit}>
            <div className="container">

                <h1>Public your ad</h1>
                <h2>Best way to sell your car</h2>

                <label htmlFor="car">Brand:</label>
                <select name="car" id="car" required  value={values.car} onChange={onChangeHandler} >
                   
                    <optgroup label="A">
                        <option value="Acura">Acura</option>
                        <option value="Alfa Romeo">Alfa Romeo</option>
                        <option value="Alpina">Alpina</option>
                        <option value="Aston martin">Aston martin</option>
                        <option value="Audi">Audi</option>
                    </optgroup>
                    <optgroup label="B">
                        <option value="BMW">BMW</option>
                        <option value="Bentley">Bentley</option>
                        <option value="Bugatti">Bugatti</option>
                    </optgroup>
                    <optgroup label="C">
                        <option value="Cadillac">Cadillac
                        </option>
                        <option value="Chevrolet">Chevrolet
                        </option>
                        <option value="Corvette">Corvette
                        </option>
                        <option value="Cupra">Cupra
                        </option>
                    </optgroup>
                    <optgroup label="D">
                        <option value="Dacia">Dacia</option>
                        <option value="Dodge">Dodge</option>

                    </optgroup>
                    <optgroup label="E">
                        <option value="Eagle">Eagle
                        </option>
                    </optgroup>
                    <optgroup label="F">
                        <option value="Ferrari">Ferrari
                        </option>
                        <option value="Fiat">Fiat
                        </option>
                        <option value="Ford">Ford
                        </option>
                    </optgroup>
                    <optgroup label="G">
                        <option value="Great Wall">Great Wall
                        </option>
                        <option value="Gmc">Gmc
                        </option>
                    </optgroup>
                    <optgroup label="H">
                        <option value="Haval">Haval
                        </option>
                        <option value="Honda">Honda
                        </option>
                        <option value="Hummer">Hummer
                        </option>
                        <option value="Hyundai">Hyundai
                        </option>
                    </optgroup>
                    <optgroup label="I">
                        <option value="Infiniti">Infiniti
                        </option>
                        <option value="Iveco">Iveco
                        </option>

                    </optgroup>
                    <optgroup label="J">
                        <option value="Jaguar">Jaguar
                        </option>
                        <option value="Jeep">Jeep
                        </option>
                        <option value="Jpx">Jpx
                        </option>

                    </optgroup>
                    <optgroup label="K">
                        <option value="Kia">Kia
                        </option>
                    </optgroup>
                    <optgroup label="L">
                        <option value="Lada">Lada
                        </option>
                        <option value="Lamborghini">Lamborghini
                        </option>
                        <option value="Land Rover">Land Rover
                        </option>
                        <option value="Lexus">Lexus
                        </option>
                        <option value="Lincoln">Lincoln
                        </option>
                    </optgroup>
                    <optgroup label="M">
                        <option value="Maserati">Maserati
                        </option>
                        <option value="Maybach">Maybach
                        </option>
                        <option value="Mazda">Mazda
                        </option>
                        <option value="McLaren">McLaren
                        </option>
                        <option value="Mercedes-Benz">Mercedes-Benz
                        </option>
                        <option value="Mercury">Mercury
                        </option>
                        <option value="Mitsubishi">Mitsubishi
                        </option>
                        <option value="Moskvich">Moskvich
                        </option>

                    </optgroup>
                    <optgroup label="N">
                        <option value="Nissan">Nissan
                        </option>

                    </optgroup>
                    <optgroup label="O">
                        <option value="Opel">Opel
                        </option>

                    </optgroup>
                    <optgroup label="P">
                        <option value="Peugeot">Peugeot
                        </option>
                        <option value="Porsche">Porsche
                        </option>

                    </optgroup>
                    <optgroup label="Q">
                        <option value="Qoros">Qoros
                        </option>

                    </optgroup>
                    <optgroup label="R">
                        <option value="Renault">Renault
                        </option>
                        <option value="Rolls-Royce">Rolls-Royce
                        </option>
                        <option value="Rover">Rover
                        </option>

                    </optgroup>
                    <optgroup label="T">
                        <option value="Tesla">Tesla
                        </option>
                        <option value="Toyota">Toyota
                        </option>

                    </optgroup>
                    <optgroup label="U">
                        <option value="Uaz">Uaz
                        </option>

                    </optgroup>
                    <optgroup label="V">
                        <option value="Volga">Volga
                        </option>
                        <option value="Volvo">Volvo
                        </option>

                    </optgroup>


                </select>

                <label htmlFor="model">Model:</label>
                <input value={values.model} onChange={onChangeHandler} type="text" id="model" name="model" placeholder="Enter model..." required />

                <label htmlFor="modification">Modification:</label>
                <input value={values.modification}  onChange={onChangeHandler}  type="text" id="modification" name="modification" placeholder="Enter modification..."required />

                <div className="row">
                    <div className="form-group">
                        <label htmlFor="etype">Engine Type:</label>
                        <select name="etype" id="etype"value={values.etype}  onChange={onChangeHandler} required>
                        
                            <option></option>
                            <option value="benzin">Бензин</option>
                            <option value="dizel">Дизел</option>
                            <option value="hybrid">Хибрид</option>
                            <option value="electric">Електрически</option>
                            <option value="puig hybrid">Puig-in хибрид</option>

                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="transmition">Transmision:</label>
                        <select name="transmition" id="transmition" value={values.transmition}  onChange={onChangeHandler }required>
                            
                            <option></option>
                            <option value="manual">Ръчна</option>
                            <option value="automatic">Автоматична</option>
                            <option value="semiAutomatic">Полуавтоматична</option>
                            <option value="electric">Електрически</option>
                            <option value="puig hybrid">Puig-in хибрид</option>

                        </select>
                        <div className="form-group">
                            <label htmlFor="etype">Euro Category:</label>
                            <select name="ecategory" id="ecategory" value={values.ecategory}  onChange={onChangeHandler} required>
                                

                                <option value="EURO 1">EURO 1</option>
                                <option value="EURO 2">EURO 2</option>
                                <option value="EURO 3">EURO 3</option>
                                <option value="EURO 4">EURO 4</option>
                                <option value="EURO 5">EURO 5</option>
                                <option value="EURO 6">EURO 6</option>


                            </select>
                        </div>




                    </div>
                    <label htmlFor="milleage">Mileage [km]:</label>
                    <input value={values.milleage}  onChange={onChangeHandler}  type="number" id="milleage" name="milleage" min="1" required/>

                    <label htmlFor="hppower">Power [h.p.]:</label>
                    <input value={values.hppower}  onChange={onChangeHandler}  type="number" id="hppower" name="hppower" min="1" placeholder="1"required />

                    <label htmlFor="manufacturedate">Date of manufacture:</label>
                    <input value={values.manufacturedate}  onChange={onChangeHandler}  type="date" id="manufacturedate" name="manufacturedate" required/>

                    <label htmlFor="game-img">Image:</label>
                    <input value={values.imageUrl} onChange={onChangeHandler}   type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..."required />
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="price">Price:</label>
                            <input type="number" onChange={onChangeHandler}  id="price" name="price" min="1" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="currency">Currency:</label>
                            <select name="currency" id="currency"  value={values.currency}  onChange={onChangeHandler} required>
                                <option value=""></option>
                                <option value="bgn">Лв(BGN)</option>
                                <option value="eur">€(ЕUR)</option>
                                <option value="usd">$(USD)</option>

                            </select>
                        </div>

                    </div>


                    <label htmlFor="contactphone">Contact phone:</label>
                    <input value={values.contactphone}  onChange={onChangeHandler}   type="tel" id="contactphone" name="contactphone" required />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" value={values.description}  onChange={onChangeHandler} required ></textarea>
                    <input className="btn submit" type="submit" value="List your ad" />
                </div>
            </div>
        </form>
    </section>
    )
}