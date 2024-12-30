import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import getDataService from '../services/getDataservice';
import { Image } from 'react-native';
import { useCounter } from '@/contexts/counterContext';
interface StationData {
    id: number;
    name?: string;
    address?: string;
    city?: string;
    state?: {
        id: number;
        name: string;
    };
}

interface PropData {
    id: number;
    latitude: number;
    longitude: number;
}

function ListCard(props: PropData) {
    const [stationData, setStationData] = useState<StationData | null>(null);
 const {incrementCount} = useCounter();
    useEffect(() => {

        const fetchStation = async () => {
            try {
                const response = await getDataService.getDataById(props.id.toString());
                setStationData(response);
                console.log('Station:', response);
            } catch (error) {
                console.error('Error fetching station:', error);
            }
        };
        fetchStation();
    }, [props.id]);

    function generateMapURL(latitude: string, longitude: string) {
        const baseURL = "https://maps.geoapify.com/v1/staticmap";
        const style = "osm-bright-smooth";
        const width = 600;
        const height = 400;
        const zoom = 14.3497;
        const apiKey = "3677c26c51e940fc80439c88b3a577db";

        // Constructing the URL with dynamic latitude and longitude values
        return `${baseURL}?style=${style}&width=${width}&height=${height}&center=lonlat%3A${longitude}%2C${latitude}&zoom=${zoom}&marker=lonlat%3A${longitude}%2C${latitude}%3Btype%3Aawesome%3Bcolor%3A%23bb3f73%3Bsize%3Ax-large%3Bicon%3Apaw&apiKey=${apiKey}`;
    }

    return (
        <View style={styles.cardView}>
            {/* Image Section */}
            <View style={styles.imagePath}>
                <View style={styles.image}>
                    <Image
                        source={{
                            uri: generateMapURL(props.latitude.toString(), props.longitude.toString()),
                        }}
                        style={{ width: '100%', height: '100%' }}
                    />
                    {/* https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=600&height=400&center=lonlat%3A-122.29009844646316%2C47.54607447032754&zoom=14.3497&marker=lonlat%3A-122.29188334609739%2C47.54403990655936%3Btype%3Aawesome%3Bcolor%3A%23bb3f73%3Bsize%3Ax-large%3Bicon%3Apaw%7Clonlat%3A-122.29282631194182%2C47.549609195001494%3Btype%3Amaterial%3Bcolor%3A%234c905a%3Bicon%3Atree%3Bicontype%3Aawesome%7Clonlat%3A-122.28726954893025%2C47.541766557545884%3Btype%3Amaterial%3Bcolor%3A%234c905a%3Bicon%3Atree%3Bicontype%3Aawesome&apiKey=3677c26c51e940fc80439c88b3a577db */}
                </View>
            </View>

            {/* Text Section */}
            <View style={styles.textPath}>
                {/* Status Icon */}
                <View style={styles.status}>
                    <Text style={styles.statusText}>
                        {stationData?.state?.name || 'Unknown'}
                    </Text>
                </View>

                <View style={styles.textContent}>
                    {/* Name */}
                    <View style={styles.row}>
                        <Text style={styles.label}>Name: </Text>
                        <Text style={styles.value}>{stationData?.name || 'N/A'}</Text>
                    </View>

                    {/* Address */}
                    <View style={styles.row}>
                        <Text style={styles.label}>Address: </Text>
                        <Text style={styles.value}>{stationData?.address || 'N/A'}</Text>
                    </View>

                    {/* City */}
                    <View style={styles.row}>
                        <Text style={styles.label}>City: </Text>
                        <Text style={styles.value}>{stationData?.city || 'N/A'}</Text>
                    </View>

                    <TouchableOpacity onPress={incrementCount} style={styles.button}>
                        <Text style={styles.buttonText}>View Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardView: {
        width: '90%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        marginVertical: 10,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 5,
    },
    imagePath: {
        width: '40%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    image: {
        width: '80%',
        height: '70%',
        backgroundColor: 'black',
        borderRadius: 5,
    },
    textPath: {
        width: '60%',
        height: '100%',
        padding: 10,
        position: 'relative',
    },
    status: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'green',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 5,
    },
    statusText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    textContent: {
        flex: 1,
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    value: {
        fontSize: 14,
        color: '#555',
    },
    button: {
        backgroundColor: '#E38E49',
        width: '90%',
        marginTop: 5,
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ListCard;
