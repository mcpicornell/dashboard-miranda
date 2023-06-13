export const convertToDateFormat = (date: Date) =>  {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateFormated = `${year}-${month}-${day}`;
    return dateFormated;
  }

export interface IRooms {
    _id?: string,
    roomName: string,
    isAvailable: boolean
    offerPrice: number,
    price: number,
    roomNumber: number,
    roomType: string,
    amenities: string[],
    photos: string[]
}

export interface IUsers{
    contact: number,
    descriptionJob: string,
    email: string,
    name: string,
    _id?: string,
    photo: string,
    startDate: string,
    isActive: boolean,
    password: string
}
export interface IBookings{
    _id?: string,
    guest: string,
    orderDate: string,
    checkIn: string,
    checkOut: string,
    specialRequest: string,
    roomId: string,
    status: string
}
export interface IContacts {
    id: number,
    contactDate: string,
    contactId: number,
    guest: string,
    email: string,
    contact: number,
    title: string,
    text: string
}

    export interface IBookingsTitles {
        guestName: string,
        orderDate: string,
        checkIn: string,
        checkOut: string,
        specialRequest: string,
        roomType: string,
        status: string
     }

     export interface IUsersTitles {
        name: string,
        description: string,
        contact: string,
        status: string,
     }

     export interface IRoomsTitles {
        roomName: string,
        roomType: string,
        amenities: string,
        price: string,
        offerPrice: string,
        status: string
     }