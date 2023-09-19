import { useState } from 'react';
import './Login.scss'
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify'
import { loginUser } from "../../services/userService"
const Login = (props) => {
    let history = useHistory();

    const [valueLogin, setValueLogin] = useState("")
    const [password, setPassword] = useState("")
    const defaultObjValidInput = {
        isValidValueLogin: true,
        isValidPassword: true
    }
    const [objValidinput, setobjValidinput] = useState(defaultObjValidInput)




    const handleCreateNewAccount = () => {
        history.push("/register");
    }
    const handleLogin = async () => {
        setobjValidinput(defaultObjValidInput)

        if (!valueLogin) {
            setobjValidinput({ ...defaultObjValidInput, isValidValueLogin: false })
            toast.error("Please enter your email address or phone number")
            return
        }
        if (!password) {
            setobjValidinput({ ...defaultObjValidInput, isValidPassword: false })
            toast.error("Please enter your password")
            return
        }
        await loginUser(valueLogin, password)


    }
    return (
        <div className="login-container">
            <div className="container ">
                <div className="row px-3 px-sm-0">
                    <div className="content-left  col-12 d-none col-sm-7 d-sm-block">
                        <div className="brand">
                            atuanbk
                        </div>
                        <div className="detail">
                            help you connect...
                        </div>
                    </div>

                    <div className="content-right  col-sm-5 col-12 d-flex flex-column gap-3 py-3 ">
                        <div className="brand d-sm-none">
                            atuanbk
                        </div>
                        <input
                            type="text"
                            className={objValidinput.isValidValueLogin ? 'form-control' : 'is-invalid form-control'}
                            placeholder='Email address or phone number'
                            value={valueLogin}
                            onChange={(event) => { setValueLogin(event.target.value) }}
                        />
                        <input
                            type="password"
                            className={objValidinput.isValidPassword ? 'form-control' : 'is-invalid form-control'}
                            placeholder='Password'
                            value={password}
                            onChange={(event) => { setPassword(event.target.value) }}
                        />
                        <button className='btn btn-primary' onClick={() => handleLogin()}>Login</button>
                        <span className='text-center'>
                            <a className="forgot-password" href='#'>Forgot your password?</a></span>
                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={() => handleCreateNewAccount()}>
                                Create new account
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Login