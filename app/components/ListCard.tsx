import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const testData = {
    id: 48,
    state: { id: 1, name: "Active" },
    name: "USI",
    address: "Via Giuseppe Buffi 13",
    city: "Lugano",
};

function ListCard() {
    return (
        <View style={styles.cardView}>
            {/* Image Section */}
            <View style={styles.imagePath}>
                <View style={styles.image}></View>
            </View>

            {/* Text Section */}
            <View style={styles.textPath}>
                {/* Status Icon */}
                <View style={styles.status}>
                    <Text style={styles.statusText}>
                        {testData.state.name}
                    </Text>
                </View>
                <View style={styles.textContent}>
                    {/* Name on the same line */}
                    <View style={styles.row}>
                        <Text style={styles.label}>Name: </Text>
                        <Text style={styles.value}>{testData.name}</Text>
                    </View>

                    {/* Address on the same line */}
                    <View style={styles.row}>
                        <Text style={styles.label}>Address: </Text>
                        <Text style={styles.value}>{testData.address}</Text>
                    </View>

                    {/* City on the same line */}
                    <View style={styles.row}>
                        <Text style={styles.label}>City: </Text>
                        <Text style={styles.value}>{testData.city}</Text>
                    </View>

                    <TouchableOpacity style={styles.button}>
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
        elevation: 5, // For shadow effect on Android
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
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    address: {
        fontSize: 14,
        marginBottom: 5,
    },
    city: {
        fontSize: 14,
        marginBottom: 10,
        fontStyle: 'italic',
    },
    button: {
        backgroundColor: '#E38E49',
        width: '90%',
        marginTop: 5,
        height: "20%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
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

});

export default ListCard;
