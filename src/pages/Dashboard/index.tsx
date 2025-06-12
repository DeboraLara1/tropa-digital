import React from "react";
import styled from "styled-components";
import {
  FiUsers as _FiUsers,
  FiList as _FiList,
  FiClipboard as _FiClipboard,
  FiLogOut as _FiLogOut,
  FiEdit2 as _FiEdit2,
  FiSearch as _FiSearch,
  FiPlus as _FiPlus,
} from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import kaiqueImage from "../../assets/kaique-image.png";

const FiUsers = _FiUsers as unknown as React.ElementType;
const FiList = _FiList as unknown as React.ElementType;
const FiClipboard = _FiClipboard as unknown as React.ElementType;
const FiLogOut = _FiLogOut as unknown as React.ElementType;
const FiEdit2 = _FiEdit2 as unknown as React.ElementType;
const FiSearch = _FiSearch as unknown as React.ElementType;
const FiPlus = _FiPlus as unknown as React.ElementType;



const Dashboard: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = React.useState<string>("Eventos");
  const handleMenuClick = (menu: string) => setActiveMenu(menu);

  const eventos = [
    {
      nome: "deClube do Laço Coração Pantaneiro",
      equipes: 10,
      status: "Ativo",
      data: "09 a 11 de Junho",
      link: "#",
    },
    {
      nome: "Clube do Laço Coração Pantaneiro",
      equipes: 10,
      status: "Ativo",
      data: "09 a 11 de Junho",
      link: "#",
    },
  ];

  return (
    <Container>
      <Sidebar>
        <div>
          <Logo>
            <img src={logo} alt="Logo" style={{ height: 24, marginRight: 6 }} />
          </Logo>
          <Menu>
            <MenuItem>
              <FiList /> Dashboard
            </MenuItem>
            <MenuItem active>
              <FiClipboard /> Eventos
            </MenuItem>
            <MenuItem>
              <FiUsers /> Equipes
            </MenuItem>
            <MenuItem
              active={activeMenu === "Inscrições"}
              onClick={() => handleMenuClick("Inscrições")}
            >
              {" "}
              <FiClipboard /> Inscrições{" "}
            </MenuItem>
          </Menu>
        </div>
        <UserSection>
          <UserInfo>
            <Avatar>
              <img
                src={kaiqueImage}
                alt="avatar"
                style={{ width: "100%", height: "100%" }}
              />
            </Avatar>
            <div>
              <UserName>Kaique Steck</UserName>
              <UserRole>Administrador</UserRole>
            </div>
          </UserInfo>
          <UserActions>
            <UserAction bold>
              <FiEdit2 /> Alterar dados
            </UserAction>
            <UserAction
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              <FiLogOut /> Sair
            </UserAction>
          </UserActions>
        </UserSection>
      </Sidebar>
      <Main>
        <HeaderCard>
          <Welcome>
            Bem vindo de volta, <WelcomeName>Kaique Steck</WelcomeName>
          </Welcome>
          <Title>Todos eventos</Title>
        </HeaderCard>
        <Card>
          <CardHeader>
            <SearchWrapper>
              <SearchIconWrapper>
                <FiSearch />
              </SearchIconWrapper>
              <SearchInput placeholder="Buscar membros" />
            </SearchWrapper>
            <AddButton>
              <FiPlus /> Inserir novo evento
            </AddButton>
          </CardHeader>
          <Table>
            <thead>
              <tr>
                <Th>Nome do evento</Th>
                <Th>Total de equipes</Th>
                <Th>Status</Th>
                <Th>Data</Th>
              </tr>
            </thead>
            <tbody>
              {eventos.map((evento, idx) => (
                <tr key={idx}>
                  <Td>
                    <TableLink href={evento.link}>{evento.nome}</TableLink>
                  </Td>
                  <Td>{evento.equipes}</Td>
                  <Td>
                    <Status ativo={evento.status === "Ativo"}>
                      <StatusDot ativo={evento.status === "Ativo"} />{" "}
                      {evento.status}
                    </Status>
                  </Td>
                  <Td>
                    <TableLink href={evento.link}>{evento.data}</TableLink>
                  </Td>
                  <Td style={{ textAlign: "center" }}>
                    <span
                      style={{
                        color: "#d26a3a",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                      }}
                    >
                      ⋯
                    </span>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination>
            <PageNav>Anterior</PageNav>
            <PageNumber active>1</PageNumber>
            <PageNumber>2</PageNumber>
            <PageNumber>3</PageNumber>
            <PageNav>Próxima</PageNav>
          </Pagination>
        </Card>
      </Main>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: #fafafa;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.aside`
  width: 220px;
  background: #fff;
  border-right: 1px solid #ececec;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  min-height: 100vh;
  @media (max-width: 900px) {
    flex-direction: row;
    width: 100vw;
    min-height: unset;
    border-right: none;
    border-bottom: 1px solid #ececec;
    height: auto;
    position: sticky;
    top: 0;
    z-index: 10;
  }
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  color: #c46a32;
  letter-spacing: 1px;
  padding: 24px 0 18px 24px;
  display: flex;
  align-items: center;
  gap: 6px;
  @media (max-width: 900px) {
    padding: 12px 12px 12px 12px;
    font-size: 1rem;
  }
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0 0 0 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: row;
    gap: 6px;
    align-items: flex-start;
    width: 100%;
    justify-content: flex-start;
    padding: 0 8px;
  }
`;

const MenuItem = styled.li<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 18px;
  color: ${({ active }) => (active ? "#fff" : "#222")};
  background: ${({ active }) => (active ? "#d26a3a" : "transparent")};
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  transition: background 0.2s, color 0.2s;
  width: 94%;
  cursor: pointer;
  @media (max-width: 900px) {
    width: auto;
    font-size: 0.97rem;
    padding: 6px 10px;
  }
`;

const UserSection = styled.div`
  padding: 0 0 18px 0;
  border-top: 1px solid #ececec;
  margin: 0 18px;
  @media (max-width: 900px) {
    display: none;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 18px 0 6px 0;
`;

const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 40%;
  background: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #d26a3a;
`;

const UserName = styled.div`
  font-size: 1.08rem;
  font-weight: bold;
  color: #222;
`;

const UserRole = styled.div`
  font-size: 0.93rem;
  color: #b0b0b0;
  margin-top: -2px;
`;

const UserActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 18px;
`;

const UserAction = styled.button<{ bold?: boolean }>`
  background: none;
  border: none;
  color: #222;
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 2px 0;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  transition: color 0.2s;
  &:hover {
    color: #d26a3a;
  }
  svg {
    font-size: 1.2rem;
    color: #222;
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 24px 0 0 0;
  background: #fafafa;
  @media (max-width: 900px) {
    padding: 12px 0 0 0;
  }
  @media (max-width: 600px) {
    padding: 4px 0 0 0;
  }
`;

const HeaderCard = styled.div`
  padding: 18px 28px 12px 0px;
  margin-left: 36px;
  margin-top: 24px;
  margin-bottom: 24px;
  max-width: 600px;
  min-width: 320px;
  @media (max-width: 900px) {
    margin-left: 0;
    margin-right: 0;
    max-width: 100vw;
    min-width: 0;
    padding: 14px 10px 10px 10px;
  }
  @media (max-width: 600px) {
    padding: 10px 4vw 8px 4vw;
    margin-top: 10px;
    margin-bottom: 12px;
    border-radius: 7px;
    max-width: 100vw;
  }
`;

const Welcome = styled.div`
  color: #888;
  font-size: 1rem;
  margin-bottom: 26px;
`;

const WelcomeName = styled.span`
  color: #222;
  font-weight: 700;
`;

const Title = styled.h2`
  color: #d26a3a;
  font-size: 2rem;
  margin: 0 0 0 0;
  font-weight: 700;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  padding: 24px 18px 18px 18px;
  min-height: 320px;
  margin: 0 20px 0 36px;
  border: 1px solid #ececec;
  overflow-x: auto;
  @media (max-width: 900px) {
    margin: 0 0 0 0;
    padding: 12px 2px 12px 2px;
    min-width: 0;
  }
  @media (max-width: 600px) {
    padding: 6px 0 6px 0;
    border-radius: 7px;
    min-width: 0;
    margin: 0 0 0 0;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 8px;
  gap: 12px;
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 10px;
  color: #c46a32;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  background: #f5f5f5;
  border: none;
  border-radius: 18px;
  padding: 7px 18px 7px 32px;
  font-size: 0.98rem;
  color: #bbb;
  width: 170px;
  outline: none;
`;

const AddButton = styled.button`
  background: #d26a3a;
  color: #fff;
  border: none;
  border-radius: 18px;
  padding: 7px 16px;
  font-size: 0.98rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #a05223;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.98rem;
  min-width: 600px;
  @media (max-width: 700px) {
    min-width: 480px;
    font-size: 0.93rem;
  }
  @media (max-width: 600px) {
    min-width: 400px;
    font-size: 0.91rem;
  }
`;

const Th = styled.th`
  color: #e2bfa7;
  font-weight: 600;
  text-align: left;
  padding: 10px 12px 8px 12px;
  background: none;
  @media (max-width: 700px) {
    padding: 8px 6px 6px 6px;
    font-size: 0.93rem;
  }
`;

const Td = styled.td`
  background: none;
  padding: 8px 12px;
  color: #333;
  vertical-align: middle;
  font-size: 0.97rem;
  border-bottom: 1px solid #ececec;
  border-radius: 0;
  @media (max-width: 700px) {
    padding: 6px 6px;
    font-size: 0.93rem;
  }
`;

const Status = styled.span<{ ativo?: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ ativo }) => (ativo ? "#2ecc40" : "#e74c3c")};
  font-weight: 500;
  font-size: 0.97rem;
`;

const StatusDot = styled.span<{ ativo?: boolean }>`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${({ ativo }) => (ativo ? "#2ecc40" : "#e74c3c")};
  display: inline-block;
`;

const TableLink = styled.a`
  color: #222;
  text-decoration: none;
  font-size: 0.97rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 10px;
  justify-content: flex-end;
  flex-wrap: wrap;
  @media (max-width: 700px) {
    gap: 6px;
    margin-top: 6px;
  }
`;

const PageNumber = styled.button<{ active?: boolean }>`
  background: ${({ active }) => (active ? "#d26a3a" : "#f5f5f5")};
  color: ${({ active }) => (active ? "#fff" : "#a05223")};
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #e2bfa7;
    color: #a05223;
  }
`;

const PageNav = styled.button<{ active?: boolean }>`
  background: ${({ active }) => (active ? "#d26a3a" : "#f5f5f5")};
  color: ${({ active }) => (active ? "#fff" : "#a05223")};
  border: none;
  border-radius: 18px;
  padding: 0 18px;
  height: 32px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #e2bfa7;
    color: #a05223;
  }
`;

export default Dashboard;
