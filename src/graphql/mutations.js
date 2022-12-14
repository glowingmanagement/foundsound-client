import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation Mutation($signupInput: SignupInput!) {
    signup(signupInput: $signupInput) {
      success
    }
  }
`;

export const LOGIN = gql`
  mutation Mutation($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      success
      token
      user {
        id
        firstName
        lastName
        email
        socialMedia
        imageUrl
        userType
      }
    }
  }
`;

export const CREATE_EVENT = gql`
  mutation Mutation($createEventInput: CreateEventInput!) {
    createEvent(createEventInput: $createEventInput) {
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
    }
  }
`;

export const CREATE_ARTIST_PROFILE = gql`
  mutation Mutation($createArtistProfileInput: CreateArtistProfileInput!) {
    createArtistProfile(createArtistProfileInput: $createArtistProfileInput) {
      name
      user {
        id
        firstName
        lastName
        email
        imageUrl
        socialMedia
        userType
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

export const CREATE_ADVERT = gql`
  mutation Mutation($createAdvertInput: CreateAdvertInput!) {
    createAdvert(createAdvertInput: $createAdvertInput) {
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

export const ADVERT_RESPONSES = gql`
  mutation Mutation($advertResponsesInput: AdvertResponsesInput!) {
    advertResponses(advertResponsesInput: $advertResponsesInput) {
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
  }
`;
