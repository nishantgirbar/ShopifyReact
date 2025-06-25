import React, { useState } from 'react';
import {
  Modal,
  TextField,
  Checkbox,
  Select,
  Text,
  Button,
} from '@shopify/polaris';

const CreateWorkOrder = () => {
  const [showCustomItemModal, setShowCustomItemModal] = useState(false);
  const [showBrowseModal, setShowBrowseModal] = useState(false);
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('0.00');
  const [quantity, setQuantity] = useState('1');
  const [isTaxable, setIsTaxable] = useState(true);
  const [isPhysical, setIsPhysical] = useState(true);
  const [weight, setWeight] = useState('0');
  const [unit, setUnit] = useState('kg');

  const unitOptions = [
    { label: 'kg', value: 'kg' },
    { label: 'g', value: 'g' },
    { label: 'lb', value: 'lb' },
    { label: 'oz', value: 'oz' },
  ];

  const handleAddItem = () => {
    setShowCustomItemModal(false);
  };

  return (
    <div>
      {/* Custom Item Modal */}
      <Modal
        open={showCustomItemModal}
        onClose={() => setShowCustomItemModal(false)}
        title="Add custom item"
        primaryAction={{
          content: 'Add item',
          onAction: handleAddItem,
          disabled: itemName.trim() === '',
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: () => setShowCustomItemModal(false),
          },
        ]}
      >
        <Modal.Section>
          <div style={{ display: 'flex', gap: '10px' }}>
            <TextField
              label="Item name"
              value={itemName}
              onChange={setItemName}
              autoComplete="off"
            />
            <TextField
              label="Price"
              value={price}
              onChange={setPrice}
              prefix="₹"
              type="number"
              autoComplete="off"
            />
            <TextField
              label="Quantity"
              value={quantity}
              onChange={setQuantity}
              type="number"
              autoComplete="off"
            />
          </div>

          <Checkbox
            label="Item is taxable"
            checked={isTaxable}
            onChange={setIsTaxable}
          />

          <Checkbox
            label="Item is a physical product"
            checked={isPhysical}
            onChange={setIsPhysical}
          />

          <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
            <TextField
              label="Item weight (optional)"
              value={weight}
              onChange={setWeight}
              type="number"
              autoComplete="off"
            />
            <Select
              label="Unit"
              options={unitOptions}
              onChange={setUnit}
              value={unit}
            />
          </div>

          <p style={{ fontSize: '12px', color: 'gray', marginTop: '4px' }}>
            Used to calculate shipping rates accurately
          </p>
        </Modal.Section>
      </Modal>

      {/* Browse Products Modal */}
      <Modal
        open={showBrowseModal}
        onClose={() => setShowBrowseModal(false)}
        title="Select products"
        primaryAction={{
          content: 'Add',
          onAction: () => setShowBrowseModal(false),
          disabled: true,
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: () => setShowBrowseModal(false),
          },
        ]}
      >
        <Modal.Section>
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
              {/* Inline Cancel Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <Text variant="bodyMd" color="subdued">No products found</Text>
          </div>
        </Modal.Section>
      </Modal>

      {/* Page UI */}
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
              <button onClick={() => setShowBrowseModal(true)}>Browse</button>
              <button onClick={() => setShowCustomItemModal(true)}>Add custom item</button>
            </div>
          </div>

          {/* Payment Section */}
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

        {/* Side Section */}
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
    </div>
  );
};

export default CreateWorkOrder;