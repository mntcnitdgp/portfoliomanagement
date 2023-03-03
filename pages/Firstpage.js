import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import Year1 from './year1'
import Year2 from './year2'
import Year3 from './year3'
import Year4 from './year4'
import Year5 from './year5'

const Firstpage = () => {
  let distance1
  let distance2
  let distance3
  let distance4
  let distance5
     const router=useRouter();
    let te="kjcnkj"
    let interval = useRef()
    const [text,setText]=useState("")
    const startTimer = () => {
        
        const countdownDate1 = new Date('Mar 3, 2023 13:42:00 GMT+0530').getTime()
        const countdownDate2 = new Date('Mar 3, 2023 13:44:00 GMT+0530').getTime()
        const countdownDate3 = new Date('Mar 3, 2023 13:46:00 GMT+0530').getTime()
        const countdownDate4 = new Date('Mar 3, 2023 13:48:00 GMT+0530').getTime()
        const countdownDate5 = new Date('Mar 3, 2023 13:50:00 GMT+0530').getTime()
      
          let now = new Date().getTime()
           distance1 = Math.floor(((countdownDate1-now ) % (1000 * 60)) / 1000)
           distance2=  Math.floor(((countdownDate2 - now) % (1000 * 60)) / 1000)
           distance3=  Math.floor(((countdownDate3 - now) % (1000 * 60)) / 1000)
           distance4= Math.floor(((countdownDate4 - now) % (1000 * 60)) / 1000)
           distance5=  Math.floor(((countdownDate5 - now) % (1000 * 60)) / 1000)
          setText(distance1>0?"Year1":(distance2>0?"Year2":(distance3>0?"Year3":(distance4>0?"Year4":"Year5")))
          )
          console.log("render");
         // text=distance1>0?"distance1":"distance2"
         //text=distance1>0?"distance1":(distance2>0?"distance2":(distance3>0?"distance3":(distance4>0?"distance4":"distance5")))
         distance1>0?(router.replace('year1')):(distance2>0?(router.replace('year2')):(distance3>0?(router.replace('year3')):(distance4>0?(router.replace('year4')):(distance5>0?(router.replace('year5')):(router.replace('/'))))))
         
       
      }
      useEffect(() => {
       startTimer()
      }, )
     
  
  return (
    <div>
      

        {distance1>0?<Year1/>:(distance2>0?<Year2/>:(distance3>0?<Year3/>:(distance4>0?<Year4/>:<Year5/>)))
}
      
    </div>
  )
}

export default Firstpage