import React, { useState, useEffect } from 'react'

const CreateWorkOrder = () => {
    const [orders, setOrders] = useState([]);
    const [items, setItems] = useState(0);
    return (
        <div style={{ display: "flex", gap: "20px", padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <div style={{ flex: 2 }}>
                <div style={{ border: "1px solid grey", borderRadius: "8px", padding: "16px", marginBottom: "10px" }}>
                    <h3>Products</h3>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <input
                            type="text"
                            placeholder="Search products"
                            style={{ width: "65%", padding: "5px", marginBottom: "10px" }}
                        />
                        <button>Browse</button>
                        <button>Add custom item</button>
                    </div>
                    { }
                </div>

                <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px", marginBottom: "20px" }}>
                    <h3>Payment</h3>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                        <span>Subtotal</span>
                        <span>₹0.00</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "gray", marginBottom: "8px" }}>
                        <span>Add discount</span>
                        <span>—</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "gray", marginBottom: "8px" }}>
                        <span>Add shipping or delivery</span>
                        <span>—</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "gray", marginBottom: "8px" }}>
                        <span>Estimated tax</span>
                        <span>Not calculated</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
                        <span>Total</span>
                        <span>₹0.00</span>
                    </div>
                </div>

                <div style={{ fontSize: "14px", color: "gray" }}>
                    Add a product to calculate total and view payment options
                </div>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px" }}>
                    <h4>Notes</h4>
                    <p style={{ margin: 0, color: "gray" }}>No notes</p>
                </div>

                <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px" }}>
                    <h4>Customer</h4>
                    <input type="text" placeholder="Search customer" style={{ width: "100%", padding: "8px" }} />
                </div>

                <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px" }}>
                    <h4>Markets</h4>
                    <div style={{ backgroundColor: "#eee", display: "inline-block", padding: "4px 8px", borderRadius: "12px", marginBottom: "10px" }}>
                        🌐 India
                    </div>
                    <label style={{ display: "block", marginBottom: "4px" }}>Currency</label>
                    <select style={{ width: "100%", padding: "8px" }}>
                        <option>Indian Rupee (INR ₹)</option>
                    </select>
                </div>

                <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px" }}>
                    <h4>Tags</h4>
                    <input type="text" placeholder="Add tag" style={{ width: "100%", padding: "8px" }} />
                </div>
            </div>
        </div>
    )
}

export default CreateWorkOrder