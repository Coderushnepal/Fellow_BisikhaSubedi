import iziToast from 'izitoast';

export const success = ({ title, message }) => {
    iziToast.success({
        title: title,
        message: message,
    });
};