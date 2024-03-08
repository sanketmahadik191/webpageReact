import styles from "./Footer.css"

const FooterSection =() =>{
 return(
    <footer className="footer">
        <div className="logo">
            <img src="https://img.freepik.com/free-vector/illustration-share-icon_53876-5622.jpg?w=740&t=st=1709899021~exp=1709899621~hmac=29c2028de4520fb3110e61325e141a702eeedb4f3b0a921d88c3076d9521cea9"></img>
            <h1>Foodie</h1>
            </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.aque neque.</p>
        <div className="lists">
            <ul>
                <li>About</li>
                <li>Careers</li>
                <li>History</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Blog</li>
            </ul>
        </div>
    </footer>
 )
}

export default FooterSection;