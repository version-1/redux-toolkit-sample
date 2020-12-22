import Picture from 'models/picture'
import Location from 'models/location'

export default class User {
  private __data: any
  id: string
  email: string
  gender: string
  picture: Picture
  location: Location

  constructor(data: any) {
    this.__data = data
    this.id = data.login.uuid
    this.email = data.email
    this.gender = data.gender
    this.picture = new Picture(data.picture)
    this.location = new Location(data.location)
  }

  get fullname() {
    return [this.__data.name.first, this.__data.name.last].join(' ')
  }
}
