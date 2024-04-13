import { useNavigate } from 'react-router-dom';
import ISTJ from "../images/ISTJ.jpg"
import ISFJ from "../images/ISFJ.jpg"
import INFJ from "../images/INFJ.jpg"
import INTJ from "../images/INTJ.jpg"
import ISTP from "../images/ISTP.jpg"
import ISFP from "../images/ISFP.jpg"
import INFP from "../images/INFP.jpg"
import INTP from "../images/INTP.jpg"
import ESTP from "../images/ESTP.jpg"
import ESFP from "../images/ESFP.jpg"
import ENFP from "../images/ENFP.jpg"
import ENTP from "../images/ENTP.jpg"
import ESTJ from "../images/ESTJ.jpg"
import ESFJ from "../images/ESFJ.jpg"
import ENFJ from "../images/ENFJ.jpg"
import ENTJ from "../images/ENTJ.jpg"




export default function AboutSection() {
    
    const navigate = useNavigate();

    const handleReturnHome = () => {
        navigate('/');
        //ROUTE BACK TO '/'
    }
    return (
    <>
        <div>
            <button onClick={handleReturnHome} style={{ marginTop: '20px' }}> Return Home </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={ISTJ} height={300} width={300} style={{ border: '5px solid black', marginTop: '20px' }}/>
            <div style={{ marginLeft: '20px', maxWidth: '300px', textAlign: 'left' }}>
                <h3>THE LAW</h3>
                A disciplined and reliable superhero, known for their strong sense of duty and adherence to rules.
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={ISFJ} height={300} width={300} style={{ border: '5px solid black', marginTop: '20px' }}/>
            <div style={{ marginLeft: '20px', maxWidth: '300px', textAlign: 'left' }}>
                <h3>THE SAVIOR</h3>
                A nurturing and compassionate hero, always ready to lend a helping hand and protect those in need.
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={INFJ} height={300} width={300} style={{ border: '5px solid black', marginTop: '20px' }}/>
            <div style={{ marginLeft: '20px', maxWidth: '300px', textAlign: 'left' }}>
                <h3>THE VISION</h3>
                A visionary hero, using their insight and empathy to understand others and bring about positive change.
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={INTJ} height={300} width={300} style={{ border: '5px solid black', marginTop: '20px' }}/>
            <div style={{ marginLeft: '20px', maxWidth: '300px', textAlign: 'left' }}>
                <h3>THE CONTROLLER</h3>
                A strategic and innovative superhero, adept at devising complex plans and outsmarting adversaries.
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={ISTP} height={300} width={300} style={{ border: '5px solid black', marginTop: '20px' }}/>
            <div style={{ marginLeft: '20px', maxWidth: '300px', textAlign: 'left' }}>
                <h3>THE FEARLESS-one</h3>
                A fearless and resourceful hero, mastering the art of improvisation to tackle any challenge head-on.
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={ISFP} height={300} width={300} style={{ border: '5px solid black', marginTop: '20px' }}/>
            <div style={{ marginLeft: '20px', maxWidth: '300px', textAlign: 'left' }}>
                <h3>THE ARTIST</h3>
                An artistic and empathetic superhero, using their creativity and sensitivity to inspire hope and bring beauty to the world.
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={INFP} height={300} width={300} style={{ border: '5px solid black', marginTop: '20px' }}/>
            <div style={{ marginLeft: '20px', maxWidth: '300px', textAlign: 'left' }}>
                <h3>THE DREAMER</h3>
                A dreamy and idealistic hero, driven by their values and imagination to make the world a better place.
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={INTP} height={300} width={300} style={{ border: '5px solid black', marginTop: '20px' }}/>
            <div style={{ marginLeft: '20px', maxWidth: '300px', textAlign: 'left' }}>
                <h3>THE MYSTERY</h3>
                A curious and analytical hero, exploring the mysteries of the universe and pushing the boundaries of knowledge.
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={ESTP} height={300} width={300} style={{ border: '5px solid black', marginTop: '20px' }}/>
            <div style={{ marginLeft: '20px', maxWidth: '300px', textAlign: 'left' }}>
                <h3>THE ADVENTURER</h3>
                A bold and adventurous hero, thriving on excitement and always seeking new thrills and challenges.
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={ESFP} height={300} width={300} style={{ border: '5px solid black', marginTop: '20px' }}/>
            <div style={{ marginLeft: '20px', maxWidth: '300px', textAlign: 'left' }}>
                <h3>THE STAR</h3>
                A charismatic and lively superhero, spreading joy and positivity wherever they go with their boundless energy.
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={ENFP} height={300} width={300} style={{ border: '5px solid black', marginTop: '20px' }}/>
            <div style={{ marginLeft: '20px', maxWidth: '300px', textAlign: 'left' }}>
                <h3>THE PASSION</h3>
                A passionate and enthusiastic hero, fueled by their endless ideas and zest for life to create a brighter future.
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={ENTP} height={300} width={300} style={{ border: '5px solid black', marginTop: '20px' }}/>
            <div style={{ marginLeft: '20px', maxWidth: '300px', textAlign: 'left' }}>
                <h3>THE COMEBACK</h3>
                A witty and inventive hero, constantly experimenting and pushing the limits of what's possible.
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={ESTJ} height={300} width={300} style={{ border: '5px solid black', marginTop: '20px' }}/>
            <div style={{ marginLeft: '20px', maxWidth: '300px', textAlign: 'left' }}>
                <h3>THE COMMANDER</h3>
                A commanding and organized hero, leading with authority and efficiency to maintain order and justice.
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={ESFJ} height={300} width={300} style={{ border: '5px solid black', marginTop: '20px' }}/>
            <div style={{ marginLeft: '20px', maxWidth: '300px', textAlign: 'left' }}>
                <h3>THE TOWEL</h3>
                A sociable and nurturing superhero, fostering strong connections and harmony within their community.
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={ENFJ} height={300} width={300} style={{ border: '5px solid black', marginTop: '20px' }}/>
            <div style={{ marginLeft: '20px', maxWidth: '300px', textAlign: 'left' }}>
                <h3>THE INSPIRATION</h3>
                A charismatic and inspirational hero, rallying others to work together toward a common goal and bring about positive change.
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={ENTJ} height={300} width={300} style={{ border: '5px solid black', marginTop: '20px' }}/>
            <div style={{ marginLeft: '20px', maxWidth: '300px', textAlign: 'left' }}>
                <h3>LE MONK</h3>
                A determined and visionary hero, using their strategic leadership to shape the world according to their grand ambitions.
            </div>
        </div>
        <div>
            <button onClick={handleReturnHome} style={{ marginTop: '20px' }}> Return Home </button>
        </div>
    </>
    )
}