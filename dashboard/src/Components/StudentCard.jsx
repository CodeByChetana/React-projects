import React,{useState} from 'react'

function StudentCard(props) {
    const[likes,setLikes]=useState(0);

    function increaseLike(){
        setLikes(likes+1);

    }
  return (
    <>
    <div className='card'>
      <h2>{props.name}</h2>
      <p>Course: {props.course} </p>
      <h3>Likes: {likes}</h3>
      <button onClick={increaseLike}>Like</button>
    </div>
    </>
  )
}

export default StudentCard
