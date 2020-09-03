import React from 'react';
import './collectionOverview.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PreviewCollection from './../preview-collection/PreviewCollection';
import { selectCollectionsForPreview } from './../../redux/shop/shop.selectors';

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
