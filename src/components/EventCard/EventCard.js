import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { fromUnixTime } from "date-fns";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import theme from "../../utils/themes";

const EventCard = ({ details }) => {
  const startDate = fromUnixTime(details.startDate / 1000)
    .toString()
    .split("2022")[0];

  return (
    <Card
      sx={{
        backgroundColor: "#303030",
        borderRadius: "15px",
        width: 300,
        alignItems: "center",
        fontWeight: "900",
        fontSize: "1.5vw",
        alignText: "center",
        margin: 5,
        "@media(minWidth: 375px)": {
          margin: 2,
        },
      }}
    >
      <CardHeader
        title={
          <Typography variant="h5" color="white" sx={{ textAlign: "center" }}>
            {details.name}
          </Typography>
        }
        subheader={
          <Typography
            variant="h5"
            color="white"
            sx={{
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            {`Date: ${startDate}`}
          </Typography>
          // subheader={`Date: ${startDate}`}
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={details.imageUrl}
        alt={details.name}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="white"
          sx={{ textAlign: "center", fontSize: "20px" }}
        >
          {details.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
          }}
        ></Box>
      </CardContent>
    </Card>
  );
};

export default EventCard;
