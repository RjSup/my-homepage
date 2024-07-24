const Footer = () => {
    let currentDate = new Date().toJSON().slice(0, 10);

    return <footer>{`© Ryan James | ${currentDate}`}</footer>;
}

export default Footer;