import {
  Group,
  OnlinePrediction,
  Add,
  Contrast,
  Search,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      {/*============ Siderbar Header Start ========= */}
      <header className="sb-header">
        <IconButton>
          {/* We also add change or update profile function */}
          <Avatar
            alt="user name"
            src="https://res.cloudinary.com/dc2lde0cr/image/upload/v1704392044/portfolio/h495i3hfsbb3qrukpe5a.png"
            sx={{ width: 56, height: 56 }}
          />
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
        <Search />
        <input type="text" name="search" placeholder="Search" />
      </div>
      {/*============ Siderbar Search End ========= */}
      {/*============ Siderbar Conversastins Start ========= */}
      <div className="sb-conversations">code for Conversations </div>
      {/*============ Siderbar Conversastins End ========= */}
    </div>
  );
};

export default Sidebar;
