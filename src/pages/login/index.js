import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from './styles';
import { CriarUsuarios } from '../createUser';

export default function Login({navigation}){
    return(
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() } >
            <View style={styles.container}>
                <View style={styles.UserImage} >
                    <Image source={require('../../assets/new_logo3.png')}
                    style={styles.Image}  />
                </View>
                <View style={styles.form} >
                    <TextInput style={styles.inputEmail} placeholder='Email'
                    autoCompleteType= 'email' autoCapitalize='none'
                    placeholderTextColor='#000' />
                    <TextInput style={styles.inputPassword} placeholder='Senha'
                    autoCompleteType='password' autoCapitalize='none' autoCorrect={true}
                    placeholderTextColor='#000' />
                    <TouchableOpacity style={styles.buttonForm} >
                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('createuser')} >
                        <Text style={styles.ButtonCreate} >Ainda não possui uma conta!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}