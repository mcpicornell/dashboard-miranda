import { useEffect } from "react";
import { fetchRooms } from "../../features/asyncThunk";
import {getRoomsStatus, getRoomsData} from "../../features/rooms/RoomsSlice"
import roomsJSON from'../../data/rooms.json';
import { useDispatch, useSelector } from "react-redux";


const RoomsPage = () =>{
    const dispatch  = useDispatch();
    const roomsStatus = useSelector(getRoomsStatus);
    const roomsData = useSelector(getRoomsData);

    useEffect(() => {
        if (roomsStatus === "idle") {
         dispatch(fetchRooms(roomsJSON));

        }
     }, [roomsStatus], dispatch);
     
    return (
        <h1>RoomsPage</h1>
    )

};

export default RoomsPage;