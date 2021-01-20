import React from 'react';
import MemberCard from '../components/MemberCard';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


class Join extends React.Component {
constructor(props) {
super(props);
this.state = {
}
}
render() {
    const { data, members } = this.props
    const members_info = members.items
    const members_pic = members.includes.Asset

return (
<div className="tc">
<div className="bb b--black-20 lh-copy ph2 pb3">
{documentToReactComponents(data)}
</div>
<div className="pv3">
    <h1>Current Members</h1>
    <div className="flex flex-wrap pt2">

    {
        members_info && members_info.map((item, i) => {
            const photo = members_pic && members_pic.filter(member => 
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