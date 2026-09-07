import { business, formatPrice } from "./products";
import type { CartItem } from "./cart";

const base = `https://wa.me/${business.whatsapp}?text=`;

export const openWhatsApp = (message: string) => {
  const url = `${base}${encodeURIComponent(message)}`;
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};

export const generalEnquiryMessage = `Hello ${business.brand}, I would like to know more about your products.`;

export const productEnquiryMessage = (
  name: string,
  pack: string,
  quantity: number,
) =>
  `Hello ${business.brand},
I am interested in your ${name}.
Please share availability and ordering details.

Product:
${name}

Selected Pack:
${pack}

Quantity:
${quantity}`;

export type CheckoutDetails = {
  fullName: string;
  mobile: string;
  email?: string;
  address: string;
  landmark?: string;
  city: string;
  state: string;
  pincode: string;
  notes?: string;
};

export const cartOrderLines = (items: CartItem[]) =>
  items
    .map(
      (item, index) =>
        `${index + 1}. ${item.name}
Variant: ${item.variant}
Quantity: ${item.quantity}
Price: ${formatPrice(item.price * item.quantity)}`,
    )
    .join("\n\n");

export const cartOrderMessage = (
  items: CartItem[],
  subtotal: number,
  details?: CheckoutDetails,
) => {
  const customer = details
    ? `CUSTOMER DETAILS

Name: ${details.fullName}
Mobile: ${details.mobile}${details.email ? `\nEmail: ${details.email}` : ""}
Delivery Address: ${details.address}${details.landmark ? `\nLandmark: ${details.landmark}` : ""}
City: ${details.city}
State: ${details.state}
Pincode: ${details.pincode}

Additional Notes: ${details.notes?.trim() ? details.notes.trim() : "-"}`
    : `CUSTOMER DETAILS

Name:
Mobile:
Delivery Address:
City:
State:
Pincode:

Additional Notes:`;

  return `Hello ${business.brand},

I would like to place an order.

ORDER DETAILS

${cartOrderLines(items)}

Subtotal: ${formatPrice(subtotal)}

${customer}

Please confirm product availability, delivery charges and final order amount.

Thank you.`;
};
