import { toast } from 'react-toastify';

export const useNotification = () => {
  const successToast = (message: string) => {
    toast.success(message, {
      position: 'bottom-center',
      autoClose: 1500,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const errorToast = (message: string) => {
    toast.error(message, {
      position: 'bottom-center',
      autoClose: 1500,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const infoToast = (message: string) => {
    toast.info(message, {
      position: 'bottom-center',
      autoClose: 1500,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return { successToast, errorToast, infoToast };
};
