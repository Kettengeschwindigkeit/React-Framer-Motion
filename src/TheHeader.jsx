import { motion, useTransform } from "framer-motion";

export const TheHeader = ({ offsetY, scrollY }) => {
  const heightSizes = [250, 50];
  const imageSizes = [100, 35];
  const fontSizes = ["40px", "20px"];

  const height = useTransform(scrollY, offsetY, heightSizes);
  const imgWidth = useTransform(scrollY, offsetY, imageSizes);
  const fontSize = useTransform(scrollY, offsetY, fontSizes);
  const pOpacity = useTransform(scrollY, [20, 150], [1, 0]);
  const btnOpacity = useTransform(scrollY, [135, 300], [0, 1]);

  return (
    <motion.header
      className="header"
      style={{ height }}
    >
      <div className="flex">
        <motion.img src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg" alt="logo" style={{ width: imgWidth }} />
        <motion.h2 style={{ fontSize }}>React Framer Motion!</motion.h2>
        <motion.button className="button" style={{ marginLeft: "auto", opacity: btnOpacity }}>Click me!</motion.button>
      </div>
      <motion.p style={{ marginTop: "30px", textAlign: "left", opacity: pOpacity }}>Framer Motion is a simple yet powerful motion library for React. It powers the amazing animations and interactions in Framer, the web builder for creative pros. Zero code, maximum speed. In this quick overview, we'll take a look at some of the APIs that Motion offers.</motion.p>
      <motion.button className="button">Click me!</motion.button>
    </motion.header>
  );
};
