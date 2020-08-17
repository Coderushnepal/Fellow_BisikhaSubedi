import iziToast from 'izitoast';

export const success = ({ title, message }) => {
    iziToast.success({
        title: title,
        message: message,
    });
};

export const error = ({title, message}) => {
    iziToast.error({
        title,
        message,
    });
};