import React, {useState,useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Spinner} from 'native-base';
import Axios from 'axios';
import User from './components/User';

const App = () => {
  const [details, setdetails] = useState(null);

  const fetchDetails = async () => {
    try {
      const {data} = await Axios.get('https://randomuser.me/api/');
      const details = data.results[0];
      // console.log(details);
      setdetails(details);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails()
  }, [])

  if (!details) {
    return( 
    <View style={styles.container}>
      <Spinner/>
    </View>
    );
  } else {
    return (
     <View style={styles.container}>
       <User details={details}/>
       <View>
       <Button
       rounded style={styles.button} onPress={()=>fetchDetails()}><Text>Get User</Text></Button>
       </View>
       
     </View>
    );
  }
};

export default App;

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:'center',
    backgroundColor:'#222831'
  },
  button:{
    marginTop:30,
    paddingHorizontal:30
  }
})