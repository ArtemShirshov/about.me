import React, { useCallback, useMemo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { deletePost } from '../ducks/Posts.reducer';

const ITEM_HEIGHT = 48;

interface Props {
  id: number
  deletePost: Function;
  isShow: boolean;
  history: {
    push: (url: string) => void
  };
  location: object;
  match: object;
}

export const PostsActions = ({ id, deletePost, history, isShow }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    // @ts-ignore
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onRemove = useCallback(() => {
    deletePost(id);
    handleClose();
  }, []);

  const options = useMemo(() => {
    return [
      { label: 'Remove', callback: onRemove },
      { label: 'Edit', callback: () => history.push(`/edit-post/${id}`) },
    ];
  }, []);

  return (
    <div style={{ visibility: isShow ? 'visible' : 'hidden' }}>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.label} onClick={option.callback}>
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

const mapDispatchToProps = { deletePost };

// @ts-ignore
export const PostsActionsConnected: React.ComponentClass<Omit<keyof RouteComponentProps<any>>> = compose(withRouter, connect(null, mapDispatchToProps))(PostsActions);
