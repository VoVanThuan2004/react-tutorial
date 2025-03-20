import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const showToast = () => {
    toast.success("Success!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
    });
}