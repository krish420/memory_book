import loginImg from '../../../images/loginpage.jpg'

import { Login } from '../../Login/Login';
function LoginPage() {
  return (
   <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-5'>
          <Login />
        </div>
        <div className='col-md-7 my-auto'>
          <img className="img-fluid w-100" src={loginImg} alt='' />
        </div>
      </div>
   </div>
  );
}

export default LoginPage;
