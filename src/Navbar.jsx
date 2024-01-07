import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { TiHeartFullOutline } from "react-icons/ti";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const toggleAccount = () => {
    setIsAccountOpen(!isAccountOpen);
  };

  return (
    <NavPage>
      <NavSection>
        <Nevigation>
          <Title>
            <NavLink>
              <h1>FUNTAIN</h1>
            </NavLink>
          </Title>

          <NavComponents>
            <ul>
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
              <li>
                <NavLink>My List</NavLink>
              </li>
            </ul>
          </NavComponents>
        </Nevigation>

        <NavItems>
          <Search>
            {isSearchOpen && (
              <div className="searchBox">
                <input type="text" placeholder="Search....."></input>
              </div>
            )}
            <FaSearch
              className={isSearchOpen ? "searchIconActive" : ""}
              onClick={toggleSearch}
            />
          </Search>

          <Profile>
            <IoPersonSharp
              className={isAccountOpen ? "profileIconActive" : ""}
              onClick={toggleAccount}
            />
            {isAccountOpen && (
              <div className="profileBox">
                <div className="myProfile">
                  <IoPersonSharp />
                  <p>Profile</p>
                </div>
                <div className="myList">
                  <TiHeartFullOutline />
                  <p>My List</p>
                </div>
              </div>
            )}
          </Profile>
        </NavItems>
      </NavSection>
    </NavPage>
  );
}

const NavPage = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  width: 85rem;
`;

const Nevigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  color: black;

  a {
    text-decoration: none;
    color: black;
  }
`;
const Title = styled.div`
  font-size: 1rem;
  a {
    color: #e0142f;
  }
`;

const NavComponents = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    list-style-type: none;
    padding: 0;
    font-size: 1.3rem;
    cursor: pointer;
  }
`;

const NavItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .searchIconActive {
    border: 1px solid #cccccc;
    border-radius: 5px;
    padding: 5px;
  }

  .searchBox {
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      padding-left: 8px;
      height: 2.3rem;
      width: 17rem;
      font-size: 1.2rem;
      border: 1px solid #cccccc;
      border-radius: 5px;
      background: none;
    }
  }

  svg {
    width: 3rem;
    height: 1.8rem;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .profileBox {
    width: 8rem;
    height: 5rem;
    background: white;
    position: absolute;
    top: 100%;
    margin-left: -2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border: 1px solid #cccccc;
    border-radius: 5px;
    margin-top: 0.5rem;
    p {
      margin: 0;
      color: black;
      font-size: 1.3rem;
    }
  }

  svg {
    width: 1.8rem;
    height: 1.8rem;
  }

  .myProfile,
  .myList {
    display: flex;
    align-items: center;
    position: relative;
    gap: 0.5rem;
  }

  .myProfile svg,
  .myList svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

export default Navbar;
