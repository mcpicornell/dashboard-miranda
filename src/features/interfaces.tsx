export interface loginInfo {
  email: string;
  password: string;
}

export interface localStorageObj {
  token: string;
  id: string;
}

export interface IRooms {
  _id?: string;
  roomName: string;
  isAvailable: boolean;
  offerPrice: number;
  price: number;
  roomNumber: number;
  roomType: string;
  amenities: string[];
  photos: string[];
}

export interface IUsers {
  contact: number;
  descriptionJob: string;
  email: string;
  name: string;
  _id?: string;
  photo: string;
  startDate: string;
  isActive: boolean;
  password: string;
  isAdmin: boolean;
}

export interface IBookings {
  _id?: string;
  guest: string;
  orderDate: string;
  checkIn: string;
  checkOut: string;
  specialRequest: string;
  roomObj: IRooms;
  status: string;
}
export interface IContacts {
  _id?: string;
  date: string;
  customerName: string;
  customerEmail: string;
  customerPhoneNumber: number;
  subject: string;
  comment: string;
  isArchive: boolean;
}

export interface IBookingsTitles {
  guestName: string;
  orderDate: string;
  checkIn: string;
  checkOut: string;
  specialRequest: string;
  roomType: string;
  status: string;
}

export interface IUsersTitles {
  name: string;
  description: string;
  contact: string;
  status: string;
}

export interface IRoomsTitles {
  roomName: string;
  roomType: string;
  amenities: string;
  price: string;
  offerPrice: string;
  status: string;
}

export interface IContactsTitles {
  orderId: string;
  date: string;
  customer: string;
  comment: string;
  action: string;
}
