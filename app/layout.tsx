import Navigation from "../components/navigation";

export const metadata = {
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
