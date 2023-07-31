  import { Request, Response } from 'express';
  const Stripe = require("stripe")
  const express = require('express');
  const app = express();   
  app.use(express.static('public'));

  const stripe = new Stripe("sk_test_51NORIxCelYUlowq6RkAyh5tDjeeI4BP2Tdgmb00cPa1uvdcTAimYUjamyK0q5mUioZq7BmPb1iKdegtNRkw56M2P00G0JcsjOe")

  export const paymentController = async (req: Request, res: Response) => {
      try {
        const {id,amount, email, address, postal} = req.body;
              // Crear o actualizar un cliente en Stripe con el correo electrónico proporcionado
      const customer = await stripe.customers.create({
        email: email,
        // Aquí puedes incluir más información del cliente si es necesario
      });

      // Crear el PaymentIntent y asociarlo al cliente
      const paymentIntent = await stripe.payment_method.create({
        amount: amount,
        currency: "ARS",
        description: "Product",
        payment_method: id,
        confirm: true,
        customer: customer.id,
        receipt_email: email,
        metadata: {
          address: address, 
          postal_code: postal,
        },
      });

        
  
        console.log(paymentIntent);
        
        res.send("Succesful Payment")
        
      } catch (error) {
        res.json({message: error})
      }
  };