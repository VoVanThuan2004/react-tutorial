import React from "react";
import { showToast } from "./ShowToast";
import { ToastContainer } from "react-toastify";

class ButtonClick extends React.Component {
    /* 
        Tao component cho nut Button -> Click vao Button -> Hien thong bao
    */

    handleOnClick = () => {
        alert("Show Alert");
    }

    render() {
        return (
           <>
             <div>
                <button onClick={showToast}>Click me</button>
                <p>Congratulation for you</p>

                <ToastContainer />
            </div>

            <div>
                <button onClick={this.handleOnClick}>Show Alert</button>
            </div>
           </>
        )
    }
}

export default ButtonClick
