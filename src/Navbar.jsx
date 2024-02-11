import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { TiHeartFullOutline } from "react-icons/ti";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [showNev, setShowNev] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 10) {
      setShowNev(true);
    } else {
      setShowNev(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isAccountOpen) {
      setIsAccountOpen(false);
    }
  };

  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const toggleAccount = () => {
    setIsAccountOpen(!isAccountOpen);
    if (isSearchOpen) {
      setIsSearchOpen(false);
    }
  };

  return (
    <NavPage showNev={showNev}>
      <Navigation>
        <div className="titleAndBurger">
          <Title>
            <NavLink to="/">
              <h1>Funtain</h1>
            </NavLink>
          </Title>

          <BurgerMenu className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <Span />
            <Span />
            <Span />
          </BurgerMenu>
        </div>

        <NavComponents>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>TV Shows</NavLink>
            </li>
            <li>
              <NavLink>Movies</NavLink>
            </li>
            <li>
              <NavLink>New & Popular</NavLink>
            </li>
          </ul>
        </NavComponents>
      </Navigation>
      <SearchAndProfile>
        <Search>
          {isSearchOpen && <InputName type="text" placeholder="Search....." />}
          <SearchButton>
            <FaSearch
              className={isSearchOpen ? "searchButtonOpen" : "searchButtonOff"}
              onClick={toggleSearch}
            />
          </SearchButton>
        </Search>

        <ProfileButton>
          <IoPersonSharp
            className={isAccountOpen ? "profileButtonOpen" : "profileButtonOff"}
            onClick={toggleAccount}
          />
          {isAccountOpen && (
            <ProfileBox>
              <div className="myProfile">
                <IoPersonSharp />
                <p>Profile</p>
              </div>
              <div className="myList">
                <TiHeartFullOutline />
                <p>My List</p>
              </div>
            </ProfileBox>
          )}
        </ProfileButton>
      </SearchAndProfile>
    </NavPage>
  );
};

const NavPage = styled.div`
  @media (min-width: 1101px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
    height: 4rem;
    background: ${(props) => (props.showNev ? "#ffffff" : "")};
  }

  @media (max-width: 1101px) {
    align-items: flex-start;
    position: sticky;
    top: 0;
    background: ${(props) => (props.showNev ? "#ffffff" : "")};
  }
`;

const Navigation = styled.div`
  @media (min-width: 1101px) {
    gap: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .titleAndBurger {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 1101px) {
    .titleAndBurger {
      margin-top: 0.5rem;
      height: 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Title = styled.div`
  @media (min-width: 1101px) {
    h1 {
      margin: 0;
      cursor: pointer;
      color: #e0142f;
      font-size: 2rem;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 900;
    }
  }

  @media (max-width: 1101px) {
    h1 {
      margin: 0;
      cursor: pointer;
      color: #e0142f;
      font-size: 2rem;
      text-decoration: none;
    }
  }
`;

const NavComponents = styled.div`
  @media (min-width: 1101px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;
      list-style: none;
      gap: 1rem;
    }

    a {
      text-decoration: none;
      color: black;
      padding: 0.5rem;
      border-radius: 0.5rem;
      transition: background-color 0.3s;

      &:hover {
        background-color: #172554;
        color: white;
      }
    }
  }

  @media (max-width: 1101px) {
    ul {
      display: none;
      flex-direction: column;
      width: 100%;
      margin-bottom: 0.25rem;
      height: 21rem;
    }

    ul.open {
      display: flex;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #0f172a;
      margin-top: 0.5rem;
    }

    li {
      width: 100%;
      text-align: center;
      margin: 0.2rem 0;
    }

    a {
      text-decoration: none;
      color: white;
      padding: 0.5rem;
      border-radius: 0.5rem;
      transition: background-color 0.3s;

      &:hover {
        background-color: #172554;
      }
    }
  }
`;

const BurgerMenu = styled.div`
  display: none;

  @media (max-width: 1101px) {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    justify-content: space-between;
    width: 2.25rem;
    height: 2rem;
  }
`;

const Span = styled.div`
  height: 0.4rem;
  width: 100%;
  background: black;
  border-radius: 0.2rem;
`;

const SearchAndProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .search {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1101px) {
    .search {
      display: none;
    }
  }
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const InputName = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 18rem;
  font-size: 1.3rem;
  padding-left: 0.5rem;
  padding-top: 0;
  padding-bottom: 0;
  border-radius: 10px;
  border: none;
`;

const SearchButton = styled.button`
  height: 2.5rem;
  width: 4.5rem;
  padding: 0;
  border: none;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;

  .searchButtonOpen,
  .searchButtonOff {
    height: 2rem;
    width: 2rem;
  }
`;

const ProfileButton = styled.button`
  height: 2.5rem;
  width: 4.5rem;
  padding: 0;
  border: none;
  background: #fff;
  position: relative;
  cursor: pointer;
  border-radius: 10px;

  .profileButtonOpen {
    height: 2rem;
    width: 2rem;
  }

  .profileButtonOff {
    height: 2rem;
    width: 2rem;
    // margin-top: -6.6rem;
  }
`;

const ProfileBox = styled.div`
  width: 9rem;
  border: 1px solid black;
  margin-left: -4.5rem;
  margin-top: 0.5rem;
  background: #fff;

  .myProfile,
  .myList {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    height: 3rem;
    gap: 0.5rem;
    cursor: pointer;
  }
`;

export default Navbar;
