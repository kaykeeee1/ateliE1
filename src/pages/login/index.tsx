import React from "react";

import {
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

import { style } from "./style";
import Logo from '../../assets/new_logo3.png'

export default function login (){
return(
   <View style={style.container}>
    <View style={style.boxTop}>
        <Text>top</Text>
        <Image
        source={Logo}
        style={style.logo}
        resizeMode="contain"
        />
        <Text style={style.text}>Bem vindo ao atelie Connect</Text>
    </View>
    <View style={style.boxMid}>
    <Text style={style.titleInput}>ENDEREÇO DE E-EMAIL</Text>
    <TextInput>
        <Text><Text>Endereço de e-mail</Text></Text>
    </TextInput >
        </View >
        <View style={style.boxBottom}>
        <Text style={style.titleInput}>Digite sua senha</Text>
        
    </View>
   </View>
   
)

}