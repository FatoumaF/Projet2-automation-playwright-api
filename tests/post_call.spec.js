import {expect,test} from '@playwright/test';
import postBooking from '../api/post';



test('My first post Booking', async ({request}) => {

  const  callApi =  new postBooking(request) ;

    const payload = {
    firstname: "Fatouma",
    lastname: "Fofana",
    totalprice: 150,
    depositpaid: true,
    bookingdates: {
      checkin: "2025-12-01",
      checkout: "2025-12-10"
    },
    additionalneeds: "Breakfast"
  };

  const response = await callApi.createBooking(payload);
  expect(response.status()).toBe(200);

  const data = await response.json();
  console.log(data);
    


  


})