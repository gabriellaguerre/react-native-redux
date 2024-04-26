import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, StyleSheet, Text, TextInput, View, Alert, TouchableOpacity, FlatList, Button } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import { selectAllItems, fetchItems } from '../Redux/itemsSlice'
import { selectAlllPos, deletePO } from '../Redux/posSlice'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import CreatePOModal from './CreatePOModal'
import EditPOModal from './EditPOModal'




function CreatePO({navigation}) {
  const dispatch = useDispatch();
  const itemList = useSelector(selectAllItems)
  const pos = useSelector(selectAlllPos)


const [modalVisible, setModalVisible] = useState(false)
const [editPOVisible, setEditPOVisible] = useState(false)
  
console.log(pos, 'ppppppppppppppppp')

  // console.log(itemList.items, 'oooooooooooooo')
  const newList = itemList.items
  // console.log(newList, 'nnnnnnnnnnn')
  // const otherList =  newList.map(item => ({ key: item.id.toString(), value: item.code.toString() }))
  // console.log(otherList, 'tttttttttttt')
//   console.log(newList, 'llllllllllllllllllllllllllllll')
//   console.log(otherList, 'ppppppppppppppp')
  const canvasRef = useRef(null);
  const formData = new FormData();




  const [itemId1, setItemCode1] = useState('')
  const [itemId2, setItemCode2] = useState('')
  const [itemId3, setItemCode3] = useState('')
  const [quantity1, setQuantity1] = useState('')
  const [quantity2, setQuantity2] = useState('')
  const [quantity3, setQuantity3] = useState('')
  const [errors, setErrors] = useState([])
  const [isDrawing, setIsDrawing] = useState(false);
  const [signed, setSigned] = useState(false);
  const [disabled, setDisabled] = useState(false)
  const [selected, setSelected] = useState('')
  const [dataArray, setDataArray] = useState([])
  const [editItem, setEditItem] = useState({})

  
  // const thisItem1 = newList.filter(item => item.code === Number(itemId1))
  // const thisItem2 = useSelector(state => state.items[itemId2])
  // const thisItem3 = useSelector(state => state.items[itemId3])
  // console.log(thisItem1, 'sssssssssssssssssssssssssssssssss')


//  console.log(dataArray, 'lllllllllllllll')

const poModalData = (poData) => {
  // console.log(poData,'ppppppppppppppppp')
  setDataArray(prevArray => [...prevArray, poData])
  // console.log(dataArray, 'aaaaaaaaaaaaaaa')
}

const poEditModalData = (poEditData) => {
  const editItem = dataArray.find(item => item.itemCode === poEditData.itemCode)
  editItem.quantity = poEditData.quantity
}



  const startDrawing = (e) => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      ctx.lineWidth = 1;
      ctx.strokeStyle = 'black';

      const x = e.nativeEvent.offsetX || e.nativeEvent.layerX;
      const y = e.nativeEvent.offsetY || e.nativeEvent.layerY;

      ctx.beginPath();
      ctx.moveTo(x, y);

      ctx.arc(x, y, 1, 0, Math.PI * 2);
      ctx.fillStyle = 'black';
      ctx.fill();

      setIsDrawing(true);
      setSigned(true)
  };

  const draw = (e) => {
      if (!isDrawing) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      const x = e.nativeEvent.offsetX || e.nativeEvent.layerX;
      const y = e.nativeEvent.offsetY || e.nativeEvent.layerY;

      ctx.lineTo(x, y);
      ctx.stroke();
  };

  const endDrawing = () => {
      setIsDrawing(false);
  };

  const clearCanvas = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      // Clear the canvas by drawing a clear rectangle over it
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setSigned(false)
  };

