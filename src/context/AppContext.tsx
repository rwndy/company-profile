import { createContext, useState, ReactNode, useContext, useMemo, useCallback } from "react";

interface AppProviderProps {
  readonly children: ReactNode;
}

import { Product } from "@/configs/models/responses/products/responseProduct";

interface AppContextProps {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  isModalProductOpen: boolean;
  setIsModalProductOpen: (value: boolean) => void;
  productData: Product;
  saveProductData: (product: Product) => void;
}

const AppContext = createContext({} as AppContextProps);

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }: AppProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalProductOpen, setIsModalProductOpen] = useState<boolean>(false);
  const [productData, setProductData] = useState<Product>({ id: '', name: '', image: '' });

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const saveProductData = useCallback((product: Product) => {
    setProductData(product);
  }, []);


  const contextValue = useMemo(() => ({
    isModalOpen,
    openModal,
    closeModal,
    isModalProductOpen,
    setIsModalProductOpen,
    productData,
    saveProductData,
  }), [isModalOpen, openModal, closeModal, isModalProductOpen, setIsModalProductOpen, productData, saveProductData]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}
