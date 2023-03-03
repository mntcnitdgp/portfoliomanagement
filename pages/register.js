import { ref, serverTimestamp, set, update } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { getDatabase,  onValue} from "firebase/database";
import { useRouter } from 'next/router'
import GlobalContext from './globalcontext'
import { fetchUser,userAccessToken } from './fetchDetails'
import { app,db} from './firebase_data';
import CryptoJS from "crypto-js";
const Register = () => {
  const global = useContext(GlobalContext)
  const db2Ref = ref(db, 'users');
  const secretPass = "XkhZG4fW2t2W";
  
  const [user, setUser] = useState(null)
  const router = useRouter()
  useEffect(() => {
    const accessToken = userAccessToken()
    if (!accessToken) return router.push('/')
    const [userInfo] = fetchUser()

    setUser(userInfo.uid)
    console.log(userInfo.uid)
  }, [])
  const uid = user
  const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [roll, setRoll] = useState('')
    const[password,setPassword]=useState('')
    const [encrptedData, setEncrptedData] = useState("");
    const handleSubmit = async (e) => {
    
      e.preventDefault()
      try {
        const data = CryptoJS.AES.encrypt(
          JSON.stringify(password),
          secretPass
        ).toString();
    
        setEncrptedData(data);
        const postListRef = ref(db, 'users/' + uid)
        set(postListRef, {
          name,
          email,
          phoneNo,
          roll,
          Aeval:500,
          Beval:500,
          Ceval:500,
          Deval:500,
          total_amount:2000,

          password:encrptedData,
          timestamp:serverTimestamp()
        })
        router.replace('Firstpage')
        
       
      } catch (err) {
        alert(err)
      }
    }

  return (
    <div>
      <div >
          <div className='mt-4'></div>

          <form onSubmit={handleSubmit} >
            <div >REGISTRATION</div>
          <div className='ml-5 sm:ml-20 mb-2'>
              <label
                htmlFor='name'
                >
                Name
              </label>
              <input
                required
                type='text'
                id='name'
                name='name'
                onChange={(e) => setName(e.target.value.toUpperCase())}
                value={name}
                  placeholder='Enter Name'
              />
            </div>
            <div className='ml-5 sm:ml-20 mb-2'>
              <label
                htmlFor='email'
                  >
                Email
              </label>
              <input
                required
                type='email'
                id='email'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder='Enter Email'
              />
            </div>
            <div className='ml-5 sm:ml-20 mb-2'>
              <label
                htmlFor='phone'
                     >
                Phone_no
              </label>

              <input
                required
                type='tel'
                pattern="[0-9]{10}"
                name='phoneNo'
               onChange={(e) => setPhoneNo(e.target.value.toUpperCase())}
                value={phoneNo}
                id='phone'
                placeholder='Enter phoneNo'
              />
            </div>
            <div className='ml-5 sm:ml-20 mb-2'>
              <label
                htmlFor='roll'
                     >
                ROLL_NO
              </label>

              <input
                required
                type='text'
                
                name='roll'
               onChange={(e) => setRoll(e.target.value.toUpperCase())}
                value={roll}
                id='roll'
                placeholder='Enter rollNo'
              />
            </div>
            <div >
              <label
                htmlFor='password'
                  >
                Password
              </label>

              <input
                required
                type='password'
                name='password'
               id='password'
                onChange={(e) => setPassword(e.target.value.toUpperCase())}
                value={password}
                placeholder='Enter password'
              />
            </div>

            <div >
              <button
                type='submit'
                
              >
                DONE
              </button>
            </div>
           
          </form>
        </div>
    </div>
  )
}

export default Register