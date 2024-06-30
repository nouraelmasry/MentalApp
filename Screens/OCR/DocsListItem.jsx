import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../Constants/Colors';

const DocsListItem = ({ doc }) => {
    // const { doc} = doc.params;
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={doc.image} style={styles.image}/>
            <View style={styles.contentContainer}>
                <Text style={styles.title} numberOfLines={2}>{doc.title}</Text>
                <FlatList
                    data={doc.keywords}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View style={styles.keywordCapsuleContainer}>
                            <Text style={styles.keywordCapsule}>{item}</Text>
                        </View>
                    )}
                />
            </View>
        </TouchableOpacity>
    );
}

export default DocsListItem;

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15,
        marginRight: 10
    },
    contentContainer: {
        flex: 1,
    },
    title: {
        fontFamily: 'outfit-bold',
        fontSize: 19,
        marginBottom: 5,
    },
    keywordCapsuleContainer: {
        marginRight: 5,
    },
    keywordCapsule: {
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderWidth: 1,
        borderColor: COLORS.Primary,
        borderRadius: 99,
        color: 'white',
        backgroundColor: COLORS.Primary,
        fontSize:9,
        fontFamily: 'outfit',
    },
});
