import localFont from "next/font/local"

export const ottercoFonts = localFont({
    src: [
        {
            path: "./otterco_fonts/Otterco-Light.otf",
            style: "normal",
            weight: "200"
        },
        {
            path: "./otterco_fonts/Otterco-Regular.otf",
            style: "normal",
            weight: "300"
        },
        {
            path: "./otterco_fonts/Otterco-Medium.otf",
            style: "normal",
            weight: "400"
        },
        {

            path: "./otterco_fonts/Otterco-SemiBold.otf",
            style: "normal",
            weight: "600"
        },
        {
            path: "./otterco_fonts/Otterco-Bold.otf",
            style: "normal",
            weight: "700"
        },
        {
            path: "./otterco_fonts/Otterco-ExtraBold.otf",
            style: "normal",
            weight: "800"
        },
    ],
})
