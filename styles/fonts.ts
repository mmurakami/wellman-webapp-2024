import { Montserrat, Noto_Serif } from "next/font/google";

// body font
export const montserrat = Montserrat({ 
    weight: ['300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
    variable: '--font-montserrat',
});

// heading font
export const notoSerif = Noto_Serif({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-noto-serif',
});
