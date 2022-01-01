import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons"
import { colors } from "../style/colors.style";
interface AddItemButtonProps {
    showModal: any
}
export default function AddItemButton({showModal}:AddItemButtonProps){
    return(
        <Pressable onPress={showModal}>
            <View style={styles.container}>
                <AntDesign name="plus" size={30} color={colors.white} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        borderRadius:60,
        backgroundColor: colors.primary,
        justifyContent:"center",
        alignItems:"center",
    }
})