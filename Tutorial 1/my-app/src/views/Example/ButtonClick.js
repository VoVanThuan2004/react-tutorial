import React from "react";
import { showToast } from "./ShowToast";
import { ToastContainer } from "react-toastify";

class ButtonClick extends React.Component {
    /* 
        Tao component cho nut Button -> Click vao Button -> Hien thong bao
    */
    render() {
        return (
            <div>
                <button onClick={showToast}>Click me</button>
                <p>Congratulation for you</p>

                <ToastContainer />
            </div>
        )
    }
}

export default ButtonClick
