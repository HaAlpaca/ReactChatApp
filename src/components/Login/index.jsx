import { Row, Col, Button, Typography } from "antd";
import { auth} from "../../firebase/config";
import { signInWithPopup, FacebookAuthProvider,getAdditionalUserInfo } from "firebase/auth";
import { addDocument } from "../../firebase/services";

const { Title } = Typography;

export default function Login() {
    const handleFBLogin = async () => {
        const facebookProvider = new FacebookAuthProvider();
        await signInWithPopup(auth, facebookProvider).then(
            (result) => {
                const user = result.user;
                const details = getAdditionalUserInfo(result)
                if(details.isNewUser) {
                    addDocument('users', {
                        displayName: user.displayName,
                        email: user.email,
                        photoURL: user.photoURL,
                        uid: user.displayName,
                        providerId: details.providerId
                    })
                }
            } 
        ).catch((error) => {
            console.log(error);
        });
    };
    
    
    return (

            <Row justify="center" style={{ 
                backgroundImage: `url(https://wallpapershome.com/images/pages/pic_h/26165.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat', 
                height: '100vh',
            }}>
                <Col span={8}>
                    <Title style={{ textAlign: "center",color:"white" }} level={5}>
                        React Chat App
                    </Title>
                    <Button  style={{ width: "100%", marginBottom: 5 }}  >
                        Đăng nhập bằng Google
                    </Button>
                    <Button  style={{ width: "100%" }} onClick={handleFBLogin}>
                        Đăng nhập bằng Facebook
                    </Button>
                </Col>
            </Row>

    );
}
