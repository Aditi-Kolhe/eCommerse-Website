import { Box, Grid } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { deepPurple } from '@mui/material/colors';

const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
            <AddressCard/>
        </div>
        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>
        <Grid container className='space-y-5'>
            {[1,1,1,1,1].map((item)=>
            <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-4'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/t/2/s/38-pastor-primary-olive-rare-rabbit-original-imagt6eehdcxhkp5.jpeg?q=70" alt="" />
                        <div className='space-y-2 ml-5'>
                            <p className='font-semibold'>Men Slim Fit Green Pure Cotton Trousers</p>
                            <p className='space-x-5 opacity-50 text-xs font-semibold'>
                            <span>Color : Green</span>
                            <span>Size : M</span>
                            </p>
                            <p>Seller: RARE RABBIT</p>
                            <p>₹1,919</p>
                        </div>
                    </div>
                </Grid>

                <Grid item>
                    <Box sx={{color:deepPurple[500]}}>
                        <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2'/>
                        <span>Rate & Review Product</span>
                    </Box>
                </Grid>
            </Grid>)}
        </Grid>
    </div>
  )
}

export default OrderDetails