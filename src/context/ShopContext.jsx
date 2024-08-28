import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select Product Size');
            return;
        }

        // creates a shallow copy of the current cartItems object
        const cartData = { ...cartItems };

        // specific size of that item (cartData[itemId][size]) exists
        // (cartData[itemId][size] || 0) + 1 => If the size exists, it increments the quantity by 1. If the size doesn't exist (undefined), it initializes it to 0 and then adds 1.
        if (cartData[itemId]) {
            cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
        } else {
            // If the item with the given itemId doesn't exist in the cart, it initializes it with an object where the key is the size and the value is 1
            cartData[itemId] = { [size]: 1 };
        }

        setCartItems(cartData);
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const items of Object.values(cartItems)) {
            for (const count of Object.values(items)) {
                totalCount += count;
            }
        }
        return totalCount;
    };

    const updateQuantity = async (itemId,size,quantity) => {

        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);

    }

    const getCartAmount = async => {
        let totalAmount = 0 ;
        for(const items in cartItems){
            let itemInfo = products.find((product)=>product._id === items);
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                }catch(error){

                }
            }
        }
        return totalAmount;
    }

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, getCartCount,updateQuantity,
        getCartAmount,navigate
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
