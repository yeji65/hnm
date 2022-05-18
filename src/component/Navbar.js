import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom" ;
import { useSelector } from "react-redux";

const Navbar = () => {
    const authenticate = useSelector((state) => state.auth.authenticate);
    const navigate = useNavigate()
    const goToLogin = ()=> {
        navigate("/login")
    }
    const goToHompage = ()=>{
        navigate("/")
    }
    const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M Home','Sale','지속가능성']
    const search = (event)=>{
        if(event.key =='Enter'){
            //입력한 검색어를 읽어와서
            let keyword = event.target.value
            console.log("keyword",keyword)
            // url 바꿔준다
            navigate(`/?q=${keyword}`)

        }
    }
  return (
    <div>
        <div className="login-button">
            {authenticate?(
            <div onClick={()=>authenticate(false)}>
                <FontAwesomeIcon icon={faUser} />
                <span>로그아웃</span>
            </div>):(
            <div onClick={()=>navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
            </div>)}
        </div>
        <div className='nav-section' onClick={goToHompage}>
            <img src="data:image/png;base64,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"
            />
            </div>
        <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map(menu=><li>{menu}</li>)}
            </ul>
            <div className='search-box'>
                <FontAwesomeIcon icon={faSearch}/>
                <input type="text" onKeyPress={(event)=>search(event)} />
            </div>
        </div>
    </div>
  )
}

export default Navbar