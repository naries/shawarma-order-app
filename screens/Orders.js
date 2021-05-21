import React from 'react';
import { Image, ScrollView, View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components';
import CenterImage from '../assets/chnch.png'
import CenterImage1 from '../assets/shawarma.png'
import CenterImage2 from '../assets/sandwich.png'
import { windowWidth } from '../utils/dimensions'
import Swiper from 'react-native-swiper'

const centerImageProperties = {
    width: windowWidth - 50,
    resizeMode: 'contain',
    position: 'relative',
    top: -60,
    zIndex: 1,
}

const SpatialView = styled.View `
    position: relative;
`
const BorderedView = styled.View`
    borderRadius: 20px;
    width: ${windowWidth-30}px;
    justify-content: center;
    align-content: center;
    overflow: hidden;
    height: 440px;
`

const Container = styled.View`
    justify-content: center;
    alignItems: center;
    background-color: #fff;
    flex: 1;
`

const CView = styled.View`
    align-items: center;
    padding: 20px;
`

const TopicText = styled.Text`
    font-size: 50px;
    text-align: center;
    font-family: 'Pattaya';
    color: #191a32;
`

const Red = styled.Text`
    color: red;
    font-size: 60px;
`

const Green = styled.Text`
    color: green;
    font-size: 60px;
`

const Orange = styled.Text`
    color: orange;
    font-size: 60px;
`

const BubbleRegion = styled.View``

const Bubble = styled.View`
    backgroundColor: rgba(255, 0, 0, .5);
    border-radius: 100px; 
    position: absolute;
`
const Bubble1 = styled(Bubble)`
    left: 30px;
    top: -280px;
    width: 18px;
    height: 18px;
    transform: translateX(30px);
`
const Bubble2 = styled(Bubble)`
    top: 0;
    right: 70px;
    top: 50px;
    width: 10px;
    height: 10px;
    backgroundColor: #fc4d22;
    transform: translateX(-60px);
`
const Bubble3 = styled(Bubble)`
    left: 0;
    top: 10px;
    width: 18px;
    height: 18px;
    backgroundColor: #accc2e;
    transform: translateX(120px);
`
const Orders = ({ navigation }) => {
    return (
            <Container>
                <Swiper horizontal showsButtons={false} style={styles.wrapper}>
                    <View style={styles.slide1}>
                        <TouchableWithoutFeedback onPress={() => navigation.push('place')}>
                        <SpatialView>
                            <TopicText>Let's eat<Red>.</Red><Green>.</Green><Orange>.</Orange></TopicText>
                            <BorderedView>
                                <View style={[styles.triangle, {backgroundColor: '#fddde1'}]}>    
                                </View>
                                <Image source={CenterImage1} style={centerImageProperties} />
                                <View style={{position: 'absolute', bottom: 100, width: '100%',justifyContent: 'center'}}>
                                    <TopicText style={{fontSize: 30}}>
                                        Shawarma
                                    </TopicText>
                                    <TopicText style={{fontSize: 20, color: '#666', marginTop: 20}}>
                                        ₦ 1000
                                    </TopicText>
                                </View>
                                <Bubble2></Bubble2>
                                <Bubble3></Bubble3>
                            </BorderedView>
                        </SpatialView>
                        </TouchableWithoutFeedback>
                        <CView>
                            <Text style={{fontSize: 16, color: '#666'}}>Tap anywhere to place order</Text>
                        </CView>
                    </View>
                    <View style={styles.slide2}>
                        <SpatialView>
                            <TopicText>Let's eat<Red>.</Red><Green>.</Green><Orange>.</Orange></TopicText>
                            <BorderedView>
                                <View style={[styles.triangle, {backgroundColor: '#ffedd2'}]}>    
                                </View>
                                <Image source={CenterImage} style={centerImageProperties} />
                                <View style={{position: 'absolute', bottom: 100, width: '100%',justifyContent: 'center'}}>
                                    <TopicText style={{fontSize: 30}}>
                                        Chicken and Chips
                                    </TopicText>

                                    <TopicText style={{fontSize: 20, color: '#666', marginTop: 20}}>
                                        ₦ 1000
                                    </TopicText>
                                </View>
                                <Bubble2></Bubble2>
                                <Bubble3></Bubble3>
                            </BorderedView>
                        </SpatialView>
                        <CView>
                            <Text style={{fontSize: 16, color: '#666'}}>Tap on any to place order</Text>
                        </CView>
                    </View>
                    <View style={styles.slide3}>
                        <SpatialView>
                            <TopicText>Let's eat<Red>.</Red><Green>.</Green><Orange>.</Orange></TopicText>
                            <BorderedView>
                                <View style={[styles.triangle, {backgroundColor: '#cbd2f7'}]}>    
                                </View>
                                <Image source={CenterImage2} style={centerImageProperties} />
                                <View style={{position: 'absolute', bottom: 100, width: '100%',justifyContent: 'center'}}>
                                    <TopicText style={{fontSize: 30}}>
                                        Sandwich
                                    </TopicText>
                                    <TopicText style={{fontSize: 20, color: '#666', marginTop: 20}}>
                                        ₦ 700
                                    </TopicText>
                                </View>
                                <Bubble2></Bubble2>
                                <Bubble3></Bubble3>
                            </BorderedView>
                        </SpatialView>
                        <CView>
                            <Text style={{fontSize: 16, color: '#666'}}>Tap on any to place order</Text>
                        </CView>
                    </View>
                </Swiper>
            </Container>
)};

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  triangle: {
    height: 400,
    transform: [
        { skewX: '15deg' }, 
        { rotateX: '25deg' }
    ],
    position: 'absolute',
    left: 50,
    right: 50,
    borderColor: 'white',
    borderWidth: .495,
    borderRadius: 40,
  }
})

export default Orders;