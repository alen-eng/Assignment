import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'

const OrderScreen = () => {
  const [orderList , setOrderList] = useState([
    {
      id: 1,
      name: 'order 1',
      status: 'Active',
      restaurant : 'Restaurant 1',
      date: '2021-09-01',
      table : 1,
    dishes:'Chicken Burger and 1L pepsi'}
      ,
      {
        id: 2,
        name: 'order 2',
        status: 'Completed',
        restaurant : 'Restaurant 2',
        date: '2021-09-02',
        table : 2,
        dishes:'Chicken Burger and 1L pepsi'}
        ,
        {
          id: 3,
          name: 'order 3',
          status: 'Active',
          restaurant : 'Restaurant 3',
          date: '2021-09-03',
          table : 3,
          dishes:'Chicken Burger and 1L pepsi'}
          ,
          {
            id: 4,
            name: 'order 4',
            status: 'Completed',
            restaurant : 'Restaurant 4',
            date: '2021-09-04',
            table : 4,
            dishes:'Chicken Burger and 1L pepsi'}
            ,
            {
              id: 5,
              name: 'order 5',
              status: 'Active',
              restaurant : 'Restaurant 5',
              date: '2021-09-05',
              table : 5,
              dishes:'Chicken Burger and 1L pepsi'}
              ,
              {
                id: 6,
                name: 'order 6',
                status: 'Completed',
                restaurant : 'Restaurant 6',
                table : 6,
                date: '2021-09-06',
                dishes:'Chicken Burger and 1L pepsi'}
                ,
                {
                  id: 7,
                  name: 'order 7',
                  status: 'Active',
                  restaurant : 'Restaurant 7',
                  table : 7,
                  date: '2021-09-07',
                  dishes:'Chicken Burger and 1L pepsi'}
                  ,

  ]);
    const [active, setActive] = useState(1);
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [table, setTable] = useState('');
    const [restaurant, setRestaurant] = useState('');
    const [dishes, setDishes] = useState('');


    const ChangeStatus = (id) => {
     if(orderList[id-1]!=undefined) orderList[id-1].status = 'Completed';
    }
const Remove = (id) => {
 // if(orderList[id]!=undefined) orderList.splice(id);
}
    const FormSubmit = () => {
      orderList.push({
        id: orderList.length+1,
        name: name,
        status: 'Active',
        restaurant : restaurant,
        date: '2021-09-01',
        table : table,
        dishes:dishes
      
      })
    }
 
  return (
    <SafeAreaView>
        <View className='items-center bg-gray-100 pb-4'> 
         <Text className='text-xl text-gray-800 font-bold' >My Orders</Text> 
          <TouchableOpacity onPress={()=>{setShowForm(!showForm)}} >
            <Text className='text-sm pl-8  text-white font-bold ml-64 bg-blue-600 px-4 w-full rounded-full'>Order +</Text>
            </TouchableOpacity>
           {showForm &&
         (  <View className=' cursor-pointer border border-gray-300 mt-14 w-full px-12 shadow-lg'>
           <View className='flex flex-col space-y-1 pt-4 '>
              <Text className='text-lg text-gray-800 font-bold' >Customer Name</Text>
              <TextInput className='border-2 border-gray-400 rounded-lg px-4 py-2 required'  type='text' placeholder='Customer Name' onChangeText={(text)=>{setName(text)}} />
              <Text className='text-lg text-gray-800 font-bold' >Phone</Text>
              <TextInput className='border-2 border-gray-400 rounded-lg px-4 py-2 required' type='number' placeholder='Mobile' onChangeText={(text)=>{setPhone(text);}} />
              <Text className='text-lg text-gray-800 font-bold' >Table</Text>
              <TextInput className='border-2 border-gray-400 rounded-lg px-4 py-2 required' type='text' placeholder='Eg: T1' onChangeText={(text)=>{setTable(text)}} />
              <Text className='text-lg text-gray-800 font-bold' >Restaurant Name</Text>
              <TextInput className='border-2 border-gray-400 rounded-lg px-4 py-2 required' type='text' placeholder='Restaurant' onChangeText={(text)=>{setRestaurant(text)}} />
              <Text className='text-lg text-gray-800 font-bold' >Dishes</Text>
              <TextInput className='border-2 border-gray-400 rounded-lg px-4 py-2 required' type='date' placeholder='Eg: Chicken burger and 1L pepsi' onChangeText={(text)=>{setDishes(text)}} />
              <View className='w-20 h-20 pt-2 '>
              <Text className='bg-[#00CCBB] text-white text-lg px-2 py-1 rounded-lg font-bold' onPress={()=>{FormSubmit(); setShowForm(!showForm)}} >Submit</Text>
              </View>
              </View>
              </View> ) }
            
         <View className='flex flex-row space-x-8  mt-4'>
            <Text className={active===1 ? ' text-lg font-semibold text-[#00CCBB] ' : 'text-lg font-semibold text-black' } onPress={()=>{setActive(1)}}>All orders</Text>
             
            <Text className={active===2 ? 'text-lg font-semibold text-[#00CCBB] ' : ' text-lg font-semibold text-black' } onPress={()=>{setActive(2)}}>Active</Text>
            <Text className={active===3 ? ' text-lg font-semibold text-[#00CCBB]  ' : ' text-lg font-semibold text-black' } onPress={()=>{setActive(3)}}>Completed</Text>
            
         </View>

         {/* All , active or complted */}

         <View>
             {active==1 ? orderList.map((item)=>{
                return(
                    <View className='flex flex-row space-x-8 mt-4 p-2' key={item.id}>
                        <Text className={item.status=='Active' ?'text-lg text-gray-800 font-bold':'text-lg font-bold text-gray-400' } >{item.name}</Text>
                        <Text className={item.status=='Active' ?'text-lg text-gray-800 font-bold':'font-bold text-lg text-gray-400' } >{item.restaurant}</Text>
                        <Text className={item.status=='Active' ?' text-lg text-gray-800 font-bold':'font-bold text-lg text-gray-400' } >T{item.table}</Text>
                        <TouchableOpacity >
                        <Text onPress={()=>{Remove(item.id);}} className={item.status=='Active' ?'bg-red-600 text-white px-2 py-1 rounded-full':''}>{item.status =='Active'?'X':''}</Text>
                        </TouchableOpacity>
                    </View>
                    
                )
            }) : active==2 ? orderList.filter((item)=>item.status=='Active').map((item)=>{
                return(
                    <View className='flex flex-row space-x-6 mt-4' key={item.id}>
                        <Text className='text-lg  text-gray-800 font-bold ' >{item.name}</Text>
                        <Text className='text-lg  text-gray-800 font-bold ' >{item.restaurant}</Text>
                        <Text className='text-lg  text-gray-800 font-bold ' >T{item.table}</Text>
                        <TouchableOpacity >
                        <Text onPress={()=>{ChangeStatus(item.id);}} className='text-lg bg-[#00CCBB] rounded px-2 text-white font-bold' >Complete</Text>
                        </TouchableOpacity>
                    </View>
                    
                )}) : active == 3 ? orderList.filter((item)=>item.status=='Completed').map((item)=>{
                    return(
                        <View className='flex flex-row space-x-8  mt-4' key={item.id}>
                            <Text className='text-lg  text-gray-400 font-bold ' >{item.name}</Text>
                            <Text className='text-lg  text-gray-400 font-bold ' >{item.restaurant}</Text>
                            <Text className='text-lg  text-gray-400 font-bold ' >T{item.table}</Text>
                        </View>
                        
                    )
                }) : null}
  
            
         </View>
        </View>
    </SafeAreaView>
  )
}

export default OrderScreen