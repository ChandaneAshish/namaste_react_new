import { LOGO_URL } from '../utils/constants';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const onlineStatus = useOnlineStatus();
  //let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState('Login');
  //CHecking if the whole component is render
  //console.log("Header rendered");

  //if no dependency array => useEffect is called at every render
  //useEffect(()=>{})

  //if dependency array is empty=> useEffect is called at initial render (just once)
  // useEffect(() => {
  //   console.log("useEffect rendered");
  // }, []);

  //if dependency array is not empty (ex. contains btnNameReact)=> useEffect is called everytime the btnNameReact is updated
  useEffect(() => {
    //console.log("useEffect Rendered");
  }, [btnNameReact]);

  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Online Status: {onlineStatus === true ? 'Online' : 'Offline'}</li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>{' '}
          </li>
          <li>
            <Link to='/contact'>Contact us</Link>{' '}
          </li>
          <li>
            <Link to='/grocery'>Grocery</Link>{' '}
          </li>
          <li>Cart</li>
          <button
            className='login'
            onClick={() => {
              // btnName = "Logout";
              // console.log(btnName);
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
