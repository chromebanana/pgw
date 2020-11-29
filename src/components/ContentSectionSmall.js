import React from 'react';



const ContentSectionSmall = ({ emoji, emojidesc, title, content }) => {

  return(
 <div className="w-100 mv3">
 <h2 className="ma0 f4 f3-ns"><span role="img" aria-label={emojidesc}>{emoji}</span> {title}</h2>
    <div className="ph4 pv3 lh-copy">
    {content}
    </div>
  </div>
  )
}

export default ContentSectionSmall;