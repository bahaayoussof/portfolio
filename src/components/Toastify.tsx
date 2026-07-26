import toast from "react-hot-toast";

interface ToastifyProps {
  type: "success" | "error";
  message: string;
  id: string;
}

const Toastify = ({ type, message, id }: ToastifyProps) => {
  return toast[type](message, { id });
};

export default Toastify;