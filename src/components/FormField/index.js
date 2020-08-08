import React from "react";


function FormField({ label, type, name, value, onChange, textarea, descricao }) {
    return (
        <div>
          <label>
             {label}: 
            <input  
             type={type}
             value={value}
             name={name}
             onChange={onChange}
             textarea={descricao}
         />
             </label>
         </div>

    )
}

export default FormField;