import { Request, Response } from "express";
import CartService from "../Services/CartService";
import { ICart } from '../Models/Cart';

export const getCart = async (req: Request, res: Response) => {
    try {
        const cart = await CartService.findAll();
        return res.json(cart);
    } catch (err: any) {
        return res.status(500).json({
            message: err.message
        });
    };
};

export const createCart = async (req: Request, res: Response) => {
    try {
        await CartService.createCart(req.body);
        return res.status(201).json({
            message: 'Cart Created' 
        })
    } catch (err: any) {
        return res.status(500).json({
            message: err.message
        });
    };
};

export const updateCart = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updateData: ICart = req.body;
    try {
        await CartService.update(id, updateData);
        if(!updateCart) {
            return res.status(404).json({
                message: 'Cart not found'
            });
        };
        return res.status(200).json({
            message: 'Cart update'
        });
    } catch (err: any) {
        return res.status(500).json({
            message: err.message
        });
    };
};

export const deleteCart = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deleteCart = await CartService.delete(id);
        if(!deleteCart) {
            return res.status(404).json({
                message: 'Cart not found'
            });
        }
        return res.status(200).json({message: 'Cart deleted'});
    } catch (err: any) {
        return res.status(500).json({
            message: err.message
        });
    };
};