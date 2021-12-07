import React from 'react';

import { View, } from 'react-native';
import { Button, Dialog, } from 'react-native-paper';
import { hideOrderStatusEditDialog, updateOrderStatus } from "../../store/actions";
import { ORDER } from "../../constants";
import OrderStatus from "./OrderStatus";
import {useDispatch} from "react-redux";

export default function OrderStatusUpdateDialog(props) {
    const dispatch = useDispatch();
    const { order, isVisible, isLoading } = props;

    const [selectedStatus, setSelectedStatus] = useState(order.status);

    const onClose = () => dispatch(hideOrderStatusEditDialog());
    const onConfirm = () => {
        if (selectedStatus !== order.status) {
            dispatch(updateOrderStatus(order.id, selectedStatus));
        }
    };

    useEffect(() => { setSelectedStatus(order.status) }, [order]);

    return (
        <Dialog visible={isVisible} onDismiss={onClose}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
                {ORDER.SHOP_TRANSPORTER_STATUSES.map(status =>
                    <OrderStatus key={'order_status_' + status}
                                 status={status}
                                 isSelected={selectedStatus === status}
                                 withCheck
                    />
                )}
            </Dialog.Content>
            <Dialog.Actions>
                <Button onPress={onConfirm}>Cancel</Button>
                <Button onPress={onConfirm}>Confirm</Button>
            </Dialog.Actions>
        </Dialog>
    );
};

