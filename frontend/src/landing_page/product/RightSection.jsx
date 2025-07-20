import React from "react";

const RightSection = ({imageURL, productName, productDescription,LearnMore}) => {
   return (
       <div className="container">
              <div className="row mt-5 ">
                  <div className="col-6 mt-5 p-5">
                    <h1 className="mt-5">{productName}</h1>
                    <p>{productDescription}</p>
                        <a href={LearnMore} >Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    
                  </div>

                   <div className="col-6 mt-5">
                    <img src={imageURL} />
                  </div>
              </div>
       </div>
    )
}

export default RightSection;