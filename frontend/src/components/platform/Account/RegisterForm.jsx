import './LoginForm.css'

import Button from '@material-ui/core/Button'

function LoginForm(props) {

    return (
        <div className="loginForm">
            <div className="formItem" >
                <label htmlFor="username" className="label">Usuário:</label>
                <input type="text" id="username" 
                    className="input"
                    onChange={(e) => props.setUser({ ...props.user, name: e.target.value})}
                    value={props.user.name} />
            </div>
            <div className="formItem" >
                <label htmlFor="password" className="label">Senha:</label>
                <input type="password" id="password" 
                    className="input"
                    onChange={(e) => props.setUser({ ...props.user, password: e.target.value })}
                    value={props.user.password} />
            </div>
            <Button variant="outlined" style={{ outline: "none", marginTop: "15px"}}
                 className="button"
                 onClick={props.handleClick}>Cadastre-se</Button>
        </div>
    )
}

export default LoginForm