//   const handleCancel = async ()=> {
//       await dispatch(ItemsActions.resetState())
//       .then(dispatch(ItemsActions.getItemsByPage(0)))
//       .then(closeModal())
//   }

    const handleDeleteItem = (itemId) => {
      const itemDeleted = pos.filter(item => item.itemCode === itemId)
      dispatch(deletePO(itemDeleted[0].itemCode))
      // console.log(itemDeleted[0].itemCode, 'dddddddddddddd')
    }
  
    return (
      <View style={styles.dropDown}>
        <Modal 
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={()=>setModalVisible(!modalVisible)}>
          <CreatePOModal setModalVisible={setModalVisible} onSubmitData={poModalData} onEditItem={editItem}/>
          </Modal>
          <Modal 
          animationType='slide'
          transparent={true}
          visible={editPOVisible}
          onRequestClose={()=>setEditPOVisible(!editPOVisible)}>
          <EditPOModal setEditPOVisible={setEditPOVisible} onEditData={poEditModalData} onDataArray={dataArray} editItem={editItem}/>
          </Modal>
        <Text style={styles.header}>Create Purchase Order</Text>
      
        <TouchableOpacity style={styles.itemButton}onPress={()=>{setModalVisible(true)}} >
            <Text style={styles.itemText}>Add Items</Text>
        </TouchableOpacity>
       
        <View style={styles.flatlist}>
        <FlatList 
            data={pos}
            renderItem={({ item }) => (
                <View style={styles.listContainer}>
                  <View style={styles.insideContainer}>
                  <Text style={styles.item}>Item Code:</Text>
                  <Text style={styles.codequ}>{item.itemCode}</Text>
                  <Text style={styles.item}>Description:</Text>
                  <Text style={styles.codequ}>{item.description}</Text>
                  <Text style={styles.item}>Quantity:</Text>
                  <Text style={styles.codequ}>{item.quantity}</Text>  
                  
                  <View style={styles.buttons}>
                  <TouchableOpacity onPress={()=>{handleDeleteItem(item.itemCode)}}>
                    <FontAwesome5 name={'trash'} size={20} color={'red'}/>
                </TouchableOpacity> 
                <TouchableOpacity onPress={()=>{setEditItem(item); setEditPOVisible(!editPOVisible)}}>
                    <FontAwesome5 name={'pen'} size={20} color={'blue'}/>
                </TouchableOpacity> 
                </View>
                  </View>
                </View>                
            )}
            keyExtractor={(item, index) => index.toString()}
           />
          </View>
           {/* <Button
            title='This is the end of the list' /> */}
        </View>
    )
}
const styles = StyleSheet.create({
  listContainer: {
    width: '90%',
    backgroundColor: 'white',
    margin: 10,
    alignSelf: 'center',
    borderRadius: 10,
    marginHorizontal: 40,
    marginVertical: 10,
    paddingLeft: 10,
    paddingRight: 10,
    elevation: 5,
    marginBottom: 10,
  },
  flatlist: {
   backgroundColor: 'green',
   margin: 10,
  },
  buttons: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
  header: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15,
  },
  // button: {
  //   width: 60,
  //   height: 60,
  //   borderRadius: 30,
  //   backgroundColor: 'blue',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   position: 'absolute',
  //   // bottom: 55,
  //   right: 10,
  //   elevation: 5,
  //   top: 10,
  // }, 
  input: {
    backgroundColor: 'white',
    margin: 10,
  },
  // itemButton: {
  //   marginBottom: 50,
  // },
  dropDown: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  item: {
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
    width: 40,
    textAlign: 'center',  
    marginLeft: 10,
  },
  quantityBlock: {
    flexDirection: 'row',
    
  },
  submit: {
    fontSize: 20,
    color: 'white',
    // fontWeight: 'bold',
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: 'blue',
    // width: 100,
    height: 50,
    // margin: 50,
    borderRadius: 20,
    justifyContent: 'center',
  },
  buttonView: {
    textAlign: 'center',
    justifyContent: 'center',
    width: '30%',
    alignSelf: 'center',
    marginTop: 50,
  }, 
  codequ: {
    marginBottom: 5,
  },
  itemButton: {
    backgroundColor: 'blue',
    width: 100,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  itemText: {
    color: 'white',
  },
//   lastItem: {
//     marginBottom: 100, // Adjust this value as needed
// },

})

export default CreatePO


// console.log(dataArray, 'aaaaaaaaaaaaaaa')
//   useEffect(() => {

//       if (itemId1.length === 0 && itemId2.length === 0 && itemId3.length === 0) {
//           setDisabled(true)

//       } else if (itemId1.length > 0 && quantity1.length === 0 && itemId2.length === 0 && itemId3.length === 0) {
//           setDisabled(true)

//       } else if (itemId1.length > 0 && quantity1.length > 0 && +quantity1 && itemId2.length === 0 && itemId3.length === 0 && quantity2.length === 0 && quantity3.length === 0) {
//           setDisabled(false)
//           setErrors([])

