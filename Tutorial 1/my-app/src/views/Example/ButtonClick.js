import React from "react";
import { showToast } from "./ShowToast";
import { ToastContainer } from "react-toastify";

class ButtonClick extends React.Component {
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
