import { View, StyleSheet, Dimensions, FlatList, ActivityIndicator, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import ListCard from '../components/ListCard';
import getDataService from '../services/getDataservice';
import FloatingCounter from '../components/FlotingCounter';
import { useCounter } from '@/contexts/counterContext';
const Profile = () => {
  const { count } = useCounter();
  const { height } = Dimensions.get('window');
  const [stations, setStations] = useState<Array<{ id: number, latitude: number, longitude: number, state?: { name: string } }>>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchStations = async () => {
    try {
      const response = await getDataService.getListOfData();
      const first25Stations = response.slice(0, 25);
      setStations(first25Stations);
    } catch (error) {
      console.error('Error fetching stations:', error);
    }
  };

  useEffect(() => {
    fetchStations();
  }, []);


  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchStations();
    setRefreshing(false);
  };

  return (
    <View style={[styles.mainView, { height }]}>
      <Text> {count}</Text>
      <FloatingCounter count={count} />
      {stations.length > 0 ? (
        <FlatList
          data={stations}
          renderItem={({ item }) => (
            <ListCard
              id={item.id}
              latitude={item.latitude}
              longitude={item.longitude}
            // stateName={item.state?.name}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.contentContainer}
          refreshing={refreshing} // Add refreshing state
          onRefresh={handleRefresh} // Trigger refresh on pull-down
        />
      ) : (
        <ActivityIndicator size="large" color="#0000ff" /> // Show loading spinner while data loads
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    display: 'flex',
    backgroundColor: 'white',
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;
