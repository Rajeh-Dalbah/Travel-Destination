import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import data from "../../data/db.json";
import './Home.css';
function Home(){
    return(
    <>
        
        <Tours data={data}/>
        <Footer/>
    </>
    )
}

export default Home;