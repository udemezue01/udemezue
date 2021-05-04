
import { apolloClient } from '../../apollo'
import {PORTFOLIO_LIST} from '../../graph/queries.js'


const state =  {

	portfolios:[],
	portfolio:'',

};


const getters = {

	allPortfolios:(state) => state.portfolios,

};


const mutations = {

	SET_PORTFOLIOS(state, portfolios){

		state.portfolios = portfolios
	},

	SET_PORTFOLIO(state, portfolio){

		state.portfolio = portfolio
	}

};

const actions = {

 // The Portfolio list API 

async portfolioList({commit}){

	try{


		const response = await apolloClient.query({query: PORTFOLIO_LIST})
		const portfolios = JSON.stringify(response.data)
		commit('SET_PORTFOLIOS', portfolios)

		console.log(portfolios)

	}
	catch(e){

		console.log(e)
	}

},

// The Portfolio Detail API

async portfolioDetail({commit}, ){

	try{

		const response  =  await apolloClient.query()
		const portfolio = JSON.stringify(response.data)
		console.log(portfolio)
		commit ('SET_PORTFOLIO', portfolio)
	}
	catch(e){

		console.log(e)
	}
},

//The Portfolio Create API

// async portfolioCreate({commit}, ...portfolioDetail){


// },

// The Portfolio Delete API

// async portfolioDelete({commit}){


// },

};


export default {

	state,
	getters,
	mutations,
	actions,
}