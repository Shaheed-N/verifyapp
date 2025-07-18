import Script from "next/script"
import { Inter } from 'next/font/google'
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/public/css/animate.css"
import "/public/css/bootstrap.min.css"
import "/public/css/dropdown-effects/fade-down.css"
import "/public/css/flaticon.css"
import "/public/css/lunar.css"
import "/public/css/magnific-popup.css"
import "/public/css/menu.css"
// import "/public/css/owl.carousel.min.css"
// import "/public/css/owl.theme.default.min.css"
import "/public/css/pink-theme.css"
import "/public/css/ai-theme.css"
import "/public/css/responsive.css"
// import LoadScripts from "@/components/elements/Scripts"

const inter = Inter({
        weight: ['300', '400', '500', '600', '700', '800'],
        subsets: ['latin'],
        variable: "--inter-font-family",
        display: 'swap',
})
export const metadata = {
        title: 'VeifAI - Find authentic items',
        description: 'Experience the future of AI with our cutting-edge intelligent assistant application',
        icons: {
            icon: '/favicon.ico',
        },
}

export default function RootLayout({ children }) {
        return (
                <html lang="en">
                        <body className={`${inter.variable}`}>
                                {children}
                        </body>
                </html>
        )
}