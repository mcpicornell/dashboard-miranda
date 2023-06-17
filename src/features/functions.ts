import { toast } from "react-toastify";

export const convertToDateFormat = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const dateFormated = `${year}-${month}-${day}`;
  return dateFormated;
};

export const sliceID = (id: string, slices: number) => {
  return id.slice(-slices);
};

export const showToast = (
  message: string,
  type: "success" | "error" | "pending"
) => {
  if (type === "success") {
    const toastSuccessMessage = toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
    setTimeout(() => {
      toast.dismiss(toastSuccessMessage);
    }, 4000);
  } else if (type === "error") {
    const toastErrorMessage = toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
    setTimeout(() => {
      toast.dismiss(toastErrorMessage);
    }, 4000);
  } else if (type === "pending") {
    const toastLoadingMessage = toast.loading(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
    setTimeout(() => {
      toast.dismiss(toastLoadingMessage);
    }, 1200);
  }
};
