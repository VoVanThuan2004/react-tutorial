import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "Thuan",
        university: "TDTU"
    }

    // ham xu ly onChange => Khi thay doi data
    handOnChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            // Cach cho component return ve 2 phan tu doc lap
            <>
                <div className="First">Hello {this.state.name}</div>
                <div className="Second">{this.state.university}</div>

                
                <input type="text" value={this.state.name} placeholder="Text message"
                    onChange={(event) => this.handOnChange(event)}
                />
            </>
        )
    }
}

export default MyComponent
