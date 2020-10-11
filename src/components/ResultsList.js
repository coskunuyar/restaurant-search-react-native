import React from 'react';
import { View , Text , StyleSheet , FlatList , TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'
import ResultsDetail from './ResultDetail';

const ResultsList = ({ title , results , navigation }) => {
  if(!results.length) return <></>;
  return (
         <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
              horizontal
              showsHorizontalScrollIndicator={false}
              data={results}
              keyExtractor={(result) => result.id}
              renderItem={({ item }) => {
              return <TouchableOpacity 
                       onPress={() =>  navigation.navigate('ResultsShow' , { id: item.id })}
                     >
                      <ResultsDetail result={item} />
                     </TouchableOpacity>}}
            />
         </View>
        );
}

const styles = StyleSheet.create({
  titleStyle:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
});

export default withNavigation(ResultsList);