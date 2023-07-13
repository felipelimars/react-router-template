import {StyledHeader, StyledButton} from "../style"
import { useNavigate } from "react-router-dom";
import {goToHome, goToProfile} from "../routes/coordinator"

function Header() {

    const navigate = useNavigate() // declaramos dessa forma o navigate, para usar ele na função

  return (
    <StyledHeader>
      <StyledButton onClick={() => goToHome(navigate)}>
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={() => goToProfile(navigate,'easley')}>
        Ir para página de perfil
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
