import { useEffect } from "react";
import {
  getUsersStatus,
  getUsersData,
  getUsersError,
} from "../../features/users/UsersSlice";
import { fetchUsers } from "../../features/users/fetchUsers";
import { useAppSelector, useAppDispatch } from "../../app/store";
import { Table } from "../../components/Table";

const UsersPage = () => {
  const dispatch = useAppDispatch();
  const usersStatus = useAppSelector(getUsersStatus);
  const usersData = useAppSelector(getUsersData);
  const usersError = useAppSelector(getUsersError);

  const usersTitles = {
    name: "Name",
    description: "Description",
    contact: "Contact",
    status: "Status",
  };

  useEffect(() => {
    if (usersStatus == "idle") {
      dispatch(fetchUsers());
    }
  }, [usersStatus, usersData, dispatch]);

  const usersDataCopy = [...usersData];

  return (
    <>
      <Table usersTitles={usersTitles} usersData={usersDataCopy} />
    </>
  );
};

export default UsersPage;
