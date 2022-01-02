import { ReactElement } from "react";
import { Button, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../style/colors.style";

interface ModalFormProps{
    form?:ReactElement
    hideModal:any
}

export function ModalForm({form, hideModal}:ModalFormProps){
    return(
            <View style={styles.container}>
                <Text style={styles.title}>Adicionar Produto</Text>
                {form&&form}
                <View style={styles.btnContainer}>
                    <Pressable onPress={hideModal}  >
                        <View style={styles.button}>
                            <Text>Cancelar</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={hideModal}  >
                        <View style={[styles.button,styles.btnConfirm]}>
                            <Text style={styles.txtConfirm}>Confirmar</Text>
                        </View>
                    </Pressable>
                </View>
                
            </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        width:"100%",
        padding:20,
        borderRadius:10

    },
    title:{
        textAlign:"center",
        fontWeight:"bold",
        color:colors.primary,
        fontSize:20

    },
    input:{

    },
    btnContainer:{
        flexDirection:"row",
        marginTop:15,
        justifyContent:"flex-end"
    },
    button:{
        padding:10,
        margin:10
    },
    btnConfirm:{        
        borderWidth:1,
        borderRadius:5,
        backgroundColor:colors.primary,
        borderColor: colors.gray,
        shadowOffset:{width:-1,height:1},
        shadowOpacity:0.5

    },
    txtConfirm:{
        color:colors.white,
        fontWeight:"bold",
        fontSize:16

    }
})