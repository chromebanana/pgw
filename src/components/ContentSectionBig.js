import React from 'react';



const ContentSectionBig = ({ title, content }) => {

  return(
 <div className="w-100 mv4">
 <h2 className="ma0">{title}</h2>
    <div className="pa2">
    {content}
    </div>
  </div>
  )
}

export default ContentSectionBig;