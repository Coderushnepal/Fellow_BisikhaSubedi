import http from "../utils/http";

// import { dummyBeersData } from '../Components/constants/dummyData';

export const fetchBeers = async () => {
   // call async api
   const {data} = await http.get("/beers");
   // console.log(data);
   return data; 
};

export const fetchBeerById = async(id) => {

   const { data } = await http.get(`/beers/${id}`);
   // call single beer async api
   return data[0];
};