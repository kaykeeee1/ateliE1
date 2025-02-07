import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";



export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    boxTop:{
        height:Dimensions.get('window').height/3,
        backgroundColor:'#a9a9a9',
        width:'100%',
        alignItems:'center', 
        justifyContent:'center'
     },


        boxMid:{
            height:Dimensions.get('window').height/4,
            backgroundColor:'#a9a9a9',
            width:'100%',
            paddingHorizontal:37
        },

        boxBottom:{
            height:Dimensions.get('window').height/3,
              backgroundColor:'#a9a9a9',
            width:'100%',
        },
        logo:{
        height:500,
        width:350,
        },
        text:{
            fontWeight:'bold',
            marginTop:40,
            fontSize:18
        },
        titleInput:{
            marginLeft:5,
            color:themas.colors.gray,
            marginTop:20
        },

        })