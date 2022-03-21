import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableNativeFeedbackComponent, View } from 'react-native';
import { auth } from '../Firebase';

const RegistrationScreen = () => {

    const [Email, setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [confirmPassword , setConfirmPassword] = useState('')
    const [passwordErrorMessage , setPasswordErrorMessage] = useState('')
    const [confirmPasswordErrorMessage , setConfirmPasswordErrorMessage] = useState('')
    let errorFlag1 = false;
    let errorFlag2 = false;

    const navigation = useNavigation()

    // const validationSchema = Yup.object().shape({
    //     password: Yup.string()
    //         .required('Password is required')
    //         .min(6, 'Password must be at least 6 characters'),
    //     confirmPassword: Yup.string()
    //         .required('Confirm Password is required')
    //         .oneOf([Yup.ref('password')], 'Passwords must match')
            
    // });
    // const formOptions = { resolver: yupResolver(validationSchema) };

    const handleSignUp = () =>{
        errorFlag1 = false;
        errorFlag2 = false;
        setPasswordErrorMessage("");
        setConfirmPasswordErrorMessage("");
        if (password.length == 0) {
            errorFlag1 = true;
            setPasswordErrorMessage("Password is a required field");
        } else if (password.length < 8 ||  password.length > 20) {
            errorFlag1 = true;
            setPasswordErrorMessage("Password should be min 8 char and max 20 char");
        } 
        
        if (!errorFlag1){
            if (confirmPassword.length == 0) {
                errorFlag2 = true;
                setConfirmPasswordErrorMessage("Confirm Password is required field");
            } else if (password.length !==  confirmPassword) {
                errorFlag2 = true;
                setConfirmPasswordErrorMessage("Password and confirm password should be same.");
            }
        }
        console.log("Error Flag 1 is",errorFlag1)
        console.log("Error Flag 2 is",errorFlag2)

        if (!errorFlag1 && !errorFlag2) {
            auth
            .createUserWithEmailAndPassword(Email,password)
            .then(UserCredentials => {
                const user = UserCredentials.user;
                console.log('Registered with:',user.Email);
            })
            .catch(error => alert(error.message))
        }
    }

    return (
        <KeyboardAvoidingView
          style = {styles.pageContainer}
          behavior = "padding">

            <View style = {styles.title}>
                <Text style = {styles.titleText}>
                    Register for a
                </Text>
                <Text style = {styles.titleText}>
                    New Account
                </Text>
            </View>

            <View style = {styles.inputContainer}>
                <TextInput
                    placeholder = "Email"
                    style = {styles.input}
                    value = {Email}
                    onChangeText = {text => setEmail(text)}
                />
                <TextInput
                    placeholder = "Password"
                    style = {styles.input}
                    secureTextEntry
                    value = {password}
                    onChangeText = {text => setPassword(text)}
                />
                {passwordErrorMessage.length > 0 && <Text style={styles.textDanger}>{passwordErrorMessage}</Text>}
                <TextInput
                    placeholder = "Re-Enter Password"
                    style = {styles.input}
                    secureTextEntry
                    value = {confirmPassword}
                    onChangeText = {text => setConfirmPassword(text)}
                />
                {confirmPasswordErrorMessage.length > 0 &&<Text style={styles.textDanger}>{confirmPasswordErrorMessage}</Text>}
            </View>

            <View style = {styles.buttonContainer}>
                <TouchableOpacity
                    style = {[styles.button]}
                    onPress = {handleSignUp}
                    >
                        <Text style ={styles.buttonText}>
                            Register
                        </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

export default RegistrationScreen;

const styles = StyleSheet.create({
    pageContainer :{
        flex: 1,
        alignItems:'center'
    },
    title:{
        position: 'relative',
        width: '80%',
        height: 120,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
    },
    titleText:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'justify'
    },
    inputContainer: {
        width:'70%',
        marginTop: 40
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:10,
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
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
    },
    textDanger: {
        color: "#dc3545"
    },
})