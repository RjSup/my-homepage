import '..//components/Footer.css'; // Assuming your CSS file defines styles for the menu


const Footer = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
  
    const formattedDate = `${year}`;
  
    return <footer>{`© Ryan J | ${formattedDate}`}</footer>;
  };
  
  export default Footer;
  