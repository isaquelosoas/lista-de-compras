import { useState } from "react"
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native"
import AddItemButton from "./components/AddItemButton"
import ListItem from "./components/ListItem"
import { Modal } from "./components/Modal"
import { ModalForm } from "./components/ModalForm"
import { IListItem } from "./interfaces/listItem.interface"
import { colors } from "./style/colors.style"

export default function ListPage() {
  const [data, setData] = useState<IListItem[]>([{name:"Isaque",price:45.5, quantity:2, unity:"gramas"}])
  const [showModal, setShowModal] = useState<boolean>(false)
  const addItem  = (item:IListItem) => {
    const newData = [item,...data]
    setData(newData)
  }
  return (
    <View style={styles.container}>
      {showModal&&<Modal hideModal={()=>setShowModal(false)} children={<ModalForm hideModal={()=>setShowModal(false)}/>}/>}
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Lista de Compras</Text>
        <AddItemButton showModal={()=>{setShowModal(true)}}/>
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          data={data}
          renderItem={({item})=><ListItem name={item.name} price={item.price} quantity={item.quantity} unity={item.unity}/>}
        >

        </FlatList>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width
  },
  header: {
    backgroundColor: colors.primary,
    minHeight: 50,
    padding: 15,
    justifyContent:"space-between",
    flexDirection:"row"
  },
  headerTxt: {
    color: colors.white,
    fontSize: 20,
    textShadowColor: colors.gray,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontWeight:"bold"
  },
  contentContainer:{
    flex:1,
  }
})
