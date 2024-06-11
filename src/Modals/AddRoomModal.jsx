import { Form, Input, Modal } from 'antd';
import { useContext } from 'react';
import { AppContext } from '../Context/AppProvider';
import { useForm } from 'antd/es/form/Form';
import { addDocument } from '../firebase/services';
import { AuthContext } from '../Context/AuthProvider';

export default function AddRoomModal() {
    const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
    const {
        user: { uid }
    } = useContext(AuthContext);
    const [form] = useForm();
    const handleOk = () => {
        console.log({ formData: form.getFieldValue() });
        addDocument('rooms', { ...form.getFieldValue(), members: [uid] });

        // reset
        form.resetFields();
        setIsAddRoomVisible(false);
    };
    const handleCancel = () => {
        setIsAddRoomVisible(false);
    };
    return (
        <div>
            <Modal
                title="Tạo Phòng"
                visible={isAddRoomVisible}
                onOk={handleOk}
                onCancel={handleCancel}>
                <Form form={form} layout="vertical">
                    <Form.Item label="Tên phòng" name="name">
                        <Input placeholder="Nhập tên phòng"></Input>
                    </Form.Item>
                    <Form.Item label="Mô tả" name="description">
                        <Input.TextArea placeholder="Nhập mô tả"></Input.TextArea>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}
