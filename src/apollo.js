// Apollo client Setup

import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import VueApollo from 'vue-apollo'

// import { USER_ID, AUTH_TOKEN } from './constants/settings'




const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = localStorage.getItem(AUTH_TOKEN)
  operation.setContext({
    headers: {
      authorization: token ? `JWT ${token}` : null
    }
  })

  return forward(operation)
})

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://127.0.0.1:8000/graphql',
})

// Cache implementation
const cache = new InMemoryCache()



// Create the apollo client
export const apolloClient = new ApolloClient({
  link: authMiddleware.concat(httpLink),
  cache,
  connectToDevTools: true,
})


const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.use(VueApollo)

export default apolloProvider