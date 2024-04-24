import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import { selectAllItems } from '../Redux/itemsSlice'




function CreatePOModal({ setModalVisible, onSubmitData }) {

  const itemList = useSelector(selectAllItems) 
  const newList = itemList.items
  const otherList =  newList.map(item => ({ key: item.id.toString(), value: item.code.toString() }))

  // console.log(onEditItem, 'eeeeeeeeeeeeeee')

  const [itemCode, setItemCode] = useState('')
  const [quantity, setQuantity] = useState('')
  
  const thisItem = newList.filter(item => item.code === Number(itemCode))

  
  const handleSubmit = () => {
    if(!itemCode || !quantity) {
      Alert.alert('Warning', 'Cannot submit with empty fields')
      } else {
        const po = {itemCode: itemCode, description: thisItem[0]?.description, quantity: quantity}
        onSubmitData(po)
        setModalVisible(false)
      }
     
    }
  
    return (
      <View style={styles.dropDown}>
        <Text style={styles.header}>Create Purchase Order</Text>
        <Text style={styles.itemCode}>Item Code:</Text>
       
          <SelectList style={styles.selectList}
             setSelected={(val) => setItemCode(val)} 
             data={otherList} // Assuming SelectList requires label and value properties
             placeholder='Select Item Code'
             save='value'
            />
      
        <Text style={styles.descriptionTitle}>Description:</Text>
        <Text style={styles.description}>{thisItem[0]?.description}</Text>
        <View style={styles.quantityBlock}>
        <Text style={styles.quantity}>Quantity needed:</Text>
        <TextInput 
             style={styles.quantityInput}
             placeholder='qty'
             value={quantity}
             onChangeText={(value)=>setQuantity(value)}
             />
        </View>
        <View style={styles.buttonView}>
        <TouchableOpacity style={styles.submitButton}  onPress={()=> {handleSubmit();}}>
        <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton}  onPress={()=> {setModalVisible(false);}}>
        <Text style={styles.submit}>Cancel</Text>
        </TouchableOpacity>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15,
  },
  // input: {
  //   backgroundColor: 'white',
  //   margin: 10,
  // },
  button: {
    width: 100,
    alignSelf:'center',
    margin: 10,
    backgroundColor: 'green'
  },
  dropDown: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#9999ff'
  },
  itemCode: {
    fontWeight: 'bold'
  },
  descriptionTitle: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  quantity: {
    fontWeight: 'bold',
    marginTop: 10,
   
  },
  quantityInput: {
    backgroundColor: 'white',
    borderRadius: 5,  
    width: 50,
    height: 40,
    textAlign: 'center',  
    // justifyContent: 'center',
    marginLeft: 10,
    // border: 'white',
  },
  quantityBlock: {
    flexDirection: 'row',
  },
  submit: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: 'blue',
    width: 100,
    height: 50,
    // margin: 50,
    borderRadius: 20,
    justifyContent: 'center',
    marginRight: 10,
  },
  buttonView: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    width: '30%',
    alignSelf: 'center',
    marginTop: 50,
  }, 
  cancelButton: {
    backgroundColor: 'red',
    width: 100,
    height: 50,
    // margin: 50,
    borderRadius: 20,
    justifyContent: 'center',
    marginLeft: 10,
  },
})

export default CreatePOModal;
