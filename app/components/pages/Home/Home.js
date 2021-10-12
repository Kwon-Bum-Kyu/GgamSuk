

import React from 'react';
import { StyleSheet, View } from 'react-native';
// import { Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Circle, Marker, Polyline } from 'react-native-maps';
import colors from '../../../common/values/colors';
import Trace from '../../organisms/Trace';
import Explore from '../../organisms/Explore';



const TAG = 'Home'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: [
                {
                    latlng: { latitude: 37.37661347766266, longitude: 127.1515092533156 },
                    title: 'Dog1',
                    description: 'Dog1'
                },
                {

                    latlng: { latitude: 37.378571395849995, longitude: 127.15227081264658 },
                    title: 'Dog2',
                    description: 'Dog2'
                },
                {

                    latlng: { latitude: 37.374242548283476, longitude: 127.14599018804007 },
                    title: 'Dog3',
                    description: 'Dog3'
                },
            ],
            views: 'Explore',
        }



    }




    componentDidMount = async () => {

    }



    render() {

        // const disp = this.getDisp();
        // console.log(this.state.lockState);
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <View style={{ flex: 1 }}>
                    <MapView
                        style={{ flex: 5 }}
                        initialRegion={{
                            latitude: 37.37663124585731,
                            longitude: 127.14918594907691,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                    >
                        {this.state.markers.map((marker, index) => (
                            <Marker
                                key={index}
                                coordinate={marker.latlng}
                                title={marker.title}
                                description={marker.description}
                                image={require('../../../assets/images/png/dogMaker.png')}
                            />
                        ))}
                        <Circle
                            center={{ latitude: 37.37661347766266, longitude: 127.1515092533156 }}
                            radius={500}
                            lineCap={'butt'}
                        />
                        <Circle
                            center={{ latitude: 37.37661347766266, longitude: 127.1515092533156 }}
                            radius={200}
                            lineCap={'butt'}
                        />
                        <Polyline
                            coordinates={[
                                { latitude: 37.37375796844508, longitude: 127.1486597714687},
                                { latitude: 37.37374077961906, longitude: 127.14961507538592},
                                { latitude: 37.374018665156804, longitude: 127.14997917235058},
                                { latitude: 37.374040491067454, longitude: 127.15015990143495},
                                { latitude: 37.374004681143695, longitude: 127.15062223248167},
                                { latitude: 37.37451320072463, longitude: 127.15075259492244},
                                { latitude: 37.37471751002692, longitude: 127.15072882142154},
                                { latitude: 37.3751287854543, longitude: 127.15063536147373},
                                { latitude: 37.37531697494746, longitude: 127.15061741938064},
                                { latitude: 37.37552213035594, longitude: 127.15080383290638},
                                { latitude: 37.37566174228799, longitude: 127.15102109183616},
                                { latitude: 37.375954292726036, longitude: 127.15119517297181},
                                { latitude: 37.37661347766266, longitude: 127.1515092533156},
                            ]}
                            strokeColor={colors.green} // fallback for when `strokeColors` is not supported by the map-provider
                            // strokeColors={[
                            //     '#7F0000',
                            //     '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                            //     '#B24112',
                            //     '#E5845C',
                            //     '#238C23',
                            //     '#7F0000'
                            // ]}
                            strokeWidth={3}
                        />
                    </MapView>
                    {this.state.views == 'Trace'? <Trace/> : <Explore/>}
                </View>
            </SafeAreaView>
        )
    }

}




const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        // position: 'relative',
        backgroundColor: 'white',
    },


});
export default Home



