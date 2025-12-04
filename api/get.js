export default class getBooking {
  constructor(request) {
    this.request = request;
    this.baseUrlIds = "https://restful-booker.herokuapp.com/booking";
    this.baseUrlsOneId = "https://restful-booker.herokuapp.com/booking/1";

  }
  async getCallBookingIds() {
    return await this.request.get(this.baseUrlIds);
  }

  async getOneBooking (){
    return await this.request.get(this.baseUrlsOneId)
  }


}
