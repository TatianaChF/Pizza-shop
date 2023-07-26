import React, { createContext, useState, ReactNode } from 'react';

export type Language = "ru" | "en";

export interface InterContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    internationalization: {
        [key in Language]: {
            logo: string;
            search: string;
            sort: string;
            categorie: string;
            title: string;
            name: string;
            buttonText: string;
            cart: string
        }
    }
}