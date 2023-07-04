import { useEffect } from "react";
import { getContactsData, getContactsError, getContactsStatus } from "../../features/contact/ContactSlicer";
import { fetchContacts } from "../../features/contact/fetchContacts";
import { useAppSelector, useAppDispatch } from "../../app/store";
import { Table } from "../../components/Table";

const ContactsPage = () =>{

    const dispatch = useAppDispatch();
  const contactsStatus = useAppSelector(getContactsStatus);
  const contactsData = useAppSelector(getContactsData);
  const contactsError = useAppSelector(getContactsError);

  const contactsTitles = {
    orderId: "Order ID",
    date: "Date",
    customer: "Customer",
    comment: "Comment",
    action: "Action"
  };

  useEffect(() => {
    if (contactsStatus == "idle") {
      dispatch(fetchContacts());
    }
  }, [contactsStatus, dispatch, contactsData, ]);

  const contactsDataCopy = [...contactsData];
  console.log(contactsDataCopy)

  return (
    <>
      <Table contactsTitles={contactsTitles} contactsData={contactsDataCopy} />
    </>
  );

};

export default ContactsPage;

