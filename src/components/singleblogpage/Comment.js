import React, { useEffect, useState } from 'react'
import user from '../../assets/img/2/1.png'
import moment from 'moment';


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
    }, [addItems])

  return (
    <>


   {addItems.map((elem, index)=>{
    return(
       <>
       <div key={index} className='border border-[#292d40] rounded-[18px] mb-[30px] p-6'>
        <div className='flex items-center'>
            <img className='w-[50px] h-[50px] rounded-full' src={user} alt="" />
            <div className='xl:ml-5 md:ml-3 xm:ml-5 xl:text-[16px] lg:text-[14px] text-gray-400'>
                <b>{elem.item.name}</b>
                <p>{elem.item.email}</p>
            </div>
        </div>
        <p className='text-gray-500 mt-4'>{elem.item.message}</p>
        <div className='flex justify-between items-center'>
        <button className='text-blue-500 mt-6 mb-2'>Reply</button>
        <span className='text-gray-700'> {moment().startOf('hour').fromNow()} </span>
        </div>
    </div>
       </>
    )
   })}


    <div className='border border-[#292d40] rounded-[18px] mb-[30px] p-6'>
    <h5 className='text-white mb-10'>Leave a reply</h5>
       <form onSubmit={itemAdd}>
           <div className='flex gap-[30px]'>
               <div className='w-5/12'>
                   <div className='mb-[30px]'>
                       <label className='block mb-4 text-gray-500'>Your Name</label>
                       <input required type='text' name='name' value={state.name} onChange={onChange} className='px-5 py-3 bg-[#292d40] text-gray-300 w-full rounded-lg' placeholder='Example John' />
                   </div>
                   <div>
                       <label className='block mb-4 text-gray-500'>Email</label>
                       <input required type='text' name='email' value={state.email} onChange={onChange} className='px-5 py-3 bg-[#292d40] text-gray-300 w-full rounded-lg' placeholder='Example @email' />
                   </div>
               </div>
               <div className='w-7/12'>
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