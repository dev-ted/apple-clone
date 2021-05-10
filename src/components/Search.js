import React from "react";
import Backdrop from "@material-ui/core/Backdrop";

import { makeStyles } from "@material-ui/core/styles";
import '../css/header.css'
import Header from "./Header";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  backdrop: {
  
    color: "#fff",
  },
 
}));
function Search() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {open ? (
          <div className="search">
              <div className="search__bar animate__animated animate__backInRight">
                <BsSearch className="search__button" />
                <input autoFocus ={true} type ="search" className="search__input" placeholder="Search apple.com" />
                <AiOutlineClose className="search__close__icon" onClick={handleClose} />

              </div>
          
          <Backdrop open={open} className={classes.backdrop}>
          
          </Backdrop>
          </div>
          
     
      ) : (
        <Header />
      )}
    </div>
  );
}

export default Search;
