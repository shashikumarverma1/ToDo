import React from 'react'
import { BsPencil } from "react-icons/bs";
import { FcManager } from "react-icons/fc";
function SideuserChat() {
    let data = [
        {
            Image: "< FcManager/>",
            name: "name",
            description: 'description is very good',
            time: "10:30"
        },
        {
            Image: "image",
            name: "name",
            description: 'description is very good',
            time: "10:30"
        },
        {
            Image: "image",
            name: "name",
            description: 'description is very good',
            time: "10:30"
        }, 
    ]
    // console.log(data)
    return (
        <div className='mx-2'>
            <div className=' row d-flex  align-items-center'>
                <div className='col-3 mt-3 '>
                <img className='rounded-circle' style={{
                                    width:40,
                                    height:40,
                                    // marginTop:10
                                }} src='./man.jpg'/>
                    
                      </div>
                <div className='col-9'>
                    <div className='d-flex align-item-center'>
                   
                        <div className='w-100 mx-3'>
                       
                            <div className='d-flex justify-content-between'>
                          
                                <div><b className='text-primary'>Utkarshini arora</b></div>
                                <div><BsPencil/></div>
                            </div>
                            <div>software devloper</div>
                        </div>
                    </div>


                </div>
            </div>

           <div className='d-flex  align-items-center justify-content-center'>
           <div> <input className=' border rounded m-1 p-1 w-100' type='search' placeholder='     search friend' />
            </div>
           </div>

            {
                data.map((e, i) => {
                    return (
                        <div>
                            <div className=' row d-flex p-2 align-items-center border rounded m-1'>
                                <div className='col-3 '>
                                <img className='rounded-circle' style={{
                                    width:40,
                                    height:40
                                }} src='./man.jpg'/>
                                </div>
                                <div className='col-9'>
                                    <div className='d-flex align-item-center'>

                                        <div className='w-100 mx-3'>
                                            <div className='d-flex justify-content-between m-1 '>
                                                <div className='text-primary'>Sonu</div>
                                                <div>{e.time}</div>
                                            </div>
                                            <div>{e.description}</div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    )
                })

            }


        </div>
    )
}

export default SideuserChat