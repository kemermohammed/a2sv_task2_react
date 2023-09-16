import download from './R.png'
import {useState} from "react"
import styles from './style.module.css';
export default function Card({title,Auther,Date,summary,comment,bt,bt2}){
    const [val,setVal] = useState(0)
    function sett(){
        setVal(val+1)
    }
    return(
        <div>
        <div>
        <img src={download} alt='ntg' width={'350px'}/>
        </div>
        <div>
        <li>
        <h4>{title}</h4>
        <div className={styles.dv1}>
            <p>
        <img src={download} alt='ntg' width={'30px'} className={styles.img1}/></p>
        <p className={styles.dv2}>
        <b>{Auther} </b></p>
        <p className={styles.dv3}>{Date}</p>
        </div>
        <button className={styles.dv4}>{bt}</button>
        <button className={styles.dv5}>{bt2}</button>
        <p className={styles.sum}>{summary}</p>
        <input type="text" />
        <button >add comment</button>
        </li>
        <div className={styles.like}>
        <button className={styles.lkbt} onClick={sett}> like</button>
        {val} likes
        </div>
        
        </div>
        </div>
    )
}
/*import download from './R.png'

export const Card = [
    {
        id: 1,
        img: {download},
        title:"Design Liberalized Exchange Rate Management",
        auther:"Fred Boone",
        Date: "Jan 10,1010",
        bt1:"UI/UX",
        bt2:"DEVELOPMENT",
        summary:"Alittle personality goes a long way,especially on a business blog.so don't be afraid to let loose"
    }   
]*/

