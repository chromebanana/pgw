import React from 'react';
import MemberCard from '../components/MemberCard';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


class Join extends React.Component {

render() {
    const { fields, includes } = this.props
    const membersSorted = fields.members && fields.members.map((item, i) => {
        return includes.Entry && includes.Entry.filter(entry => 
              entry.sys.id === item.sys.id)[0]
          })

return (
    <div className="tc">
        <div className="bb b--black-20 lh-copy ph2 pb3">
            {documentToReactComponents(fields.joinUs)}
        </div>
        <div className="pv3">
        <h1>Current Members</h1>
        <div className="flex flex-wrap pt2">
            {
                membersSorted && membersSorted.map((item, i) => {
                    const photo = includes.Asset && includes.Asset.filter(member => 
                        member.sys.id === item.fields.photo.sys.id)             
                    return(
                        <MemberCard 
                        key={i} 
                        name={item.fields.name} 
                        trades={item.fields.trades} 
                        tool={item.fields.tool} 
                        img={photo[0].fields.file.url}/>
                        )
                    })
            }
        </div>
        </div>
    </div>
    );
}
}
export default Join;