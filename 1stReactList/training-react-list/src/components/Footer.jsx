
const Footer = (props) => {
    const today = new Date();

    return (
        <footer> 
            <p style={{textAlign: "center"}}>
                {props.length ===1  ? "1 item left" : `${props.length} items left`}
            </p>
            <p style={{fontSize: "14px"}}>
               Так так {today.getFullYear()} Так так
            </p>
        </footer>
    )
}

export default Footer