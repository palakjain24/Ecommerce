import React from 'react';
import './Sidebar.css';
import FilterJson from '../../Filter.json';


const Sidebar = (props) => {
    const { handleSelection } = props;

    return (
        <>
            {Object.entries(FilterJson.filters ?? {}).length ? Object.entries(FilterJson.filters ?? {}).map((list, index) => {
                return (
                    <div className='filters' key={index}>
                        <h3>{list[0]}</h3>
                        {list[1].map((items, indexx) => (
                            <div key={indexx + "_" + index}>
                                <label htmlFor={indexx + "_" + index}>
                                    <input type="checkbox" name="checkbox_1" id={indexx + "_" + index} onChange={() => handleSelection(items.product_specs_name, items.value)} readOnly={true} />
                                    {items.name}
                                </label>
                            </div>
                        ))}
                    </div>
                )
            }) : null}
        </>
    )
}

export default Sidebar;
