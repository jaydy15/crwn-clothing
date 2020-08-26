import React from 'react';
import './preview-collection.scss';
import CollectionItem from '../collection-item/CollectionItem';

const PreviewCollection = ({ title, items }) => {
  return (
    <div>
      <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
          {items
            .filter((items, idx) => idx < 4)
            .map(({ id, ...props }) => (
              <CollectionItem key={id} {...props} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PreviewCollection;
