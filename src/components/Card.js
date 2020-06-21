import React from 'react'

const Card = ({name , enroll , id , email}) =>{
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?set=set4`} alt={id} />
            <div>
                <h2>{name}</h2>
                <p>{enroll}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card