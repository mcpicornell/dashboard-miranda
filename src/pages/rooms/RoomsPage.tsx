import { useEffect } from "react";
import { fetchRooms } from "../../features/asyncThunk";
import {getRoomsStatus, getRoomsData, getRoomsError} from "../../features/rooms/RoomsSlice"
import roomsJSON from'../../data/rooms.json';
import { Table } from "../../components/Table";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { IRoomsTitles } from "../../features/interfaces";

const RoomsPage = () =>{
    const dispatch  = useAppDispatch();
    const roomsStatus = useAppSelector(getRoomsStatus);
    const roomsData = useAppSelector(getRoomsData);
    const roomsError = useAppSelector(getRoomsError);
    
    useEffect(() => {
        if (roomsStatus == "idle") {
         dispatch(fetchRooms());
        
        }
     }, [roomsStatus, roomsData, dispatch]);

     const roomsTitles: IRoomsTitles = {
        roomName: "Room Name",
        roomType: "Room Type",
        amenities: "Amenities",
        price: "Price",
        offerPrice: "Offer Price",
        status: "Status"
     }

     const roomsDataCopy = [...roomsData]

        return (
            <>
            <Table roomsData={roomsDataCopy} roomsTitles={roomsTitles} />

            </>
        )
};

export default RoomsPage;