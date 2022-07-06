import React, { useEffect, useState } from 'react'
import user from '../../assets/img/2/1.png'
import moment from 'moment';
// import { GrFormClose } from "react-icons/gr";


const getLocalItem = () => {
    let list = localStorage.getItem('item')
//    console.log(list);

    if(list){
        return JSON.parse(localStorage.getItem('item'))
    } else {
        return [];
    }
}

function Comment() {

    const [state, setState] = useState({
        name: "",
        email:"",
        message: "",
    })

    const onChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const [addItems, setAddItems] = useState(getLocalItem())
    const LOCAL_STORAGE_KEY = 'item'

    const itemAdd = async (e) => {
        e.preventDefault();
        setAddItems([...addItems, {item: state, key: Date.now() }]);
        setState({name: "", email: "", message: ""})

    }

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(addItems))
    }, [addItems]);

    const [comment, setComment] = useState(false)

    const [replayComment, setReplayComment] = useState('')
    const [replayAdd, setReplayAdd] = useState([]);

    const addReplay = () => {
        if(replayComment === '') {
            alert("type your comment")
        } else {
            setReplayAdd([...replayAdd, replayComment]);
            setReplayComment('')
        }
        
    }

  return (
    <>


   {addItems.map((elem, index)=>{
    return(
       <>
       <div key={index} className='border border-[#2F384A] rounded-[18px] mb-[30px] p-6'>
        <div className='flex items-center'>
            <img className='w-[50px] h-[50px] rounded-full' src={user} alt="" />
            <div className='xl:ml-5 md:ml-3 xm:ml-5 xl:text-[16px] xm:text-[14px] text-gray-400'>
                <b>{elem.item.name}</b>
                <p>{elem.item.email}</p>
            </div>
        </div>
        <p className='text-gray-500 mt-4 xm:text-[12px] sm:text-[14px] md:text-[16px]'>{elem.item.message}</p>
        <div className='flex justify-between items-center'>
        <button onClick={() => setComment(!comment)} className='text-blue-500 mt-6 mb-2 xm:text-[14px] md:text-[16px]'>Reply</button>
        <span className='text-gray-700'> {moment().startOf('hour').fromNow()} </span>
        </div>
    </div>
    
       </>
    )
   })}
   <div>
        {
            replayAdd.map((elem, index) => {
                return(
                    <div key={index} className='relative border border-[#2F384A] rounded-[18px] mb-[30px] p-6 ml-[100px] before:absolute before:w-[60px] before:h-[1px] before:bg-[#2F384A] before:left-[-60px] before:top-[50%] after:absolute after:w-[1px] after:h-full after:top-0 after:left-[-60px] after:bg-[#2F384A] '>
                        <div className='flex items-center'>
                            <img className='w-[50px] h-[50px] rounded-full' src={user} alt="" />
                            <div className='xl:ml-5 md:ml-3 xm:ml-5 xl:text-[16px] lg:text-[14px] text-gray-400'>
                                <b>Alfonso Likens</b>
                                <p>writer</p>
                            </div>
                        </div>
                        <p className='text-gray-500 mt-4'>{elem}</p>
                        <button className='text-blue-500 mt-6 mb-2'>Reply</button>
                    </div>
                )
            })
        }
    </div>
    <div className={comment? 'w-full mb-10 block':'w-full mb-10 hidden'}>
        <input name='replay' required value={replayComment} onChange={(e)=> setReplayComment(e.target.value)} type='text' className='bg-[#292D40] text-white p-4 rounded-md relative focus:outline-none w-full' placeholder='Comment..' />
        {/* <span className=' absolute'><GrFormClose/></span> */}
        <button onClick={addReplay} className='p-2 mt-4 rounded-md text-white button-bg'>sent comment</button>
    </div>

    <div className='border border-[#2F384A] rounded-[18px] mb-[30px] p-6'>
    <h5 className='text-white mb-10'>Leave a reply</h5>
       <form onSubmit={itemAdd}>
           <div className='md:flex col gap-[30px]'>
               <div className='md:w-5/12 xm:w-full'>
                   <div className='mb-[30px]'>
                       <label className='block mb-4 text-gray-500'>Your Name</label>
                       <input required type='text' name='name' value={state.name} onChange={onChange} className='px-5 py-3 bg-[#292d40] text-gray-300 w-full rounded-lg' placeholder='Example John' />
                   </div>
                   <div>
                       <label className='block mb-4 text-gray-500'>Email</label>
                       <input required type='text' name='email' value={state.email} onChange={onChange} className='px-5 py-3 bg-[#292d40] text-gray-300 w-full rounded-lg' placeholder='Example @email' />
                   </div>
               </div>
               <div className='md:w-7/12 xm:w-full xm:mt-[30px] md:mt-0'>
                   <label className='block mb-4 text-gray-500'>Message</label>
                   <textarea required type='text' name='message' value={state.message} onChange={onChange} className='px-5 py-3 bg-[#292d40] text-gray-300 w-full h-[166px] resize-none rounded-lg' placeholder='Example message' />
               </div>
           </div>
            <button type='submit' className='button-bg mt-[30px] p-4 w-full rounded-lg text-white font-roboto'>Send Message</button>
       </form>
   </div>
    </>
  )
}

export default Comment