export default class putBooking {
  // Accept the token as an argument
  constructor(request, token) { 
    this.request = request;
    // Use the token passed from the test
    this.token = token; 
    this.urlCall = "https://restful-booker.herokuapp.com/booking/1";
  }

  async updateBooking(payload) {
    return await this.request.put(this.urlCall, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // The token will now be the fresh, valid token
        Cookie: `token=${this.token}`, 
      },
      data: payload,
    });
  }
}