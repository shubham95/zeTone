'use client'
import React,{useEffect, useState} from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Image from "next/image";
import {AiOutlineClose} from 'react-icons/ai'
import validator from 'validator' 
import {initializeApp} from 'firebase/app'
import { addDoc, getFirestore } from 'firebase/firestore';
import 'firebase/firestore'
import { collection, doc, setDoc } from "firebase/firestore"; 


const InterviewModalForm = ({openModal, toggleShowModal}: any) => {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        phoneNumber:"",
        selectedDate:""
    });

    const [mockInterViewRef, setMockInterViewRef] = useState({});
    useEffect(()=>{
        
        const firebaseConfig = {
            apiKey: "AIzaSyDBK_DQQIbuMCo6YGd_8l4Cr2Cn2uRUFLg",
            authDomain: "zetone-bd7dc.firebaseapp.com",
            databaseURL: "https://zetone-bd7dc-default-rtdb.firebaseio.com/",
            projectId: "zetone-bd7dc",
            storageBucket: "zetone-bd7dc.appspot.com",
            messagingSenderId: "13708187855",
            appId: "1:13708187855:web:e989b75e4637cdc3e5bfba",
            measurementId: "G-TTKNCYBMDB"
        }
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        setMockInterViewRef(collection(db, "MockInterView"));
    },[]);

    let name, value;
    const postUserData = (event: any) => {
      name = event.target.name;
      value = event.target.value;
      console.log(name)
  
      setFormData({ ...formData, [name]: value });
      console.log(formData);
    };

      // connect with firebase
    const submitData = async (event:any) => {
        event.preventDefault();
        const { name, email, phoneNumber, selectedDate } = formData;

        if(!validator.isMobilePhone(phoneNumber)){
            alert("Phone Number is not valid")
            return;
        }
        console.log(mockInterViewRef)

        if(name && email && phoneNumber){
            // @ts-ignore
            await addDoc(mockInterViewRef, formData);
        }
        else {
            alert("Kindly filled the required field!");
        }
    };


return( 
   <div className={(openModal)?"":"hidden"}>
        <div className="flex top-0 left-0 inset-0 right-0 bg-black/70  w-full h-screen fixed justify-center z-[1000] overflow-x-hidden overflow-y-auto">
            <div className="md:m-10 md:p-10 p-2 relative text-xl md:w-[50%] items-center bg-slate-50 md:rounded-xl md:shadow-xl">
                
                <div className="flex justify-between">
                    <h2></h2>
                    
                    <button onClick={toggleShowModal}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                        <AiOutlineClose size={25}/>
                    </button>
                </div>

                <div className="text-2xl">
                    <h3>Schedule Interview</h3>
                        <div className="px-6 py-6 lg:px-8">
                            <p className="text-base"><span className="text-blue-600">Note(*)</span> We will be needing your resume in Interview</p>
                            <form className="space-y-6" action="#">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Your Name (*)</label>
                                    <input type="name" name="name" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                           placeholder="Your Name" 
                                           value={formData.name}
                                           onChange={postUserData}
                                           required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Your email (*)</label>
                                    <input type="email" name="email" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                            value={formData.email}
                                            onChange={postUserData}
                                            placeholder="name@gmail.com" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Phone Number (*)</label>
                                    <input type="phone" name="phoneNumber" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                            value={formData.phoneNumber}
                                            onChange={postUserData}
                                            placeholder="Phone Number" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Select Date (*)</label>
                                    <div className="flex">
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker label="Select Date" disablePast={true} 
                                             />   
                                        </LocalizationProvider> 
                                    </div>
                                </div>
                                <div className="flex justify-between">                                
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        onClick={submitData}
                                >SUBMIT</button>
                            </form>
                            <div className="flex justify-center mt-20 items-center hover:scale-105 duration-300 ease-in">
                                <Image src="/logo.png" width={225} height={30} alt=""/>
                            </div>
                        </div>
                </div>

            </div>
        </div>
    </div>
    )

}

export default InterviewModalForm;