import { Card, Table } from "antd";
import { DataStore } from "aws-amplify";
import { NewRestaurant } from '../../models';
import { useEffect, useState } from "react";

import { useRestaurantContext } from "../../context/RestarauntContext";

const OtherRestaurants = () => {
        const [restaurants, setRestaurants] = useState([]);
        const {restaurant } = useRestaurantContext();

        useEffect(() => {
                DataStore.query(NewRestaurant).then(setRestaurants);
        }, [restaurant]);

        useEffect(() => {
                if(restaurant) {
                DataStore.query(NewRestaurant, 
                        (newRest) => newRest.id.notContains(restaurant.id)).
                        then(setRestaurants);
                }
        }, [restaurant]);

        

        
       
        
        const tableColumns = [
                {
                        title: 'Name',
                        dataIndex: 'name',
                        key: 'name',
                },
                {
                        title: 'Address',
                        dataIndex: 'address',
                        key: 'address',
                },
                {
                        title: 'Image Link',
                        dataIndex: 'image',
                        key: 'image',
                        render: (_, item) => (
                                <div>
                            <a href={item.image} target='_blank' rel="noreferrer">
                                {item.image}
                            </a>
                        </div>
                        )
                },

        ];

 return (
        <Card title='Other Restaurants' style={styles.page}>
                        <Table 
                                dataSource={restaurants}
                                columns={tableColumns}
                                rowKey='id'
                        /> 
                </Card>
 );

};
const styles = {

        page: {
                margin: 20,
        },

};

export default OtherRestaurants;