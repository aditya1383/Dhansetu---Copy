import React from "react";

const LeftSection = ({imageURL, productName, productDescription, tryDemo, LearnMore, googlePlay, appStore}) => {
    return (
       <div className="container">
              <div className="row mt-5 ">
                  <div className="col-6 mt-5">
                    <img src={imageURL} />
                  </div>
                  <div className="col-6 mt-5 p-5">
                    <h1 className="mt-5">{productName}</h1>
                    <p>{productDescription}</p>
                     <div>
                        <a href={tryDemo}>TryDemo</a>
                        <a href={LearnMore} style={{marginLeft:"50px"}}>Learn More</a>
                    </div>

                    <div className="mt-3">
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" /></a>
                        <a href={appStore} style={{marginLeft:"50px"}}><img src="media/images/appstoreBadge.svg" /></a>
                    </div>
                  </div>
              </div>
       </div>
    )
}

export default LeftSection;

// import React from "react";

// function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
//     return (
//         <div className="container mt-5">
//             <div className="row">
//                 <div className="col-6 ">
//                     <img src={imageURL}/>
//                 </div>


//                 <div className="col-6 p-5 mt-5">
//                     <h1>{productName}</h1>
//                     <p>{productDescription}</p>
//                     <div>
//                         <a href={tryDemo}>TryDemo</a>
//                         <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
//                     </div>

//                     <div className="mt-3">
//                         <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" /></a>
//                         <a href={appStore} style={{marginLeft:"50px"}}><img src="media/images/appstoreBadge.svg" /></a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default LeftSection;