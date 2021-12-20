import React from "react";
import Select from "react-select";

const SelectDropDownComponent = ({
    items,
    setSelectedComponent,
    setSelectedName,
}) => {
    var nombres = [];
    items.forEach((element) => {
        nombres.push({ label: element.name, id: element.id });
    });
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <Select
                        options={nombres}
                        onChange={(item) => {
                            setSelectedComponent(item.id);
                            setSelectedName(item.label);
                        }}
                    />
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
};

export default SelectDropDownComponent;
