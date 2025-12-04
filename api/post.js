 export default class postBooking{
  constructor(request){

    this.request = request;
    this.urlPostOneBooking = 'https://restful-booker.herokuapp.com/booking';
    

  }
  async createBooking(payload){
    return await this.request.post(this.urlPostOneBooking, {
      headers: {
        "Content-Type": "application/json"
      },
      data: payload
    });
  }
  
}