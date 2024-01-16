import {
  Group,
  OnlinePrediction,
  Add,
  Contrast,
  Search,
} from "@mui/icons-material";
import { Avatar, Badge, IconButton, styled } from "@mui/material";
const Sidebar = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 8,
      top: 10,
      padding: ".6rem",
      fontSize: "1.2rem",
    },
  }));

  return (
    <div className="sidebar-container">
      {/*============ Siderbar Header Start ========= */}
      <header className="sb-header">
        <IconButton>
          {/* We also add change or update profile function */}
          <StyledBadge badgeContent={10} max={9} color="primary">
            <Avatar
              alt="user name"
              src="https://res.cloudinary.com/dc2lde0cr/image/upload/v1704392044/portfolio/h495i3hfsbb3qrukpe5a.png"
              sx={{ width: 56, height: 56 }}
            />
          </StyledBadge>
        </IconButton>
        <IconButton>
          <Group sx={{ width: 36, height: 36 }} />
        </IconButton>
        <IconButton>
          <Add sx={{ width: 36, height: 36 }} />
        </IconButton>
        <IconButton>
          <OnlinePrediction sx={{ width: 36, height: 36 }} />
        </IconButton>
        <IconButton>
          <Contrast sx={{ width: 36, height: 36 }} />
        </IconButton>
      </header>
      {/*============ Siderbar Header End ========= */}
      {/*============ Siderbar Search Start ========= */}
      <div className="sb-search">
        <Search sx={{ width: 24, height: 24 }} />
        <input type="text" name="search" placeholder="Search" />
      </div>
      {/*============ Siderbar Search End ========= */}
      {/*============ Siderbar Conversastins Start ========= */}
      <div className="sb-conversations">
        <h4 className="conversations-heading">Your connections</h4>
        <ul className="conversations-lists">
          {/* <li className="conversations-list-item"> */}
          <li className="conversations-list-item unreed">
            <Avatar
              alt="user name"
              src="https://res.cloudinary.com/dc2lde0cr/image/upload/v1704392044/portfolio/h495i3hfsbb3qrukpe5a.png"
              sx={{ width: 56, height: 56 }}
            />
            <div className="info">
              <span className="userName">MD Salman Farshi</span>
              {/* <p>You : hello salman</p> */}
              <p className="unreed">You : hello salman</p>
            </div>
          </li>
        </ul>
      </div>
      {/*============ Siderbar Conversastins End ========= */}
    </div>
  );
};

export default Sidebar;
