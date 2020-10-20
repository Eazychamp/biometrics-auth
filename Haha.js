import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics'
import Biometrics from 'react-native-biometrics'


class Haha extends Component {
    state = { 
        data : '',
        publickKey : '',
     }

    componentDidMount () {
        this.getData()
    }


    getData = async() => {
        ReactNativeBiometrics.isSensorAvailable()
            .then((resultObject) => {
                console.log(resultObject)
            if (resultObject === ReactNativeBiometrics.TouchID) {
                await this.checkKeysExists()
                
              } else {
                console.log('Biometrics not supported');
              }
        })

        .catch(error => {
            console.log(error)
        } )
    }

    checkKeysExists = () => {
        ReactNativeBiometrics.biometricKeysExist()
        .then((resultObject) => {
            const { keysExist } = resultObject
            if (keysExist) {
                // here we encrypt with signature 
                console.log('Keys exist')
            } else {
                this.createKeys()
                // console.log('Keys do not exist or were deleted')
            }
        })
    }

    createKeys = () => {
        ReactNativeBiometrics.createKeys('Confirm fingerprint')
        .then((resultObject) => {
            const { publicKey } = resultObject
            this.setState({
                publicKey : publicKey
            })

            // sendPublicKeyToServer(publicKey)
        })
    }

    // getData = () => {
    //     console.log('dummy')
    // }
    render() {

        return (
            <View>
                <Text>Biometrics Auth</Text>
                <Button
                    // onPress={this.getData}
                    title="Learn More"
                    /> 
            </View>
        );
    }
}

export default Haha;