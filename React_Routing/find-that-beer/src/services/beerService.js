import http from "../utils/http";

// import { dummyBeersData } from '../Components/constants/dummyData';

export const fetchBeers = async (page = 1 , size = 25, beerName) => {
   // console.log('pageinfo is:' , pageInfo);
   const params = { 
      page: page, 
      per_page: size 
   };

   if (!!beerName) {
      params.beer_name = beerName;
   }

   // call async api
   // {params} object lai {params : params} yesare key value pair ko name same bhako lay {params} matra rakhda pugchha
   const {data} = await http.get("/beers" , {params});
   // console.log(data);
   return data; 
};

export const fetchBeerById = async(id) => {

   const { data } = await http.get(`/beers/${id}`);
   // call single beer async api
   return data[0];
};