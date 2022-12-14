import "./AccountTypeContianer.css";
import AccountTypeCard from "../../components/AccountTypeCard/AccountTypeCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const AccountTypeContainer = ({ setAccountType, accountType }) => {
  const accountClicked = ({ accountType }) => {
    setAccountType(accountType);
  };

  return (
    <Grid container sx={{ justifyContent: "space-evenly" }}>
      <Grid
        item
        xs={4}
        onClick={() => accountClicked({ accountType: "audienceMember" })}
        style={
          accountType === "audienceMember"
            ? {
                boxShadow: "-5px 10px 20px 8px",
                borderRadius: "10px",
                maxWidth: "250px",
              }
            : { maxWidth: "250px" }
        }
      >
        <AccountTypeCard
          imageUrl={
            "https://images.unsplash.com/photo-1573055418049-c8e0b7e3403b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          altText={"Festival"}
          overlayText={"Audience Member"}
        />
      </Grid>
      <Grid
        item
        xs={4}
        onClick={() => accountClicked({ accountType: "artist" })}
        style={
          accountType === "artist"
            ? {
                boxShadow: "-5px 10px 20px 8px",
                borderRadius: "10px",
                maxWidth: "250px",
              }
            : { maxWidth: "250px" }
        }
      >
        <AccountTypeCard
          imageUrl={
            "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          altText={"Performer"}
          overlayText={"Artist"}
        />
      </Grid>
      <Grid
        item
        xs={4}
        onClick={() => accountClicked({ accountType: "eventOrganiser" })}
        style={
          accountType === "eventOrganiser"
            ? {
                boxShadow: "-5px 10px 20px 8px",
                borderRadius: "10px",
                maxWidth: "250px",
              }
            : { maxWidth: "250px" }
        }
      >
        <AccountTypeCard
          imageUrl={
            "https://images.unsplash.com/photo-1527853359084-088460b3000d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1038&q=80"
          }
          altText={"Backstage"}
          overlayText={"Event Organiser"}
        />
      </Grid>
    </Grid>
  );
};

export default AccountTypeContainer;
