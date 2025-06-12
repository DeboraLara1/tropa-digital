import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styled from "styled-components";
import { FiEye, FiEyeOff } from "react-icons/fi";
import logo from "../../assets/logo.png";
import loginImage from "../../assets/login-image.png";

const Eye = FiEye as unknown as React.FC;
const EyeOff = FiEyeOff as unknown as React.FC;

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (error) {
      alert("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <LoginWrapper>
      <Card>
        <Left>
          <Logo>
            <img src={logo} alt="Tropa Digital" />
          </Logo>
          <Title>Bem-vindo de volta</Title>
          <Subtitle>Entre com sua conta para acessar o painel.</Subtitle>
          <form onSubmit={handleSubmit} autoComplete="off">
            <InputWrapper>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seunome@seuservidor.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="password">Senha</Label>
              <PasswordWrapper>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite aqui"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <EyeButton
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  tabIndex={-1}
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </EyeButton>
              </PasswordWrapper>
            </InputWrapper>
            <Button type="submit">Enviar</Button>
          </form>
        </Left>
        <Right>
          <Illustration>
            <img src={loginImage} alt="Ilustração" />
          </Illustration>
        </Right>
      </Card>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  min-height: 100vh;
  background: #f7f9fb;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const Card = styled.div`
  display: flex;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  max-width: 900px;
  width: 100%;
  min-height: 400px;
  @media (max-width: 900px) {
    max-width: 98vw;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    min-height: unset;
    border-radius: 18px;
  }
`;

const Left = styled.div`
  flex: 1;
  padding: 48px 40px 48px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 900px) {
    padding: 32px 20px 32px 20px;
  }
  @media (max-width: 700px) {
    padding: 32px 12px 24px 12px;
    align-items: center;
  }
`;

const Logo = styled.div`
  margin-bottom: 32px;
  font-weight: bold;
  font-size: 2rem;
  color: #c46a32;
  letter-spacing: 2px;
  @media (max-width: 700px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

const Title = styled.h1`
  color: #c46a32;
  font-size: 2rem;
  margin-bottom: 8px;
  @media (max-width: 700px) {
    font-size: 1.3rem;
  }
`;

const Subtitle = styled.p`
  color: #888;
  margin-bottom: 32px;
  @media (max-width: 700px) {
    font-size: 0.95rem;
    margin-bottom: 20px;
  }
`;

const Label = styled.label`
  color: #c46a32;
  font-weight: 600;
  margin-bottom: 6px;
  font-size: 1rem;
  @media (max-width: 700px) {
    font-size: 0.95rem;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: none;
  border-radius: 24px;
  background: #f3f3f3;
  font-size: 1rem;
  color: #333;
  outline: none;
  @media (max-width: 700px) {
    font-size: 0.95rem;
    padding: 12px 14px;
  }
`;

const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const EyeButton = styled.button`
  position: absolute;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  color: #c46a32;
  font-size: 1.2rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 14px 0;
  background: #c46a32;
  color: #fff;
  border: none;
  border-radius: 24px;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #a05223;
  }
  @media (max-width: 700px) {
    font-size: 1rem;
    padding: 12px 0;
  }
`;

const Right = styled.div`
  flex: 1;
  background: #c46a32;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 24px;
  border-bottom-right-radius: 24px;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  margin: 7px;
  @media (max-width: 900px) {
    min-height: 300px;
  }
  @media (max-width: 700px) {
    border-radius: 0 0 18px 18px;
    min-height: 180px;
    padding: 0;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const Illustration = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  img {
    position: absolute;
    left: -43px;
    bottom: -18px;
    max-width: 90%;
    max-height: 81%;
    object-fit: contain;
    pointer-events: none;
    background: none;
    box-shadow: none;
    z-index: 2;
  }
`;

export default Login;
