import React from 'react';
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import './collections-overview.style.scss';
import CollectionPreview from "../preview-collection/preview-collection.component.jsx";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector.js";



const CollectionsOverview = ({ collections }) =>(
    <div className='collections-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
)


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  })

export default connect(mapStateToProps)(CollectionsOverview)