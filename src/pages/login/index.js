
import React, {useState} from 'react';
import { TextField, Button} from '@material-ui/core';
import { Container, BoxLogin, BoxTitle, BoxBody, Form, Row } from './styles';
import {useHistory} from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   console.log(email, password)

   var history = useHistory();

   const autorization = {
      login: 'admin',
      password: '12345'
   }


  const handleSubmit = () => {
    const data = {
      login: email,
      password: password,
    }

    if(autorization.login == data.login && autorization.password == data.password){
      history.push('/dashboard');
    }else{
      alert('erro ao logar');
    }

    console.log(data);
  }
  
  return (
    <>
    <Container>
      <BoxLogin>
          <BoxTitle>
            <h4>Login</h4>
          </BoxTitle>

          <BoxBody>
            <>
            <Form>
              <Row>
                <TextField
                id="outlined-basic"
                value={email} 
                onChange={value => setEmail(value.target.value)}
                fullWidth
                label="Login"
                variant="outlined" />
              </Row>
              <Row>
                <TextField id="outlined-basic"
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={password => setPassword(password.target.value)}
                variant="outlined" />
              </Row>
              <Row>
                <Button onClick={handleSubmit} variant="contained" color="primary">
                Login
              </Button>
              </Row>
            </Form>
            </>
          </BoxBody>

      </BoxLogin>
    </Container>
    </>
  );
}

export default Login;