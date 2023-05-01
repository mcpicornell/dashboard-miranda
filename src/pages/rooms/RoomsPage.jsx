import { useEffect } from "react";
import { fetchRooms } from "../../features/asyncThunk";
import {getRoomsStatus, getRoomsData, getRoomsError} from "../../features/rooms/RoomsSlice"
import roomsJSON from'../../data/rooms.json';
import { useDispatch, useSelector } from "react-redux";
import { Table } from "../../components/Table";


const RoomsPage = () =>{
    const dispatch  = useDispatch();
    const roomsStatus = useSelector(getRoomsStatus);
    const roomsData = useSelector(getRoomsData);
    const roomsError = useSelector(getRoomsError);
    
    useEffect(() => {
        if (roomsStatus == "idle") {
         dispatch(fetchRooms(roomsJSON));
        
        }
     }, [roomsStatus], dispatch);

     const roomTitles = {
        roomName: "Room Name",
        roomType: "Room Type",
        amenities: "Ameneties",
        price: "Price",
        offerPrice: "Offer Price",
        status: "Status"
     }
     
    return (
        
        <Table data={roomsData} roomTitles={roomTitles}/>
    )

};

export default RoomsPage;