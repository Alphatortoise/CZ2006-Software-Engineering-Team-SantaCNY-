import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth } from '../Firebase';

const LoginScreen = () =>{
    const [Email, setEmail] = useState('')
    const [password , setPassword] = useState('')

    const navigation = useNavigation()
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user=>{
            if(user){
                navigation.replace("Home")
            }
        })

        return unsubscribe
    },[])

    const handleSignUp = () =>{
        auth
        .createUserWithEmailAndPassword(Email,password)
        .then(UserCredentials => {
            const user = UserCredentials.user;
            console.log('Registered with:',user.Email);
        })
        .catch(error => alert(error.message))
    }

const handleLogin = () => {
    auth
    .signInWithEmailAndPassword(Email,password)
    .then(UserCredentials => {
        const user = UserCredentials.user;
        console.log('Logged in with:',user.Email);
    })
    .catch(error => alert(error.message))
}

    return(
        <KeyboardAvoidingView
          style = {styles.container}
          behavior = "padding">
            <View style = {styles.inputContainer}>
                <TextInput
                    placeholder = "Email"
                    value = {Email}
                    onChangeText = {text => setEmail(text)}
                    style = {styles.input}
                />
                <TextInput
                    placeholder = "Password"
                    value = {password }
                    onChangeText = {text => setPassword(text)}
                    style = {styles.input}
                    secureTextEntry
                />
                </View>

                <View style = {styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleLogin}
                        style = {styles.button}
                        >
                          <Text style ={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleSignUp}
                        style = {[styles.button,styles.buttonOutline]}
                        >
                          <Text style ={styles.buttonOutlineText}>Register</Text>
                    </TouchableOpacity>
                </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container :{
        flex: 1,
        justifyContent :'center',
        alignItems:'center'
    },
    inputContainer: {
        width:'70%'

    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,
    },
    buttonContainer:{
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 40,

    },
    button:{
        backgroundColor:'grey',
        width:'100%',
        padding :15 ,
        borderRadius:10,
        alignItems:'center',
    },
    buttonOutline:{
        backgroundColor:'white',
        marginTop:5,
        borderColor : 'grey',
        borderWidth:2,
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
    },
    buttonOutlineText:{
        color:'grey',
        fontWeight:'700',
        fontSize:16,
    },
})
