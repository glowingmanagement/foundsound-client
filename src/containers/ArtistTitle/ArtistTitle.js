import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ArtistTags from "../../components/ArtistTags/ArtistTags";

const ArtistTitle = ({ title }) => {
  const [follow, setFollow] = useState(false);

  const followToggle = () => {
    setFollow(!follow);
  };

  return (
    <Box sx={{ backgroundColor: "rgb(0, 0, 0, 0.8)", padding: "15px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {title ? (
          <Typography
            variant="h4"
            component="div"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "35px",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            {title}
          </Typography>
        ) : (
          <Typography
            variant="h4"
            component="div"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "35px",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            Artist Name
          </Typography>
        )}

        {!follow ? (
          <Button
            variant="contained"
            size="10px"
            startIcon={<AddIcon />}
            sx={{ backgroundColor: "#4A69FF" }}
            onClick={followToggle}
          >
            Follow
          </Button>
        ) : (
          <Button
            variant="contained"
            size="10px"
            sx={{ backgroundColor: "#4A69FF" }}
            onClick={followToggle}
          >
            Following
          </Button>
        )}
      </Box>
      <ArtistTags />
    </Box>
  );
};

export default ArtistTitle;
