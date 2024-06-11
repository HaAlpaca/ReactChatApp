import { Avatar, Form, Modal, Select, Spin } from 'antd';
import { useContext, useMemo, useState } from 'react';
import { AppContext } from '../Context/AppProvider';
import { useForm } from 'antd/es/form/Form';
import { AuthContext } from '../Context/AuthProvider';
import { debounce } from 'lodash';
import { db } from '../firebase/config';
import { collection, getDocs, limit, query, where, orderBy } from 'firebase/firestore';

function DebounceSelect({ fetchOptions, debounceTimeout = 300, ...props }) {
    const [fetching, setFetching] = useState(false);
    const [options, setOptions] = useState([]);

    const debounceFetcher = useMemo(() => {
        const loadOptions = (value) => {
            setOptions([]);
            setFetching(true);
            fetchOptions(value).then((newOptions) => {
                setOptions(newOptions);
                setFetching(false);
            });
        };
        return debounce(loadOptions, debounceTimeout);
    }, [debounceTimeout, fetchOptions]);

    return (
        <Select
            labelInValue
            filterOption={false}
            onSearch={debounceFetcher}
            notFoundContent={fetching ? <Spin size="small" /> : null}
            {...props}>
            {options.map((option) => (
                <Select.Option key={option.value} value={option.value} title={option.label}>
                    <Avatar size="small" src={option.photoURL}>
                        {option.photoURL ? '' : option.label?.charAt(0)?.toUpperCase()}
                    </Avatar>
                    {`${option.label}`}
                </Select.Option>
            ))}
        </Select>
    );
}

async function fetchUserList(search) {
    try {
        let collectionRef = collection(db, 'users');
        console.log('Collection reference:', collectionRef);

        let q = query(
            collectionRef,
            where('keywords', 'array-contains', search),
            orderBy('displayName'),
            limit(20)
        );
        console.log('Query:', q);

        let querySnapshot = await getDocs(q);
        let users = [];
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            users.push({
                id: doc.id,
                label: data.displayName,
                value: data.uid,
                photoURL: data.photoURL
            });
        });

        console.log('Fetched users:', users);
        return users;
    } catch (error) {
        console.error('Error fetching user list: ', error);
        return [];
    }
}

export default function InviteMemberModel() {
    const [value, setValue] = useState([]);
    const { isInviteMemberVisible, setIsInviteMemberVisible } = useContext(AppContext);
    const [form] = useForm();
    const handleOk = () => {
        form.resetFields();
        setIsInviteMemberVisible(false);
    };
    const handleCancel = () => {
        setIsInviteMemberVisible(false);
    };

    console.log({ value });
    return (
        <div>
            <Modal
                title="Mời thành viên"
                visible={isInviteMemberVisible}
                onOk={handleOk}
                onCancel={handleCancel}>
                <Form form={form} layout="vertical">
                    <DebounceSelect
                        mode="multiple"
                        label="Tên các thành viên"
                        value={value}
                        placeholder="Nhập tên thành viên"
                        fetchOptions={fetchUserList}
                        onChange={(newValue) => setValue(newValue)}
                        style={{ width: '100%' }}
                    />
                </Form>
            </Modal>
        </div>
    );
}
