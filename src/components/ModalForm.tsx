import { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../style/colors.style";

interface ModalFormProps{
    form?:ReactElement
}

export function ModalForm({form}:ModalFormProps){
    return(
        <View style={styles.container}>
            <Text>Adicionar Produto</Text>
            {form&&form}
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        width:"100%",
        padding:20

    },
    title:{

    },
    input:{

    },
    btnContainer:{

    },
    button:{

    }
})