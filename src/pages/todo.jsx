import { useState } from "react";
import { AiOutlinePlus, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useSelector,useDispatch } from "react-redux";
import todoAction from '../global-state-management/action/todoAction.js'
import toast from 'react-hot-toast';
import { v4 as uuid } from "uuid";
import Header from "./Home.jsx";
const Todo = () => {
    const dispatch = useDispatch();
    const optionValue = [{value : 'piece' , lable : 'Piece'}, {value : 'kilogram' , lable : 'Kilogram'}, {value : 'litre' , lable : 'Litre'} ]
    const toListData = useSelector((state)=> state.toListData)
    const [item, setItem ] = useState({
        itemName : '',
        unit : '',  
        quantity : 0
    });
    const [isEditing, setIsEditing ] = useState(false);
    const titleElement = document.getElementById('title').innerText = 'Todo App';
    console.log("Title element set to:", titleElement);

    const addItem = () => {
        if(validation(item)) return;
        let uniqueId = uuid();
            
       dispatch(todoAction.addItemToTodo({...item, id : uniqueId}));
       toast.success('Item added successfully');
       setItem({
        itemName : '',
        unit : '',
        quantity : 0
       })
    }

    const editItem = () =>{
        if(validation(item)) return;
        dispatch(todoAction.updateItemFromTodo(item));
        toast.success('Item updated successfully');
        setItem({
            itemName : '',
            unit : '',
            quantity : 0
           })
        setIsEditing(false);
    }

   const validation = (item) => {
         if(!isEditing && toListData.find((i)=> i.itemName.toLowerCase() === item.itemName.toLowerCase())){
        toast.error('Item already exists in the list if needed you can edit it');
        return true;
       }

       if(isEditing && toListData.find((i)=> i.itemName.toLowerCase() === item.itemName.toLowerCase() && i.id !== item.id)){
        toast.error('Item name already exists in the list');
        return true;
       }

       if(!item.itemName){
        toast.error('Please enter item name');
        return true;
       }
       if(!item.unit){
        toast.error('Please select unit');
        return true;
       }
       if(item.quantity <= 0){
        toast.error('Please enter valid quantity');
        return true;
       }
       return false
    }
    
  return (
   <>
    <Header/>
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 flex items-center justify-center p-5">
      <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-xl p-8">
        
        <h1 className="text-3xl font-extrabold text-white text-center mb-6 drop-shadow-lg">
          ✨ My Todo List
        </h1>

        {/* Input Section */}
        <div className="flex items-center gap-3 mb-6">
          <input
            type="text"
            placeholder="Add new task..."
            value={item.itemName}
            onChange={(e)=> setItem({...item, itemName : e.target.value})}
            className="flex-1 px-4 py-3 rounded-xl bg-white/70 backdrop-blur border border-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800 placeholder-gray-600"
          />
          
        </div>

        {/* Select Section */}

        {item.itemName && 
        (<div className="w-full flex mb-3">
            <label className="text-white font-bold mr-4 self-center">Select Unit :</label>
            <select className="px-4 py-3 rounded-xl bg-white/70 backdrop-blur border border-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
             value={item.unit} onChange={(e)=> setItem({...item, unit : e.target.value})} > 
            <option value="">Select Unit </option>
            {optionValue.map((option) => (
                <option key={option.value} value={option.value}>{option.lable}</option>
            ))}
           </select>
           { item.unit && <><label className="text-white font-bold mx-4 self-center">Quantity :</label>
           <input type="number" 
           className="w-1/4 px-4 py-3 rounded-xl bg-white/70 backdrop-blur border border-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
           value={item.quantity} onChange={(e)=> setItem({...item, quantity : e.target.value})}
           /></>}
          
        </div>)}

         {/* Add Button */}
         <div className="w-full flex item-center justify-center pb-3">
             <button className="w-1/4 p-3 bg-white/40 hover:bg-white/60 transition rounded-xl backdrop-blur border border-white/30 shadow-md"
            onClick={!isEditing ? addItem : editItem}>
            {/* <AiOutlinePlus className="text-indigo-700 text-xl" /> */}
            { isEditing ? 'Edit' : 'Add'} Item
          </button>
         </div>

        {/* Todo List */}
        <div className="space-y-4">
          {toListData.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white/30 backdrop-blur-xl p-4 rounded-xl shadow-lg border border-white/40"
            >
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-full border border-white"></span>
                <p className="text-white font-medium">{item.itemName}</p>
                <p className="text-white font-medium"> - {item.quantity} {item.unit}</p>
              </div>

              <div className="flex items-center gap-3">
                {/* Edit Button */}
                { !isEditing && <button className="p-2 bg-white/40 hover:bg-white/60 transition rounded-lg backdrop-blur border border-white/30 shadow-md"
                 onClick={()=>{ setItem(item); setIsEditing(true);   toast.success('Item ready to edit')}}>
                  <AiOutlineEdit className="text-green-600 text-lg" />
                </button>}

                {/* Delete Button */}
                <button className="p-2 bg-white/40 hover:bg-white/60 transition rounded-lg backdrop-blur border border-white/30 shadow-md" 
                onClick={()=>{ dispatch(todoAction.removeItemFromTodo(item.id)); toast.success('Item deleted successfully')}}>
                  <AiOutlineDelete className="text-red-600 text-lg" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
   </>
  );
};

export default Todo;
