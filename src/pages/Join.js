import React from 'react';
import MemberCard from '../components/MemberCard';


class Join extends React.Component {
constructor() {
super();
this.state = {
}
}
render() {
return (
<div className="tc">
<div className="bb b--black-20">
    <h1>How we work</h1>
    <p>The People’s General Woodhouse is a collective, made up of independent traders who are interested in supporting each other and increasing the range of their work.
        Members contribute things like skills, work, space and tools and benefit from things others contribute.
        Membership costs nothing.
    </p>
    <h2>What you could contribute</h2>
    <p>        Skills and experience that others would like to gain.
        Tools that others may not have.
        Work opportunities, when you need help on a job.
        A big vehicle.
        Work space.
    Time, when someone else has run out.</p>
    <h2>What you could receive</h2>
    <p>
        Learn new skills to expand your range of work.
        Borrow tools and machinery instead of buying new.
        Work on other people’s projects.
        Get introduced to new clients.
        Get help moving bulky stuff around.
        Rent cheap workshop space.
    Be part of a community of traders.</p>
    <h2>How to Join</h2>
    <p>What to be involved? Send us an email at <a href="mailto:thepeoplesgeneralwoodhouse@gmail.com">thepeoplesgeneralwoodhouse@gmail.com</a></p>

</div>
    <h1>Current Members</h1>
    <div className="flex flex-wrap">

    <MemberCard name="Alex Casey" trades="Carpentry, joinery, wood-turning" tool="egg whisk" img="http://tachyons.io/img/avatar_1.jpg"/>

    <MemberCard name="Fergus Chapman" trades="Things, Stuff" tool="Replicator" img="http://tachyons.io/img/avatar_1.jpg"/>
</div>
</div>
);
}
}
export default Join;