import { useState } from "react";

interface SelectProps {
    defaultOption: string,
    options: string[],
    name: string,
    value: string[]
}

const SelectField = ({defaultOption, options, name, value}: SelectProps) => {
    const [data, setData] = useState({option: ""})

    const handleChange = ({target}: any) => {
        setData(target.value)
        console.log(target.value)
    }

    return ( 
        <>
            <select
                className="w-20 h-10 bg-slate-100 py-[8px] cursor-pointer border rounded text-center"
                id={name}
                name={name}
                defaultValue={value}
                onChange={handleChange}
            >
                <option disabled value="">{defaultOption}</option>
                {options && options.map(option => 
                    <option
                    value={option}
                    key={option}
                    selected={option === data.option}
                    >
                        {option}
                    </option>
                    )}

            </select>
        </>
     );
}
 
export default SelectField; 