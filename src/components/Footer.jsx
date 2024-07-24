const Footer = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
  
    const formattedDate = `${day}-${month}-${year}`;
  
    return <footer>{`© Ryan James | ${formattedDate}`}</footer>;
  };
  
  export default Footer;
  