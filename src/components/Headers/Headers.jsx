import React from "react";
import Button from "../Button/button";

const Header = () =>{
    const tg = window.Telegram.WebApp;
    const onClose = () =>{
        tg.Close();
      }
    return(
        <div className={'header'}>
            <button onClick={onClose}>Close</button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    )
}
