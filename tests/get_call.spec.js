import {expect,test} from '@playwright/test';
import getBooking from '../api/get';

test('My first get call BookingIds', async ({ request }) => {
  const bookingApi = new getBooking(request);

  // 1) GET all bookings
  const response = await bookingApi.getCallBookingIds();
  expect(response.status()).toBe(200);

  const data = await response.json();
  console.log(data);

  // 2) GET one booking
  const responseOneBooking = await bookingApi.getOneBooking();
  expect(responseOneBooking.status()).toBe(200);  // ← correcte !

  const oneBookingText = await responseOneBooking.text();
  console.log(oneBookingText);
});
