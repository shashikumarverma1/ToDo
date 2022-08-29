import React from 'react'
import { FaUserAlt } from "react-icons/fa";
// import { TbJewishStar } from "react-icons/Tb";
import { TbJewishStar } from "react-icons/tb";
import { BsFillChatQuoteFill,BsFillCameraVideoFill } from "react-icons/bs";
function RightSidebox() {
  return (
    <div>
        <div className='d-flex justify-content-center border rounded my-2 py-1'>
            <div>
            <div className='p-1'>  <img className='rounded-circle' style={{
                                    width:40,
                                    height:40
                                }} src='./man.jpg'/></div>
            <h5 className='p-1'>Ramesh</h5>
            <div className='p-1'>software devloper</div>
            </div>
        </div>
        <div className='d-flex justify-content-between p-2 mx-4 my-2 '>
            
            <div className='my-2'><div> chat   <BsFillChatQuoteFill/></div></div>
            <div className='my-2 '><div> call    <BsFillCameraVideoFill/></div></div>
            
        </div>
        <div className='p-2 my-2 border rounded'>
            <div className='d-flex '><div className='mx-2'><FaUserAlt/></div> <div>Add new friend</div></div>
            <div className='d-flex '><div className='mx-2'><TbJewishStar/></div> <div>Add to faivrate</div></div>
        </div>
        <div className=' border rounded my-2 p-2 my-2'>
            <div className='my-2'>Attachment</div>
            <div className=' d-flex my-2 '>
                <div className='col-2 bg-info rounded text-center m-1 p-1'>video</div>
                <div className='col-2 bg-info rounded text-center m-1  p-1'>mp-3</div>
                <div className='col-2 bg-info rounded text-center m-1  p-1'>image</div>
                <div className='col-2 bg-info rounded text-center m-1  p-1'>doc</div>
            </div>
        </div>
        <div className='d-flex justify-content-center my-3'>
            <p className='border rounded-pill p-2'>view more</p>
        </div>
    </div>
  )
}

export default RightSidebox