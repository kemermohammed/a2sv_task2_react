import download from './R.png'
export default function Card({title,Auther,Date,summary}){
    return(
        <div>
        <div>
        <img src={download} alt='ntg' width={'300px'}/>
        </div>
        <div>
        <h4>{title}</h4>
        <h2>{Auther}</h2>
        <p>{summary}</p>
        {Date}
        </div>
        </div>
    )
}