import React from 'react';
import { SocialIcon } from 'react-social-icons';

export function Footer() {
    return (
        <footer className="flex flex-col items-center text-center h-[100px] lg:justify-between w-full p-4 border-t border-gray-200 lg:flex-row mt-auto">
            <p>@2024 Kevin Chau. Have a great day!</p>
            <div className="flex justify-center md:justify-start gap-4">
                <SocialIcon
                    url="https://www.linkedin.com/in/kevin-chau03/"
                    target="_blank"
                    className="custom-class"
                    fgColor="currentColor"
                    bgColor="#"
                />
                <SocialIcon
                    url="https://github.com/kevinchau03"
                    target="_blank"
                    className="custom-class"
                    fgColor="currentColor"
                    bgColor="#"
                />
            </div>
        </footer>
    );
}
