

export default class Location {
  private __data: any
  city: string
  postcode: string
  state: string
  street: string

  constructor(data: any) {
    this.city = data.city
    this.postcode = data.postcode
    this.state = data.state
    this.street = data.street
    this.__data = data
  }
}
