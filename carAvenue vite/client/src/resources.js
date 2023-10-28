    {/*   <!-- Edit Page ( Only for the creator )-->*/}
    <section id="edit-page" className="auth">
    <form id="edit">
        <div className="container">

            <h1>Edit  ad</h1>


            <label for="car">Brand:</label>
            <select name="car" id="car" required>
                <option selected value></option>
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

            <label for="model">Model:</label>
            <input type="text" id="model" name="model" placeholder="Enter model..." />

            <label for="modification">Modification:</label>
            <input type="text" id="modification" name="modification" placeholder="Enter modification..." />

            <div className="row">
                <div className="form-group">
                    <label for="etype">Engine Type:</label>
                    <select name="etype" id="etype">
                        <option selected value></option>

                        <option value="benzin">Бензин</option>
                        <option value="dizel">Дизел</option>
                        <option value="hybrid">Хибрид</option>
                        <option value="electric">Електрически</option>
                        <option value="puig hybrid">Puig-in хибрид</option>

                    </select>
                </div>
                <div className="form-group">
                    <label for="etype">Transmision:</label>
                    <select name="etype" id="etype">
                        <option selected value></option>

                        <option value="manual">Ръчна</option>
                        <option value="automatic">Автоматична</option>
                        <option value="semiAutomatic">Полуавтоматична</option>
                        <option value="electric">Електрически</option>
                        <option value="puig hybrid">Puig-in хибрид</option>

                    </select>
                    <div className="form-group">
                        <label for="etype">Euro Category:</label>
                        <select name="ecategory" id="ecategory">
                            <option selected value></option>

                            <option value="EURO 1">EURO 1</option>
                            <option value="EURO 2">EURO 2</option>
                            <option value="EURO 3">EURO 3</option>
                            <option value="EURO 4">EURO 4</option>
                            <option value="EURO 5">EURO 5</option>
                            <option value="EURO 6">EURO 6</option>


                        </select>
                    </div>

                </div>
                <label for="hppower">Mileage [km]:</label>
                <input type="number" id="hppower" name="hppower" min="1" />

                <label for="hppower">Power [h.p.]:</label>
                <input type="number" id="hppower" name="hppower" min="1" placeholder="1" />

                <label for="manufacturedate">Date of manufacture:</label>
                <input type="date" id="manufacturedate" name="manufacturedate" />

                <label for="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />
                <div className="row">
                    <div className="form-group">
                        <label for="hppower">Price:</label>
                        <input type="number" id="hppower" name="hppower" min="1" />
                    </div>
                    <div className="form-group">
                        <label for="currency">Currency:</label>
                        <select name="currency" id="currency">
                            <option selected value></option>
                            <option value="bgn">Лв(BGN)</option>
                            <option value="eur">€(ЕUR)</option>
                            <option value="usd">$(USD)</option>

                        </select>
                    </div>

                </div>


                <label for="contactphone">Contact phone:</label>
                <input type="tel" id="contactphone" name="contactphone" />

                <label for="description">Description:</label>
                <textarea name="description" id="description"></textarea>
                <input className="btn submit" type="submit" value="List your ad" />
            </div>
        </div>
    </form>
</section>

