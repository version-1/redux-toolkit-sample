

export default class Picture {
  large: string
  medium: string
  thumbnail: string

  constructor(data: any) {
    this.large = data.large
    this.medium = data.medium
    this.thumbnail = data.thumbnail
  }
}
