import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Input } from 'components/Fields/Input';
import { onChangeForm } from 'utils/formUtils';

import {
  setOpenNewCategoryDialog,
  sendNewCategory,
} from './ducks/NewCategoryDialog.reducer';

export interface PropTypes {
  setOpenNewCategoryDialog: Function;
  sendNewCategory: Function;
  isOpen: boolean;
}

export const NewCategoryDialog = ({
  isOpen,
  setOpenNewCategoryDialog,
  sendNewCategory,
}: PropTypes) => {
  const [form, setForm] = useState({
    title: '',
  });

  const handleClose = useCallback(() => {
    setOpenNewCategoryDialog(false);
  }, []);

  const onChangeField = useCallback(
    (event) => onChangeForm(event, form, setForm),
    [form],
  );

  const onSubmit = useCallback(() => {
    sendNewCategory(form);
  }, [form]);

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>New Category</DialogTitle>
      <DialogContent>
        <Input
          label="Category name"
          name="title"
          onChange={onChangeField}
          margin="dense"
          autoFocus
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onSubmit} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// @ts-ignore
const mapStateToProps = (state) => ({
  isOpen: state.NewCategoryDialog.isOpen,
});

const mapDispatchToProps = { setOpenNewCategoryDialog, sendNewCategory };

export const NewCategoryDialogConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCategoryDialog);
