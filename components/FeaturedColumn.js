import { View, Text ,ScrollView } from 'react-native'
import React, {useState , useEffect } from 'react'
import RestaurentCards from './RestaurentCards'
import sanityClient from '../sanity'

const FeaturedColumn = ({id,title,description}) => {
    const [restaurents, setRestaurants]= useState([]);
  useEffect(()=>{
      sanityClient.fetch(`
      *[_type == "featured" && _id == $id ] {
         ...,
        restaurents[] -> {
         ...,
          dishes[] ->,
      type -> {
        name
      }
        },
      }[0]
      `, {id}).then((data) =>{
         setRestaurants(data?.restaurents);
      });
  },[])
  return (
    <View>
     <ScrollView
      vertical
      contentContainerStyle={{
        paddingHorizontal:15
      }}
      showsHorizontalScrollIndicator={false}
      className='pt-4'
     >

       {restaurents?.map(restaurents => (
         <RestaurentCards
         key={restaurents._id}
         id= {restaurents._id}
         imagUrl={restaurents.image}
         title={restaurents.name}
         rating={restaurents.rating}
         genre={restaurents.type?.name}
         address={restaurents.address}
         short_description={restaurents.short_description}
         dishes={restaurents.dishes}
         long={restaurents.long}
         lat={restaurents.lat}
      />
       ))} 

     </ScrollView>
    </View>
  )
}

export default FeaturedColumn