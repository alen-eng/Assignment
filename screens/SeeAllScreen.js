import { View, Text, ScrollView } from 'react-native'
import React , {useState ,useLayoutEffect , useEffect} from 'react'
import {useNavigation} from '@react-navigation/native';
import  sanityClient  from '../sanity';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeaturedRow from '../components/FeaturedRow';
import FeaturedColumn from '../components/FeaturedColumn';

const SeeAllScreen = () => {
    const navigation= useNavigation();
    const [featuredCategories ,setFeaturedCategories] =useState([]);

    useLayoutEffect (()=>{
       navigation.setOptions({
         headerShown:false,
       });
    },[]);

    useEffect(()=>{
       sanityClient
       .fetch(`*[_type == "featured"] {
        ...,
       restaurents[] -> {
        ...,
         dishes[] ->
       }
     }`).then((data) => {
      setFeaturedCategories(data);
     });
    },[]);
  return (
    <SafeAreaView>
    <ScrollView>
    { featuredCategories?.map(category =>(
              <FeaturedColumn
              key={category._id}
              id={category._id}
              title= {category.name}
              description={category.short_description}
              
              />
          ))}
    </ScrollView>
    </SafeAreaView>
  )
}

export default SeeAllScreen