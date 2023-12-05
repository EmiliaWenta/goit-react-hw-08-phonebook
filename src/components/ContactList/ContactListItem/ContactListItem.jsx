import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../../redux/reducers/contacts/operations';

import css from './ContactListItem.module.css';

export default function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contactListItem__item} key={id.toString()}>
      {name}: {number}
      <button
        className={css.contactListItem__button}
        type="button"
        onClick={() => {
          handleRemove(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
