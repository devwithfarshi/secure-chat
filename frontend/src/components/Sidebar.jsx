import {
  Group,
  OnlinePrediction,
  Add,
  Contrast,
  Search,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  styled,
  Fade,
  Divider,
} from "@mui/material";
import ConversationsItem from "./ConversationsItem";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../reducer/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Sidebar = () => {
  const { user } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 8,
      top: 10,
      fontSize: "1.2rem",
      fontWeight: "600",
      padding: "1.2rem",
      borderRadius: "50%",
      height: "2rem",
      width: "2rem",
      background: "royalblue",
      color: "#f7f7f7",
    },
  }));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logOutUser());
    navigate("/");
  };
  return (
    <div className="sidebar-container">
      {/*============ Siderbar Header Start ========= */}
      <header className="sb-header">
        {/* Start profile pictuire */}
        <IconButton
          sx={{ height: 56 }}
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {/* We also add change or update profile function */}
          <StyledBadge badgeContent={999} max={9}>
            <Avatar
              alt={user.name}
              src={user.image}
              sx={{ width: 56, height: 56 }}
            />
          </StyledBadge>
        </IconButton>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          sx={{
            marginTop: "2rem",
          }}
        >
          <MenuItem
            sx={{
              fontSize: "1.6rem",
            }}
            onClick={handleClose}
          >
            Profile
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: "1.6rem",
            }}
            onClick={handleClose}
          >
            My account
          </MenuItem>
          <Divider />
          <MenuItem
            sx={{
              fontSize: "1.6rem",
            }}
            onClick={handleLogout}
          >
            Logout
          </MenuItem>
        </Menu>

        {/* End profile pictuire */}

        <div className="right_action_btn">
          <Link to={"/app/create-group"}>
            <Tooltip title="Create a Group">
              <IconButton>
                <Add sx={{ width: 36, height: 36, color: "black" }} />
              </IconButton>
            </Tooltip>
          </Link>
          <Link to={"/app/groups"}>
            <Tooltip title="Your Groups">
              <IconButton>
                <Group sx={{ width: 36, height: 36, color: "black" }} />
              </IconButton>
            </Tooltip>
          </Link>

          <Link to={"/app/users"}>
            <Tooltip title="Online Friends">
              <IconButton>
                <OnlinePrediction
                  sx={{ width: 36, height: 36, color: "black" }}
                />
              </IconButton>
            </Tooltip>
          </Link>
          <Tooltip title="Dark theme">
            <IconButton>
              <Contrast sx={{ width: 36, height: 36, color: "black" }} />
            </IconButton>
          </Tooltip>
        </div>
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
        <ConversationsItem />
      </div>
      {/*============ Siderbar Conversastins End ========= */}
    </div>
  );
};

export default Sidebar;
