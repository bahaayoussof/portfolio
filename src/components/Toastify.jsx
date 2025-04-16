import toast from "react-hot-toast";

const Toastify = ({ type, message, id }) => {
  return toast[type](message, { id });
};

export default Toastify;