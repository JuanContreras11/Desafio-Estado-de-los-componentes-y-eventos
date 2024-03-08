import Formulario from './Formulario';
import SocialButton from './SocialButton';

const Registro = (link) =>{

    return(
        <>
        <div >
        <div class='iconos'>
        <SocialButton link='facebook'/>
        <SocialButton link='github'/>
        <SocialButton link='linkedin'/>
    </div>
        
        <Formulario/>

        </div>
        </>
    )
};

export default Registro;