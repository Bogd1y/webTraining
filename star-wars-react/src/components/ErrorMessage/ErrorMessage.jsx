import styles from './ErrorMessage.module.css';
import video from './han-solo.mp4'

const ErrorMessage = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <p className={styles.text}>
                The dark side of the force has won. <br />
                We cannot display data.<br />
                Come back when we fix everything
            </p>
            <video loop muted autoPlay width={'450px'} style={{borderRadius:'5px', margin:'10px'} }>
                <source src={video} type="video/mp4"></source>    
                
            </video>
        </div>
    )
}

export default ErrorMessage;