import Navigation from "../components/navigation";
import { Metadata } from "next";
import "../style/global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Loading...",
  },
  description: "The best movies on the best Website",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children} {/* == AboutUs*/}
      </body>
    </html>
  );
}

{
  /* <Layout>
        <AboutUs></AboutUs>
    < /Layout>; 
     */
}
