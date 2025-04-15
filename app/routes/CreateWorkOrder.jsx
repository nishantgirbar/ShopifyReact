import React from 'react'

const CreateWorkOrder = () => {
    return (
        <div style={{ display: "flex", columnGap: "15px" }}>
            <div style={{ width: "60%", padding: "5%", height: "40vh" }}>
                <div style={{ border: "5px", height: "15vh", border: "1px solid red" }}>
                    <div style={{ display: "flex", margin:"5px" }}>
                        Products
                    </div>
                    <div>
                        <input placeholder='Enter Product'></input>
                    </div>
                </div>
                <br />
                <div style={{ border: "5px", height: "25vh", border: "1px solid red" }}>

                </div>
            </div>
            <div style={{ width: "35%", border: "1px solid black", padding: "5%", height: "50vh" }}>
                Right Half
            </div>
        </div>
    )
}

export default CreateWorkOrder