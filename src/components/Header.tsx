import { Logo } from './Logo'
import { NavigationMenu } from './NavigationMenu'

export function Header(){
    return(
        <div>
            <Logo logo_content="Vaniga Valai Logo"/>
            <NavigationMenu navi_content="Home | About | Services | Contact"/>
        </div>
    );
}  