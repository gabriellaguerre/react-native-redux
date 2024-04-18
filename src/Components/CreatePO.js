import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import { selectAllItems, fetchItems } from '../Redux/itemsSlice'
import { panHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler'



function CreatePO({navigation}) {
//   const dispatch = useDispatch();
  const itemList = useSelector(selectAllItems)

//   useEffect(() => {
//     dispatch(fetchItems())
// }, [dispatch])


  


  console.log(itemList.items, 'oooooooooooooo')
  const newList = itemList.items
  console.log(newList, 'nnnnnnnnnnn')
  const otherList =  newList.map(item => ({ key: item.id.toString(), value: item.code.toString() }))
  console.log(otherList, 'tttttttttttt')
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

  
  const thisItem1 = newList.filter(item => item.code === Number(itemId1))
  const thisItem2 = useSelector(state => state.items[itemId2])
  const thisItem3 = useSelector(state => state.items[itemId3])
  console.log(thisItem1, 'sssssssssssssssssssssssssssssssss')

//   let updatedItemList = []

//   for (let i = 0; i < itemList.length - 1; i++) {
//       let item = itemList[i]
//       updatedItemList.push(item)
//   }


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

    const handleSubmit = () => {

    }
  
    return (
      <View style={styles.dropDown}>
        <Text style={styles.header}>Create Purchase Order</Text>
        <Text style={styles.itemCode}>Item Code:</Text>
        <SelectList style={styles.selectList}
             setSelected={(val) => setItemCode1(val)} 
             data={otherList} // Assuming SelectList requires label and value properties
             placeholder='Select Item Code'
             save='value'
            />
        <Text style={styles.descriptionTitle}>Description:</Text>
        <Text style={styles.description}>{thisItem1[0]?.description}</Text>
        <View style={styles.quantityBlock}>
        <Text style={styles.quantity}>Quantity needed:</Text>
        <TextInput 
             style={styles.quantityInput}
             placeholder='qty'
             value={quantity1}
             onChangeText={(value)=>setQuantity1(value)}
             />
        </View>
        <View style={styles.buttonView}>
        <TouchableOpacity style={styles.submitButton}  onPress={handleSubmit()}>
        <Text style={styles.submit}>Submit</Text>
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
  input: {
    backgroundColor: 'white',
    margin: 10,
  },
  button: {
    width: 100,
    alignSelf:'center',
    margin: 10,
    backgroundColor: 'green'
  },
  dropDown: {
    paddingHorizontal: 20,
    paddingVertical: 10,
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
})

export default CreatePO
