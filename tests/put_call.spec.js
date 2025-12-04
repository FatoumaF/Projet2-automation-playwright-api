import { expect, test } from "@playwright/test";
import putBooking from "../api/put"; // Assuming this is your API class

test('My put update call', async ({ request }) => {
  // 1. GENERATE AUTH TOKEN (first step of the workflow)
  const authResponse = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: {
        username: "admin",
        password: "password123"
      }
    }
  );

  // Best Practice: Always check status before parsing JSON
  expect(authResponse.status()).toBe(200);
  const authJson = await authResponse.json();
  const token = authJson.token;
  console.log('Generated Token:', token);

  // 2. CREATE API INSTANCE AND EXECUTE PUT CALL
  // NOTE: You must update putBooking class to accept the token, 
  // or pass the token directly to the updateBooking method.
  const api = new putBooking(request, token); // <-- Pass the valid token here

  const payload = {
    firstname: "Jhon",
    lastname: "doe",
    totalprice: 10,
    depositpaid: true,
    bookingdates: {
      checkin: "2025-12-01",
      checkout: "2025-12-10"
    },
    additionalneeds: "Diner"
  };

  const response = await api.updateBooking(payload);

  // 3. VALIDATE STATUS BEFORE JSON PARSING
  expect(response.status()).toBe(200); // Expect success

  // FIX: This line will now only run if the status is 200, 
  // preventing the "Forbidden" parsing error.
  const dataJson = await response.json(); 

  console.log(dataJson);

});