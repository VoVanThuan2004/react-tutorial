import React from "react";

class Show_Hide extends React.Component {

    state = {
        status: false
    }

    handleClick = () => {
        this.setState({
            status: !this.state.status,
        })
    }

    render() {
        return(
            <>
                {this.state.status === false  ?
                    <div>
                        <button onClick={this.handleClick}>Show</button>
                    </div>

                    :
                    <>
                        <div>
                            <p>Username: TDTU</p>
                            <p>Password: 123</p>
                        </div>
                        <div>
                            <button onClick={this.handleClick}>Hide</button>
                        </div>
                    </>
                }
                {/* {
                    this.state.status && 
                    <div>
                        <p>Username: TDTU</p>
                        <p>Password: 123</p>
                    </div>
                }

                {
                    this.state.status && 
                    <div>
                        <button onClick={this.handleClick}>Hide</button>
                    </div>
                } */}



            </>

        )
    }
}

export default Show_Hide;
