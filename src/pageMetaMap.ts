export interface PageMetaData {
  url: string;
  bundleEntryPoint: string;
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

export const pages: PageMetaData[] = [
  {
    url: "index.html",
    bundleEntryPoint: "/src/main.jsx",
    title: "Nationwide Medical Director Services | Compliance for Med Spas, Wellness & Healthcare Clinics",
    description: "EliteUSMD connects aesthetic and healthcare clinics with experienced medical directors. We serve med spas, wellness centers, telehealth clinics & more.",
    keywords: "medical director services, healthcare compliance, med spa medical director, wellness clinic oversight, telehealth medical director, nationwide medical directors",
    ogImage: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c0f1541ae850c45b73eb47.png"
  }
]
