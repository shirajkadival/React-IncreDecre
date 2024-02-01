import React, { useState } from "react";
import './inc.css';

const Todo = () => {
    const [num, setNum] = useState(0);
    const inc = () => {
        setNum(num + 1);
    }

    const dec = () => {
        if (num > 0) {
            setNum(num - 1);
        }
        else {
            setNum(0);
        }
    }


    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1 style={{ padding: "10px 0", fontSize: "50px", }}>{num}</h1>
                    <div className="btn">
                        <button className="btnn" onClick={inc}>INCREM <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                        <button className="btnn" onClick={dec}>DECREM <i class="fa fa-minus" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Todo;