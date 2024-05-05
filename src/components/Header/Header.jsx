import { Header, Link, NavList, IconWrapper } from "./Header.styled";

const HeaderLayout = () => {
  return (
    <>
      <Header>
        <NavList>
          <li>
            <Link to="/">
              <IconWrapper>
                <img
                  src="/campers-logo.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                />
              </IconWrapper>
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/favourite">Favorites</Link>
          </li>
        </NavList>
      </Header>
    </>
  );
};

export default HeaderLayout;
