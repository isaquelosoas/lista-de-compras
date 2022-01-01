import { useState } from "react"
import { Pressable, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native"
import { IListItem } from "../interfaces/listItem.interface"
import { colors } from "../style/colors.style"

export default function ListItem({ name, price, unity, quantity }: IListItem) {
  const [currentPrice, setCurrentPrice] = useState<string>(price.toFixed(2).toString())
  return (
    <View style={styles.container}>
      <TouchableHighlight>
        <View style={styles.checkContainer}>
          <View style={styles.checkbox}></View>
        </View>
      </TouchableHighlight>
      <View style={styles.details}>
        <Text style={styles.nameTxt}>{name}</Text>
        <Text style={styles.quantityTxt}>{`${quantity} ${unity}`}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.currency}>R$</Text>
        <TextInput
          value={currentPrice}
          style={styles.priceTxt}
          onChangeText={(text)=>setCurrentPrice(text)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: colors.gray,
    borderBottomWidth:1,
    padding: 15
  },
  checkContainer:{
    flex:1,
    padding:8,
    justifyContent:"center",
    alignItems:"center"
  },
  checkbox:{
    borderWidth:1,
    borderColor: colors.gray,
    borderRadius:5,
    padding:8
  },
  details:{
    marginHorizontal:10,
    flex:1
  },
  nameTxt:{
    fontWeight:"bold",
    color:colors.gray,
    fontSize:18
  },
  quantityTxt:{
    fontSize:12
  },
  priceContainer:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",   
  },
  currency:{
    fontWeight:"bold",    
    color:colors.gray,
    paddingRight:5
  },
  priceTxt:{
    maxWidth:50,
  }
})
