import React from 'react'
import "../Comp/css/Section.css"
function Section_two(props) {
  return (
      <>
       <div className="main">
              <div className="parent">
                  <div className="part_data">
                      <h3 className="heading">
                          {props.img}</h3>
                      
                      <p className='paragraph'>
                          {props.data}
                      </p>
                      <div>
                          <button className="btn">Request a quotes </button>
                      </div>
                  </div>
                  <div className="part_img">
                      <img src={props.img} alt="" />
                  </div>
              </div>
      </div>
      </>
  )
}

export default Section_two