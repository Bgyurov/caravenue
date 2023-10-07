import {Link} from 'react-router-dom'
import styles from './Header.module.css'
export const Header = () =>{
    return (
        <section className={styles.banner_main}>
         <div className={styles.container}>
            <div className={styles.row , styles.d_flex}>
               
                  <div className={styles.text_bg}>
                     <h1>Find best car Here For rent</h1>
                     <strong>Free Multipurpose Responsive</strong>
                     <span>Landing Page 2019</span>
                     <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since theLorem Ipsum is simply dummy text of the printing 
                        <head></head>
                     </p>
                     <Link to="/allads">Read More</Link>
                  </div>
             
            </div>
         </div>
      </section>
    
    )
}