import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import { useRestaurantContext } from "../../context/RestarauntContext";


const SideMenu = () => {

        const navigate = useNavigate();
        const { restaurant } = useRestaurantContext();

        const mainMenuItems = [
                {
                        key: '/',
                        label: 'Orders'
                },
                {
                        key: 'menu',
                        label: 'Restaurant Menu'
                },
        ];


        const menuItems = [
                ...(restaurant ?mainMenuItems: []),
                {
                        key: 'restaurant',
                        label: 'Create Restaurant'
                },
                {
                        key: 'otherRestaurants',
                        label: 'Other Restaurants'
                },
                {
                        key: 'signout',
                        label: 'Sign Out'
                }


        ];

        const onMenuItemClick = async (menuItem) => {
                if (menuItem.key === 'signout') {
                        await Auth.signOut();
                        window.location.reload();
                } else {
                        navigate(menuItem.key);
                }
                navigate(menuItem.key);
        };

        return (

                <>
                        {restaurant && (<h2>{restaurant.name}</h2>)}
                        <Menu items={menuItems} onClick={onMenuItemClick} />
                </>



        );


}

export default SideMenu;

