import { gql } from "@apollo/client";

export const ADDRESS_LOOKUP = gql`
  query Query($postcode: String!) {
    addressLookup(postcode: $postcode) {
      postcode
      latitude
      longitude
      addresses {
        formatted_address
        thoroughfare
        building_name
        sub_building_name
        sub_building_number
        building_number
        line_1
        line_2
        line_3
        line_4
        locality
        town_or_city
        county
        district
        country
        _id
        fullAddress
      }
    }
  }
`;

export const GET_ALL_EVENTS = gql`
  query Query {
    getAllEvents {
      id
      name
      description
      address {
        _id
        fullAddress
      }
      postcode
      startDate
      endDate
      startTime
      endTime
      imageUrl
      tags {
        name
      }
      adverts {
        event
        isPaid
        expires
      }
      eventOwner {
        id
        firstName
        lastName
        email
        imageUrl
        socialMedia
        userType
      }
    }
  }
`;

export const GET_ARTIST_BY_ID = gql`
  query GetArtist($artistId: ID!) {
    getArtist(artistId: $artistId) {
      name
      demoSong
      tags {
        name
      }
      rider
      artistImage
      artistImageName
      user {
        id
      }
    }
  }
`;

export const GET_ALL_EVENTS_FOR_OWNER = gql`
  query Query {
    getAllEventsForOwner {
      name
      description
      address {
        _id
        formatted_address
        thoroughfare
        building_name
        sub_building_name
        sub_building_number
        building_number
        line_1
        line_2
        line_3
        line_4
        locality
        town_or_city
        county
        district
        country
        fullAddress
      }
      postcode
      startDate
      endDate
      startTime
      endTime
      imageUrl
      tags {
        name
      }
      eventOwner {
        id
        firstName
        lastName
        email
        imageUrl
        socialMedia
        userType
      }
      id
    }
  }
`;

export const GET_ALL_ADS_FOR_OWNER = gql`
  query Query {
    getAllAdsForEventOwner {
      event {
        id
        name
        description
        address {
          _id
          formatted_address
          thoroughfare
          building_name
          sub_building_name
          sub_building_number
          building_number
          line_1
          line_2
          line_3
          line_4
          locality
          town_or_city
          county
          district
          country
          fullAddress
        }
        postcode
        startDate
        endDate
        startTime
        endTime
        imageUrl
        tags {
          name
        }
        adverts {
          event
          description
          setTime
          solo
          fee
          isPaid
          expires
          allResponses
        }
        eventOwner {
          id
          firstName
          lastName
          email
          imageUrl
          socialMedia
          userType
        }
      }
      description
      setTime
      solo
      fee
      isPaid
      expires
      allResponses
    }
  }
`;

export const GET_ALL_ARTISTS = gql`
  query GetAllArtists {
    getAllArtists {
      name
      user {
        id
      }
      demoSong
      tags {
        name
      }
      rider
      artistImage
      artistImageName
    }
  }
`;

export const GET_ALL_ADS = gql`
  query Query {
    getAllAds {
      event {
        id
        name
        description
        address {
          _id
          formatted_address
          thoroughfare
          building_name
          sub_building_name
          sub_building_number
          building_number
          line_1
          line_2
          line_3
          line_4
          locality
          town_or_city
          county
          district
          country
          fullAddress
        }
        postcode
        startDate
        endDate
        startTime
        endTime
        imageUrl
        tags {
          name
        }
        adverts {
          _id
          event
          description
          setTime
          solo
          fee
          isPaid
          expires
          allResponses
        }
        eventOwner {
          id
          firstName
          lastName
          email
          imageUrl
          socialMedia
          userType
        }
      }
      _id
      description
      setTime
      solo
      fee
      isPaid
      expires
      allResponses
    }
  }
`;

export const GET_AN_EVENT = gql`
  query GetAnEvent($eventId: ID!) {
    getAnEvent(eventId: $eventId) {
      id
      name
      description
      address {
        _id
        formatted_address
        thoroughfare
        building_name
        sub_building_name
        sub_building_number
        building_number
        line_1
        line_2
        line_3
        line_4
        locality
        town_or_city
        county
        district
        country
        fullAddress
      }
      postcode
      startDate
      endDate
      startTime
      endTime
      imageUrl
      tags {
        name
      }
      adverts {
        event
        description
        setTime
        solo
        fee
        isPaid
        expires
        allResponses
      }
      eventOwner {
        id
        firstName
        lastName
        email
        imageUrl
        imageFileName
        socialMedia
        userType
      }
    }
  }
`;
