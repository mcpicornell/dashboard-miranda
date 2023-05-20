
    export interface IRooms{
        id: number,
        roomName: string,
        status: string      
        offerPrice: number,
        price: number,
        roomNumber: number,
        roomType: string,
        amenities: string[],
        photos: string[]
    }

    export interface IUsers{
        contact: string,
        descriptionJob: string,
        email: string,
        id: number,
        name: string,
        photo: string,
        startDate: string,
        status: string
    }
    export interface IBookings{
        guest: string,
        orderDate: string,
        checkIn: string,
        id: number,
        checkOut: string,
        specialRequest: string,
        roomType: IRooms,
        status: string
    }
    export interface IContacts{
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