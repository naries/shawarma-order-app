import React from 'react';
import { Alert, Linking, Platform, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import IoniconIcon from 'react-native-vector-icons/Ionicons'
import FeatherIcon from 'react-native-vector-icons/Feather'

const StyledBox = styled.View`
    width: 80px;
    height: 80px;
    background-color: #17B169;
    border-width: 1px;
    border-color: #07B169;
    border-radius: 1000px;
    justify-content: center;
    align-items: center;
`

const ContactUs = () => (
    <View style={{
        padding: 50, 
        flex: 1, 
        overflow: 'hidden',
        backgroundColor: '#fff'
    }}>
        <StyledBox>
            <View>
                <Text style={{
                    fontSize: 30,
                    color: 'white',
                    fontFamily: 'Firasans'
                }}>MD</Text>
            </View>
        </StyledBox>
        <View style={{lineHeight: 40, marginVertical: 30}}>
            <View>
                <Text style={{fontSize: 30, color: '#333', fontFamily: 'Janda'}}>Daniel's Shawarma</Text>
            </View>
            <View style={{marginTop: 8, marginLeft: 15}}>
                
                <Text style={{fontSize: 16, color: '#666'}}>
                    <IoniconIcon name="call" color='#17B169' size={20} solid/>
                    <Text style={{}}>  09031855132</Text>
                </Text>
            </View>
            <View style={{marginTop: 8, marginLeft: 15}}>
                <Text style={{fontSize: 16, color: '#666'}}>
                    <FeatherIcon name="mail" color='red' size={20} solid/>
                    <Text>  phynormynal@gmail.com</Text>
                </Text>

            </View>
            <View style={{marginTop: 8, marginLeft: 15}}>
                <Text>
                    <FeatherIcon name="instagram" color='purple' size={20} solid/>
                    <Text style={{fontSize: 14, color: '#666'}}>  @iamprofesseur (instagram)</Text>
                </Text>
            </View>
            <View style={{marginTop: 8, marginLeft: 15}}>
            
            <Text style={{fontSize: 14, color: '#666'}}>
                <FeatherIcon name="twitter" color='skyblue' size={20} solid/>
                <Text>  @AjibsonMayokunA (twitter)</Text>
            </Text>
            </View>
        </View>

        <View>
            <Text style={{fontSize: 20, color: '#333', lineHeight: 30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </Text>


            <TouchableOpacity onPress={() => {
                const tellPrompt = Platform.OS!=='android' ? 'telprompt:09031855132': 'tel:09031855132'
                Linking.canOpenURL(tellPrompt).then(supported => {
                    if(!supported) {
                        Alert.alert('Phone number is not available');
                    } else {
                        return Linking.openURL(tellPrompt)
                    }
                }).catch(err => Alert.alert('Something went wrong! Try later.'))
            }}>
                <View style={{marginVertical: 10, backgroundColor: '#334455', padding: 10, borderRadius: 4, borderWidth: 1, borderColor: '#444455'}}>
                    <Text style={{fontSize: 16, color: '#333', lineHeight: 30, color: 'white', textAlign: 'center', fontFamily: 'Firasans'}}>Place a call</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
);

export default ContactUs;