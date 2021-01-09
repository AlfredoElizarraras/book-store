import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

const Notification = ({ type }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert onClose={handleClose} severity={type} elevation={6} variant="filled">
        This is a success message!
      </MuiAlert>
    </Snackbar>
  );
};

Notification.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Notification;
