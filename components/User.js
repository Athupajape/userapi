import React from 'react';
import {Text,StyleSheet,View,Image} from 'react-native';
import {Card,CardItem,H1,Container,Content,Header} from 'native-base';
import moment from 'moment';

const User=({details})=>{
    return(
        <Card style={styles.card}>
            <CardItem style={styles.cardItem}> 
                <Image style={styles.image} source={{
                    uri:details.picture?.large,
                    height:250,
                    width:150,
                }}/>
            </CardItem>
            <CardItem style={styles.cardItem}>
                <H1 style={styles.text}>
                    {details.name?.title} {details.name?.first} {details.name?.last}
                </H1>
            </CardItem>
            <CardItem bordered style={styles.cardItem}>
                <Text style={styles.text}>
                   {details.cell}
                </Text>
            </CardItem>
            <CardItem bordered style={styles.cardItem}>
                <Text style={styles.text}>
                   {details.email}
                </Text>
            </CardItem>
            <CardItem bordered style={styles.cardItem}>
                <Text style={styles.text}>
                   City : {details.location?.city}
                </Text>
            </CardItem>
            <CardItem bordered style={styles.cardItem}>
                <Text style={styles.text}>
                   State : {details.location?.state}
                </Text>
            </CardItem>
            <CardItem bordered style={styles.cardItem}>
                <Text style={styles.text}>
                   State : {details.location?.country}
                </Text>
            </CardItem>
            <CardItem footer style={styles.cardItem}>
                <Text style={styles.text}>
                    Registered at {moment(details.registered?.date).format('DD-MM-YY')}
                </Text>
            </CardItem>
        </Card>
    );
}

export default User;

const styles = StyleSheet.create({
    card: {
      width: '90%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#4f8a8b',
      borderColor: '#4f8a8b',
      borderWidth: 2,
    },
    cardItem: {
      backgroundColor: '#4f8a8b',
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      overflow: 'hidden',
      borderWidth: 3,
      borderColor: '#fbd46d',
      marginTop: -50,
    },
    text: {
      color: '#eeeeee',
    },
  });
  