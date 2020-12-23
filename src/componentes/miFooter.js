import React from "react";

export default function Footer({ fixed }) {
    return (
        <>
        <footer className="footer bg-black relative pt-1 border-b-2 border-pink-700">
            <div className="container mx-auto px-6 sm:flex">
                <div className="sm:flex sm:mt-8">
                    <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col justify-between">
                    <span className="font-bold text-gray-700 uppercase mb-2">Info</span>
                    <span className="my-2"><a href="https://www.google.es" class="text-pink-700  text-md hover:text-pink-500">Preguntas frecuentes</a></span>
                    <span className="my-2"><a href="https://www.google.es" class="text-pink-700  text-md hover:text-pink-500">Contactanos</a></span>
                    <span className="my-2"><a href="https://www.google.es" class="text-pink-700  text-md hover:text-pink-500">Terminos y condiciones</a></span>
                    <span className="my-2"><a href="https://www.google.es" class="text-pink-700  text-md hover:text-pink-500">Aviso legal</a></span>
                    </div>
                </div>
                <div className="sm:flex sm:mt-8">
                    <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col justify-between">
                    <span className="font-bold text-gray-700 uppercase mb-2">Redes Sociales</span>
                    <span className="my-2"><a href="https://www.google.es" class="text-pink-700  text-md hover:text-pink-500 fab fa-facebook"></a></span>
                    <span className="my-2"><a href="https://www.google.es" class="text-pink-700  text-md hover:text-pink-500 fab fa-twitter"></a></span>
                    <span className="my-2"><a href="https://www.google.es" class="text-pink-700  text-md hover:text-pink-500 fab fa-pinterest"></a></span>
                    <span className="my-2"><a href="https://www.google.es" class="text-pink-700  text-md hover:text-pink-500 fab fa-instagram"></a></span>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6">
                <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                    <div className="sm:w-2/3 text-center py-6">
                        <p className="text-sm text-pink-700 font-bold mb-2">
                            Anini © 2020 
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}