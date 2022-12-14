import Box from "@mui/material/Box";
import AdCard from "../../components/AdCard/AdCard";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../utils/themes";
import { useState, useEffect } from "react";
import { GET_ALL_ADS } from "../../graphql/queries";
import { useLazyQuery, useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";

const AllAdsForArtists = () => {
  const { data, loading, error } = useQuery(GET_ALL_ADS);

  console.log(error);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ m: "30px" }}
          font="bold"
        >
          View Your Adverts
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {loading && <CircularProgress />}
          {error && <Typography>Error</Typography>}
        </Box>

        {data && data?.getAllAds?.length !== 0 && (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data.getAllAds.map((item) => (
              <AdCard details={item} key={item.id} />
            ))}
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default AllAdsForArtists;
