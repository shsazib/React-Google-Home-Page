import React from 'react';
import Photos from './AppApi'
import GoogleApCardHistory from './GoogleApCardHistory'



export default function GoogleAppCard() {
  return (
      <>
        <div className="app-card">
            <div className="app-card-items">
            {Photos.map((value) => {
                        return(
                            <GoogleApCardHistory
                                img={value.img}
                                p={value.p}
                            />
                        )
                    })}
            </div>
            <div className="more">
                <button className="More-from-Google">More from Google</button>
            </div>
        </div>
        
      </>
  );
}
