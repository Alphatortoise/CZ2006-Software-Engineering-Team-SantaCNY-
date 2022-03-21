import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions, TouchableNativeFeedback } from "react-native";
import { Svg, Path } from "react-native-svg";
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';

import {
useFonts, 
Comfortaa_400Regular,
SourceSansPro_400Regular
} from "@expo-google-fonts/dev";

const MainMenu = () => {

    // NAVIGATION STUFF
    const navigation = useNavigation()
    const MedicalInfoNavigation = () =>{
        navigation.navigate("Home");
    }
    const ProfileNavigation = () =>{
        navigation.navigate("Home");
    }
    const GuideNavigation = () =>{
        navigation.navigate("Home");
    }
    const AEDNavigation = () =>{
        navigation.navigate("Home");
    }

    // FONTS
	let [fontsLoaded] = useFonts({
		Comfortaa_400Regular,
        SourceSansPro_400Regular
	});
    if (!fontsLoaded) {
        return <AppLoading />;
      } else {
	return (
		<ScrollView bounces={false} style = {stylesheet.Main_Menu_Page}>
		<View style = {stylesheet.Main_Menu_Page}>
            {/* First Box - Medical Info */}
            <TouchableNativeFeedback onPress = {MedicalInfoNavigation}>
                <View style = {stylesheet.Medical_Info_Container}>
                    <View style = {stylesheet.Medical_Info_Box}>
                            <Image style = {stylesheet.Medical_Info_Icon} source = {{uri: medicalinfo_image_URL}}>
                            </Image>
                        <View style = {[stylesheet.Medical_Info_Text]}>
                        <Text style = {[stylesheet.Medical_Info_Text]}>
                            Medical Info
                        </Text>
                        </View>
                    </View>
                </View>
            </TouchableNativeFeedback>
            {/* Second + Third Box - Profile + Guides */}
			<View style = {stylesheet.Profile_Container}>
				<View style = {stylesheet.Profile_Box}>
                    <Image style = {stylesheet.Profile_Icon} source = {{uri: Profile_image_URL}}>
					</Image>
					<View style = {[stylesheet.Profile_Text]}>
					<Text style = {[stylesheet.Profile_Text]}>
						Profile
					</Text>
					</View>
				</View>
				<View style = {stylesheet.Guide_Box}>
                    <Image style = {stylesheet.Guide_Icon} source = {{uri: Guide_image_URL}}>
					</Image>
					<View style = {[stylesheet.Guide_Text]}>
					<Text style = {[stylesheet.Guide_Text]}>
						Guides/Advisories
					</Text>
					</View>
				</View>
			</View>
            {/* Emergency Response */}
			<View style = {stylesheet.Emergency_Container}>
				<View style = {stylesheet.Emergency_Box}>
                    <Image style = {stylesheet.Emergency_Icon} source = {{uri: Emergency_image_URL}}>
					</Image>
					<View style = {[stylesheet.Emergency_Text]}>
					<Text style = {[stylesheet.Emergency_Text]}>
						Emergency Response
					</Text>
					</View>
				</View>
			</View>
            {/* Bottom Row - Settings + AED */}
			<View style = {stylesheet.Settings_AED_Container}>
				<View style = {stylesheet.Settings_Box}>
                    <Image style = {stylesheet.Settings_Icon} source = {{uri: settings_image_URL}}>
					</Image>
					<View style = {[stylesheet.Settings_Text]}>
					<Text style = {[stylesheet.Settings_Text]}>
						 Settings
					</Text>
					</View>
				</View>
				<View style = {stylesheet.AED_Box}>
					<Image style = {stylesheet.AED_Icon} source = {{uri: AED_image_URL}}>
					</Image>
					<View style = {[stylesheet.AED_Text]}>
					<Text style = {[stylesheet.AED_Text]}>
						View Nearby AED
					</Text>
					</View>
				</View>
			</View>
		</View>
		</ScrollView>
	)
}
}


export default MainMenu

