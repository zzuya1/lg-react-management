//import "./comp1.scss"   //全局引入

//模块化引入
import styles from "./comp1.module.scss"

const Comp = () =>{
 return (
    <div className={styles.box}>
        <p>这是Comp1里的东西</p>
    </div>
 )
}

export default Comp