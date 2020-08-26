import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import PreviewCollection from '../../../components/preview-collection/PreviewCollection';

export class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };
  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...props }) => (
          <PreviewCollection key={id} {...props} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
