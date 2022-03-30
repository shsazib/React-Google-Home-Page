import React from 'react';


export default function History(props) {
    const {img, p } = props
  return (
      <>
        <div className="history ">
            <img src={img} alt="" />
            <p>{p}</p>
        </div>
      </>
  );
}
