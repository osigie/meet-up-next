
import MeetUpList from "../components/meetups/MeetupList"
import React from 'react'


const dummy = [{
    id:1,
    title:"A first meetup",
    image:"https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/EMS.jpg?itok=OzPyAXaW",
    address:"Somewhere in the world",
     description:"This is the first meetup item"

},
{
    id:2,
    title:"A first meetup",
    image:"https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/EMS.jpg?itok=OzPyAXaW",
    address:"Somewhere in the world",
     description:"This is the first meetup item"

},
{
    id:3,
    title:"A first meetup",
    image:"https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/EMS.jpg?itok=OzPyAXaW",
    address:"Somewhere in the world",
     description:"This is the first meetup item"

},
{
    id:4,
    title:"A first meetup",
    image:"https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/EMS.jpg?itok=OzPyAXaW",
    address:"Somewhere in the world",
     description:"This is the first meetup item"

},



]




const HomePage = () => {
  return (
  <>
  <MeetUpList  meetups = {dummy}/>
  </>
  )
}

export default HomePage