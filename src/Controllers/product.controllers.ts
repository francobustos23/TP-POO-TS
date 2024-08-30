import { Request, Response } from "express";
import ProductService from "../Services/ProductService";

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await ProductService.findAll();
        return res.json(products);
    } catch (err: any) {
        return res.status(500).json({
            message: err.message
        });
    };
};

export const createProduct = async (req: Request, res: Response) => {
    try {
        await ProductService.createProduct(req.body);
        return res.status(201).json({
            message: 'Product Created' 
        })
    } catch (err: any) {
        return res.status(500).json({
            message: err.message
        });
    };
};

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        await ProductService.update(id, updateData);
        if(!updateProduct) {
            return res.status(404).json({
                message: 'Product not found'
            });
        };
        return res.status(200).json({
            message: 'Product update'
        });
    } catch (err: any) {
        return res.status(500).json({
            message: err.message
        });
    };
};

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deleteProduct = await ProductService.delete(id);
        if(!deleteProduct) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }
        return res.status(200).json({message: 'User deleted'});
    } catch (err: any) {
        return res.status(500).json({
            message: err.message
        });
    };
};