// components/Toast.tsx
import { ToastContainer, ToastOptions, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastProps {
    message: string;
    type: 'success' | 'error' | 'info';
}

const Toast: React.FC<ToastProps> = ({ message, type }) => {
    const options: ToastOptions = {
        position: 'bottom-right',
        autoClose: 5000, // Close the toast after 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    };

    const showToast = () => {
        switch (type) {
            case 'success':
                toast.success(message, options);
                break;
            case 'error':
                toast.error(message, options);
                break;
            case 'info':
                toast.info(message, options);
                break;
            default:
                toast(message, options);
                break;
        }
    };

    return (
        <div onClick={showToast}>
            Show {type} Toast
            <ToastContainer />
        </div>
    );
};

export default Toast;