const stylesheet = StyleSheet.create({
	Main_Menu_Page: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: Dimensions.get('window').height,
		borderRadius: 0,
		overflow: "hidden",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
		left: 0,
		top: 0,
	},
	Medical_Info_Container: {
		position: "relative",
		width: 315,
		height: 120,
		borderRadius: 0,
		marginLeft: 36,
	    marginTop: 50,
		display: "flex",
		flexDirection: "row"
	},
	Medical_Info_Box: {
		position: "relative",
		width: "auto",
		height: "100%",
		borderRadius: 20,
		minWidth: 0,
		flexBasis: 0,
		flexGrow: 1,
		borderWidth: 1,
		borderStyle: "solid",
		backgroundColor: "rgba(255, 255, 255, 1)",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: 'flex-start',
		flexShrink: 0,
	},
	Medical_Info_Icon: {
		position: "absolute",
		width: 59,
		height: 59,
		borderRadius: 100,
		minWidth: 0,
        marginTop : 12,
		backgroundColor: "rgba(41, 114, 254, 0.10000000149011612)"
	},
	Medical_Info_Text: {
		position: "absolute",
		width: "100%",
		height: "auto",
		minWidth: 0,
		fontFamily: "SourceSansPro_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 40,
		fontSize: 24,
		color: "rgba(9, 16, 29, 1)",
		textAlign: "center",
		letterSpacing: 0.1,
		flexShrink: 0,
        marginTop: 36
	},
	Profile_Container: {
		position: "relative",
		width: 315,
		height: 120,
		borderRadius: 0,
        marginTop: 30,
        marginLeft: 36,
		display: "flex",
		flexDirection: "row"
	},
	Profile_Box: {
		position: "relative",
		width: "auto",
		height: "100%",
		borderRadius: 20,
		minWidth: 0,
		flexBasis: 0,
		flexGrow: 1,
		borderWidth: 1,
		borderStyle: "solid",
		backgroundColor: "rgba(255, 255, 255, 1)",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: 'flex-start',
		flexShrink: 0,
        marginRight:12
	},
	Profile_Icon: {
		position: "absolute",
		width: 59,
		height: 59,
		borderRadius: 100,
		minWidth: 0,
        marginTop : 12,
		backgroundColor: "rgba(41, 114, 254, 0.10000000149011612)"
	},
	Profile_Text: {
		position: "absolute",
		width: "100%",
		height: "auto",
		minWidth: 0,
		fontFamily: "SourceSansPro_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 40,
		fontSize: 24,
		color: "rgba(9, 16, 29, 1)",
		textAlign: "center",
		letterSpacing: 0.1,
		flexShrink: 0,
        marginTop: 36
	},
	Guide_Box: {
		position: "relative",
		width: "auto",
		height: "100%",
		borderRadius: 20,
		minWidth: 0,
		flexBasis: 0,
		flexGrow: 1,
		borderWidth: 1,
		borderStyle: "solid",
		backgroundColor: "rgba(255, 255, 255, 1)",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: 'flex-start',
		flexShrink: 0,
	},
	Guide_Icon: {
		position: "absolute",
		width: 59,
		height: 59,
		borderRadius: 100,
		minWidth: 0,
        marginTop : 12,
		backgroundColor: "rgba(41, 114, 254, 0.10000000149011612)"
	},
	Guide_Text: {
		position: "absolute",
		width: "100%",
		height: "auto",
		minWidth: 0,
		fontFamily: "SourceSansPro_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 40,
		fontSize: 16,
		color: "rgba(9, 16, 29, 1)",
		textAlign: "center",
		letterSpacing: 0.1,
		flexShrink: 0,
        marginTop: 36
	},
	Settings_AED_Container: {
		position: "relative",
		width: 315,
		height: 120,
		borderRadius: 0,
        marginTop: 30,
        marginLeft: 36,
		display: "flex",
		flexDirection: "row"
	},
	Settings_Box: {
		position: "relative",
		width: "auto",
		height: "100%",
		borderRadius: 20,
		minWidth: 0,
		flexBasis: 0,
		flexGrow: 1,
		borderWidth: 1,
		borderStyle: "solid",
		backgroundColor: "rgba(255, 255, 255, 1)",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: 'flex-start',
		flexShrink: 0,
        marginRight:12
	},
    Settings_Icon: {
		position: "absolute",
		width: 59,
		height: 59,
		minWidth: 0,
        marginTop : 12,
	},
	Settings_Text: {
		position: "absolute",
		width: "100%",
		height: "auto",
		minWidth: 0,
		fontFamily: "SourceSansPro_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 40,
		fontSize: 24,
		color: "rgba(9, 16, 29, 1)",
		textAlign: "center",
		letterSpacing: 0.1,
		flexShrink: 0,
        marginTop: 36
	},
	AED_Box: {
		position: "relative",
		width: "auto",
		height: "100%",
		borderRadius: 20,
		minWidth: 0,
		flexBasis: 0,
		flexGrow: 1,
		borderWidth: 1,
		borderStyle: "solid",
		backgroundColor: "rgba(255, 255, 255, 1)",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: 'flex-start',
		flexShrink: 0,
	},
	AED_Icon: {
		position: "absolute",
		width: 59,
		height: 59,
		borderRadius: 100,
		minWidth: 0,
        marginTop : 12,
		backgroundColor: "rgba(41, 114, 254, 0.10000000149011612)"
	},
	AED_Text: {
		position: "absolute",
		width: "100%",
		height: "auto",
		minWidth: 0,
		fontFamily: "SourceSansPro_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 40,
		fontSize: 16,
		color: "rgba(9, 16, 29, 1)",
		textAlign: "center",
		letterSpacing: 0.1,
		flexShrink: 0,
        marginTop: 36
	},
    Emergency_Container: {
		position: "relative",
		width: 315,
		height: '20%',
		borderRadius: 0,
		marginLeft: 36,
	    marginTop: 30,
		display: "flex",
		flexDirection: "row"
	},
    Emergency_Box: {
		position: "relative",
		width: "auto",
		height: "100%",
		borderRadius: 20,
		minWidth: 0,
		flexBasis: 0,
		flexGrow: 1,
		borderWidth: 1,
		borderStyle: "solid",
		backgroundColor: "rgba(245, 73, 73, 1)",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: 'flex-start',
		flexShrink: 0,
	},
	Emergency_Icon: {
		position: "absolute",
		width: 59,
		height: 59,
		borderRadius: 100,
		minWidth: 0,
        marginTop : 20,
		backgroundColor: "rrgba(245, 73, 73, 1)"
	},
	Emergency_Text: {
		position: "absolute",
		width: "100%",
		height: "auto",
		minWidth: 0,
		fontFamily: "SourceSansPro_400Regular",
		fontWeight: "bold",
		textDecorationLine: "none",
		lineHeight: 40,
		fontSize: 30,
		color: "rgba(9, 16, 29, 1)",
		textAlign: "center",
		letterSpacing: 0.1,
		flexShrink: 0,
        marginTop: 48
	}
});

const medicalinfo_image_URL = "https://compai.pub/v1/png/b16094a5989eab98e2fb6144ba240048a5d4879d118230cc0395932ce74ddefb"
const AED_image_URL = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/b3d4123a4ed9c5cb7937bc2ed489e313"
const settings_image_URL = "https://compai.pub/v1/png/1ec8114eade776e7d63311d011c0bd78579a3872a6b868731617766897fa4d4e"
const Profile_image_URL = "https://compai.pub/v1/png/867b5aad1558972f0049a12e73d10b693bdf3ee4998d94b53d0f242bd5575a76"
const Guide_image_URL = "https://compai.pub/v1/png/a2c35861889d711874bbb3afc51039aa4b3f2fabff2e4e685ab5d6ca2976616c"
const Emergency_image_URL = "https://compai.pub/v1/png/5120c18b5b44123e4c345b26129fcf7ad39b3ce24a423ef2347e650feedb878e"