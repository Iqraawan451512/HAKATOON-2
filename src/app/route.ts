import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

// The ShipEngine API base URL
const SHIPENGINE_API_URL = "https://api.shipengine.com";

// You can replace this with your ShipEngine API key (make sure to keep it secure)
const SHIPENGINE_API_KEY = "your-shipengine-api-key-here";

// Function to get shipping rates from ShipEngine API
export async function POST(request: NextRequest) {
  try {
    const { shipeToAddress, packages } = await request.json();

    // Prepare the data for ShipEngine API
    const shipmentData = {
      shipment: {
        ship_to: shipeToAddress,
        from_address: {
          name: "Your Store",
          address_line1: "123 Store St",
          city_locality: "New York",
          state_province: "NY",
          postal_code: "10001",
          country_code: "US",
        },
        packages: packages,
      },
    };

    // Call the ShipEngine API to get rates
    const response = await axios.post(
      `${SHIPENGINE_API_URL}/v1/rates`,
      shipmentData,
      {
        headers: {
          Authorization: `Bearer ${SHIPENGINE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Respond with the shipping rates
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching shipping rates:", error);
    return NextResponse.json(
      { error: "Failed to fetch shipping rates. Please try again." },
      { status: 500 }
    );
  }
}

// Function to create a shipping label using ShipEngine API
export async function POST_createLabel(request: NextRequest) {
  try {
    const { rateId } = await request.json();

    // Prepare the data for creating a shipping label
    const labelData = {
      rate_id: rateId,
      label_format: "PDF",
    };

    // Call the ShipEngine API to create a label
    const response = await axios.post(
      `${SHIPENGINE_API_URL}/v1/labels`,
      labelData,
      {
        headers: {
          Authorization: `Bearer ${SHIPENGINE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Respond with the label data (including PDF download URL)
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error creating label:", error);
    return NextResponse.json(
      { error: "Failed to create shipping label. Please try again." },
      { status: 500 }
    );
  }
}
