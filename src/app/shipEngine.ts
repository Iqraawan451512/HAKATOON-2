// Define the function to get shipping rates
export const getShippingRates = async (address: any, items: any[]) => {
  const response = await fetch('https://template6-six.vercel.app/api/shipengine/get-rates', {
    method: 'POST',
    body: JSON.stringify({
      address,
      items,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch shipping rates');
  }

  return response.json(); // This returns the JSON response from the API
};
