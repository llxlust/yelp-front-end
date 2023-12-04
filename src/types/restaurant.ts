export interface IRestaurant {
    name: string
    slug: string
    description: string
    website: string
    phone: string
    email: string
    address: string
    location: ILocation
    averageRating: number
    averageCost: number
    photo: string
    user: string
    _id:string
  }
  export interface ILocation {
    type: 'Point'
    coordinates: Array<number | undefined>
    formattedAddress: string | undefined
    street: string | undefined
    city: string | undefined
    state: string | undefined
    zipcode: string | undefined
    country: string | undefined
  }