import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons"
import { colors } from "../style/colors.style";
interface AddItemButtonProps {
    showModal: any
}
export default function AddItemButton({showModal}:AddItemButtonProps){
    return(
        <TouchableOpacity onPress={showModal}>
            <View style={styles.container}>
                <AntDesign name="plus" size={30} color={colors.white} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width:60,
        height:60,
        borderRadius:60,
        backgroundColor: colors.primary,
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        right:10,
        bottom:20
    }
})