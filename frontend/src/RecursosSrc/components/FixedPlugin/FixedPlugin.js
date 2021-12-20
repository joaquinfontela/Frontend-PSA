/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import { Button } from "reactstrap";

function FixedPlugin(props) {
    const [classes, setClasses] = React.useState("dropdown show");
    const handleClick = () => {
        if (classes === "dropdown") {
            setClasses("dropdown show");
        } else {
            setClasses("dropdown");
        }
    };
    return (
        <div className="fixed-plugin">
            <div className={classes}>
                <div onClick={handleClick}></div>
            </div>
        </div>
    );
}

export default FixedPlugin;
