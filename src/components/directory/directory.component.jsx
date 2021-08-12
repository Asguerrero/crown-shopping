import React from 'react';
import { connect } from 'react-redux'
import MenuItem from '../menu-item/menu-item.component.jsx';
import './directory.style.scss';
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({sections}) => (
   <div className='directory-menu'>
      {
      sections.map(({title, imageUrl, id, size, linkUrl})=> (
      <MenuItem key={id} title={title} imageURL={imageUrl} size={size} linkUrl={linkUrl}/>
                ))
      }
    </div>
       
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})


export default connect(mapStateToProps)(Directory);