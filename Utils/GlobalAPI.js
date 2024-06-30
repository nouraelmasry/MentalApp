import { gql, request } from 'graphql-request'

const masterURL = 'https://api-eu-west-2.hygraph.com/v2/clwkulip601cc07uyctdtvwms/master'

const getSlider = async () => {
  const query = gql`
   
    
`
  const result = await request(masterURL, query);
  return result;

}
export default {
  getSlider
}
