import React, { ReactElement } from "react";
import { Dimensions, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../style/colors.style";

interface ModalProps{
    hideModal: any,
    children: ReactElement
}

export function Modal ({hideModal,children}:ModalProps){
    return(
        <View style={styles.container}>
            <Pressable style={styles.outerArea}  onPress={hideModal}>
                <View  ></View>
            </Pressable>
            <View style={styles.modal}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        zIndex:1,
        width:Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        justifyContent:"center",
        alignItems:"center",

    },
    modal:{
        paddingBottom:50
    },
    outerArea:{
        position:"absolute",
        width:Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.gray,
        opacity:0.6
    }
})