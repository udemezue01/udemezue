import gql from 'graphql-tag';





export const PORTFOLIO_LIST = gql`

query {
  portfolios {
    id
    title
    about
    image
  }
}


`

