import { Card, Form, Input, Button, message } from "antd";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { NewRestaurant } from "../../models";
import { useRestaurantContext } from "../../context/RestarauntContext";


const CreateRestaurant = () => {

        const [name, setName] = useState('');
        const [address, setAddress] = useState('');
        const [image, setImage] = useState('');

        const {sub, setRestaurant, restaurant} = useRestaurantContext();

        useEffect(() => {
                if (!restaurant) {
                        return;
                }
                setName(restaurant.name);
                setAddress(restaurant.address);
                setImage(restaurant.image);
        }, [restaurant]);

        const onFinish = async () => {
                if (!name) {
                        message.error('Name required!');
                        return;
                }
                if (!address) {
                        message.error('Name required!');
                        return;
                }
                if (!image) {
                        message.error('Name required!');
                        return;
                }
                if(!restaurant) {
                        await createNewRestaurant();
                } else {
                        await updateRestaurant();
                }
        };

        const updateRestaurant = async () => {
                const updateRestaurant = await DataStore.save(
                        NewRestaurant.copyOf(restaurant, (updated) => {
                                updated.name = name;
                                updated.address = address;
                                updated.image = image;
                        })
                );
                setRestaurant(updateRestaurant);
                message.success('Restaurant updated!');
        };

        const createNewRestaurant = async () => {
                const newRestaurant = DataStore.save(new NewRestaurant({
                        name,
                        image,
                        address,
                        adminSub: sub,
                }));
                setRestaurant(newRestaurant);
                message.success('Restaurant created!')
        };

        return (
                <Card title={'Restaurant Details'} style={StyleSheet.page}>
                        <Form layout="vertical" onFinish={onFinish}>
                                <Form.Item label={'Name'} required >
                                        <Input
                                                placeholder="Enter Name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                        />
                                </Form.Item>
                                <Form.Item label={'Address'} required>
                                        <Input
                                                placeholder="Enter Address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                        />
                                </Form.Item>
                                <Form.Item label={'Image'} required>
                                        <Input
                                                placeholder="Enter Image"
                                                value={image}
                                                onChange={(e) => setImage(e.target.value)}
                                        />
                                </Form.Item>
                                <Form.Item>
                                        <Button type="primary" htmlType="submit"> submit</Button>
                                </Form.Item>
                        </Form>
                </Card>

        );
};

export default CreateRestaurant;