import React from 'react';
import MemberCard from '../components/MemberCard';
import alex from '../images/alex.jpg';


class Join extends React.Component {
constructor() {
super();
this.state = {
}
}
render() {
return (
<div className="tc">
<div className="bb b--black-20 lh-copy">
    <h1>How we work</h1>
    <p><span className="b">The People’s General Woodhouse</span> is a collective, made up of independent traders who are interested in supporting each other and increasing the range of their work. Members contribute things like skills, work, space and tools and benefit from similar things contributed by others. For example: if Jeeves has a van but no nail-gun, and Bertie has a nail-gun but no van, then both can expand their working abilities by sharing. By working together, they gain a friend and colleague, open a new avenue of work AND save themselves the price of buying new equipment. Collaborative working like this can also reduce waste by sharing spare materials, which is good for the environment and reduces over-head costs, which in turn brings down the cost of the work we do, benefitting clients as well as ourselves.
    </p>
    <h2>What you could contribute</h2>
    <p>You could contribute things like: skills and experience that others would like to gain, tools that others may not have, work opportunities when you need help on a job or have too much work, a vehicle, work space, or even time when someone else's is running low.</p>
    <h2>What you could receive</h2>
    <p>You could: learn new skills to expand your range of work, borrow tools and machinery instead of buying new stuff, work on other people’s projects, get introduced to new clients, get help moving bulky stuff around, rent cheap workshop space. <span className="b">Be part of a community of traders</span>.</p>
    <h2>How to Join</h2>
    <p>What to be involved? Send us an email at <a href="mailto:thepeoplesgeneralwoodhouse@gmail.com">thepeoplesgeneralwoodhouse@gmail.com</a></p>

</div>
    <h1>Current Members</h1>
    <div className="flex flex-wrap">

    <MemberCard name="Alex Casey" trades="Carpentry, Joinery, Wood-turning" tool="Egg Whisk" img={alex}/>
</div>
</div>
);
}
}
export default Join;