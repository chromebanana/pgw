import React from 'react';
class Join extends React.Component {
constructor() {
super();
this.state = {
}
}
render() {
return (
<div className="tc">
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
    <h2>Current members and trades(?)</h2>
    <ul className="pl0 ml0"style={{'list-style-type':'none'}}>
        <li className="pv1">Alex Casey</li>
        <li className="pv1">Fergus Chapman</li>
        <li className="pv1">Mike Gorham</li>
        <li className="pv1">Eloise</li>
        <li className="pv1">Barnaby Ash</li>
    </ul>
    <h2>How to apply</h2>
    <p>What to be involved? Send us an email at <a href="mailto:thepeoplesgeneralwoodhouse@gmail.com">thepeoplesgeneralwoodhouse@gmail.com</a></p>
</div>
);
}
}
export default Join;