import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function BookCard(props){
  const isAvailable=props.isAvailable;
  const discount=props.discount;
  const price=props.price;
  const author=props.author;
  const title=props.title;
  
  const NewPrice=price-discount;
  return(
    <View style={styles.card}>
      <Text style={styles.header}>{title}</Text>
      <Text style={styles.details}>By {author}</Text>
      <Text>Price:{price}$</Text>
      <Text>After Discount:{NewPrice}$</Text>
      <Text style={styles.otherH}>{isAvailable==false ? 'Not Available':'Available'}</Text>
    </View>
  )
}
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Library</Text>
      <Text style={styles.details}>First React App</Text>
      <BookCard
        title="Clean Code"
        author="Robert Martin"
        price={40}
        discount={4}
        isAvailable={true}
      />

       <BookCard
        title="JavaScript Basics"
        author="Sara Ali"
        price={25}
        discount={5}
        isAvailable={false}
      />

       <BookCard
        title="Learning React Native"
        author="Ahmad Saeed"
        price={30}
        discount={0}
        isAvailable={true}
      />
       <StatusBar style="auto" />
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    padding:10,
    margin:10,
    borderColor:'blue',
    borderWidth:3,
    borderRadius: 15,
    backgroundColor:'lightblue',
    minHeight:150,   
    width:250,
  },
  header:{
    fontWeight: 'bold',
    fontSize:17,
    marginBottom:5,
  },
  otherH:{
    marginTop:6,
    fontWeight:'bold',
    fontSize:13,
  },
  details:{
    fontSize:11,
    marginBottom:5,   
},
title:{
  fontWeight:'bold',
  fontSize:25,
}

});
