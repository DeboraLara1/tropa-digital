import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  FiUsers as _FiUsers,
  FiList as _FiList,
  FiClipboard as _FiClipboard,
  FiLogOut as _FiLogOut,
  FiEdit2 as _FiEdit2,
  FiSearch as _FiSearch,
  FiPlus as _FiPlus,
  FiMenu as _FiMenu,
  FiX as _FiX,
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
const FiMenu = _FiMenu as unknown as React.ElementType;
const FiX = _FiX as unknown as React.ElementType;

const Dashboard: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = React.useState<string>("Eventos");
  const handleMenuClick = (menu: string) => setActiveMenu(menu);
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const allEventos = [
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

  const eventos = allEventos.filter(evento => 
    evento.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      {/* Menu sanduíche mobile */}
      <HamburgerBar>
        <LogoMobile>
          <img src={logo} alt="Logo Mobile" style={{ height: 24, marginRight: 6 }} />
        </LogoMobile>
        <HamburgerButton onClick={() => setMenuOpen(true)}>
          <FiMenu size={28} />
        </HamburgerButton>
      </HamburgerBar>
      {/* Sidebar normal para desktop/tablet */}
      <Sidebar menuOpen={menuOpen}>
        <SidebarContent>
          <Logo>
            <img src={logo} alt="Logo" style={{ height: 24, marginRight: 6 }} />
          </Logo>
          <Menu>
            <MenuItem 
              active={activeMenu === "Dashboard"}
              onClick={() => { handleMenuClick("Dashboard"); setMenuOpen(false); }}
            >
              <FiList /><span className="menu-text">Dashboard</span>
            </MenuItem>
            <MenuItem 
              active={activeMenu === "Eventos"}
              onClick={() => { handleMenuClick("Eventos"); setMenuOpen(false); }}
            >
              <FiClipboard /><span className="menu-text">Eventos</span>
            </MenuItem>
            <MenuItem
              active={activeMenu === "Equipes"}
              onClick={() => { handleMenuClick("Equipes"); setMenuOpen(false); }}
            >
              <FiUsers /><span className="menu-text">Equipes</span>
            </MenuItem>
            <MenuItem
              active={activeMenu === "Inscrições"}
              onClick={() => { handleMenuClick("Inscrições"); setMenuOpen(false); }}
            >
              <FiClipboard /><span className="menu-text">Inscrições</span>
            </MenuItem>
          </Menu>
        </SidebarContent>
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
        {/* Botão fechar menu mobile */}
        <CloseMenuButton onClick={() => setMenuOpen(false)}>
          <FiX size={28} />
        </CloseMenuButton>
      </Sidebar>
      {/* Overlay para fechar menu ao clicar fora */}
      {menuOpen && <SidebarOverlay onClick={() => setMenuOpen(false)} />}
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
              <SearchInput 
                placeholder="Buscar membros" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchWrapper>
            <AddButton>
              <FiPlus /> Inserir novo evento
            </AddButton>
          </CardHeader>
          <EventsCardsMobile>
            {eventos.map((evento, idx) => (
              <EventCard key={idx}>
                <EventCardHeader>
                  <EventIconArea>
                    <FiClipboard size={22} color="#d26a3a" />
                  </EventIconArea>
                  <EventCardTitle>{evento.nome}</EventCardTitle>
                  <EventCardMenu>
                    <span style={{ color: '#d26a3a', fontSize: '1.5rem', cursor: 'pointer' }}>⋯</span>
                  </EventCardMenu>
                </EventCardHeader>
                <EventCardInfoRow>
                  <EventCardLabel>Total de equipes</EventCardLabel>
                  <EventCardValue>{evento.equipes}</EventCardValue>
                </EventCardInfoRow>
                <EventCardInfoRow>
                  <EventCardLabel>Status</EventCardLabel>
                  <EventStatusBadge ativo={evento.status === "Ativo"}>
                    {evento.status}
                  </EventStatusBadge>
                </EventCardInfoRow>
                <EventCardInfoRow>
                  <EventCardLabel>Data</EventCardLabel>
                  <EventCardValue>
                    <TableLink href={evento.link}>{evento.data}</TableLink>
                  </EventCardValue>
                </EventCardInfoRow>
              </EventCard>
            ))}
          </EventsCardsMobile>
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
  flex-direction: row;
  @media (max-width: 900px) {
    flex-direction: row;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.aside<{menuOpen?: boolean}>`
  width: 220px;
  background: #fff;
  border-right: 1px solid #ececec;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  min-height: 100vh;
  z-index: 200;
  transition: width 0.2s;
  @media (max-width: 900px) and (min-width: 601px) {
    width: 64px;
    min-width: 64px;
    max-width: 64px;
    padding-top: 12px;
    padding-bottom: 12px;
    align-items: center;
    justify-content: flex-start;
  }
  @media (max-width: 600px) {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 80vw;
    max-width: 320px;
    transform: ${({menuOpen}) => menuOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s;
    border-right: none;
    border-bottom: none;
    box-shadow: 2px 0 16px rgba(0,0,0,0.10);
    min-height: 0;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    overflow-y: auto;
    padding-bottom: 32px;
  }
`;

const SidebarContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    padding-top: 54px;
    justify-content: flex-start;
    gap: 24px;
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
  height: 54px;
  @media (max-width: 900px) and (min-width: 601px) {
    padding: 12px 0 0 0;
    justify-content: center;
    width: 100%;
    text-align: center;
    height: 44px;
    img {
      margin: 0 auto;
      display: block;
      height: 32px;
      max-width: 80%;
      width: auto;
    }
  }
  @media (max-width: 600px) {
    padding: 10px 0 10px 0;
    justify-content: center;
    width: 100%;
    text-align: center;
    height: 54px;
    img {
      margin: 0 auto;
      display: block;
      height: 48px;
      max-width: 90%;
      width: auto;
    }
  }
  img {
    height: 24px;
    width: auto;
    max-width: 100%;
    display: block;
  }
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  @media (max-width: 900px) and (min-width: 601px) {
    gap: 10px;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
    padding: 0;
  }
  @media (max-width: 600px) {
    gap: 22px;
    align-items: flex-start;
    width: 100%;
    justify-content: flex-start;
    padding: 0 18px;
  }
`;

const MenuItem = styled.li<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 22px;
  color: ${({ active }) => (active ? "#fff" : "#222")};
  background: ${({ active }) => (active ? "#d26a3a" : "transparent")};
  border-radius: 8px;
  font-weight: 500;
  font-size: 1.08rem;
  transition: background 0.2s, color 0.2s;
  width: 100%;
  cursor: pointer;
  white-space: nowrap;
  box-sizing: border-box;
  position: relative;
  @media (max-width: 900px) and (min-width: 601px) {
    justify-content: center;
    padding: 0;
    width: 100%;
    font-size: 1.1rem;
    border-radius: 50%;
    background: transparent;
    color: ${({ active }) => (active ? "#d26a3a" : "#222")};
    min-height: 36px;
    min-width: 36px;
    height: 36px;
    margin: 4px 0;
    .menu-text { display: none; }
    svg {
      z-index: 2;
      font-size: 22px;
    }
    &::before {
      content: '';
      display: ${({ active }) => (active ? 'block' : 'none')};
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 36px;
      height: 36px;
      background: #d26a3a;
      border-radius: 50%;
      z-index: 1;
    }
    svg {
      color: ${({ active }) => (active ? '#fff' : '#222')};
      position: relative;
    }
  }
  @media (max-width: 600px) {
    font-size: 1.05rem;
    padding: 10px 10px;
    width: 100%;
    .menu-text { display: inline; }
    border-radius: 8px;
    background: ${({ active }) => (active ? "#d26a3a" : "transparent")};
    color: ${({ active }) => (active ? "#fff" : "#222")};
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
  min-width: 0;
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
    display: none;
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

const EventsCardsMobile = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 60px;
    margin-top: 8px;
  }
`;

const EventCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  border: 1px solid #ececec;
  padding: 12px 14px 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

const EventCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
`;

const EventIconArea = styled.div`
  background: #f7e7db;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EventCardTitle = styled.div`
  flex: 1;
  font-size: 1.08rem;
  font-weight: 700;
  color: #d26a3a;
  line-height: 1.2;
  margin-left: 4px;
`;

const EventCardMenu = styled.div`
  margin-left: auto;
`;

const EventCardInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 2px;
`;

const EventCardLabel = styled.span`
  color: #b0b0b0;
  font-size: 0.97rem;
`;

const EventCardValue = styled.span`
  color: #222;
  font-size: 0.97rem;
  font-weight: 500;
`;

const EventStatusBadge = styled.span<{ativo?: boolean}>`
  background: ${({ativo}) => ativo ? '#eafbe7' : '#fdeaea'};
  color: ${({ativo}) => ativo ? '#2ecc40' : '#e74c3c'};
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 12px;
  padding: 2px 12px;
  display: inline-block;
`;

const HamburgerBar = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-bottom: 1px solid #ececec;
    padding: 0 12px;
    height: 54px;
    position: sticky;
    top: 0;
    z-index: 101;
  }
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  color: #d26a3a;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: auto;
  @media (min-width: 601px) {
    display: none;
  }
`;

const LogoMobile = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.1rem;
  color: #c46a32;
  letter-spacing: 1px;
  justify-content: center;
  width: 100%;
  img {
    margin: 0 auto;
    display: block;
    height: 48px;
    max-width: 90%;
    width: auto;
  }
`;

const CloseMenuButton = styled.button`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: #d26a3a;
    cursor: pointer;
    z-index: 201;
  }
`;

const SidebarOverlay = styled.div`
  @media (max-width: 600px) {
    content: '';
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.18);
    z-index: 100;
  }
`;

export default Dashboard;
