import { useEffect, useState } from "react";
import { useFetcher, useNavigate } from "@remix-run/react";// create work-order, view, retrieve-order
import {
  Page,
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  Box,
  List,
  Link,
  InlineStack,
} from "@shopify/polaris";
import { TitleBar, useAppBridge } from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return null;
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  const color = ["Red", "Orange", "Yellow", "Green"][
    Math.floor(Math.random() * 4)
  ];
  const response = await admin.graphql(
    `#graphql
      mutation populateProduct($product: ProductCreateInput!) {
        productCreate(product: $product) {
          product {
            id
            title
            handle
            status
            variants(first: 10) {
              edges {
                node {
                  id
                  price
                  barcode
                  createdAt
                }
              }
            }
          }
        }
      }`,
    {
      variables: {
        product: {
          title: `${color} Snowboard`,
        },
      },
    },
  );
  const responseJson = await response.json();
  const product = responseJson.data.productCreate.product;
  const variantId = product.variants.edges[0].node.id;
  const variantResponse = await admin.graphql(
    `#graphql
    mutation shopifyRemixTemplateUpdateVariant($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
      productVariantsBulkUpdate(productId: $productId, variants: $variants) {
        productVariants {
          id
          price
          barcode
          createdAt
        }
      }
    }`,
    {
      variables: {
        productId: product.id,
        variants: [{ id: variantId, price: "100.00" }],
      },
    },
  );
  const variantResponseJson = await variantResponse.json();

  return {
    product: responseJson.data.productCreate.product,
    variant: variantResponseJson.data.productVariantsBulkUpdate.productVariants,
  };
};

export default function Index() {
  const [orders, setOrders] = useState([]);
  const [items, setItems] = useState(0);
  const navigate = useNavigate();
  const fetcher = useFetcher();
  const shopify = useAppBridge();
  const isLoading =
    ["loading", "submitting"].includes(fetcher.state) &&
    fetcher.formMethod === "POST";
  const productId = fetcher.data?.product?.id.replace(
    "gid://shopify/Product/",
    "",
  );

  useEffect(() => {
    if (productId) {
      shopify.toast.show("Product created");
    }
  }, [productId, shopify]);
  const generateProduct = () => fetcher.submit({}, { method: "POST" });

  // function createWorkOrder(){
  //    navigate("/CreateWorkOrder");
  // }
  // function viewWorkOrder(){
  //   navigate("/ViewWorkOrders");
  // }
  // function retrieveOrder(){
  //    navigate("/RetrieveOrder");
  // }

  return (
    <Page>
      <TitleBar title="Remix app template">
        <button variant="primary" onClick={generateProduct}>
          Generate a product
        </button>
      </TitleBar>
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
          {orders.length === 0 ?
            (
              <div>
                <p style={{ margin: 0 }}>Your orders will show here</p>
                <p>This is where you'll fulfill orders, collect payments, and track order progress.</p>
              </div>
            ) : (<div></div>)
          }

          <button onClick={() => navigate("/CreateWorkOrder")} style={{ backgroundColor: "#121212", color: "white", border: "none", padding: "10px 20px", borderRadius: "6px", cursor: "pointer" }}>
            Create order
          </button>
        </div>
      </div>
    </Page>
  );
}
