import React from "react";

import {
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

import { style } from "./style";
import Logo from '../../assets/new_logo3.png'
import fundo from '../../assets/carreteis.png'

export default function login() {
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo ao atelie Connect</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.titleInput}>ENDEREÇO DE E-EMAIL</Text>
                <View style={style.boxInput}>
                    <TextInput />
                    <Text></Text>
                </View>
                <Text style={style.titleInput}>SENHA</Text>
            </View>
            <View style={style.boxBottom}>
                <Image source={fundo}
                >
                    
                </Image>
            </View>
        </View>

    )

}