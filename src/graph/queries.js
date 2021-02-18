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



`;

export const PORTFOLIO_DETAIL = gql`


query{

	Portfolio(id:Int){

		portfolio(id:id){

			id
		    title
		    about
		    image

		}	
	}
}

`;


