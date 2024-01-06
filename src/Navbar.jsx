import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { TiHeartFullOutline } from "react-icons/ti";

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
        <div className="nevigation">
          <div className="title">
            <h1>FUNTAIN</h1>
          </div>
          <div className="navComponents">
            <ul>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>My List</li>
            </ul>
          </div>
        </div>

        <div className="navItems">
          <div className="search">
            {isSearchOpen && (
              <div className="searchBox">
                <input type="text" placeholder="Search....."></input>
              </div>
            )}
            <StyledSearchIcon
              className={isSearchOpen ? "searchIconActive" : ""}
              onClick={toggleSearch}
            />
          </div>

          <div className="profile">
            <StyledProfileIcon
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
          </div>
        </div>
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

  .nevigation {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  .title {
    font-size: 1rem;
    color: #e0142f;
    cursor: pointer;
    padding-left: 10px;
  }

  .navComponents {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      list-style-type: none;
      padding: 0;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }

  .navItems {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    font-size: 1.7rem;
    cursor: pointer;
  }

  .search {
    display: flex;
    justify-content: center;
    align-items: center;
  }

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
      height: 2rem;
      width: 15rem;
      font-size: 1.2rem;
      border: 1px solid #cccccc;
      border-radius: 5px;
      background: none;
    }
  }

  .profile {
    display: flex;
    align-items: center;
    position: relative;

    .profileBox {
      width: 7rem;
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

const StyledSearchIcon = styled(FaSearch)`
  width: 3rem;
`;

const StyledProfileIcon = styled(IoPersonSharp)``;

export default Navbar;
