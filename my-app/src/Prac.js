import styles from './style.module.css';
import Card from './Card'
export default function Prac(){
    return(
        <div className={styles.main}>
        <div>
        
        <Card 
        title = {"Design Liberalized Exhange Management"}
        Auther = {"Fred Boone"}
        Date = {"Jan10/2020"}
        summary = {"A little personality goes a long way,especially on a buisness blog.So don't be afraid to let loose"}
        ></Card>
        </div>
        <div>
        
        <Card 
        title = {"Design Liberalized Exhange Management"}
        Auther = {"Fred Boone"}
        Date = {"Jan10/2020"}
        ></Card>
        </div>
        </div>
    )
}