import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './Directory.scss';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../MenuItem/MenuItem';

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
