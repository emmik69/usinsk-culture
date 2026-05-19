import * as React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#08141f] px-10 py-8 flex justify-between text-sm">

            <div>
                <p className="font-semibold mb-2">Платформа</p>
                <ul className="space-y-1 text-gray-400">
                    <li>О нас</li>
                    <li>FAQ</li>
                    <li>Отзывы</li>
                    <li>Как это работает</li>
                </ul>
            </div>

            <div>
                <p className="font-semibold mb-2">Поделиться</p>
                <div className="flex gap-3 text-gray-400">
                    <span>VK</span>
                    <span>OK</span>
                    <span>MAX</span>
                </div>
            </div>

        </footer>
    );
};

export default Footer;