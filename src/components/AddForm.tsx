import {View, TextInput, StyleSheet} from 'react-native'


export function AddForm(){
    return(
        <View style={styles.container}>
            <TextInput placeholder='Nome do Produto' style={[styles.input,styles.name]}/>
            <View style={styles.details}>
                <TextInput keyboardType='decimal-pad' placeholder='1' style={[styles.input,styles.quantity]}/>
                <TextInput keyboardType='decimal-pad' placeholder='unidades' style={[styles.input,styles.unity]}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{  
        marginTop:15,
        minWidth:"100%",   

    },
    input:{
        borderBottomWidth:1,
        padding:5,
        marginVertical:10
    },
    name:{

    },
    details:{
        flexDirection:"row",
        width:"100%",
    },
    quantity:{
        width:50,
        marginEnd:10

    },
    unity:{
        flex:1
    }
})