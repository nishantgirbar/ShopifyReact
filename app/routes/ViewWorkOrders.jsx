import React, {useState} from 'react';
import { useNavigate } from '@remix-run/react';

const ViewWorkOrders = () => {
    const [orders, setOrders] = useState([]);
    const [items, setItems] = useState(0);

    const navigate = useNavigate();
    return (
        <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f6f6f7", minHeight: "100vh", padding: "20px" }}>
            <div style={{ backgroundColor: "white", borderRadius: "8px", padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #dcdcdc" }}>
                <h2 style={{ margin: 0 }}>🧾 Orders</h2>
            </div>

            <div style={{ display: "flex", marginTop: "12px", gap: "8px", backgroundColor: "white", border: "1px solid #dcdcdc", borderRadius: "8px", padding: "12px 16px" }}>
                <div style={{ flex: 1 }}><strong>📅 Today</strong></div>
                {[
                    { label: "Orders", value: orders.length },
                    { label: "Items ordered", value: items },
                    { label: "Returns", value: "₹0" },
                    { label: "Orders fulfilled", value: "0" },
                    { label: "Orders delivered", value: "0" }
                ].map((item, index) => (
                    <div key={index} style={{ flex: 1, textAlign: "center" }}>
                        <div style={{ fontWeight: "bold" }}>{item.label}</div>
                        <div>{item.value}</div>
                        <div style={{ height: "2px", backgroundColor: "#1890ff", marginTop: "4px" }}></div>
                    </div>
                ))}
            </div>

            <div style={{ backgroundColor: "white", borderRadius: "8px", padding: "40px 20px", marginTop: "20px", textAlign: "center", border: "1px solid #dcdcdc" }}>
                <img
                    src="https://cdn.shopify.com/shopifycloud/web/assets/v1/vite/client/en/assets/empty-state-orders-qdh7TMTzhOGm.svg"
                    alt="Empty orders"
                    style={{ width: "120px", marginBottom: "20px" }}
                />
                <p style={{ margin: 0 }}>Your orders will show here</p>
                <p>This is where you'll fulfill orders, collect payments, and track order progress.</p>
                <button onClick={() => navigate("/CreateWorkOrder")} style={{ backgroundColor: "#121212", color: "white", border: "none", padding: "10px 20px", borderRadius: "6px", cursor: "pointer" }}>
                    Create order
                </button>
            </div>
        </div>
    )
}

export default ViewWorkOrders;