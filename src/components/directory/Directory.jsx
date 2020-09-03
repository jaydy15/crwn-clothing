import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import './directory.scss';
import { connect } from 'react-redux';
import { selectDirectorySections } from './../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
