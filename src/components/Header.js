import React ,{useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { AiFillApple } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { items } from "../data/NavItems";
import "../css/header.css";
import Search from "./Search";

function Header() {
    const [isClicked, setIsClicked] = useState(false);
    const [show, setShow] = useState(false);

    const transition = () =>{
        if(window.scrollY > 100){
            setShow(true)
        }
        else{
            setShow(false)
        }
    }
    useEffect(() => {
       window.addEventListener("scroll", transition);
       return () => window.removeEventListener('scroll', transition)
    } ,[])

  return (
    <div className={` header ${show && 'transparent'}`}>
         {isClicked ? (
                <Search />
            ) : (
                <nav  >
           
                <div >
                <Link className='header__icon animate__animated animate__bounce' to="/">
                  <AiFillApple />
                </Link>
              </div>
        
              <div className ='list'>
                {items.map((item) => (
                  <Link className="header__nav__items" key={item.id} to={item.link}>
                    <li>{item.title}</li>
                  </Link>
                ))}
              </div>
              <div className="header__search__icon">
                <BsSearch onClick ={() => setIsClicked(true)}  />
              </div>
                </nav>
            )}
     
      
    </div>
  );
}

export default Header;
