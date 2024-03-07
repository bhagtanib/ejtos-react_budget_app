import React, { useContext } from "react";
import { AppContext } from '../context/AppContext';

const CurrencyDrop = () => {
  const { dispatch } = useContext(AppContext);

  const handleChange = (event) => {
    dispatch({
        type: 'CHG_CURRENCY',
        payload: event.target.value,
    });
  }
    return (
        <div className='alert bg-success text-white'>
             <div className="input-group" style={{ marginLeft: "2rem" }}>
          <div className="input-group-prepend mx-4">
              Currency
          </div>
          <select
            className="custom-select bg-success border-0 text-white"
            id="inputGroup"
            onChange={(event) => handleChange(event)}
          >
            <option value="$" name="Dollar">
            $ Dollar
            </option>
            <option value="£" name="Pound">
            £ Pound
            </option>
            <option value="€" name="Euro">
            € Euro
            </option>
            <option value="₹" name="Ruppee">
            ₹ Ruppee
            </option>

          </select>
          </div>
        </div>
    );
};
export default CurrencyDrop;