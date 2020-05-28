/* eslint-disable */
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SettingsIcon from '@material-ui/icons/Settings';
import { useDispatch } from 'react-redux';
import ConfirmationDialogRaw from './ConfirmationDialogRaw';

export default function ConfirmationDialog(props) {
  const { componentName } = props;
  // const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('ON');
  const dispatch = useDispatch();

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
    const data = newValue === 'ON';
    dispatch({
      type:
        componentName === 'UpcomingEvents'
          ? 'UPCOMING_EVENTS'
          : 'MAJOR_STORIES',
      data,
      name: componentName,
    });
  };

  return (
    <List component="div" style={{ padding: '0px' }} role="list">
      <ListItem
        aria-haspopup="true"
        aria-controls="ringtone-menu"
        aria-label="phone ringtone"
        onClick={handleClickListItem}
        role="listitem"
        style={{ padding: '0px' }}>
        <SettingsIcon />
      </ListItem>
      <ConfirmationDialogRaw
        id="ringtone-menu"
        keepMounted
        open={open}
        onClose={handleClose}
        value={value}
      />
    </List>
  );
}
