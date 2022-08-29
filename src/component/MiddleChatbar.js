import React, { useState } from 'react'
import { FaSistrix ,FaGratipay } from "react-icons/fa";
import { BsFillBellFill ,BsFillCaretRightFill,BsFillEmojiHeartEyesFill,BsFillCameraFill} from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { GiSpeaker } from "react-icons/gi";
import { FcManager } from "react-icons/fc";
function MiddleChatbar() {
    const [input, setinput] = useState('')
    const [chatdata, setchatdata] = useState([])
    let data = ['how are you ?', 'wher from you are ?', 'ok', 'tell me something about you ?']
    const changehandel = (e) => {
        // console.log(input)
        setinput(e.target.value)
    }
    const sendMessageToDataBase = () => {
        // ChatData.push(input)
        if (input.length != 0) {
            setchatdata([...chatdata, input])
        }


        console.log(chatdata)
        setinput("")

    }
    // const Del = () => {
    //     setchatdata([])
    // }

    return (
        <div>
            <div className='h-100'>
                <div className='d-flex  justify-content-between border rounded my-2 p-2 h-75 '>
                    <div className='d-flex align-items-center'>
                        <div className='mx-1'>
                        <img className='rounded-circle' style={{
                                    width:40,
                                    height:40
                                }} src='./man.jpg'/>
                        </div>
                      
                        <div className='mx-1'> Ramesh</div>
                    </div>
                    <div className='d-flex'>
                    <div className='mx-1'><FaSistrix/>  </div>
                    
                        <div className='mx-1'> <FaGratipay/> </div>
                        <div className='mx-1'><BsFillBellFill/></div>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div>
                        {
                            data.map((e, i) => {
                                return (
                                    <div className='bg-secondary text-white p-2 m-1  rounded'>{e}</div>
                                )
                            })
                        }
                    </div>
                    <div>
                        {
                            chatdata.map((e, i) => {

                                return (
                                    <div className='d-flex  justify-content-end   rounded'>
                                        <div key={i} className='   rounded  ' style={{ marginRight: 2 + 'rem' }}><p className='bg-info px-3  py-1 rounded'>{e}</p></div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div >
           

            </div>

            <div className='h-25 w-100'>
                        <div style={{
                            // height: 10%,
                            position: 'fixed',
                            bottom: 1 + 'rem',
                            width:28 + 'rem'
                                 }}>
                            <div className='w-100 border rounded p-2 d-flex  justify-content-between  ' >
                                <div><GiSpeaker/></div>
                                <input className='border rounded p-1 w-75' type='text' 
                                
                                placeholder='Write something' onChange={changehandel} />
                                <div><GrAttachment/></div>
                                <div><BsFillCameraFill/></div>
                                <div><BsFillEmojiHeartEyesFill/></div>
                                <button className='border rounded p-1 btn btn-primary' onClick={sendMessageToDataBase}><BsFillCaretRightFill/> </button>
                            </div>
                          
                        </div>
                    </div>
        </div>
    )
}



export default MiddleChatbar