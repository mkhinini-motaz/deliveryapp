import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from "react-native";
import MapView, {Marker} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import {useDispatch} from "react-redux";
import {getOrders} from "../store/actions";

export default function OrdersMapScreen(props) {
    const dispatch = useDispatch();

    const origin = {latitude: 35.734103, longitude: 10.583407};
    const destination = {latitude: 35.734100, longitude: 10.583407};
    const waypoints = [
        { latitude: 35.740043, longitude: 10.571779, name: 'superet_ben_hamouda' },
        { latitude: 35.739790, longitude: 10.589868, name: 'rugby' },
        { latitude: 35.734103, longitude: 10.583407, name: 'wad' },
        { latitude: 35.741205, longitude: 10.581147, name: 'wra_vegas' },
        { latitude: 35.736455, longitude: 10.586134, name: 'ibn_sina' },
    ];
    const GOOGLE_MAPS_APIKEY = 'REDACTED';

    React.useEffect(() => dispatch(getOrders({})), [ dispatch ]);

    return (
        <View style={{ flex: 1 }}>
            <MapView initialRegion={{
                latitude: 35.734103,
                longitude: 10.583407,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    wayPoints={waypoints}
                    apikey={GOOGLE_MAPS_APIKEY}
                />
                <Marker coordinate={origin} key={'origin'}  title={'origin'}  />
                <Marker coordinate={destination} key={'destination'}  title={'destination'}  />
                {waypoints.map(waypoint => <Marker coordinate={waypoint} key={waypoint.name}  title={waypoint.name}  />)}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({

});
