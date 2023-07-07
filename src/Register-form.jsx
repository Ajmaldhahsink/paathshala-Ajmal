import React, {useState} from "react";

export const Register = () => {

    const [email , setemail] = useState('');
    const [pass, setpass] = useState('');

    const clickevent = (e) =>{
        e.preventDefault();
        console.log(email);
        console.log(pass);
    }

    return(
        <div className="login">
        <form className="form" onSubmit={clickevent}>
            <div className="btn-group">
                <button className="btn" type="button">Login</button>
            </div>
            <div class="input-field">
                <input name="email" value={email} onChange={(e)=>setemail(e.target.value)}
                id="input" type="text" placeholder="  Email or Phone Number" />
                <input name="pass" value={pass} onChange={(e)=>setpass(e.target.value)}
                id="input" type="password" placeholder="  Password" />
            </div>
            <input className="check" type="checkbox" /><span>   Remember me ? </span>
            <div>
                <button className="submit" type="submit">submit</button>
            </div>
            <div class="social">
                <a href="#"><img src="google.png" /></a>
                <a href="https://www.facebook.com"><img src="facebook.png" /></a>
                <a href="https://www.linkedin.com"><img src="ked.png" /></a>
            </div>
        </form>
    </div>
    )
}