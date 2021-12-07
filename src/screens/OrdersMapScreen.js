import React , { useState } from 'react';
import { Text, View, StyleSheet, } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../store/actions";
import { orderToCoordinates, requestPermissions } from "../utils";

import Icon from 'react-native-vector-icons/MaterialIcons';
import Geolocation from 'react-native-geolocation-service';
import { PRIMARY_COLOR } from "../constants";

export default function OrdersMapScreen(props) {
    const dispatch = useDispatch();
    const [currentLocation, setCurrentLocation] = useState(null);
    const ordersFromStore = useSelector(state => state.OrderReducer.orders.data);
    const orders = [...ordersFromStore];
    const destination = orders.length > 0 ? orderToCoordinates(orders.pop()) : {};
    const waypoints = orders.map(orderToCoordinates);
    const origin = {latitude: 35.731787, longitude: 10.579060};
//    const destination = {latitude: 35.734100, longitude: 10.583407};
/*
    const waypoints = [
        { latitude: 35.740043, longitude: 10.571779, name: 'superet_ben_hamouda' },
        { latitude: 35.739790, longitude: 10.589868, name: 'rugby' },
        { latitude: 35.734103, longitude: 10.583407, name: 'wad' },
        { latitude: 35.741205, longitude: 10.581147, name: 'wra_vegas' },
        { latitude: 35.736455, longitude: 10.586134, name: 'ibn_sina' },
    ];
*/
    const GOOGLE_MAPS_APIKEY = 'REDACTED'; // TODO: move to .env
console.log('location : ', currentLocation)
    React.useEffect(() => {
        dispatch(getOrders({}));
        requestPermissions().then(() => {
            Geolocation.watchPosition(
                (position) => {
                    setCurrentLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
                    console.log('pos 11 : ', position.coords);
                },
                (error) => {
                    // See error code charts below.
                    console.log('pos 222  ', error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        });

    }, [ dispatch ]);

    if (ordersFromStore.length === 0) {
        return (
            <View>
                <Text>No orders yet</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: 35.734103,
                    longitude: 10.583407,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    waypoints={waypoints}
                    apikey={GOOGLE_MAPS_APIKEY}
                />
                {currentLocation &&
                    <Marker coordinate={currentLocation} key={'currentLocation'} title={'currentLocation'} >
                        <Icon name={'my-location'} size={25} color={'#187cdc'} />
                    </Marker>
                }
                <Marker coordinate={origin} key={'Ghostchef'}  title={'Ghostchef'} pinColor={PRIMARY_COLOR} />
                <Marker coordinate={destination} key={'destination'} title={destination.name} />
                {waypoints.map(waypoint => <Marker coordinate={waypoint} key={waypoint.name}  title={waypoint.name}  />)}

            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
});
