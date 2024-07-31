const Footer = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
  
    const formattedDate = `${year}`;
  
    return <footer>{`© Ryan J | ${formattedDate}`}</footer>;
  };
  
  export default Footer;
  