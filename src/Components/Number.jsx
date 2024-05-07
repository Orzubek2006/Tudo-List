import "./Number.css"
import React, { useState } from "react";

const Number = () => {


    const [counter, setCounter] = useState(0);

	const handleClick1 = () => {
		setCounter(counter - 1);
	};

	const handleClick2 = () => {
		setCounter(counter + 1);
	};



    return (
        <div>
            <div className="box_2">
                <span className="btn_one" onClick={handleClick1}><i class='bx bx-minus'></i></span>
                <span className="btn_two">{counter}</span>
                <span className="btn_one" onClick={handleClick2}><i class='bx bx-plus'></i></span>
            </div>
        </div>
    )
}

export default Number