//       } else if (itemId1.length > 0 && quantity1.length > 0 && !+quantity1 && itemId2.length === 0 && itemId3.length === 0 && quantity2.length === 0 && quantity3.length === 0) {
//           setDisabled(true)
//           let errors = ['Enter a valid Quantity']
//           setErrors(errors)

//       } else if (itemId1.length > 0 && quantity1.length > 0 && itemId2.length > 0 && quantity2.length === 0 && itemId3.length === 0 && quantity3.length === 0 && itemId1 === itemId2) {
//           setDisabled(true)
//           let errors = ['*2 Items have the same Item Code']
//           setErrors(errors)

//       } else if (itemId1.length > 0 && quantity1.length > 0 && itemId2.length > 0 && quantity2.length === 0 && itemId3.length === 0 && quantity3.length === 0 && itemId1 !== itemId2) {
//           setDisabled(true)
//           setErrors([])

//       } else if (itemId1.length > 0 && quantity1.length > 0 && +quantity1 && itemId2.length > 0 && quantity2.length > 0 && +quantity2 && itemId1 !== itemId2 && itemId3.length === 0 && quantity3.length === 0) {
//           setDisabled(false)
//           setErrors([])

//       } else if (itemId1.length > 0 && quantity1.length > 0 && +quantity1 && itemId2.length > 0 && quantity2.length > 0 && !+quantity2 && itemId1 !== itemId2 && itemId3.length === 0 && quantity3.length === 0) {
//           setDisabled(true)
//           let errors = ['Enter a valid Quantity']
//           setErrors(errors)

//       } else if (itemId1.length > 0 && quantity1.length > 0 && +quantity1 && itemId2.length > 0 && quantity2.length > 0 && +quantity2 && itemId1 === itemId2 && itemId3.length === 0 && quantity3.length === 0) {
//           setDisabled(true)
//           let errors = ['*2 Items have the same Item Code']
//           setErrors(errors)

//       } else if ((itemId1.length > 0 && quantity1.length > 0) && (itemId2.length > 0 && quantity2.length > 0) && (itemId3.length > 0 && quantity3.length === 0)
//           && (itemId1 === itemId3 || itemId2 === itemId3)) {
//           setDisabled(true)
//           let errors = ['*2 Items have the same Item Code']
//           setErrors(errors)

//       } else if (itemId1.length > 0 && quantity1.length > 0 && itemId2.length > 0 && quantity2.length > 0 && itemId3.length > 0 && quantity3.length === 0) {
//           setDisabled(true)
//           setErrors([])

//       } else if ((!+quantity1 && quantity1.length > 0) || (!+quantity2 && quantity2.length > 0) || (!+quantity3 && quantity3.length > 0)) {
//           let errors = ['*Enter a valid Quantity']
//           setDisabled(true)
//           setErrors(errors)

//       } else {
//           setDisabled(false)
//           setErrors([])
//       }

//   }, [itemId2, itemId3, itemId1, quantity1, quantity2, quantity3, thisItem1, thisItem2, thisItem3, disabled, signed])

//   const createPurchaseOrder = async () => {

//       const poResponse = await dispatch(POsActions.createPurchaseOrder(formData));

//       if (poResponse) {
//           const itemsToCreate = [
//               { itemId: itemId1, quantity: quantity1 },
//               { itemId: itemId2, quantity: quantity2 },
//               { itemId: itemId3, quantity: quantity3 },
//           ];

//           for (const { itemId, quantity } of itemsToCreate) {
//               if (itemId && +quantity) {
//                   await dispatch(PurchaseOrderItemsActions.createPOItem(itemId, { quantity }));
//               }
//           }
//           await dispatch(POsActions.resetState())
//           .then(await dispatch(POsActions.getPOSByPage(0)))
//           .then(()=> {if(updatePage) updatePage(0)})
//           .then(history.push('/purchase_orders'))
//           .then(closeModal())

//       } else {
//           setErrors(['Error processing your purchase order'])
//       }
//   }

//   const onSubmit = async (e) => {
//       e.preventDefault()

//       if (signed) {
//           const canvas = canvasRef.current;
//           let signatureDataURL = canvas.toDataURL('image/png');
//           const parts = signatureDataURL.split(",");
//           const base64Content = parts[1];
//           formData.append('image', base64Content)

//           await createPurchaseOrder()


//       }

//   }