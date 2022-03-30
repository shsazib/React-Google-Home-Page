import React from 'react';


export default function GoogleApCardHistory(props) {
  const {img, p} = props
  return(
      <>
        <div className="card-item">
                  <img src={img} alt="img"></img>
                  <p>{p}</p>
                </div>
      </>
    );
}
